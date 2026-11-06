import { ArrowUpRight, Database, Github, Heart } from "lucide-react";

import { useAtlas } from "../atlas/context";
import { store, useStore, flush } from "../store/store";
import { REPO_URL } from "../config";

const BASE = import.meta.env.BASE_URL;

export function About() {
  const atlas = useAtlas();
  const dataset = useStore(s => s.settings.dataset);

  return (
    <div className="page about">
      <header className="about-hero">
        <img src={`${BASE}brand/og.webp`} alt="" />
        <div>
          <p className="eyebrow">关于 Lingua Atlas</p>
          <h1 className="display">{atlas.name}</h1>
          <p className="lede">
            {dataset === "english" ? "英语词库提供插画、例句和英美发音。" : `Collins Spanish 3000 前${atlas.count}条，已配 ${atlas.illustrated} 张插画。例句配中文翻译，西语朗读使用 AI 生成音频；缺少录音时使用设备语音。`}
          </p>
          <p className="lede">学习记录保存在当前浏览器中。英语词库沿用原项目内容许可；Collins 原书内容版权归原权利人所有。</p>
          <div className="about-actions">
            <a className="btn btn-primary" href={REPO_URL} target="_blank" rel="noreferrer">
              <Github size={18} /> 在 GitHub 上查看
            </a>
            <a className="btn btn-ghost" href={`${REPO_URL}/tree/main/data`} target="_blank" rel="noreferrer">
              <Database size={18} /> 下载词库 JSON / CSV
            </a>
          </div>
        </div>
      </header>

      <section className="panel" style={{ marginBottom: 24 }}>
        <h2>切换辞书</h2>
        <p>当前：{atlas.name} · {atlas.count.toLocaleString()} 条</p>
        <select className="dictionary-picker" aria-label="选择辞书" value={dataset === "english" ? "english" : "open"} onChange={e => { flush(); store.settings({ dataset: e.target.value as "open" | "english" }); flush(); }}>
          <option value="open">Collins 西班牙语</option>
          <option value="english">Word Atlas 英语词库</option>
        </select>
        <p className="muted">切换时自动保存当前进度。两套辞书分别保存学习卡片、复习计划、收藏、错词、每日记录和未完成的学习；切回来即可继续。数据仅保存在当前浏览器，可在“我的”中分别导出备份。</p>
      </section>
      <div className="about-grid">
        <section className="panel">
          <h3 className="eyebrow">为什么记得住</h3>
          <ul className="feature-list">
            <li>
              <b>先看见。</b>每个词都有一幅画，画的就是第一句例句里发生的事。
            </li>
            <li>
              <b>再想起。</b>选义、看图补句、听音辨词、拼写，从认得走到会写。
            </li>
            <li>
              <b>刚好在快忘时重逢。</b>FSRS 是新版 Anki 用的开源记忆算法，只在你快要遗忘时安排复习。
            </li>
            <li>
              <b>分数诚实。</b>只算第一次作答。答错的词会换个题型再见一面，但不会抬高正确率。
            </li>
            <li>
              <b>进度只属于你。</b>没有账号，没有服务器，数据存在你的浏览器里，随时能导出。
            </li>
          </ul>
        </section>

        <section className="panel">
          <h3 className="eyebrow">快捷键</h3>
          <dl className="keys">
            <div>
              <dt>
                <kbd>⌘</kbd>
                <kbd>K</kbd> 或 <kbd>/</kbd>
              </dt>
              <dd>搜索任何词</dd>
            </div>
            <div>
              <dt>
                <kbd>1</kbd>–<kbd>4</kbd>
              </dt>
              <dd>选择答案</dd>
            </div>
            <div>
              <dt>
                <kbd>Enter</kbd>
              </dt>
              <dd>确认 / 继续</dd>
            </div>
            <div>
              <dt>
                <kbd>←</kbd> <kbd>→</kbd>
              </dt>
              <dd>词卡里切换上一个、下一个</dd>
            </div>
            <div>
              <dt>
                <kbd>Esc</kbd>
              </dt>
              <dd>关闭弹窗</dd>
            </div>
          </dl>
        </section>

        <section className="panel">
          <h3 className="eyebrow">内容从哪里来</h3>
          <p className="muted">
            英语词库、插画和录音来自 Word Atlas 原项目。西语词条和英文释义依据用户提供的 Collins Spanish 3000 整理，中文释义和场景例句为学习辅助内容，插画和西语录音由 AI 生成；缺少录音时使用设备语音。
          </p>
          <p className="muted">Lingua Atlas 不是官方雅思词表，也不承诺提分。它只想把背单词这件事，做得好看一点、扎实一点。</p>
        </section>

        <section className="panel">
          <h3 className="eyebrow">给开发者</h3>
          <p className="muted">
            <code>data/word-atlas.json</code> 和 <code>.csv</code> 是完整词库；<code>public/atlas</code> 里是网页用的分块数据、插画和音频。拿去做 Anki 牌组、背词小程序、浏览器插件，或者 AI 应用的评测集，署名即可。
          </p>
          <a className="link" href={`${REPO_URL}#readme`} target="_blank" rel="noreferrer">
            阅读文档 <ArrowUpRight size={14} />
          </a>
        </section>
      </div>
      <p className="colophon">
        <Heart size={14} /> 做给每一个在背单词的人。
      </p>
    </div>
  );
}



