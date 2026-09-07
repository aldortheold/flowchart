/// <reference types="node" />

import assert from "node:assert/strict";
import test from "node:test";
import {
    canRedo,
    canUndo,
    commit,
    makeHistory,
    redo,
    replace,
    undo,
} from "./history.ts";

test("history honors its cap", () => {
    let hist = makeHistory("a", 2);
    hist = commit(hist, "b");
    hist = commit(hist, "c");
    hist = commit(hist, "d");
    assert.deepEqual(hist.past, ["b", "c"]);
    assert.equal(hist.now, "d");

    hist = undo(hist);
    hist = undo(hist);
    assert.equal(hist.now, "b");
    assert.equal(canUndo(hist), false);
});

test("a new commit after undo clears the redo branch", () => {
    let hist = makeHistory(0);
    hist = commit(hist, 1);
    hist = commit(hist, 2);
    hist = undo(hist);
    assert.equal(canRedo(hist), true);

    hist = commit(hist, 9);
    assert.equal(hist.now, 9);
    assert.equal(canRedo(hist), false);
    assert.deepEqual(hist.past, [0, 1]);
});

test("redo restores the next snapshot", () => {
    let hist = makeHistory(0);
    hist = commit(hist, 1);
    hist = commit(hist, 2);
    hist = undo(hist);
    hist = redo(hist);
    assert.equal(hist.now, 2);
    assert.deepEqual(hist.past, [0, 1]);
    assert.equal(canRedo(hist), false);
});

test("replace groups continuous gesture updates under one boundary", () => {
    let hist = makeHistory({ x: 0 });
    hist = commit(hist, { x: 1 });
    hist = replace(hist, { x: 2 });
    hist = replace(hist, { x: 3 });
    assert.equal(hist.past.length, 1);
    assert.equal(hist.now.x, 3);

    hist = undo(hist);
    assert.equal(hist.now.x, 0);
});

test("custom equality prevents no-op entries", () => {
    const start = makeHistory({ x: 1 });
    const next = commit(start, { x: 1 }, (a, b) => a.x === b.x);
    assert.equal(next, start);
});
