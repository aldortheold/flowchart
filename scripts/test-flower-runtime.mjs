import assert from "node:assert/strict";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { createServer } from "vite";

const server = await createServer({
    appType: "custom",
    logLevel: "silent",
    server: { middlewareMode: true },
});

try {
    const flowers = await server.ssrLoadModule("/src/flowers/index.ts");
    const artModule = await server.ssrLoadModule("/src/editor/Art.tsx");
    const model = await server.ssrLoadModule("/src/editor/model.ts");
    const generateModule = await server.ssrLoadModule("/src/editor/generate.ts");
    const { FLOWERS, FLOWER_IDS, FLOWER_MAP, FLOWER_SPECIES, FLOWER_STYLES, FlowerArt } = flowers;

    assert.equal(FLOWER_IDS.length, 75);
    assert.equal(new Set(FLOWER_IDS).size, 75);
    assert.equal(FLOWERS.length, 75);
    assert.equal(Object.keys(FLOWER_MAP).length, 75);
    assert.equal(FLOWER_SPECIES.length, 15);
    assert.equal(FLOWER_STYLES.length, 5);

    for (const style of FLOWER_STYLES) {
        assert.equal(FLOWERS.filter((flower) => flower.style === style).length, 15);
        for (const species of FLOWER_SPECIES) {
            const id = `${style}-${species}`;
            const flower = FLOWER_MAP[id];
            assert.ok(flower, `Missing runtime asset ${id}`);
            assert.equal(flower.colors.length, flower.slots.length);

            const colors = flower.colors.map((_, index) => `#${(index + 1).toString(16).padStart(6, "0")}`);
            const markup = renderToStaticMarkup(React.createElement(
                "svg",
                { viewBox: "0 0 512 512" },
                React.createElement(FlowerArt, { id, colors }),
            )).toLowerCase();
            assert.ok(!markup.includes("undefined"), `${id} rendered an undefined value`);
            colors.forEach((color) => assert.ok(markup.includes(color), `${id} did not render recolored slot ${color}`));
        }
    }

    const repeatedMarkup = renderToStaticMarkup(React.createElement(
        "svg",
        null,
        React.createElement(FlowerArt, { id: "botanical-sunflower" }),
        React.createElement(FlowerArt, { id: "botanical-sunflower" }),
    ));
    const definitionIds = [...repeatedMarkup.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
    assert.equal(definitionIds.length, 4);
    assert.equal(new Set(definitionIds).size, 4, "Repeated flower instances reused SVG definition IDs");

    const items = FLOWER_STYLES.map((style, index) => ({
        id: `runtime-${style}`,
        asset: `${style}-${FLOWER_SPECIES[index]}`,
        x: 120 + index * 80,
        y: 180 + index * 40,
        size: 90 + index * 10,
        rot: index * 37,
        colors: [...FLOWER_MAP[`${style}-${FLOWER_SPECIES[index]}`].colors],
        hidden: false,
    }));
    const doc = { ...model.makeDoc(FLOWER_IDS), items };
    const artwork = renderToStaticMarkup(React.createElement("svg", null, React.createElement(artModule.Art, { doc })));
    items.forEach((item) => {
        assert.ok(artwork.includes(`data-flower-id="${item.id}"`));
        assert.ok(artwork.includes(`rotate(${item.rot})`));
    });

    const resized = model.resizeDoc(doc, 720, 1280, "9:16");
    assert.equal(resized.items.length, 5);
    resized.items.forEach((item, index) => assert.equal(item.asset, items[index].asset));

    const randomized = generateModule.generate(model.makeDoc(FLOWER_IDS));
    assert.ok(randomized.items.length > 0);
    randomized.items.forEach((item) => assert.ok(FLOWER_MAP[item.asset]));

    console.log("Rendered and recolored all 75 flowers; verified unique SVG IDs, matrix switching, transforms, resizing, and randomized insertion.");
} finally {
    await server.close();
}
