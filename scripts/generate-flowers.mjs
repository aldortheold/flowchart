import { mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const rawRoot = join(root, "flowers-raw");
const assetRoot = join(root, "src", "assets");
const flowerRoot = join(root, "src", "flowers");

const styles = ["botanical", "minimal", "line-art", "origami", "retro"];
const species = [
    "rose",
    "tulip",
    "daisy",
    "sunflower",
    "lotus",
    "orchid",
    "hibiscus",
    "poppy",
    "peony",
    "chrysanthemum",
    "dahlia",
    "camellia",
    "anemone",
    "narcissus",
    "forget-me-not",
];
const existing = new Set([
    "botanical-rose",
    "botanical-tulip",
    "botanical-daisy",
    "minimal-rose",
    "minimal-tulip",
    "minimal-daisy",
]);

function componentName(value) {
    return value.split("-").map((part) => part[0].toUpperCase() + part.slice(1)).join("");
}

function idVariable(value) {
    const name = value.replace(/-([a-z0-9])/g, (_, char) => char.toUpperCase());
    return `${name}Id`;
}

function indent(value, spaces) {
    const prefix = " ".repeat(spaces);
    return value.trim().split("\n").map((line) => prefix + line.trimEnd()).join("\n");
}

function paintedBounds(transform) {
    const match = /^matrix\(([-\d.]+) 0 0 ([-\d.]+) ([-\d.]+) ([-\d.]+)\)$/.exec(transform);
    if (!match) throw new Error(`Unsupported flower transform: ${transform}`);
    const [, scaleXText, scaleYText, translateXText, translateYText] = match;
    const scaleX = Number(scaleXText);
    const scaleY = Number(scaleYText);
    const translateX = Number(translateXText);
    const translateY = Number(translateYText);
    const preserve = (value) => Number(value.toFixed(12));
    return [
        preserve(-translateX / scaleX),
        preserve(-translateY / scaleY),
        preserve((512 - translateX) / scaleX),
        preserve((512 - translateY) / scaleY),
    ];
}

function jsxify(svg, ids, colors) {
    let output = svg;
    output = output.replace(/\s+xlink:href="#[^"]+"/g, "");
    for (const id of ids) {
        const variable = idVariable(id);
        output = output.replaceAll(`id="${id}"`, `id={${variable}}`);
        output = output.replaceAll(`href="#${id}"`, `href={\`#\${${variable}}\`}`);
    }
    colors.forEach((color, index) => {
        output = output.replaceAll(`fill="${color}"`, `fill={c[${index}]}`);
        output = output.replaceAll(`stroke="${color}"`, `stroke={c[${index}]}`);
    });
    return output
        .replaceAll("stroke-width=", "strokeWidth=")
        .replaceAll("stroke-linecap=", "strokeLinecap=")
        .replaceAll("stroke-linejoin=", "strokeLinejoin=");
}

const manifest = JSON.parse(readFileSync(join(rawRoot, "manifest.json"), "utf8"));
const actualFiles = styles.flatMap((style) => readdirSync(join(rawRoot, style))
    .filter((file) => file.endsWith(".svg"))
    .map((file) => `${style}/${file}`));
if (actualFiles.length !== 69 || manifest.files.length !== 69) {
    throw new Error(`Expected 69 raw SVGs, found ${actualFiles.length} on disk and ${manifest.files.length} in the manifest.`);
}
if (actualFiles.some((file) => !manifest.files.includes(file))) {
    throw new Error("The raw SVG directory does not match flowers-raw/manifest.json.");
}

const generatedPalettes = {};

for (const relativeFile of manifest.files) {
    const raw = readFileSync(join(rawRoot, relativeFile), "utf8");
    const style = /data-style="([^"]+)"/.exec(raw)?.[1];
    const flower = /data-flower="([^"]+)"/.exec(raw)?.[1];
    const artOpen = /<g id="flower-art" transform="([^"]+)">/.exec(raw);
    if (!style || !flower || !artOpen || !styles.includes(style) || !species.includes(flower)) {
        throw new Error(`Invalid flower metadata in ${relativeFile}.`);
    }

    const id = `${style}-${flower}`;
    if (existing.has(id)) throw new Error(`Raw package unexpectedly duplicates existing asset ${id}.`);

    const colors = [...new Set([...raw.matchAll(/(?:fill|stroke)="(#[0-9a-fA-F]{3,8})"/g)]
        .map((match) => match[1].toLowerCase()))];
    const defs = /<defs>[\s\S]*?<\/defs>/.exec(raw)?.[0] ?? "";
    const ids = [...defs.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
    const artStart = artOpen.index + artOpen[0].length;
    const svgEnd = raw.lastIndexOf("</svg>");
    const artEnd = raw.lastIndexOf("</g>", svgEnd);
    if (artEnd < artStart) throw new Error(`Could not isolate flower artwork in ${relativeFile}.`);

    const art = raw.slice(artStart, artEnd);
    const bounds = paintedBounds(artOpen[1]);
    const name = componentName(flower);
    const usesIds = ids.length > 0;
    const imports = [
        ...(usesIds ? ['import { useId } from "react";'] : []),
        'import { scaleFlower } from "../scaleFlower";',
        'import { resolveColors } from "../../flowers/palettes";',
        'import type { FlowerProps } from "../../flowers/types";',
    ].join("\n");
    const idDeclarations = ids.map((value) => `    const ${idVariable(value)} = useId();`).join("\n");
    const convertedDefs = defs ? `${indent(jsxify(defs, ids, colors), 12)}\n` : "";
    const convertedArt = indent(jsxify(art, ids, colors), 16);
    const body = defs
        ? `        <>\n${convertedDefs}            <g transform={NEW_VIEWBOX}>\n${convertedArt}\n            </g>\n        </>`
        : `        <g transform={NEW_VIEWBOX}>\n${convertedArt}\n        </g>`;

    const component = `${imports}\n\nconst NEW_VIEWBOX = scaleFlower([\n${bounds.map((value) => `    ${value},`).join("\n")}\n]);\n\nfunction ${name}({ colors }: FlowerProps) {\n${idDeclarations}${idDeclarations ? "\n" : ""}    const c = resolveColors("${id}", colors);\n\n    return (\n${body}\n    );\n}\n\nexport default ${name};\n`;

    const destination = join(assetRoot, style, `${name}.tsx`);
    mkdirSync(dirname(destination), { recursive: true });
    writeFileSync(destination, component, "utf8");
    generatedPalettes[id] = colors;
}

for (const style of styles) {
    const exports = species.map((flower) => `export { default as ${componentName(flower)} } from "./${componentName(flower)}";`).join("\n");
    writeFileSync(join(assetRoot, style, "index.ts"), `${exports}\n`, "utf8");
}

const data = `// Generated from the supplied SVG artwork by scripts/generate-flowers.mjs.\n// The order of each palette matches the first appearance of each color in its source SVG.\nexport const GENERATED_FLOWER_PALETTES = ${JSON.stringify(generatedPalettes, null, 4)} as const;\n\nexport const GENERATED_FLOWER_SLOTS = Object.fromEntries(\n    Object.entries(GENERATED_FLOWER_PALETTES).map(([id, colors]) => [\n        id,\n        colors.map((_, index) => \`Artwork color \${index + 1}\`),\n    ]),\n) as { [Id in keyof typeof GENERATED_FLOWER_PALETTES]: string[] };\n`;
writeFileSync(join(flowerRoot, "generatedFlowerData.ts"), data, "utf8");

console.log(`Generated ${Object.keys(generatedPalettes).length} flower components and palette mappings.`);
