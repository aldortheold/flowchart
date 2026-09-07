/// <reference types="node" />

import assert from "node:assert/strict";
import test from "node:test";
import {
    MAX_PIXELS,
    MAX_SIDE,
    MIN_SIDE,
    clampItem,
    cloneDoc,
    makeDoc,
    parseDoc,
    resizeDoc,
    sameDoc,
    validSize,
} from "./model.ts";
import type { Doc, FlowerItem } from "./types.ts";

const asset = "botanical-rose" as Doc["items"][number]["asset"];

function flower(overrides: Partial<FlowerItem> = {}): FlowerItem {
    return {
        id: "flower-1",
        asset,
        x: 800,
        y: 450,
        size: 200,
        rot: 0,
        colors: ["#d73c57"],
        hidden: false,
        ...overrides,
    };
}

test("makeDoc creates a safe blank versioned document", () => {
    const doc = makeDoc([asset, asset]);
    assert.equal(doc.v, 1);
    assert.deepEqual(doc.canvas, { w: 1600, h: 900, ratio: "16:9" });
    assert.deepEqual(doc.gen.pool, [asset]);
    assert.equal(doc.gen.density, 46);
    assert.equal(doc.gen.size, 1);
    assert.deepEqual(doc.items, []);
    assert.equal(validSize(doc.canvas.w, doc.canvas.h), true);
});

test("size validation enforces whole sides and a centralized pixel budget", () => {
    assert.equal(validSize(MIN_SIDE, MIN_SIDE), true);
    assert.equal(validSize(MIN_SIDE - 1, 900), false);
    assert.equal(validSize(1600.5, 900), false);
    assert.equal(validSize(MAX_SIDE + 1, 900), false);
    assert.equal(validSize(MAX_SIDE, MAX_SIDE), false);
    assert.equal(validSize(8192, MAX_PIXELS / 8192), true);
});

test("parseDoc rejects malformed and stale local data", () => {
    const base = makeDoc([asset]);
    assert.equal(parseDoc(null), null);
    assert.equal(parseDoc("not json"), null);
    assert.equal(parseDoc({ ...base, v: 2 }), null);
    assert.equal(parseDoc({ ...base, canvas: { ...base.canvas, w: 0 } }), null);
    assert.equal(parseDoc({ ...base, bg: { kind: "solid", color: "red" } }), null);
    assert.equal(parseDoc({ ...base, gen: { ...base.gen, density: 101 } }), null);
    assert.equal(parseDoc({ ...base, gen: { ...base.gen, pool: ["unknown-flower"] } }), null);
    assert.equal(parseDoc({ ...base, items: [flower({ asset: "unknown-flower" as typeof asset })] }), null);

    const duplicate = { ...base, items: [flower(), flower()] };
    assert.equal(parseDoc(duplicate), null);
});

test("parseDoc restores valid data, canonicalizes rotation, and clamps lost items", () => {
    const raw = makeDoc([asset]);
    raw.bg = {
        kind: "pattern",
        id: "petals",
        base: "#f7f7f2",
        ink: "#ef7f87",
        scale: 1.25,
        opacity: 0.4,
    };
    raw.items = [flower({ x: -5000, rot: -45 })];

    const restored = parseDoc(JSON.stringify(raw));
    assert.ok(restored);
    assert.equal(restored.items[0]?.x, -68);
    assert.equal(restored.items[0]?.rot, 315);
    assert.notEqual(restored, raw);
    assert.notEqual(restored.items[0]?.colors, raw.items[0]?.colors);
});

test("cloneDoc is deep and sameDoc compares per-instance colors", () => {
    const doc = makeDoc([asset]);
    doc.items = [flower({ colors: ["#d73c57", "#f6d064"] })];
    const copy = cloneDoc(doc);
    assert.equal(sameDoc(doc, copy), true);
    copy.items[0]!.colors[0] = "#ffffff";
    assert.equal(doc.items[0]!.colors[0], "#d73c57");
    assert.equal(sameDoc(doc, copy), false);
});

test("resizeDoc preserves relative centres and area-relative item size", () => {
    const doc = makeDoc([asset]);
    doc.items = [flower()];

    const half = resizeDoc(doc, 800, 450, "16:9");
    assert.deepEqual(
        { x: half.items[0]?.x, y: half.items[0]?.y, size: half.items[0]?.size },
        { x: 400, y: 225, size: 100 },
    );

    const portrait = resizeDoc(doc, 900, 1600, "9:16");
    assert.deepEqual(
        { x: portrait.items[0]?.x, y: portrait.items[0]?.y, size: portrait.items[0]?.size },
        { x: 450, y: 800, size: 200 },
    );
    assert.throws(() => resizeDoc(doc, 0, 900), RangeError);
});

test("clampItem leaves a selectable portion visible", () => {
    const canvas = { w: 1600, h: 900 };
    const large = clampItem(flower({ x: -999, y: 999 }), canvas);
    assert.equal(large.x, -68);
    assert.equal(large.y, 968);

    const small = clampItem(flower({ x: -999, y: 999, size: 20 }), canvas);
    assert.equal(small.x, 10);
    assert.equal(small.y, 890);
});
