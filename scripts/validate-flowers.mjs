import { readFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const rawRoot = join(root, "flowers-raw");
const assetRoot = join(root, "src", "assets");
const manifest = JSON.parse(readFileSync(join(rawRoot, "manifest.json"), "utf8"));
const styles = ["botanical", "minimal", "line-art", "origami", "retro"];
const species = [
    "rose", "tulip", "daisy", "sunflower", "lotus", "orchid", "hibiscus", "poppy",
    "peony", "chrysanthemum", "dahlia", "camellia", "anemone", "narcissus", "forget-me-not",
];
const existing = new Set([
    "botanical-rose", "botanical-tulip", "botanical-daisy",
    "minimal-rose", "minimal-tulip", "minimal-daisy",
]);

function componentName(value) {
    return value.split("-").map((part) => part[0].toUpperCase() + part.slice(1)).join("");
}

function values(source, attribute) {
    return [...source.matchAll(new RegExp(`\\s${attribute}="([^"]+)"`, "g"))].map((match) => match[1]).sort();
}

function assert(condition, message) {
    if (!condition) throw new Error(message);
}

assert(manifest.files.length === 69, `Expected 69 manifest entries, found ${manifest.files.length}.`);
const maximumTransformDelta = [];

for (const relativeFile of manifest.files) {
    const raw = readFileSync(join(rawRoot, relativeFile), "utf8");
    const style = /data-style="([^"]+)"/.exec(raw)?.[1];
    const flower = /data-flower="([^"]+)"/.exec(raw)?.[1];
    assert(styles.includes(style), `Unknown style in ${relativeFile}.`);
    assert(species.includes(flower), `Unknown species in ${relativeFile}.`);
    const id = `${style}-${flower}`;
    assert(!existing.has(id), `Raw input duplicates the existing component ${id}.`);

    const componentPath = join(assetRoot, style, `${componentName(flower)}.tsx`);
    const component = readFileSync(componentPath, "utf8");
    assert(component.includes(`resolveColors("${id}", colors)`), `${id} has the wrong palette mapping.`);

    const palette = [...new Set([...raw.matchAll(/(?:fill|stroke)="(#[0-9a-fA-F]{3,8})"/g)]
        .map((match) => match[1].toLowerCase()))];
    palette.forEach((color, index) => {
        const rawUses = [...raw.matchAll(new RegExp(`(?:fill|stroke)="${color}"`, "gi"))].length;
        const componentUses = [...component.matchAll(new RegExp(`(?:fill|stroke)=\\{c\\[${index}\\]}`, "g"))].length;
        assert(rawUses === componentUses, `${id} does not preserve every use of palette color ${color}.`);
    });
    assert(!/(?:fill|stroke)="#[0-9a-fA-F]{3,8}"/.test(component), `${id} contains a non-recolorable literal color.`);

    for (const attribute of ["d", "points", "cx", "cy", "r", "rx", "ry", "x", "y", "opacity"]) {
        assert(JSON.stringify(values(raw, attribute)) === JSON.stringify(values(component, attribute)),
            `${id} changed SVG ${attribute} geometry.`);
    }
    for (const tag of ["path", "circle", "ellipse", "polygon", "use", "defs"]) {
        const rawCount = [...raw.matchAll(new RegExp(`<${tag}\\b`, "g"))].length;
        const componentCount = [...component.matchAll(new RegExp(`<${tag}\\b`, "g"))].length;
        assert(rawCount === componentCount, `${id} changed the number of <${tag}> elements.`);
    }

    const rawMatrix = /<g id="flower-art" transform="matrix\(([-\d.]+) 0 0 ([-\d.]+) ([-\d.]+) ([-\d.]+)\)">/.exec(raw);
    const bounds = /scaleFlower\(\[\s*([-\d.]+),\s*([-\d.]+),\s*([-\d.]+),\s*([-\d.]+),\s*\]\)/.exec(component);
    assert(rawMatrix && bounds, `${id} is missing its normalized artwork transform.`);
    const [, rawScaleX, rawScaleY, rawTranslateX, rawTranslateY] = rawMatrix.map(Number);
    const [, left, top, right, bottom] = bounds.map(Number);
    const rebuilt = [512 / (right - left), 512 / (bottom - top), -left * 512 / (right - left), -top * 512 / (bottom - top)];
    maximumTransformDelta.push(...rebuilt.map((value, index) => Math.abs(value - [rawScaleX, rawScaleY, rawTranslateX, rawTranslateY][index])));
}

for (const style of styles) {
    const files = readdirSync(join(assetRoot, style)).filter((file) => file.endsWith(".tsx"));
    assert(files.length === 15, `${style} has ${files.length} components instead of 15.`);
    const index = readFileSync(join(assetRoot, style, "index.ts"), "utf8");
    for (const flower of species) {
        assert(files.includes(`${componentName(flower)}.tsx`), `${style} is missing ${flower}.`);
        assert(index.includes(`as ${componentName(flower)}`), `${style}/index.ts does not export ${flower}.`);
    }
}

const delta = Math.max(...maximumTransformDelta);
assert(delta < 0.00001, `A normalized artwork transform drifted by ${delta}.`);
console.log(`Validated 69 converted assets and the complete 75-component, 15 × 5 flower matrix (max transform delta ${delta}).`);
