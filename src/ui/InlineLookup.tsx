import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { useAtlas, useEntry } from "../atlas/context";
import type { WordRef } from "../atlas/types";
import { openWord } from "../lib/router";
import { useStore } from "../store/store";
import { Illustration } from "./Illustration";
import { Speak } from "./Speak";
import { lookupExternal, type ExternalWord } from "../lib/lookup";
import "../styles/lookup.css";

/** Every word can be queried, including words outside the course dictionary. */
export function LookupText({ text }: { text: string }) {
  const atlas = useAtlas();
  const words = useMemo(() => {
    const map = new Map<string, WordRef>();
    for (const w of atlas.words) if (!map.has(w.word.toLowerCase())) map.set(w.word.toLowerCase(), w);
    return map;
  }, [atlas]);
  const [selected, setSelected] = useState<{ word: WordRef; local: boolean; rect: DOMRect; trigger: HTMLElement } | null>(null);
  return <>{text.split(/([\p{L}\p{M}]+(?:['’\-][\p{L}\p{M}]+)*)/u).map((part, i) => {
    const hit = words.get(part.toLowerCase());
    return /^[\p{L}\p{M}]/u.test(part) ? <button type="button" key={i} className="lookup-word" aria-label={`查词：${part}`} onClick={e => {
      setSelected({ word: hit ?? { id: '', word: part, zh: '', ipa: '', cefr: 0, topic: 0, media: 0, order: -1 }, local: !!hit, rect: e.currentTarget.getBoundingClientRect(), trigger: e.currentTarget });
    }}>{part}</button> : part;
  })}{selected && <LookupPopup key={selected.word.word} word={selected.word} local={selected.local} rect={selected.rect} onClose={() => {
    selected.trigger.focus({ preventScroll: true });
    setSelected(null);
  }} />}</>;
}

function LookupPopup({ word, local, rect, onClose }: { word: WordRef; local: boolean; rect: DOMRect; onClose: () => void }) {
  const atlas = useAtlas();
  const { entry, error } = useEntry(local ? word.id : null);
  const [external, setExternal] = useState<ExternalWord | null>(null);
  const [onlineError, setOnlineError] = useState<string | null>(null);
  const [attempt, setAttempt] = useState(0);
  const language = atlas.id.includes('spanish') ? 'es' : 'en';
  useEffect(() => {
    if (local) return;
    const controller = new AbortController();
    let live = true;
    const timer = setTimeout(() => controller.abort(), 15000);
    setExternal(null); setOnlineError(null);
    lookupExternal(word.word, language, controller.signal).then(result => { if (live) setExternal(result); }, e => {
      if (live) setOnlineError(controller.signal.aborted ? '查询超时，请重试。' : e.message || '网络连接失败，请重试。');
    }).finally(() => clearTimeout(timer));
    return () => { live = false; clearTimeout(timer); controller.abort(); };
  }, [word.word, local, language, attempt]);
  const accent = useStore(s => s.settings.accent);
  const panel = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ left: 12, top: 12 });
  useEffect(() => {
    const box = panel.current?.getBoundingClientRect();
    if (box) setPosition({ left: Math.max(12, Math.min(rect.left, window.innerWidth - box.width - 12)),
      top: Math.max(12, Math.min(rect.bottom + 8, window.innerHeight - box.height - 12)) });
    panel.current?.querySelector<HTMLButtonElement>('button')?.focus({ preventScroll: true });
    const outside = (e: PointerEvent) => { if (!panel.current?.contains(e.target as Node)) onClose(); };
    const key = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { e.preventDefault(); e.stopImmediatePropagation(); onClose(); }
    };
    document.addEventListener('pointerdown', outside);
    document.addEventListener('keydown', key, true);
    return () => { document.removeEventListener('pointerdown', outside); document.removeEventListener('keydown', key, true); };
  }, [rect, onClose, entry, external, onlineError]);
  const ipa = entry ? (accent === 'us' ? entry.us || entry.uk : entry.uk || entry.us) : external?.phonetic || word.ipa;
  return createPortal(<div ref={panel} className="inline-lookup" role="dialog" aria-label={`${word.word} 快速查词`} style={position}>
    <button className="icon-btn lookup-close" aria-label="关闭查词" onClick={onClose}><X size={20} /></button>
    <div className="lookup-heading">
      {local && <Illustration src={atlas.img(word, 'thumb')} word={word.word} topic={word.topic} className="lookup-art" eager />}
      <div><h3>{word.word}</h3>{ipa && <p className="ipa">{ipa}</p>}</div>
    </div>
    {local ? <p className="lookup-definition">{entry ? entry.senses.map(s => `${s.pos} ${s.zh || s.en}`).join('；') : error ? '释义加载失败，请关闭后重试。' : word.zh || '正在加载释义…'}</p>
      : <div className="lookup-definition" aria-live="polite" aria-busy={!external && !onlineError}>
          {external ? <>{external.translation && <p>{external.translation}</p>}{external.warning && <small>{external.warning}</small>}
            {external.definitions.map((d, i) => <p key={i}>{d}</p>)}
            <small>在线查询 · {external.translation && <a href="https://mymemory.translated.net/" target="_blank" rel="noreferrer">MyMemory 参考译文</a>}
              {external.dictionary && <> · <a href={`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word.word)}`} target="_blank" rel="noreferrer">Free Dictionary API</a>{external.license && <> · <a href={external.license.url} target="_blank" rel="noreferrer">{external.license.name}</a></>}</>}</small></>
            : onlineError ? <><p>{onlineError}</p><button className="btn btn-ghost" onClick={() => setAttempt(a => a + 1)}>重试查询</button></> : <p>正在在线查询…</p>}
        </div>}
    <div className="lookup-actions"><Speak url={atlas.audio(word, accent)} text={word.word} accent={accent} size="sm" label="播放发音" />
      {local ? <button className="btn btn-ghost" onClick={() => { onClose(); openWord(word.id); }}>查看词卡</button>
        : <a className="btn btn-ghost" href={`https://${language}.wiktionary.org/wiki/${encodeURIComponent(word.word)}`} target="_blank" rel="noreferrer">查看词典 ↗</a>}</div>
  </div>, document.body);
}
