import assert from "node:assert/strict";
import { test } from "node:test";
import { store, flush, sanitizeSettings } from "./store";

test("dictionary switching flushes pending changes and restores independent progress", () => {
  const data = new Map<string, string>();
  const prior = { window: globalThis.window, localStorage: globalThis.localStorage };
  Object.assign(globalThis, { window: { setTimeout, clearTimeout }, localStorage: { getItem: (k: string) => data.get(k) ?? null, setItem: (k: string, v: string) => data.set(k, v) } });
  try {
    store.useDataset("collins-spanish-first-100");
    const session = { id: "spanish-session", started: 1, steps: [{ id: "rojo", kind: "intro" as const }], index: 0, graded: {}, newIds: ["rojo"], reviewIds: [] };
    const card = { due: 1, s: 2, d: 5, el: 0, sd: 1, ls: 0, reps: 1, lapses: 0, st: 2 as const, seen: 1 };
    store.progress(p => ({ ...p, cards: { rojo: card }, bookmarks: ["rojo"], mistakes: ["verde"], days: { "2026-11-01": { n: 1, r: 2, c: 1, t: 30 } }, session }));
    store.useDataset("word-atlas-open");
    assert.deepEqual(store.get().progress.cards, {});
    assert.equal(store.get().progress.session, null);
    store.progress(p => ({ ...p, bookmarks: ["hello"] }));
    store.useDataset("collins-spanish-first-100");
    assert.deepEqual(store.get().progress.cards.rojo, card);
    assert.deepEqual(store.get().progress.bookmarks, ["rojo"]);
    assert.deepEqual(store.get().progress.mistakes, ["verde"]);
    assert.deepEqual(store.get().progress.session, session);
    assert.equal(store.get().progress.days["2026-11-01"].n, 1);
    store.useDataset("word-atlas-open");
    assert.deepEqual(store.get().progress.bookmarks, ["hello"]);
    flush();
    assert.equal(sanitizeSettings({ dataset: "english" }).dataset, "english");
  } finally { Object.assign(globalThis, prior); }
});

