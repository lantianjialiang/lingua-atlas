import { Bookmark, BookmarkCheck, Lightbulb, Share2 } from "lucide-react";
import type { Entry, WordRef } from "../atlas/types";
import { useAtlas } from "../atlas/context";
import { splitHighlight, splitPair } from "../lib/text";
import { formatInterval, isMastered } from "../store/srs";
import { toggleBookmark, useStore } from "../store/store";
import { Illustration } from "./Illustration";
import { Speak } from "./Speak";
import { shareWord } from "./share";
import { LookupText } from "./InlineLookup";

export function Highlight({ text, word }: { text: string; word: string }) {
  const parts = splitHighlight(text, word);
  if (!parts) return <LookupText text={text} />;
  return (
    <>
      <LookupText text={parts[0]} />
      <mark><LookupText text={parts[1]} /></mark>
      <LookupText text={parts[2]} />
    </>
  );
}

export function Pronounce({ entry, refw }: { entry: Entry; refw: WordRef | Entry }) {
  const atlas = useAtlas();
  const accent = useStore((s) => s.settings.accent);
  return (<div className="pron"><Speak url={atlas.audio(refw, accent)} text={entry.w} accent={accent} size="sm" label="播放发音" /><Speak url={atlas.audio(refw, accent)} text={entry.w} accent={accent} size="sm" rate={0.65} label="慢速发音" /></div>);
}

export function EntryView({ entry, mode = "detail", eager = true }: { entry: Entry; mode?: "detail" | "intro" | "reveal"; eager?: boolean }) {
  const atlas = useAtlas();
  const ref = atlas.byId.get(entry.id);
  const card = useStore((s) => s.progress.cards[entry.id]);
  const saved = useStore((s) => s.progress.bookmarks.includes(entry.id));
  const accent = useStore((s) => s.settings.accent);
  const topicIdx = atlas.topics.findIndex((t) => t[0] === entry.topic);
  const topic = atlas.topics[topicIdx];
  const exUrls = [atlas.audio(entry, "ex"), atlas.audio(entry, "ex2")];
  const famLinks = entry.fam.map((f) => {
    const w = f.replace(/\s*\(.*\)\s*$/, "").trim().toLowerCase();
    const hit = atlas.words.find((x) => x.word.toLowerCase() === w);
    return { label: f, id: hit?.id };
  });
  const status = card ? (isMastered(card) ? "已掌握" : "学习中") : null;

  return (
    <article className={`entry entry-${mode}`}>
      <div className="entry-art">
        <Illustration src={atlas.img(entry)} word={entry.w} topic={topicIdx} eager={eager} alt={`${entry.w} 插画`} />
      </div>
      <div className="entry-body">
        <header className="entry-head">
          <div className="entry-tags">
            <span className={`chip chip-level lv-${entry.cefr}`}>{entry.cefr}</span>
            {topic && <span className="chip">{topic[1]}</span>}
            {status && <span className={`chip chip-status ${status === "已掌握" ? "is-done" : ""}`}>{status}</span>}
          </div>
          {mode === "detail" && (
            <div className="entry-actions">
              <button className={`icon-btn ${saved ? "is-on" : ""}`} onClick={() => toggleBookmark(entry.id)} aria-pressed={saved} aria-label={saved ? "取消收藏" : "收藏"} title={saved ? "取消收藏" : "收藏"}>
                {saved ? <BookmarkCheck size={19} /> : <Bookmark size={19} />}
              </button>
              <button className="icon-btn" onClick={() => shareWord(atlas, entry)} aria-label="生成分享卡片" title="生成分享卡片">
                <Share2 size={19} />
              </button>
            </div>
          )}
        </header>
        {ref && (
          <p className="specimen">
            № {String(ref.order + 1).padStart(4, "0")}
            <i />
            Lingua Atlas
          </p>
        )}
        <h2 className="headword" lang="es">
          {entry.w}
        </h2>
        <Pronounce entry={entry} refw={ref ?? entry} />

        <ol className="senses">
          {entry.senses.map((s, i) => (
            <li key={i}>
              <span className="pos">{s.pos}</span>
              <span className="zh">{s.zh}</span>
              {s.en && (
                <span className="en" lang="es">
                  {s.en}
                </span>
              )}
            </li>
          ))}
        </ol>

        {entry.ex.length > 0 && (
          <section className="block">
            <h3 className="eyebrow">例句{entry.exampleLevel ? ` · ${entry.exampleLevel}` : ""}</h3>
            <ul className="examples">
              {entry.ex.map((x, i) => (
                <li key={i}>
                  {entry.ex.length > 1 && <span className={`ex-tag ${i ? "is-ielts" : ""}`}>{i ? "短语用法" : "日常"}</span>}
                  <p className="ex-en" lang="es">
                    <Highlight text={x.en} word={entry.w} />
                    <Speak url={exUrls[i] ?? null} text={x.en} accent={i === 1 && exUrls[1] ? "us" : accent} size="sm" className="ex-speak" />
                  </p>
                  <p className="ex-zh">{x.zh}</p>
                </li>
              ))}
            </ul>
          </section>
        )}

        {entry.col.length > 0 && (
          <section className="block">
            <h3 className="eyebrow">常用搭配</h3>
            <ul className="collocations">
              {entry.col.map((c) => {
                const { en, zh } = splitPair(c);
                return (
                  <li key={c}>
                    <span lang="es"><LookupText text={en} /></span>
                    {zh && <small>{zh}</small>}
                  </li>
                );
              })}
            </ul>
          </section>
        )}

        {(famLinks.length > 0 || entry.syn.length > 0 || entry.ant.length > 0) && (
          <section className="block relations">
            {famLinks.length > 0 && (
              <div>
                <h3 className="eyebrow">词族</h3>
                <p>
                  {famLinks.map((f) =>
                    f.id && mode === "detail" ? (
                      <span key={f.label}><LookupText text={f.label} /></span>
                    ) : (
                      <span key={f.label}>{f.label}</span>
                    ),
                  )}
                </p>
              </div>
            )}
            {entry.syn.length > 0 && (
              <div>
                <h3 className="eyebrow">近义</h3>
                <p>{entry.syn.map((s) => <span key={s}><LookupText text={s} /></span>)}</p>
              </div>
            )}
            {entry.ant.length > 0 && (
              <div>
                <h3 className="eyebrow">反义</h3>
                <p>{entry.ant.map((s) => <span key={s}><LookupText text={s} /></span>)}</p>
              </div>
            )}
          </section>
        )}

        {entry.tip && (
          <aside className="tip">
            <Lightbulb size={17} strokeWidth={1.8} />
            <p>{entry.tip}</p>
          </aside>
        )}

        {entry.note && <p className="usage-note">用法提醒：{entry.note}</p>}

        {mode === "detail" && card && (
          <p className="memory-note">
            {card.due <= Date.now() ? "现在可以复习" : `下次复习 ${formatInterval(card.due - Date.now())}后`} · 记忆稳定度 {card.s < 1 ? "<1" : Math.round(card.s)} 天 · 已复习 {card.reps} 次
          </p>
        )}
      </div>
    </article>
  );
}
