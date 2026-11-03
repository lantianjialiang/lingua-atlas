import { test } from 'node:test';
import assert from 'node:assert/strict';
import { lookupExternal } from './lookup';

test('external lookup: translation fallback, cache, rate limits, errors and cancellation', async () => {
  const original = globalThis.fetch;
  const signal = new AbortController().signal;
  try {
    let calls = 0;
    globalThis.fetch = async url => {
      calls++;
      return String(url).includes('dictionaryapi') ? new Response('{}', { status: 404 })
        : Response.json({ responseStatus: 200, responseData: { translatedText: '电力' } });
    };
    const translated = await lookupExternal('electricity-test', 'en', signal);
    assert.equal(translated.translation, '电力');
    assert.equal(translated.dictionary, false);
    assert.equal(calls, 2);
    await lookupExternal('electricity-test', 'en', signal);
    assert.equal(calls, 2);
    globalThis.fetch = async () => Response.json({ responseStatus: 200, responseData: { translatedText: '幽灵般的' } });
    assert.equal((await lookupExternal('fantasmagórico-test', 'es', signal)).translation, '幽灵般的');
    globalThis.fetch = async () => Response.json({ responseStatus: 429, quotaFinished: true });
    await assert.rejects(lookupExternal('quota-test', 'es', signal), /额度/);
    globalThis.fetch = async () => { throw new Error('network'); };
    await assert.rejects(lookupExternal('offline-test', 'es', signal), /网络/);
    globalThis.fetch = async () => Response.json({ responseStatus: 200, responseData: { translatedText: 'unknown-test' } });
    await assert.rejects(lookupExternal('unknown-test', 'es', signal), /暂未找到/);
    const controller = new AbortController(); controller.abort();
    await assert.rejects(lookupExternal('cancel-test', 'es', controller.signal), { name: 'AbortError' });
  } finally { globalThis.fetch = original; }
});
