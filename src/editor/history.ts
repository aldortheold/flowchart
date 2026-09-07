export const HIST_CAP = 80;

export interface Hist<T> {
    past: T[];
    now: T;
    future: T[];
    cap: number;
}

type Equal<T> = (a: T, b: T) => boolean;

function safeCap(cap: number) {
    return Number.isInteger(cap) && cap > 0 ? cap : HIST_CAP;
}

function tail<T>(values: T[], cap: number) {
    return values.length > cap ? values.slice(values.length - cap) : values;
}

/** Starts a history around an immutable snapshot. */
export function makeHistory<T>(now: T, cap = HIST_CAP): Hist<T> {
    return { past: [], now, future: [], cap: safeCap(cap) };
}

/** Adds one undo boundary and invalidates the redo branch. */
export function commit<T>(hist: Hist<T>, next: T, equal: Equal<T> = Object.is): Hist<T> {
    if (equal(hist.now, next)) return hist;
    return {
        ...hist,
        past: tail([...hist.past, hist.now], hist.cap),
        now: next,
        future: [],
    };
}

/**
 * Replaces the current snapshot without adding an undo boundary.
 * Commit the first gesture update, then replace subsequent pointer moves.
 */
export function replace<T>(hist: Hist<T>, next: T, equal: Equal<T> = Object.is): Hist<T> {
    if (equal(hist.now, next)) return hist;
    return { ...hist, now: next, future: [] };
}

export function undo<T>(hist: Hist<T>): Hist<T> {
    const index = hist.past.length - 1;
    if (index < 0) return hist;
    return {
        ...hist,
        past: hist.past.slice(0, index),
        now: hist.past[index] as T,
        future: [hist.now, ...hist.future],
    };
}

export function redo<T>(hist: Hist<T>): Hist<T> {
    if (hist.future.length === 0) return hist;
    const next = hist.future[0] as T;
    return {
        ...hist,
        past: tail([...hist.past, hist.now], hist.cap),
        now: next,
        future: hist.future.slice(1),
    };
}

export function canUndo<T>(hist: Hist<T>) {
    return hist.past.length > 0;
}

export function canRedo<T>(hist: Hist<T>) {
    return hist.future.length > 0;
}
