export interface ExternalWord {
  translation?: string;
  phonetic?: string;
  definitions: string[];
  dictionary: boolean;
  license?: { name: string; url: string };
  warning?: string;
}

const cache = new Map<string, ExternalWord>();
async function request(url: string, signal: AbortSignal) {
  const response = await fetch(url, { signal });
  if (response.status === 404) return null;
  if (response.status === 429) throw new Error('查询服务暂时限流，请稍后重试。');
  if (!response.ok) throw new Error('查询服务暂时不可用，请重试。');
  return response.json();
}

/** Only the clicked word is sent to the providers. Cache successful lookups for this session. */
export async function lookupExternal(word: string, language: 'en' | 'es', signal: AbortSignal): Promise<ExternalWord> {
  const key = `${language}:${word.toLowerCase()}`;
  const saved = cache.get(key);
  if (saved) return saved;
  const translationUrl = new URL('https://api.mymemory.translated.net/get');
  translationUrl.searchParams.set('q', word);
  translationUrl.searchParams.set('langpair', `${language}|zh-CN`);
  const [translation, dictionary] = await Promise.allSettled([
    request(translationUrl.href, signal),
    language === 'en' ? request(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`, signal) : Promise.resolve(null),
  ]);
  if (signal.aborted) throw new DOMException('Aborted', 'AbortError');
  const translated = translation.status === 'fulfilled' ? translation.value : null;
  const dict = dictionary.status === 'fulfilled' && Array.isArray(dictionary.value) ? dictionary.value[0] : null;
  const chinese = translated?.responseStatus === 200 && !translated?.quotaFinished && typeof translated?.responseData?.translatedText === 'string'
    ? translated.responseData.translatedText.trim() : undefined;
  const definitions: string[] = (dict?.meanings ?? []).flatMap((m: { partOfSpeech?: string; definitions?: { definition?: string }[] }) =>
    (m.definitions ?? []).slice(0, 2).filter(d => typeof d.definition === 'string').map(d => `${m.partOfSpeech ?? ''} ${d.definition}`)).slice(0, 4);
  const result: ExternalWord = { translation: chinese && chinese.toLowerCase() !== word.toLowerCase() ? chinese : undefined,
    phonetic: dict?.phonetic || dict?.phonetics?.find((p: { text?: string }) => p.text)?.text,
    definitions, dictionary: !!dict,
    license: typeof dict?.license?.name === 'string' && typeof dict?.license?.url === 'string' && dict.license.url.startsWith('https://')
      ? dict.license : undefined };
  if (!result.translation && !definitions.length) {
    if (translated?.quotaFinished || translated?.responseStatus === 429) throw new Error('中文查询服务今日额度已用完，请稍后重试。');
    if (translation.status === 'rejected' || dictionary.status === 'rejected' || (translated && translated.responseStatus !== 200))
      throw new Error('在线查询失败，请检查网络后重试。');
    throw new Error('在线服务暂未找到这个词的释义。');
  }
  if (!result.translation) result.warning = '中文释义暂不可用，以下为英文词典释义。';
  if (cache.size >= 200) cache.delete(cache.keys().next().value!);
  cache.set(key, result);
  return result;
}
