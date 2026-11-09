/* Tiếng Anh Mỗi Ngày — Thinhphan · v1.0 */
(function () {
'use strict';
const $ = (s, r) => (r || document).querySelector(s);
const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const pick = (a, n) => shuffle(a).slice(0, n);
const DAY = 86400000;
const dkey = (d) => { d = d || new Date(); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); };

/* ---------- ICONS ---------- */
const P = {
  back: '<path d="M15 6l-6 6 6 6"/>', close: '<path d="M6 6l12 12M18 6L6 18"/>', arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>', chev: '<path d="M9 6l6 6-6 6"/>',
  spk: '<path d="M4 9v6h4l5 4V5L8 9z"/><path d="M16 9a4 4 0 0 1 0 6"/>', spk2: '<path d="M4 9v6h4l5 4V5L8 9z"/><path d="M16 9a4 4 0 0 1 0 6"/><path d="M19 6a8 8 0 0 1 0 12"/>',
  play: '<path d="M8 5l11 7-11 7z"/>', pause: '<path d="M8 5v14M16 5v14"/>', mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0"/><path d="M12 18v3"/>',
  stop: '<rect x="7" y="7" width="10" height="10" rx="2"/>', check: '<path d="M5 12l5 5 9-10"/>', x: '<path d="M6 6l12 12M18 6L6 18"/>',
  home: '<path d="M3 11l9-8 9 8"/><path d="M5 10v10h14V10"/>', route: '<circle cx="6" cy="19" r="2"/><circle cx="18" cy="5" r="2"/><path d="M8 19h8a3.5 3.5 0 0 0 0-7H8a3.5 3.5 0 0 1 0-7h8"/>',
  cards: '<rect x="3" y="7" width="13" height="14" rx="2"/><path d="M8 3h11a2 2 0 0 1 2 2v12"/>', head: '<path d="M4 15v-3a8 8 0 0 1 16 0v3"/><rect x="3" y="14" width="5" height="7" rx="2"/><rect x="16" y="14" width="5" height="7" rx="2"/>',
  chart: '<path d="M4 20V11"/><path d="M10 20V5"/><path d="M16 20v-7"/><path d="M3 20h18"/>', gear: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/>',
  flame: '<path d="M12 3c1 4 5 5.5 5 10a5 5 0 0 1-10 0c0-2.5 1.5-3.5 2-6 1.5 1 2.5 2.5 2.5 4.5"/>', eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  replay: '<path d="M4 12a8 8 0 1 0 2.5-5.8"/><path d="M4 4v4h4"/>', bulb: '<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-3.5 10.9V16h7v-2.1A6 6 0 0 0 12 3z"/>',
  lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>', circ: '<circle cx="12" cy="12" r="9"/><path d="M8 12l3 3 5-6"/>',
  book: '<path d="M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3z"/><path d="M5 17a3 3 0 0 1 3-3h11"/>', info: '<circle cx="12" cy="12" r="9"/><path d="M12 8v5M12 16h.01"/>',
  kbd: '<rect x="2" y="6" width="20" height="12" rx="2"/><path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M7 14h10"/>', dl: '<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>', ul: '<path d="M12 20V9M7 14l5-5 5 5M5 4h14"/>'
};
const ic = (n, s, w) => '<svg width="' + (s || 18) + '" height="' + (s || 18) + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="' + (w || 1.6) + '" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + P[n] + '</svg>';

/* ---------- STATE ---------- */
const KEY = 'tamn-v1';
const defaults = () => ({ v: 1, xp: 0, days: {}, streak: 0, lastDay: null, goal: 50, cards: {}, lessons: {}, qR: 0, qT: 0,
  settings: { sfx: true, haptics: true, voice: 'en-US', rate: 0.95, theme: 'auto', free: false } });
let S = defaults();
try { const raw = localStorage.getItem(KEY); if (raw) { const o = JSON.parse(raw); S = Object.assign(defaults(), o); S.settings = Object.assign(defaults().settings, o.settings || {}); } } catch (e) {}
const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} };

/* ---------- CONTENT ---------- */
const CONTENT = window.CONTENT || { lessons: [] };
const LESSONS = CONTENT.lessons.slice().sort((a, b) => a.stage - b.stage || a.unit - b.unit || a.n - b.n);
const LBY = {}; const SCNT = {}; LESSONS.forEach((l, i) => { l.idx = i; LBY[l.id] = l; l.sidx = SCNT[l.stage] = (SCNT[l.stage] == null ? 0 : SCNT[l.stage] + 1); });
const lnum = (l) => l.sidx + 1;
const STAGES = [
  { n: 1, roman: 'I', name: 'Nền tảng', level: 'A1–A2', words: 1000, total: 100 },
  { n: 2, roman: 'II', name: 'Giao tiếp tự tin', level: 'B1', words: 1000, total: 100 },
  { n: 3, roman: 'III', name: 'Tiếng Anh công việc', level: 'B1–B2', words: 800, total: 80 },
  { n: 4, roman: 'IV', name: 'Chuyên ngành & TOEIC', level: 'B2', words: 600, total: 60 }
];
const WORDS = {}; LESSONS.forEach((l) => l.words.forEach((w) => { const id = w[0].toLowerCase(); if (!WORDS[id]) WORDS[id] = { id, en: w[0], ipa: w[1], pos: w[2], vi: w[3], ex: w[4], exVi: w[5], lesson: l.id }; }));
const LP = (id) => S.lessons[id] || (S.lessons[id] = { step: 0, passed: false, best: 0, skills: {} });
const unlocked = (l) => !!S.settings.free || l.idx === 0 || !!(LESSONS[l.idx - 1] && S.lessons[LESSONS[l.idx - 1].id] && S.lessons[LESSONS[l.idx - 1].id].passed);
const currentLesson = () => LESSONS.find((l) => !(S.lessons[l.id] && S.lessons[l.id].passed)) || LESSONS[LESSONS.length - 1];
const learnedWords = () => Object.keys(S.cards).map((k) => WORDS[k]).filter(Boolean);

/* ---------- THEME ---------- */
const mq = window.matchMedia ? matchMedia('(prefers-color-scheme: dark)') : null;
function applyTheme() {
  const t = S.settings.theme === 'auto' ? (mq && mq.matches ? 'dark' : 'light') : S.settings.theme;
  document.documentElement.setAttribute('data-theme', t);
  const m = $('meta[name="theme-color"]'); if (m) m.setAttribute('content', t === 'dark' ? '#0B0B0C' : '#F3F3F4');
}
if (mq && mq.addEventListener) mq.addEventListener('change', applyTheme);
applyTheme();

/* ---------- SOUND ---------- */
let actx = null;
function tone(f, t, d, type, v) {
  const o = actx.createOscillator(), g = actx.createGain(); o.type = type || 'sine'; o.frequency.value = f;
  g.gain.setValueAtTime(0, actx.currentTime + t); g.gain.linearRampToValueAtTime(v || 0.16, actx.currentTime + t + 0.008);
  g.gain.exponentialRampToValueAtTime(0.0001, actx.currentTime + t + d); o.connect(g).connect(actx.destination);
  o.start(actx.currentTime + t); o.stop(actx.currentTime + t + d + 0.05);
}
let matchStep = 0;
const SFX = {
  ok: () => { tone(1318.5, 0, 0.35, 'sine', 0.16); tone(1975.5, 0.08, 0.5, 'sine', 0.13); },
  bad: () => { tone(196, 0, 0.18, 'triangle', 0.2); tone(164.8, 0.07, 0.22, 'triangle', 0.16); },
  tap: () => { tone(2400, 0, 0.03, 'sine', 0.06); },
  match: () => { tone([1046.5, 1174.7, 1318.5, 1568, 1760][matchStep++ % 5], 0, 0.25, 'sine', 0.14); },
  mic: () => { tone(880, 0, 0.09, 'sine', 0.12); tone(1174.7, 0.12, 0.12, 'sine', 0.12); },
  done: () => { [523.3, 659.3, 784, 1046.5].forEach((f, i) => tone(f, i * 0.11, 0.9, 'sine', 0.11)); },
  goal: () => { [1568, 1975.5, 2349.3, 2637, 3136].forEach((f, i) => tone(f, i * 0.06, 0.45, 'sine', 0.07)); }
};
function sfx(n) {
  if (!S.settings.sfx) return;
  try { actx = actx || new (window.AudioContext || window.webkitAudioContext)(); if (actx.state === 'suspended') actx.resume(); SFX[n](); } catch (e) {}
  if (S.settings.haptics && navigator.vibrate && (n === 'ok' || n === 'bad')) { try { navigator.vibrate(n === 'ok' ? 12 : [20, 40, 20]); } catch (e) {} }
}

/* ---------- SPEECH (TTS) ---------- */
let voices = [];
const loadVoices = () => { try { voices = speechSynthesis.getVoices() || []; } catch (e) {} };
if ('speechSynthesis' in window) { loadVoices(); speechSynthesis.onvoiceschanged = loadVoices; }
function pickVoice() {
  const lang = S.settings.voice;
  const list = voices.filter((v) => v.lang && v.lang.replace('_', '-') === lang);
  const pref = list.find((v) => /natural|premium|enhanced|samantha|google|daniel|aria|jenny/i.test(v.name));
  return pref || list[0] || voices.find((v) => v.lang && v.lang.startsWith('en'));
}
function speak(text, opt) {
  opt = opt || {};
  return new Promise((res) => {
    if (!('speechSynthesis' in window)) { toast('Máy chưa hỗ trợ giọng đọc'); return res(); }
    try {
      speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text); u.lang = S.settings.voice;
      u.rate = (opt.slow ? 0.7 : 1) * S.settings.rate; const v = pickVoice(); if (v) u.voice = v;
      let done = false; const fin = () => { if (!done) { done = true; res(); } };
      u.onend = fin; u.onerror = fin; setTimeout(fin, 1500 + text.length * 120);
      speechSynthesis.speak(u);
    } catch (e) { res(); }
  });
}
const stopSpeak = () => { try { speechSynthesis.cancel(); } catch (e) {} };

/* ---------- SPEECH RECOGNITION (online) + RECORDER (offline) ---------- */
const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
const canSTT = () => !!SR && navigator.onLine !== false;
let activeRec = null;
function listen() {
  return new Promise((res, rej) => {
    let r; try { r = new SR(); } catch (e) { return rej('unsupported'); }
    r.lang = S.settings.voice; r.interimResults = false; r.maxAlternatives = 3; r.continuous = false;
    let out = '', alts = [];
    r.onresult = (e) => { const x = e.results[0]; out = x[0].transcript; for (let i = 0; i < x.length; i++) alts.push(x[i].transcript); };
    r.onerror = (e) => rej(e.error || 'error');
    r.onend = () => { activeRec = null; res({ text: out, alts }); };
    activeRec = r; try { r.start(); } catch (e) { rej('start'); }
  });
}
const stopListen = () => { try { if (activeRec) activeRec.stop(); } catch (e) {} };
let media = null;
async function recordStart() {
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  const mr = new MediaRecorder(stream); const chunks = [];
  mr.ondataavailable = (e) => chunks.push(e.data);
  const done = new Promise((res) => { mr.onstop = () => { stream.getTracks().forEach((t) => t.stop()); res(URL.createObjectURL(new Blob(chunks, { type: mr.mimeType || 'audio/webm' }))); }; });
  mr.start(); media = { mr, done }; return done;
}
const recordStop = () => { try { if (media && media.mr.state !== 'inactive') media.mr.stop(); } catch (e) {} };
let lastRecUrl = null;
const playUrl = (u) => { try { new Audio(u).play(); } catch (e) {} };

/* ---------- TEXT COMPARE ---------- */
const norm = (s) => s.toLowerCase().replace(/[’‘`]/g, "'").replace(/[^a-z0-9' ]+/g, ' ').replace(/\s+/g, ' ').trim();
const CONTR = { "i'm": 'i am', "you're": 'you are', "he's": 'he is', "she's": 'she is', "it's": 'it is', "we're": 'we are', "they're": 'they are', "don't": 'do not', "doesn't": 'does not', "isn't": 'is not', "aren't": 'are not', "can't": 'can not', "cannot": 'can not', "what's": 'what is', "that's": 'that is', "there's": 'there is', "let's": 'let us', "i'd": 'i would', "i'll": 'i will', "won't": 'will not', "didn't": 'did not', "wasn't": 'was not', "weren't": 'were not', "where's": 'where is', "who's": 'who is', "how's": 'how is' };
const expand = (s) => norm(s).split(' ').filter(Boolean).map((w) => CONTR[w] || w).join(' ').split(' ').filter(Boolean);
const NUM = { '0': 'zero', '1': 'one', '2': 'two', '3': 'three', '4': 'four', '5': 'five', '6': 'six', '7': 'seven', '8': 'eight', '9': 'nine', '10': 'ten', '11': 'eleven', '12': 'twelve', '13': 'thirteen', '14': 'fourteen', '15': 'fifteen', '16': 'sixteen', '17': 'seventeen', '18': 'eighteen', '19': 'nineteen', '20': 'twenty', '30': 'thirty', '40': 'forty', '50': 'fifty' };
const toks = (s) => expand(s).map((w) => NUM[w] || w);
function lcsMatch(a, b) {
  const m = a.length, n = b.length, dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  for (let i = m - 1; i >= 0; i--) for (let j = n - 1; j >= 0; j--) dp[i][j] = a[i] === b[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
  const hitA = new Set(), hitB = new Set(); let i = 0, j = 0;
  while (i < m && j < n) { if (a[i] === b[j]) { hitA.add(i); hitB.add(j); i++; j++; } else if (dp[i + 1][j] >= dp[i][j + 1]) i++; else j++; }
  return { hitA, hitB, len: dp[0][0] };
}
/* compare spoken text vs target, return per-original-word status */
function judgeSpeech(target, heardList) {
  const words = target.split(/\s+/).filter(Boolean);
  let best = null;
  heardList.forEach((heard) => {
    const b = toks(heard); const res = words.map((w) => { const t = toks(w); return t; });
    const flat = []; res.forEach((t, wi) => t.forEach((x) => flat.push({ x, wi })));
    const m = lcsMatch(flat.map((f) => f.x), b);
    const okW = words.map((w, wi) => { const idx = flat.map((f, k) => f.wi === wi ? k : -1).filter((k) => k >= 0); return idx.length === 0 || idx.every((k) => m.hitA.has(k)); });
    const score = Math.round(okW.filter(Boolean).length / Math.max(1, words.length) * 100);
    if (!best || score > best.score) best = { words, okW, score, heard };
  });
  return best || { words, okW: words.map(() => false), score: 0, heard: '' };
}
function judgeWriting(answer, accepted) {
  let best = null;
  accepted.forEach((acc) => {
    const a = toks(acc), b = toks(answer); const m = lcsMatch(a, b);
    const score = Math.round(m.len / Math.max(a.length, b.length, 1) * 100);
    if (!best || score > best.score) best = { acc, a, b, m, score };
  });
  const ub = answer.split(/\s+/).filter(Boolean);
  // map user words to tokens
  let k = 0; const userHtml = ub.map((w) => { const t = toks(w); const ok = t.every(() => best.m.hitB.has(k++)); return ok ? esc(w) : '<span class="mark-bad">' + esc(w) + '</span>'; }).join(' ');
  const accWords = best.acc.split(/\s+/); let q = 0;
  const accHtml = accWords.map((w) => { const t = toks(w); const ok = t.every(() => best.m.hitA.has(q++)); return ok ? esc(w) : '<span class="mark-ok">' + esc(w) + '</span>'; }).join(' ');
  return { score: best.score, userHtml, accHtml, exact: best.score === 100 };
}

/* ---------- XP / STREAK / SRS ---------- */
function addXP(n) {
  const t = dkey(); if (S.lastDay !== t) { const y = dkey(new Date(Date.now() - DAY)); S.streak = S.lastDay === y ? S.streak + 1 : 1; S.lastDay = t; }
  const before = S.days[t] || 0; S.days[t] = before + n; S.xp += n;
  if (before < S.goal && S.days[t] >= S.goal) setTimeout(() => { sfx('goal'); toast('Đã đạt mục tiêu hôm nay'); }, 450);
  save();
}
const streakNow = () => (S.lastDay === dkey() || S.lastDay === dkey(new Date(Date.now() - DAY))) ? S.streak : 0;
const IV = [0, 1, 2, 4, 8, 16, 32];
function grade(id, q) {
  const c = S.cards[id] || { b: 0, due: 0 };
  if (q === 0) { c.b = 0; c.due = Date.now() + 10 * 60000; } else { c.b = Math.min(6, c.b + (q === 2 ? 2 : 1)); c.due = Date.now() + IV[c.b] * DAY - 3600000; }
  S.cards[id] = c; save();
}
const dueCards = () => Object.keys(S.cards).filter((k) => WORDS[k] && S.cards[k].due <= Date.now()).sort((a, b) => S.cards[a].due - S.cards[b].due);
const ivLabel = (id, q) => { const c = S.cards[id] || { b: 0 }; if (q === 0) return 'ôn lại ngay'; const b = Math.min(6, c.b + (q === 2 ? 2 : 1)); return 'sau ' + IV[b] + ' ngày'; };

/* ---------- UI HELPERS ---------- */
let toastT;
function toast(t) { let el = $('.toast'); if (!el) { el = document.createElement('div'); el.className = 'toast'; document.body.appendChild(el); } el.textContent = t; el.classList.add('on'); clearTimeout(toastT); toastT = setTimeout(() => el.classList.remove('on'), 2000); }
function confirmBox(title, body, yes) {
  return new Promise((res) => {
    const m = document.createElement('div'); m.className = 'modal';
    m.innerHTML = '<div class="box"><h2 style="font-size:19px">' + esc(title) + '</h2><p class="mut s14">' + esc(body) + '</p><div style="display:flex;gap:10px"><button class="btn line" data-r="0">Huỷ</button><button class="btn" data-r="1">' + esc(yes || 'Đồng ý') + '</button></div></div>';
    m.onclick = (e) => { const b = e.target.closest('[data-r]'); if (b || e.target === m) { m.remove(); res(b && b.dataset.r === '1'); } };
    document.body.appendChild(m);
  });
}
function sheet(html) { const m = document.createElement('div'); m.className = 'modal'; m.innerHTML = '<div class="box" style="max-height:80vh;overflow:auto">' + html + '<button class="btn line" data-close>Đóng</button></div>'; m.onclick = (e) => { if (e.target === m || e.target.closest('[data-close]')) m.remove(); }; document.body.appendChild(m); return m; }
const dotsRow = (arr) => '<div class="dots">' + arr.map((c) => '<i class="' + c + '"></i>').join('') + '</div>';
const barsRow = (n, on) => '<div class="bars">' + Array.from({ length: n }, (_, i) => '<i class="' + (i < on ? 'on' : '') + '"></i>').join('') + '</div>';
const top = (left, mid, right) => '<div class="top">' + (left || '<span class="ib ghost"></span>') + '<div class="mid">' + (mid || '') + '</div>' + (right || '<span class="ib ghost"></span>') + '</div>';
const ib = (act, icon, label, extra) => '<button class="ib ' + (extra || '') + '" data-a="' + act + '" aria-label="' + esc(label) + '">' + ic(icon, 19) + '</button>';
const ctaBtn = (act, label, arrow) => '<button class="btn ' + (arrow === false ? '' : 'arrow') + '" data-a="' + act + '">' + esc(label) + (arrow === false ? '' : '<i>' + ic('arrow', 17, 1.8) + '</i>') + '</button>';

/* ---------- ROUTER ---------- */
const app = $('#app');
let stack = [], curTab = 'home', A = {};
function bind(actions) {
  A = actions || {};
  $$('[data-a]', app).forEach((el) => { el.onclick = (e) => { const f = A[el.dataset.a]; if (f) { e.stopPropagation(); f(el.dataset.v, el, e); } }; });
}
function paint(html, actions, nav) {
  stopSpeak(); stopListen();
  app.innerHTML = '<div class="screen ' + (nav ? '' : 'nonav') + '">' + html + '</div>' + (nav ? navHtml(nav) : '');
  bind(Object.assign({}, actions, navActions));
  window.scrollTo(0, 0);
}
function go(name, params, replace) { const entry = { name, params }; if (replace && stack.length) stack[stack.length - 1] = entry; else stack.push(entry); SCREENS[name](params || {}); }
function back() { stack.pop(); const e = stack[stack.length - 1]; if (e) SCREENS[e.name](e.params || {}); else tab('home'); }
function tab(t) { curTab = t; stack = [{ name: t, params: {} }]; SCREENS[t]({}); }
const navActions = { nav: (v) => { sfx('tap'); tab(v); } };
function navHtml(on) {
  const items = [['home', 'home', 'Trang chủ'], ['roadmap', 'route', 'Lộ trình'], ['review', 'cards', 'Ôn tập'], ['practice', 'head', 'Luyện tập'], ['progress', 'chart', 'Tiến độ']];
  return '<nav class="nav" aria-label="Điều hướng chính">' + items.map(([k, i, l]) => '<button class="' + (k === on ? 'on' : '') + '" data-a="nav" data-v="' + k + '" aria-label="' + l + '">' + ic(i, k === on ? 19 : 20) + (k === on ? l : '') + '</button>').join('') + '</nav>';
}

/* ---------- SCREENS ---------- */
const SCREENS = {};
const viDate = () => { const d = new Date(); const w = ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'][d.getDay()]; return w + ', ' + d.getDate() + ' tháng ' + (d.getMonth() + 1); };

SCREENS.home = () => {
  const today = S.days[dkey()] || 0, g = S.goal, l = currentLesson(), lp = l ? LP(l.id) : null, due = dueCards().length;
  const dots = Array.from({ length: g }, (_, i) => '<i class="' + (i < Math.min(today, g) ? 'on' : '') + '"></i>').join('');
  const cols = g <= 50 ? 25 : 25;
  const st = l ? STAGES[l.stage - 1] : null;
  const html = top('<span class="s13 mut">' + viDate() + '</span>', '', '<div style="display:flex;gap:8px"><span class="pill">' + ic('flame', 17) + streakNow() + '</span>' + ib('settings', 'gear', 'Cài đặt') + '</div>')
    +
    '<div style="display:flex;flex-direction:column;gap:16px"><h1>Hôm nay bạn đạt<br>' + today + ' <span style="color:var(--faint)">/ ' + g + ' XP</span></h1>' +
    '<div class="grid-dots" style="grid-template-columns:repeat(' + cols + ',9px);gap:5px">' + dots + '</div>' +
    '<span class="s13 mut">' + (today >= g ? 'Đã đạt mục tiêu · giữ chuỗi ' + streakNow() + ' ngày' : 'Còn ' + (g - today) + ' XP để đạt mục tiêu hôm nay') + '</span></div>' +
    (!S.placed && !Object.values(S.lessons).some((p) => p.passed) ? '<div class="card" style="display:flex;flex-direction:column;gap:12px"><span class="tag" style="align-self:flex-start">Kiểm tra đầu vào</span><b style="font-size:17px;font-weight:600;letter-spacing:-.3px">Bạn đã biết một chút tiếng Anh?</b><span class="s13 mut">20 câu, khoảng 5 phút. App sẽ gợi ý unit phù hợp để bạn không phải học lại từ đầu.</span><div style="display:flex;gap:8px"><button class="btn" style="flex:1" data-a="place">Làm bài</button><button class="btn line" style="flex:1" data-a="noplace">Bỏ qua</button></div></div>' : '') +
    (l ? '<div class="card" style="display:flex;flex-direction:column;gap:16px"><div style="display:flex;justify-content:space-between;align-items:center"><span class="tag">Chặng ' + st.roman + ' · ' + st.name + '</span><span class="s13 mut">Bài ' + lnum(l) + ' / ' + st.total + '</span></div>' +
      '<div style="display:flex;flex-direction:column;gap:4px"><span style="font-size:20px;font-weight:600;letter-spacing:-.4px">' + esc(l.title) + '</span><span class="s13 mut">' + l.words.length + ' từ mới · ' + esc(l.grammar.name) + (l.reading ? ' · bài đọc' : '') + '</span></div>' +
      '<div class="line-prog"><i style="width:' + Math.round((lp.passed ? 6 : lp.step) / 6 * 100) + '%"></i></div>' +
      '<button class="btn arrow" data-a="lesson" data-v="' + l.id + '">' + (lp.step > 0 && !lp.passed ? 'Học tiếp bài ' : 'Bắt đầu bài ') + lnum(l) + '<i>' + ic('arrow', 17, 1.8) + '</i></button></div>' : '') +
    '<div class="card list">' +
    '<button class="row" data-a="nav" data-v="review"><span class="ric">' + ic('cards') + '</span><span class="t"><b>Ôn tập</b><span>Thẻ từ đến hạn hôm nay</span></span><b style="font-size:15px;font-weight:600">' + due + '</b></button>' +
    '<button class="row" data-a="quiz"><span class="ric">' + ic('circ') + '</span><span class="t"><b>Quiz</b><span>10 câu từ các bài đã học</span></span>' + ic('chev', 16) + '</button>' +
    '<button class="row" data-a="nav" data-v="practice"><span class="ric">' + ic('head') + '</span><span class="t"><b>Nghe và nói</b><span>Nói lại hội thoại, đọc và nghe</span></span>' + ic('chev', 16) + '</button>' +
    '<button class="row" data-a="nb"><span class="ric">' + ic('book') + '</span><span class="t"><b>Sổ tay</b><span>Tra lại từ vựng và ngữ pháp đã học</span></span>' + ic('chev', 16) + '</button></div>';
  paint(html, { settings: () => tab('progress'), lesson: (id) => go('lesson', { id }), quiz: () => startQuiz(), nb: () => go('notebook'), place: () => startPlacement(), noplace: () => { S.placed = { skipped: true }; save(); SCREENS.home(); } }, 'home');
};

SCREENS.roadmap = (params) => {
  const learned = Object.keys(S.cards).length;
  const cur = currentLesson(); const view = (params && params.st) || (cur && cur.stage) || 1;
  let html = '<div style="display:flex;align-items:flex-end;justify-content:space-between"><div style="display:flex;flex-direction:column;gap:6px"><span class="s13 mut">4 chặng · 3.400 từ</span><h1>Lộ trình</h1></div><div style="display:flex;flex-direction:column;align-items:flex-end"><span style="font-size:26px;font-weight:600;letter-spacing:-.8px">' + learned + '</span><span class="s12 mut">từ đã học</span></div></div>' +
    '<div class="seg"><button class="' + (S.settings.free ? '' : 'on') + '" data-a="mode" data-v="0">' + ic('lock', 14) + 'Theo lộ trình</button><button class="' + (S.settings.free ? 'on' : '') + '" data-a="mode" data-v="1">' + ic('chev', 14) + 'Học tự do</button></div>' +
    '<span class="s13 mut" style="margin-top:-8px">' + (S.settings.free ? 'Mở được mọi bài và mọi chặng. Bài gợi ý tiếp theo vẫn được đánh dấu “Đang học”.' : 'Học tuần tự: đạt 80% bài kiểm tra để mở bài tiếp theo.') + '</span>';
  STAGES.forEach((st) => {
    const ls = LESSONS.filter((l) => l.stage === st.n);
    const passed = ls.filter((l) => S.lessons[l.id] && S.lessons[l.id].passed).length;
    const isCur = st.n === view;
    if (isCur) {
      const pct = st.total ? Math.round(passed / st.total * 100) : 0;
      html += '<div class="dark-card" style="display:flex;flex-direction:column;gap:16px"><div style="display:flex;justify-content:space-between;align-items:flex-start"><div style="display:flex;flex-direction:column;gap:4px"><span class="s12" style="color:var(--invMut)">Chặng ' + st.roman + ' · ' + st.level + '</span><span style="font-size:22px;font-weight:600;letter-spacing:-.5px">' + st.name + '</span></div><span class="tag" style="background:transparent;color:inherit;border-color:var(--invLine)">' + pct + '%</span></div>' +
        '<div class="grid-dots" style="grid-template-columns:repeat(20,minmax(0,1fr))">' + Array.from({ length: st.total }, (_, i) => '<i class="' + (i < passed ? 'on' : '') + '"></i>').join('') + '</div>' +
        '<span class="s12" style="color:var(--invMut);margin-top:-6px">Mỗi chấm là một bài · ' + passed + ' / ' + st.total + ' bài · đã soạn ' + ls.length + ' bài</span><div style="display:flex;flex-direction:column;border-top:1px solid var(--invLine)">';
      let unit = 0;
      ls.forEach((l) => {
        const p = S.lessons[l.id]; const done = p && p.passed; const un = unlocked(l); const isC = l === cur;
        if (l.unit !== unit) { unit = l.unit; html += '<div style="display:flex;align-items:center;justify-content:space-between;gap:10px;padding:14px 0 4px"><span class="s12" style="color:var(--invMut)">Unit ' + l.unit + (l.unitTitle ? ' · ' + esc(l.unitTitle) : '') + '</span>' + (un ? '<button data-a="games" data-v="' + l.stage + '-' + l.unit + '" style="font-size:12px;font-weight:500;padding:4px 11px;border-radius:999px;border:1px solid var(--invLine);color:inherit;white-space:nowrap">Trò chơi</button>' : '') + '</div>'; }
        html += '<button class="lrow" data-a="' + (un ? 'lesson' : 'locked') + '" data-v="' + l.id + '"><span class="st ' + (done ? 'done' : isC ? 'cur' : 'lock') + '">' + (done ? ic('check', 13, 2.2) : isC || un ? '' : ic('lock', 12, 2)) + '</span><span style="font-size:14px;flex:1;' + (isC ? 'font-weight:500' : '') + (un ? '' : 'color:var(--invMut)') + '">' + lnum(l) + ' · ' + esc(l.title) + '</span>' + (done ? '<span class="s12" style="color:var(--invMut)">' + (p.skipped && !p.best ? 'đã qua' : p.best + '%') + '</span>' : isC ? '<span class="s12" style="font-weight:500">Đang học</span>' : '') + '</button>';
      });
      html += '</div></div>';
    }
  });
  html += '<div class="card list">' + STAGES.filter((st) => st.n !== view).map((st) => { const ls = LESSONS.filter((l) => l.stage === st.n); const open = ls.length && unlocked(ls[0]); const done = ls.length && ls.every((l) => S.lessons[l.id] && S.lessons[l.id].passed);
    return '<' + (open ? 'button data-a="st" data-v="' + st.n + '"' : 'div') + ' class="stagecard" style="width:100%;text-align:left"><span class="num">' + st.roman + '</span><span class="t" style="display:flex;flex-direction:column;flex:1"><b style="font-size:15px;font-weight:500">' + st.name + '</b><span class="s13 mut">' + st.level + (st.words ? ' · ' + st.words.toLocaleString('vi-VN') + ' từ · ' + st.total + ' bài' : ' · ' + st.note) + (done ? ' · đã hoàn thành' : '') + '</span></span><span style="color:var(--mut)">' + (open ? ic(done ? 'check' : 'chev', 17) : ic('lock', 17)) + '</span></' + (open ? 'button' : 'div') + '>'; }).join('') + '</div>';
  paint(html, { lesson: (id) => go('lesson', { id }), locked: () => toast('Hoàn thành bài trước, hoặc chọn “Học tự do” để mở bài này'), st: (n) => go('roadmap', { st: +n }, true), mode: (v) => { S.settings.free = v === '1'; save(); toast(S.settings.free ? 'Đã mở mọi bài' : 'Đã về học theo lộ trình'); go('roadmap', params, true); }, games: (v) => { const [a, b] = v.split('-'); go('games', { st: +a, u: +b }); } }, 'roadmap');
};

const STEP_META = [
  ['Từ mới', (l) => l.words.length + ' từ · flashcard'], ['Ngữ pháp', (l) => l.grammar.name], ['Hội thoại', () => 'Nghe · nói lại · chấm phát âm'],
  ['Luyện tập', (l) => (l.reading ? 'Bài tập + đọc và nghe' : 'Nhiều dạng bài tập')], ['Viết', () => 'Dịch câu sang tiếng Anh'], ['Kiểm tra cuối bài', () => 'Đạt 80% để mở bài tiếp']
];
SCREENS.lesson = ({ id }) => {
  const l = LBY[id], p = LP(id), st = STAGES[l.stage - 1];
  const stepNow = p.passed ? 6 : p.step;
  let html = top(ib('back', 'back', 'Quay lại'), '<span class="tag">Chặng ' + st.roman + ' · Bài ' + lnum(l) + '</span>') +
    '<div style="display:flex;flex-direction:column;gap:6px"><h1>' + esc(l.title) + '</h1><span class="s13 mut">' + esc(l.titleEn || '') + ' · 6 bước · ' + Math.min(stepNow, 6) + ' / 6 đã xong' + (p.passed ? ' · điểm ' + p.best + '%' : '') + '</span></div><div class="card list" style="padding:6px 18px">';
  STEP_META.forEach(([name, sub], i) => {
    const done = i < stepNow, cur = i === stepNow, can = i <= stepNow;
    html += '<button class="steprow ' + (cur ? 'active' : '') + '" data-a="' + (can ? 'step' : 'lockedStep') + '" data-v="' + i + '"><span class="st ' + (done ? 'done' : cur ? 'cur' : 'todo') + '">' + (done ? ic('check', 14, 2.2) : cur ? '' : (i + 1)) + '</span><span class="t" style="display:flex;flex-direction:column;flex:1"><b style="font-size:15px;font-weight:' + (cur ? 600 : 500) + '">' + name + '</b><span class="s12 mut">' + esc(sub(l)) + '</span></span>' + (cur ? '<span class="s12" style="font-weight:500">' + (i === 0 && !p.step ? 'Bắt đầu' : 'Tiếp theo') + '</span>' : '') + '</button>';
  });
  html += '</div><div class="cta">' + ctaBtn('cont', p.passed ? 'Học lại bài này' : (stepNow === 0 ? 'Bắt đầu bước 1' : 'Tiếp tục bước ' + (stepNow + 1))) + '</div>';
  paint(html, { back, step: (i) => runStep(l, +i), lockedStep: () => toast('Hoàn thành các bước trước'), cont: () => runStep(l, p.passed ? 0 : stepNow) });
};
function completeStep(l, i) { const p = LP(l.id); if (p.step <= i) p.step = i + 1; addXP(5); save(); }
function runStep(l, i) {
  [stepWords, stepGrammar, stepDialogue, stepPractice, stepWriting, stepTest][i](l);
}
const stepHeader = (l, i, title, right) => top(ib('exit', 'back', 'Về bài học'), '<b>' + title + '</b>' + barsRow(6, i + 1), right);
const exitLesson = (l) => () => { stopSpeak(); go('lesson', { id: l.id }, true); };

/* --- Step 1: words (flashcards) --- */
function flashFlow(list, opts) {
  let q = list.slice(), done = 0; const total = list.length;
  const render = () => {
    if (!q.length) return opts.onDone();
    const w = q[0]; let flipped = false;
    const html = opts.header(done, total) +
      '<div class="dots">' + Array.from({ length: total }, (_, i) => '<i class="' + (i < done ? 'on' : '') + '"></i>').join('') + '</div>' +
      '<div class="fc" data-a="flip"><div style="display:flex;justify-content:space-between;align-items:center"><span class="s13 mut">' + esc(w.pos || '') + '</span>' + (S.cards[w.id] ? '<span class="tag">Ôn tập</span>' : '<span class="tag acc">Từ mới</span>') + '</div>' +
      '<div style="display:flex;flex-direction:column;align-items:center;gap:10px;text-align:center"><span class="w">' + esc(w.en) + '</span><span style="font-size:16px;color:var(--mut)">' + esc(w.ipa) + '</span><button class="ib fill" style="width:52px;height:52px;margin-top:6px" data-a="say" aria-label="Phát âm">' + ic('spk2', 20) + '</button></div>' +
      '<div class="back" id="fcb" style="visibility:hidden"><span style="font-size:22px;font-weight:500;letter-spacing:-.3px">' + esc(w.vi) + '</span><span style="font-size:15px;line-height:1.5;display:flex;gap:8px;align-items:flex-start">' + esc(w.ex) + '<button class="ib xs" data-a="sayEx" aria-label="Nghe câu ví dụ">' + ic('spk', 13) + '</button></span><span class="s13 mut">' + esc(w.exVi) + '</span></div>' +
      '<span class="s12 mut center" id="fch">Chạm vào thẻ để xem nghĩa</span></div>' +
      '<div class="cta" id="fcCta"><button class="btn line" data-a="flip">Xem nghĩa</button></div>';
    paint(html, Object.assign({
      say: () => speak(w.en), sayEx: () => speak(w.ex),
      flip: () => {
        if (flipped) return; flipped = true; sfx('tap'); $('#fcb').style.visibility = 'visible'; $('#fch').classList.add('hidden');
        $('#fcCta').innerHTML = '<div class="grade"><button data-a="g" data-v="0"><b>Chưa nhớ</b><span>' + ivLabel(w.id, 0) + '</span></button><button class="main" data-a="g" data-v="1"><b>Nhớ rồi</b><span>' + ivLabel(w.id, 1) + '</span></button><button data-a="g" data-v="2"><b>Quá dễ</b><span>' + ivLabel(w.id, 2) + '</span></button></div>';
        bind(A); speak(w.ex);
      },
      g: (v) => { v = +v; grade(w.id, v); addXP(v === 0 ? 1 : 2); q.shift(); if (v === 0) q.push(w); else done++; render(); }
    }, opts.actions || {}));
    setTimeout(() => speak(w.en), 250);
  };
  render();
}
function stepWords(l) {
  const list = l.words.map((w) => WORDS[w[0].toLowerCase()]);
  flashFlow(list, { header: (d, t) => stepHeader(l, 0, 'Từ mới · ' + Math.min(d + 1, t) + ' / ' + t), actions: { exit: exitLesson(l) }, onDone: () => { completeStep(l, 0); sfx('done'); toast('Đã học ' + list.length + ' từ mới'); runStep(l, 1); } });
}

/* --- Step 2: grammar --- */
function stepGrammar(l) {
  const g = l.grammar;
  const html = stepHeader(l, 1, 'Ngữ pháp') +
    '<div style="display:flex;flex-direction:column;gap:6px"><span class="s13 mut">' + esc(g.nameEn || '') + '</span><h1 style="font-size:28px">' + esc(g.name) + '</h1><p class="s14" style="color:var(--ink2);line-height:1.55">' + esc(g.desc) + '</p></div>' +
    '<div class="dark-card formula" style="display:flex;flex-direction:column;gap:12px"><span class="s12" style="color:var(--invMut)">Công thức</span>' + g.formula.map((f) => '<div><span>' + esc(f[0]) + '</span><span>' + f[1] + '</span></div>').join('') + '</div>' +
    '<div class="card list">' + g.examples.map((e, i) => '<div class="row" style="align-items:flex-start"><button class="ib sm" data-a="say" data-v="' + i + '" aria-label="Nghe câu">' + ic('spk', 15) + '</button><span class="t"><span style="font-size:15px;color:var(--ink)">' + e[0] + '</span><span>' + esc(e[1]) + '</span></span></div>').join('') + '</div>' +
    (g.mistake ? '<div style="background:var(--badBg);border-radius:18px;padding:14px 16px;display:flex;flex-direction:column;gap:6px"><span class="s12" style="font-weight:500;color:var(--badInk)">Lỗi người Việt hay gặp</span><span class="s14" style="color:var(--badInk)"><s>' + esc(g.mistake[0]) + '</s></span><span class="s14" style="color:var(--okInk);font-weight:500">' + esc(g.mistake[1]) + '</span>' + (g.mistake[2] ? '<span class="s13" style="color:var(--ink2)">' + esc(g.mistake[2]) + '</span>' : '') + '</div>' : '') +
    '<div class="cta">' + ctaBtn('next', 'Hiểu rồi, sang hội thoại') + '</div>';
  paint(html, { exit: exitLesson(l), say: (i) => speak(g.examples[+i][0].replace(/<[^>]+>/g, '')), next: () => { completeStep(l, 1); runStep(l, 2); } });
}

/* --- Step 3: dialogue --- */
function dialogueListen(l, opts) {
  const lines = l.dialogue.lines; let mode = 1, playing = -1, playAll = false;
  const render = () => {
    const html = (opts.header ? opts.header() : stepHeader(l, 2, 'Hội thoại · Nghe', '<button class="ib" data-a="rate" aria-label="Tốc độ đọc" style="font-size:12px;font-weight:600">' + (S.settings.rate < 0.9 ? '0.8×' : '1×') + '</button>')) +
      '<div class="seg">' + ['Phụ đề Anh', 'Anh + Việt', 'Ẩn chữ'].map((t, i) => '<button class="' + (mode === i ? 'on' : '') + '" data-a="mode" data-v="' + i + '">' + t + '</button>').join('') + '</div>' +
      (l.dialogue.title ? '<span class="s13 mut">' + esc(l.dialogue.title) + '</span>' : '') +
      '<div class="chat">' + lines.map((ln, i) => '<div class="msg ' + (ln[0] === 'B' ? 'me' : '') + (playing === i ? ' playing' : '') + '"><span class="av">' + ln[0] + '</span><div class="bub ' + (mode === 2 ? 'hidden' : '') + '"><span class="en">' + esc(ln[1]) + '</span>' + (mode === 1 ? '<span class="vi">' + esc(ln[2]) + '</span>' : '') + '</div><button class="ib sm ' + (playing === i ? 'fill' : '') + '" data-a="line" data-v="' + i + '" aria-label="Nghe câu này">' + ic('spk', 15) + '</button></div>').join('') + '</div>' +
      '<span class="s12 mut center">Bấm loa để nghe riêng từng câu' + (mode === 2 ? ' · đang ẩn chữ để luyện nghe' : '') + '</span>' +
      '<div class="cta"><div class="player"><button class="pb" data-a="all" aria-label="' + (playAll ? 'Dừng' : 'Phát cả đoạn') + '">' + ic(playAll ? 'pause' : 'play', 14, 2.2) + '</button><div class="line-prog"><i style="width:' + (playing < 0 ? 0 : Math.round((playing + 1) / lines.length * 100)) + '%"></i></div><span class="s12 mut" style="padding-right:8px">' + (playing < 0 ? lines.length + ' câu' : (playing + 1) + ' / ' + lines.length) + '</span></div><button class="btn" style="flex:none;padding:0 20px" data-a="next">' + esc(opts.nextLabel || 'Nói lại') + ic('arrow', 16, 1.8) + '</button></div>';
    paint(html, {
      exit: exitLesson(l), back,
      mode: (v) => { mode = +v; render(); },
      rate: () => { S.settings.rate = S.settings.rate < 0.9 ? 0.95 : 0.8; save(); render(); },
      line: async (v) => { playAll = false; playing = +v; render(); await speak(lines[+v][1]); if (playing === +v && !playAll) { playing = -1; render(); } },
      all: async () => {
        if (playAll) { playAll = false; stopSpeak(); playing = -1; render(); return; }
        playAll = true;
        for (let i = 0; i < lines.length && playAll; i++) { playing = i; render(); await speak(lines[i][1]); await new Promise((r) => setTimeout(r, 250)); }
        playAll = false; playing = -1; render();
      },
      next: () => { playAll = false; opts.onNext(); }
    });
  };
  render();
}
function speakCheckBlock(target, res) {
  const html = '<p style="font-size:19px;font-weight:500;letter-spacing:-.3px;line-height:1.5">' + res.words.map((w, i) => '<span class="' + (res.okW[i] ? 'hl-ok' : 'hl-bad') + '">' + esc(w) + '</span>').join(' ') + '</p>';
  const bad = res.words.filter((w, i) => !res.okW[i]).map((w) => w.replace(/[^A-Za-z'’-]/g, '')).filter(Boolean);
  return { html, bad, more: '<div style="border-top:1px solid var(--line2);padding-top:10px;display:flex;flex-direction:column;gap:6px"><span class="s12 mut">Máy nghe được: “' + esc(res.heard || '…') + '”</span>' + bad.slice(0, 3).map((b) => '<div style="display:flex;align-items:center;gap:8px"><span class="s14" style="font-weight:500;flex:1">' + esc(b) + '</span><span class="s12 mut">chưa rõ · nghe mẫu</span><button class="ib xs" data-a="sayw" data-v="' + esc(b) + '" aria-label="Nghe mẫu từ ' + esc(b) + '">' + ic('spk', 13) + '</button></div>').join('') + '</div>' };
}
function dialogueSpeak(l, opts) {
  const lines = l.dialogue.lines; let role = 'B'; let idx = 0; const results = {}; let busy = false;
  const mine = (i) => role === 'both' || lines[i][0] === role;
  const firstMine = () => { for (let i = 0; i < lines.length; i++) if (mine(i) && results[i] == null) return i; return -1; };
  const render = () => {
    idx = firstMine(); const online = canSTT();
    let html = (opts.header ? opts.header() : stepHeader(l, 2, 'Hội thoại · Nói lại', '<span class="pill" style="font-size:13px">' + Object.keys(results).length + ' / ' + lines.filter((x, i) => mine(i)).length + '</span>')) +
      '<div class="seg">' + [['A', 'Bạn vai A'], ['B', 'Bạn vai B'], ['both', 'Cả hai vai']].map(([k, t]) => '<button class="' + (role === k ? 'on' : '') + '" data-a="role" data-v="' + k + '">' + t + '</button>').join('') + '</div>' +
      (!online ? '<div style="display:flex;gap:10px;align-items:flex-start;background:var(--accBg);color:var(--acc);border-radius:16px;padding:12px 14px">' + ic('info', 18) + '<span class="s13">' + (SR ? 'Đang offline: bấm micro để ghi âm, nghe lại giọng mình so với mẫu rồi tự chấm.' : 'Máy này chưa hỗ trợ chấm tự động: ghi âm, nghe lại rồi tự chấm.') + '</span></div>' : '') +
      '<div style="display:flex;flex-direction:column;gap:10px">';
    lines.forEach((ln, i) => {
      if (!mine(i)) { html += '<div style="display:flex;gap:8px;align-items:center"><span class="av" style="width:28px;height:28px;font-size:11px">' + ln[0] + '</span><span class="s14 mut" style="flex:1">' + esc(ln[1]) + '</span><button class="ib xs" data-a="say" data-v="' + i + '" aria-label="Nghe câu">' + ic('spk', 13) + '</button></div>'; return; }
      const r = results[i];
      if (r && r.res) { const b = speakCheckBlock(ln[1], r.res); html += '<div class="card" style="padding:14px 16px;display:flex;flex-direction:column;gap:8px' + (i === r.last ? '' : '') + '"><div style="display:flex;justify-content:space-between"><span class="s12 mut">Bạn · vai ' + ln[0] + '</span><b class="s13" style="color:' + (r.res.score >= 80 ? 'var(--okInk)' : 'var(--badInk)') + '">' + r.res.score + '%</b></div>' + b.html + (r.res.score < 100 ? b.more : '') + '<button class="s12" style="align-self:flex-start;text-decoration:underline;color:var(--mut)" data-a="redo" data-v="' + i + '">Đọc lại câu này</button></div>'; }
      else if (r && r.self != null) { html += '<div class="card" style="padding:14px 16px;display:flex;flex-direction:column;gap:6px"><div style="display:flex;justify-content:space-between"><span class="s12 mut">Bạn · vai ' + ln[0] + ' · tự chấm</span><b class="s13">' + (r.self ? 'Tốt' : 'Cần luyện') + '</b></div><p style="font-size:16px">' + esc(ln[1]) + '</p><button class="s12" style="align-self:flex-start;text-decoration:underline;color:var(--mut)" data-a="redo" data-v="' + i + '">Đọc lại câu này</button></div>'; }
      else if (i === idx) { html += '<div class="card" style="border:1.5px solid var(--ink);padding:14px 16px;display:flex;flex-direction:column;gap:8px"><div style="display:flex;justify-content:space-between;align-items:center"><span class="s12" style="font-weight:500">Đến lượt bạn · đọc to câu này</span><button class="ib xs" data-a="say" data-v="' + i + '" aria-label="Nghe mẫu">' + ic('spk', 13) + '</button></div><p style="font-size:19px;font-weight:500;letter-spacing:-.3px;line-height:1.5">' + esc(ln[1]) + '</p><span class="s13 mut">' + esc(ln[2]) + '</span><div id="selfbox"></div></div>'; }
      else { html += '<div style="display:flex;gap:8px;align-items:center;opacity:.5"><span class="av" style="width:28px;height:28px;font-size:11px">' + ln[0] + '</span><span class="s14" style="flex:1">' + esc(ln[1]) + '</span></div>'; }
    });
    html += '</div><div class="cta">' + (idx >= 0 ? '<button class="ib" style="width:52px;height:52px" data-a="playme" aria-label="Nghe lại giọng của bạn">' + ic('replay', 20) + '</button><button class="btn arrow" id="micbtn" data-a="mic">' + (busy ? 'Đang nghe…' : 'Bấm để đọc') + '<i>' + ic(busy ? 'stop' : 'mic', 17) + '</i></button><button class="ib" style="width:52px;height:52px" data-a="skip" aria-label="Bỏ qua câu này">' + ic('arrow', 20) + '</button>' : ctaBtn('finish', opts.finishLabel || 'Xong, sang luyện tập')) + '</div>';
    paint(html, {
      exit: exitLesson(l), back,
      role: (v) => { role = v; Object.keys(results).forEach((k) => delete results[k]); render(); },
      say: (i) => speak(lines[+i][1]), sayw: (w) => speak(w),
      redo: (i) => { delete results[+i]; render(); },
      skip: () => { results[idx] = { self: false }; render(); },
      playme: () => { if (lastRecUrl) playUrl(lastRecUrl); else toast('Chưa có bản ghi âm'); },
      mic: () => doMic(),
      finish: () => { const scores = Object.values(results).map((r) => r.res ? r.res.score : (r.self ? 90 : 50)); const avg = scores.length ? scores.reduce((a, b) => a + b, 0) / scores.length : 0; opts.onDone(Math.round(avg)); }
    });
  };
  async function doMic() {
    if (busy) { stopListen(); recordStop(); return; }
    const target = lines[idx][1]; busy = true; sfx('mic'); render();
    if (canSTT()) {
      try { const r = await listen(); busy = false; const res = judgeSpeech(target, r.alts.length ? r.alts : [r.text]); results[idx] = { res }; addXP(res.score >= 80 ? 10 : 4); sfx(res.score >= 80 ? 'ok' : 'bad'); render(); }
      catch (e) { busy = false; if (e === 'no-speech') { toast('Chưa nghe thấy giọng, thử lại nhé'); render(); } else { toast('Không dùng được nhận dạng giọng nói — chuyển sang ghi âm'); offlineRecord(target); } }
    } else offlineRecord(target);
  }
  async function offlineRecord(target) {
    busy = true; render();
    try {
      const p = recordStart(); toast('Đang ghi âm… bấm lần nữa để dừng');
      lastRecUrl = await p; busy = false; render();
      const box = $('#selfbox'); if (box) { box.innerHTML = '<div style="display:flex;flex-direction:column;gap:10px;border-top:1px solid var(--line2);padding-top:10px"><div style="display:flex;gap:8px"><button class="btn line" style="height:44px;font-size:13px" data-a="pm">' + ic('replay', 15) + 'Giọng bạn</button><button class="btn line" style="height:44px;font-size:13px" data-a="pt">' + ic('spk', 15) + 'Giọng mẫu</button></div><div style="display:flex;gap:8px"><button class="btn line" style="height:44px;font-size:13px" data-a="sf" data-v="0">Cần luyện thêm</button><button class="btn" style="height:44px;font-size:13px" data-a="sf" data-v="1">Đọc tốt rồi</button></div></div>'; bind(Object.assign(A, { pm: () => playUrl(lastRecUrl), pt: () => speak(target), sf: (v) => { results[idx] = { self: v === '1' }; addXP(v === '1' ? 8 : 3); sfx(v === '1' ? 'ok' : 'tap'); render(); } })); }
    } catch (e) { busy = false; render(); toast('Không mở được micro. Hãy cho phép micro trong cài đặt trình duyệt.'); }
  }
  render();
}
function stepDialogue(l) {
  dialogueListen(l, { onNext: () => dialogueSpeak(l, { onDone: (avg) => { const p = LP(l.id); p.skills.speaking = avg; completeStep(l, 2); sfx('done'); runStep(l, 3); } }) });
}

/* --- Exercise runner --- */
function runner(cfg) {
  // cfg: {title, items, header(i,n,states), onExit, onDone(results)}
  const items = cfg.items; let i = 0; const states = items.map(() => ''); const results = [];
  const next = () => { if (states[i] === 'cur') states[i] = 'on'; i++; if (i >= items.length) return cfg.onDone(results); show(); };
  const show = () => {
    const it = items[i]; states[i] = 'cur';
    const head = top(ib('exit', 'close', 'Thoát'), '<b>' + esc(cfg.title) + ' · ' + (i + 1) + ' / ' + items.length + '</b>' + dotsRow(states.map((s) => s || '')), cfg.right || '');
    EX[it.type](it, {
      head, exit: cfg.onExit,
      result: (ok, fbHtml, opt) => {
        opt = opt || {}; if (opt.count !== false) { results.push({ ok, skill: it.skill || 'vocab', word: it.word }); S.qT++; if (ok) S.qR++; }
        states[i] = ok ? 'ok' : 'bad'; sfx(ok ? 'ok' : 'bad'); if (ok) addXP(10); else save();
        if (!ok && it.word) grade(it.word, 0);
        const fb = $('#fb'); if (fb) fb.innerHTML = '<div class="fb ' + (ok ? 'ok' : 'bad') + '"><span class="ic">' + ic(ok ? 'check' : 'x', 14, 2.2) + '</span><div style="display:flex;flex-direction:column;gap:3px"><b>' + (ok ? (opt.okTitle || 'Chính xác') : (opt.badTitle || 'Chưa đúng')) + '</b>' + (fbHtml ? '<p>' + fbHtml + '</p>' : '') + '</div></div>';
        const cta = $('#cta'); if (cta) { cta.innerHTML = ctaBtn('nx', i + 1 < items.length ? 'Câu tiếp theo' : 'Hoàn thành'); bind(Object.assign(A, { nx: next })); }
        if (opt.say) setTimeout(() => speak(opt.say), 380);
      },
      next, skip: next
    });
  };
  show();
}
const EX = {};
const baseEx = (h, body, cta) => h.head + body + '<div id="fb"></div><div class="cta" id="cta">' + (cta || '') + '</div>';
EX.mc = (it, h) => {
  const opts = it.options;
  const body = '<div style="display:flex;flex-direction:column;align-items:center;gap:8px;padding:14px 0 4px;text-align:center"><span class="s13 mut">' + esc(it.label) + '</span>' + it.prompt + '</div><div class="opts">' + opts.map((o, k) => '<button class="opt" data-a="o" data-v="' + k + '">' + esc(o) + '</button>').join('') + '</div>';
  paint(baseEx(h, body), { exit: h.exit, say: () => speak(it.speak, { slow: false }), slow: () => speak(it.speak, { slow: true }),
    o: (k, el) => { if (el.disabled) return; const ok = opts[+k] === it.answer; $$('.opt').forEach((b, j) => { b.disabled = true; if (opts[j] === it.answer) b.classList.add('ok'); }); if (!ok) el.classList.add('bad'); h.result(ok, it.info, { say: it.sayAfter }); } });
  if (it.speak && it.auto) setTimeout(() => speak(it.speak), 300);
};
EX.match = (it, h) => {
  const en = shuffle(it.pairs.map((p) => p[0])), vi = shuffle(it.pairs.map((p) => p[1])); const cells = [];
  for (let k = 0; k < Math.max(en.length, vi.length); k++) { if (en[k] != null) cells.push(['en', en[k]]); if (vi[k] != null) cells.push(['vi', vi[k]]); }
  let sel = null, doneN = 0, miss = 0; matchStep = 0;
  const body = '<div style="display:flex;flex-direction:column;gap:6px;padding-top:6px"><span class="s13 mut">Ghép từ với nghĩa đúng</span><h2 id="mt">Đã ghép 0 / ' + it.pairs.length + ' cặp</h2></div><div class="mgrid">' + cells.map((c, k) => '<button data-a="c" data-v="' + k + '">' + esc(c[1]) + '</button>').join('') + '</div><div style="display:flex;gap:10px;align-items:center;border-top:1px solid var(--line);padding-top:16px;color:var(--mut)">' + ic('info', 18) + '<span class="s13">Chạm một từ tiếng Anh, rồi chạm nghĩa tương ứng.</span></div>';
  paint(baseEx(h, body), { exit: h.exit, c: (k, el) => {
    const c = cells[+k]; if (el.classList.contains('done')) return;
    if (!sel) { sel = { k: +k, el, c }; el.classList.add('on'); if (c[0] === 'en') speak(c[1]); return; }
    if (sel.k === +k) { el.classList.remove('on'); sel = null; return; }
    if (sel.c[0] === c[0]) { sel.el.classList.remove('on'); sel = { k: +k, el, c }; el.classList.add('on'); if (c[0] === 'en') speak(c[1]); return; }
    const e = sel.c[0] === 'en' ? sel.c[1] : c[1], v = sel.c[0] === 'vi' ? sel.c[1] : c[1];
    const ok = it.pairs.some((p) => p[0] === e && p[1] === v);
    if (ok) { sel.el.classList.remove('on'); sel.el.classList.add('done'); el.classList.add('done'); doneN++; sfx('match'); $('#mt').textContent = 'Đã ghép ' + doneN + ' / ' + it.pairs.length + ' cặp'; if (doneN === it.pairs.length) { S.settings.sfx && setTimeout(() => {}, 0); h.result(miss <= 1, miss ? 'Sai ' + miss + ' lần' : 'Ghép đúng tất cả', { okTitle: 'Hoàn thành', badTitle: 'Xong, nhưng sai ' + miss + ' lần' }); } }
    else { miss++; sfx('bad'); const a = sel.el; a.classList.remove('on'); a.classList.add('bad'); el.classList.add('bad'); setTimeout(() => { a.classList.remove('bad'); el.classList.remove('bad'); }, 500); }
    sel = null;
  } });
};
EX.fill = (it, h) => {
  const parts = it.sentence.split('___'); const answers = it.answer.split('|');
  const body = '<div style="display:flex;flex-direction:column;gap:8px;padding-top:8px"><span class="s13 mut">' + esc(it.label || 'Điền vào chỗ trống') + '</span><p style="font-size:23px;font-weight:500;letter-spacing:-.5px;line-height:1.5">' + esc(parts[0]) + '<span id="blank" style="display:inline-block;min-width:80px;border-bottom:2px solid var(--ink);text-align:center;color:var(--mut)">&nbsp;</span>' + esc(parts[1] || '') + '</p>' + (it.vi ? '<span class="s14 mut">' + esc(it.vi) + '</span>' : '') + '</div>' +
    '<input class="inp" id="fin" placeholder="Gõ câu trả lời" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Câu trả lời">' +
    (it.options ? '<div style="display:flex;flex-direction:column;gap:8px"><span class="s13 mut">Hoặc chọn nhanh</span><div class="chips">' + shuffle(it.options).map((o) => '<button class="chip" data-a="ch" data-v="' + esc(o) + '">' + esc(o) + '</button>').join('') + '</div></div>' : '');
  let checked = false;
  const check = (val) => {
    if (checked) return; val = (val != null ? val : $('#fin').value).trim(); if (!val) { toast('Hãy gõ hoặc chọn một đáp án'); return; }
    checked = true; const ok = answers.some((a) => norm(a) === norm(val)); const inp = $('#fin'); inp.value = val; inp.classList.add(ok ? 'ok' : 'bad'); inp.disabled = true;
    const bl = $('#blank'); bl.textContent = answers[0]; bl.style.color = 'var(--okInk)'; bl.style.borderColor = 'var(--ok)';
    $$('.chip').forEach((c) => { c.disabled = true; if (answers.some((a) => norm(a) === norm(c.dataset.v))) c.classList.add('on'); });
    h.result(ok, (ok ? '' : 'Đáp án: <b>' + esc(answers[0]) + '</b>. ') + esc(it.explain || ''), { say: parts.join(answers[0]) });
  };
  paint(baseEx(h, body, '<button class="btn" data-a="chk">Kiểm tra</button>'), { exit: h.exit, ch: (v) => check(v), chk: () => check() });
  $('#fin').addEventListener('keydown', (e) => { if (e.key === 'Enter') check(); });
};
EX.error = (it, h) => {
  const words = it.sentence.split(' '); let stage = 0, picked = -1;
  const body = '<div style="display:flex;flex-direction:column;gap:6px;padding-top:6px"><span class="s13 mut">Tìm và sửa lỗi sai</span><h2 id="et">Chạm vào từ bị sai</h2></div><div class="card" style="display:flex;flex-wrap:wrap;gap:8px;padding:22px 18px">' + words.map((w, k) => '<button class="wtile" data-a="w" data-v="' + k + '">' + esc(w) + '</button>').join('') + '</div><div id="fix"></div>';
  paint(baseEx(h, body), { exit: h.exit,
    w: (k, el) => {
      if (stage !== 0) return; picked = +k; stage = 1; sfx('tap');
      $$('.wtile').forEach((b) => b.disabled = true);
      if (picked !== it.wrong) { $$('.wtile')[it.wrong].classList.add('bad'); el.style.borderColor = 'var(--ink)'; h.result(false, 'Từ sai là “' + esc(words[it.wrong]) + '” → <b>' + (it.fix === '-' ? 'bỏ từ này' : esc(it.fix)) + '</b>. ' + esc(it.explain), { say: fixed() }); return; }
      el.classList.add('bad'); $('#et').textContent = 'Sửa thành';
      $('#fix').innerHTML = '<div class="chips">' + shuffle(it.options).map((o) => '<button class="chip" data-a="f" data-v="' + esc(o) + '">' + (o === '-' ? 'Bỏ từ này' : esc(o)) + '</button>').join('') + '</div>'; bind(A);
    },
    f: (v, el) => { if (stage !== 1) return; stage = 2; const ok = norm(v) === norm(it.fix); $$('.chip').forEach((c) => { c.disabled = true; if (norm(c.dataset.v) === norm(it.fix)) c.classList.add('on'); }); h.result(ok, '<b>' + esc(fixed()) + '</b><br>' + esc(it.explain), { say: fixed() }); }
  });
  function fixed() { const out = words.map((w, k) => k === it.wrong ? (it.fix === '-' ? '' : it.fix + (/[.,?!]$/.test(w) && !/[.,?!]$/.test(it.fix) ? w.slice(-1) : '')) : w).filter(Boolean).join(' '); return out.replace(/ ([.,?!])$/, '$1'); }
};
EX.order = (it, h) => {
  const target = it.en.replace(/[.?!]$/, ''); const words = target.split(' '); const bank = shuffle(words.map((w, k) => ({ w, k }))); let ans = [];
  const body = '<div style="display:flex;flex-direction:column;gap:8px;padding-top:6px"><span class="s13 mut">Sắp xếp thành câu đúng</span><p style="font-size:19px;font-weight:500">' + esc(it.vi) + '</p></div><div id="oa" class="card" style="min-height:76px;display:flex;flex-wrap:wrap;gap:8px;padding:14px"></div><div id="ob" class="chips" style="justify-content:center"></div>';
  let locked = false;
  const draw = () => { $('#oa').innerHTML = ans.length ? ans.map((a, k) => '<button class="chip on" data-a="ra" data-v="' + k + '">' + esc(a.w) + '</button>').join('') : '<span class="s13 mut" style="align-self:center">Chạm các từ bên dưới theo thứ tự</span>'; $('#ob').innerHTML = bank.map((b, k) => '<button class="chip ' + (ans.includes(b) ? 'used' : '') + '" data-a="ad" data-v="' + k + '">' + esc(b.w) + '</button>').join(''); bind(A); };
  paint(baseEx(h, body, '<button class="btn line" style="flex:none;padding:0 22px" data-a="clr">Xoá</button><button class="btn" data-a="chk">Kiểm tra</button>'), { exit: h.exit,
    ad: (k) => { if (locked) return; sfx('tap'); ans.push(bank[+k]); draw(); }, ra: (k) => { if (locked) return; ans.splice(+k, 1); draw(); }, clr: () => { if (!locked) { ans = []; draw(); } },
    chk: () => { if (ans.length < words.length) { toast('Hãy dùng hết các từ'); return; } locked = true; const ok = norm(ans.map((a) => a.w).join(' ')) === norm(target); h.result(ok, '<b>' + esc(it.en) + '</b>', { say: it.en }); } });
  draw();
};
EX.pron = (it, h) => {
  const which = Math.random() < 0.5 ? 0 : 1; const pair = [it.a, it.b];
  const body = '<div style="display:flex;flex-direction:column;gap:6px;padding-top:6px"><span class="s13 mut">Phát âm · ' + esc(it.label || '') + '</span><h2>Bạn nghe thấy từ nào?</h2></div><button class="ib fill" style="width:96px;height:96px;align-self:center;margin:8px 0" data-a="play" aria-label="Phát âm thanh">' + ic('spk2', 34, 1.5) + '</button><div class="mgrid">' + pair.map((p, k) => '<button style="min-height:140px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:6px" data-a="pk" data-v="' + k + '"><span style="font-size:28px;font-weight:600;letter-spacing:-1px">' + esc(p[0]) + '</span><span class="s14 mut">' + esc(p[1]) + ' · ' + esc(p[2]) + '</span></button>').join('') + '</div><div class="card" style="display:flex;flex-direction:column;gap:8px;padding:16px"><span class="s13" style="font-weight:500">Mẹo phát âm</span><span class="s14" style="color:var(--ink2);line-height:1.55">' + esc(it.tip) + '</span><div style="display:flex;gap:8px">' + pair.map((p, k) => '<button class="chip" style="height:40px;font-size:13px;display:flex;align-items:center;gap:6px" data-a="hear" data-v="' + k + '">' + ic('spk', 14) + esc(p[0]) + '</button>').join('') + '</div></div>';
  let done = false;
  paint(baseEx(h, body), { exit: h.exit, play: () => speak(pair[which][0], { slow: true }), hear: (k) => speak(pair[+k][0], { slow: true }),
    pk: (k, el) => { if (done) return; done = true; const ok = +k === which; $$('.mgrid button').forEach((b, j) => { if (j === which) b.classList.add('done'); }); el.classList.add(ok ? 'on' : 'bad'); h.result(ok, 'Từ được đọc là <b>' + esc(pair[which][0]) + '</b> ' + esc(pair[which][1]) + '.'); } });
  setTimeout(() => speak(pair[which][0], { slow: true }), 300);
};
/* reading */
function readingTextHtml(r, mode, playing) {
  return '<div class="card list" style="padding:4px 16px">' + r.sentences.map((s, k) => '<div class="sent ' + (playing === k ? 'playing' : '') + '"><button class="ib xs ' + (playing === k ? 'fill' : '') + '" data-a="rs" data-v="' + k + '" aria-label="Nghe câu ' + (k + 1) + '">' + ic('spk', 13) + '</button><span style="display:flex;flex-direction:column;gap:2px"><span class="en">' + esc(s[0]) + '</span>' + (mode === 1 ? '<span class="vi">' + esc(s[1]) + '</span>' : '') + '</span></div>').join('') + '</div>';
}
function readAll(r, onLine, stopFlag) {
  return (async () => { for (let k = 0; k < r.sentences.length; k++) { if (stopFlag()) break; onLine(k); await speak(r.sentences[k][0]); await new Promise((z) => setTimeout(z, 200)); } onLine(-1); })();
}
EX.readView = (it, h) => {
  const r = it.reading; let tabv = 1, mode = 1, playing = -1, on = false;
  const render = () => {
    const body = '<div style="display:flex;flex-direction:column;align-items:center;gap:2px"><span style="font-size:14px;font-weight:500">Đọc và nghe</span><span class="s12 mut">' + esc(r.title) + ' · ' + r.sentences.reduce((a, s) => a + s[0].split(' ').length, 0) + ' từ</span></div>' +
      '<div class="seg"><button class="' + (tabv === 0 ? 'on' : '') + '" data-a="tb" data-v="0">' + ic('head', 14) + 'Chỉ nghe</button><button class="' + (tabv === 1 ? 'on' : '') + '" data-a="tb" data-v="1">' + ic('eye', 14) + 'Xem đoạn văn</button></div>' +
      (tabv === 1 ? '<div style="display:flex;gap:6px"><button class="chip ' + (mode === 0 ? 'on' : '') + '" style="height:32px;font-size:12px" data-a="md" data-v="0">Anh</button><button class="chip ' + (mode === 1 ? 'on' : '') + '" style="height:32px;font-size:12px" data-a="md" data-v="1">Anh + Việt</button></div>' + readingTextHtml(r, mode, playing)
        : '<div class="card" style="display:flex;flex-direction:column;align-items:center;gap:14px;padding:36px 20px"><button class="ib fill" style="width:84px;height:84px" data-a="all" aria-label="Phát đoạn văn">' + ic(on ? 'pause' : 'spk2', 30, 1.5) + '</button><span class="s14 mut">' + (on ? 'Đang đọc câu ' + (playing + 1) + ' / ' + r.sentences.length : 'Nghe trọn đoạn văn trước khi làm bài') + '</span></div>');
    paint(h.head + body + '<div class="cta"><div class="player"><button class="pb" data-a="all" aria-label="Phát cả đoạn">' + ic(on ? 'pause' : 'play', 14, 2.2) + '</button><div class="line-prog"><i style="width:' + (playing < 0 ? 0 : Math.round((playing + 1) / r.sentences.length * 100)) + '%"></i></div></div><button class="btn" style="flex:none;padding:0 20px" data-a="nx">Bài tập' + ic('arrow', 16, 1.8) + '</button></div>', {
      exit: h.exit, tb: (v) => { tabv = +v; render(); }, md: (v) => { mode = +v; render(); },
      rs: async (k) => { on = false; playing = +k; render(); await speak(r.sentences[+k][0]); if (!on) { playing = -1; render(); } },
      all: () => { if (on) { on = false; stopSpeak(); playing = -1; render(); return; } on = true; readAll(r, (k) => { playing = k; if (k < 0) on = false; render(); }, () => !on); },
      nx: () => { on = false; stopSpeak(); h.next(); } });
  };
  render();
};
const listenBar = (r) => '<div class="card" style="padding:14px;display:flex;align-items:center;gap:14px"><button class="ib fill" style="width:56px;height:56px" data-a="all" aria-label="Phát đoạn văn">' + ic('spk2', 22, 1.5) + '</button><div style="display:flex;flex-direction:column;flex:1"><span style="font-size:15px;font-weight:500">Nghe lại đoạn văn</span><span class="s12 mut">' + esc(r.title) + '</span></div><button class="pill" style="height:40px;font-size:12px" data-a="peek">' + ic('eye', 14) + 'Xem chữ</button></div>';
function readingActions(r, h, extra) {
  let on = false;
  return Object.assign({ exit: h.exit,
    all: () => { if (on) { on = false; stopSpeak(); return; } on = true; readAll(r, (k) => { if (k < 0) on = false; }, () => !on); },
    peek: () => { r._peek = true; const m = sheet('<h2 style="font-size:19px">' + esc(r.title) + '</h2>' + readingTextHtml(r, 1, -1)); $$('[data-a="rs"]', m).forEach((b) => b.onclick = () => speak(r.sentences[+b.dataset.v][0])); } }, extra);
}
EX.rtf = (it, h) => {
  const r = it.reading; r._peek = false;
  const body = listenBar(r) + '<span class="s12 mut" style="margin-top:-6px">Đoạn văn được ẩn để luyện nghe. Mở “Xem chữ” thì câu này không tính điểm nghe.</span><div style="display:flex;flex-direction:column;gap:10px"><span class="s13 mut">Đúng hay sai?</span><p style="font-size:19px;font-weight:500;line-height:1.45">' + esc(it.stmt) + '</p><div style="display:flex;gap:8px"><button class="btn line" data-a="ans" data-v="1">Đúng</button><button class="btn line" data-a="ans" data-v="0">Sai</button></div></div>';
  let done = false;
  paint(baseEx(h, body), readingActions(r, h, { ans: (v, el) => { if (done) return; done = true; const ok = (v === '1') === it.ans; el.style.background = 'var(--inv)'; el.style.color = 'var(--onInv)'; h.result(ok, (it.ans ? 'Câu này ĐÚNG' : 'Câu này SAI') + (r._peek ? ' · đã xem chữ' : ''), {}); } }));
};
EX.rmc = (it, h) => {
  const r = it.reading; r._peek = false; const opts = it.options;
  const body = listenBar(r) + '<div style="display:flex;flex-direction:column;gap:10px"><span class="s13 mut">Chọn câu trả lời đúng</span><p style="font-size:19px;font-weight:500;line-height:1.45">' + esc(it.q) + '</p><div class="opts">' + opts.map((o, k) => '<button class="opt" data-a="o" data-v="' + k + '">' + esc(o) + '</button>').join('') + '</div></div>';
  paint(baseEx(h, body), readingActions(r, h, { o: (k, el) => { if (el.disabled) return; const ok = +k === it.answer; $$('.opt').forEach((b, j) => { b.disabled = true; if (j === it.answer) b.classList.add('ok'); }); if (!ok) el.classList.add('bad'); h.result(ok, r._peek ? 'Đã xem chữ' : '', {}); } }));
};
EX.qa = (it, h) => {
  const r = it.reading; let busy = false, typed = false;
  const body = '<div class="chat"><div class="msg"><span class="av">EN</span><div class="bub" style="border:1.5px solid var(--ink)"><span class="en" style="font-weight:500;font-size:16px">' + esc(it.q) + '</span><span class="vi">' + esc(it.qVi) + '</span></div><button class="ib sm" data-a="sq" aria-label="Nghe lại câu hỏi">' + ic('spk', 15) + '</button></div><div id="myans"></div></div><div id="qaRes"></div><div id="qaType" class="hidden"><textarea class="inp" id="qain" rows="2" placeholder="Gõ câu trả lời bằng tiếng Anh"></textarea></div>';
  const evalAns = (text) => {
    const t = ' ' + toks(text).join(' ') + ' '; const kws = it.keys.map((k) => ({ k, ok: k.split('|').some((alt) => t.includes(' ' + toks(alt).join(' ') + ' ')) }));
    const okN = kws.filter((x) => x.ok).length; const ok = okN === kws.length;
    $('#myans').innerHTML = '<div class="msg me"><span class="av">B</span><div class="bub"><span class="vi">' + (typed ? 'Bạn gõ' : 'Máy nghe được') + '</span><span class="en">' + esc(text) + '</span></div></div>';
    $('#qaRes').innerHTML = '<div class="card" style="padding:14px 16px;display:flex;flex-direction:column;gap:10px"><div style="display:flex;justify-content:space-between"><b class="s14" style="font-weight:500;color:' + (ok ? 'var(--okInk)' : 'var(--badInk)') + '">' + (ok ? 'Đúng nội dung' : 'Thiếu ý') + '</b><span class="s12 mut">Ý chính: ' + okN + ' / ' + kws.length + '</span></div><div class="chips">' + kws.map((x) => '<span class="tag" style="background:' + (x.ok ? 'var(--okBg)' : 'var(--badBg)') + ';color:' + (x.ok ? 'var(--okInk)' : 'var(--badInk)') + ';border-color:transparent">' + esc(x.k.split('|')[0]) + (x.ok ? ' ✓' : '') + '</span>').join('') + '</div><div style="border-top:1px solid var(--line2);padding-top:10px;display:flex;flex-direction:column;gap:2px"><span class="s12 mut">Câu trả lời mẫu</span><span class="s14">' + esc(it.model) + '</span></div></div>';
    h.result(ok, '', { count: true, say: it.model });
  };
  paint(baseEx(h, body, '<button class="ib" style="width:52px;height:52px" data-a="hint" aria-label="Gợi ý">' + ic('bulb', 20) + '</button><button class="btn arrow" data-a="mic">Bấm để trả lời<i>' + ic('mic', 17) + '</i></button><button class="ib" style="width:52px;height:52px" data-a="kb" aria-label="Gõ câu trả lời">' + ic('kbd', 20) + '</button>'),
    readingActions(r, h, { sq: () => speak(it.q),
      hint: () => toast('Gợi ý: ' + it.keys.map((k) => k.split('|')[0]).join(', ')),
      kb: () => { typed = true; $('#qaType').classList.remove('hidden'); $('#cta').innerHTML = '<button class="btn" data-a="send">Kiểm tra</button>'; bind(Object.assign(A, { send: () => { const v = $('#qain').value.trim(); if (!v) { toast('Hãy gõ câu trả lời'); return; } $('#qaType').classList.add('hidden'); evalAns(v); } })); $('#qain').focus(); },
      mic: async () => {
        if (!canSTT()) { toast('Đang offline: hãy gõ câu trả lời'); A.kb(); return; }
        if (busy) { stopListen(); return; } busy = true; sfx('mic'); const b = $('[data-a="mic"]'); b.firstChild.textContent = 'Đang nghe…';
        try { const res = await listen(); busy = false; if (!res.text) { toast('Chưa nghe thấy giọng, thử lại nhé'); b.firstChild.textContent = 'Bấm để trả lời'; return; } evalAns(res.text); }
        catch (e) { busy = false; toast('Không dùng được micro — hãy gõ câu trả lời'); A.kb(); }
      } }));
  setTimeout(() => speak(it.q), 300);
};

/* --- Step 4: practice --- */
function wordObj(w) { return WORDS[w[0].toLowerCase()]; }
function distract(w, field, n) { const pool = Object.values(WORDS).filter((x) => x.id !== w.id && x[field] !== w[field]); const same = pool.filter((x) => x.lesson === w.lesson); return pick(same.length >= n ? same : pool, n).map((x) => x[field]); }
const mcMeaning = (w) => ({ type: 'mc', skill: 'vocab', word: w.id, label: 'Chọn nghĩa đúng', prompt: '<div style="display:flex;align-items:center;gap:12px"><span style="font-size:36px;font-weight:600;letter-spacing:-1.3px">' + esc(w.en) + '</span><button class="ib" data-a="say" aria-label="Phát âm">' + ic('spk', 18) + '</button></div><span style="font-size:16px;color:var(--mut)">' + esc(w.ipa) + '</span>', speak: w.en, auto: true, options: shuffle([w.vi].concat(distract(w, 'vi', 3))), answer: w.vi, info: '<b>' + esc(w.en) + '</b> ' + esc(w.ipa) + ' — ' + esc(w.vi) + '<br><i>' + esc(w.ex) + '</i>' });
const mcWord = (w) => ({ type: 'mc', skill: 'vocab', word: w.id, label: 'Chọn từ tiếng Anh', prompt: '<span style="font-size:28px;font-weight:600;letter-spacing:-.8px">' + esc(w.vi) + '</span>', options: shuffle([w.en].concat(distract(w, 'en', 3))), answer: w.en, sayAfter: w.en, info: '<b>' + esc(w.en) + '</b> ' + esc(w.ipa) });
const mcListen = (w) => ({ type: 'mc', skill: 'listening', word: w.id, label: 'Nghe và chọn từ đúng', prompt: '<div style="display:flex;gap:10px;align-items:center"><button class="ib fill" style="width:84px;height:84px" data-a="say" aria-label="Nghe">' + ic('spk2', 30, 1.5) + '</button><button class="ib" data-a="slow" aria-label="Nghe chậm" style="font-size:12px;font-weight:600">0.7</button></div>', speak: w.en, auto: true, options: shuffle([w.en].concat(distract(w, 'en', 3))), answer: w.en, info: '<b>' + esc(w.en) + '</b> — ' + esc(w.vi) });
function buildPractice(l) {
  const ws = l.words.map(wordObj); const items = [];
  pick(ws, 3).forEach((w) => items.push(mcMeaning(w)));
  pick(ws, 2).forEach((w) => items.push(mcListen(w)));
  items.push({ type: 'match', skill: 'vocab', pairs: pick(ws, 5).map((w) => [w.en, w.vi]) });
  (l.drills && l.drills.fill || []).forEach((f) => items.push({ type: 'fill', skill: 'grammar', label: f[5] || 'Điền vào chỗ trống', sentence: f[0], answer: f[1], options: f[2], explain: f[3], vi: f[4] }));
  (l.drills && l.drills.error || []).forEach((e) => items.push({ type: 'error', skill: 'grammar', sentence: e[0], wrong: e[1], fix: e[2], options: e[3], explain: e[4] }));
  const ord = l.dialogue.lines.filter((x) => x[1].split(' ').length >= 4 && x[1].split(' ').length <= 9 && !/,/.test(x[1]));
  if (ord.length) { const o = pick(ord, 1)[0]; items.push({ type: 'order', skill: 'grammar', en: o[1], vi: o[2] }); }
  if (l.pron) items.push({ type: 'pron', skill: 'listening', a: l.pron[0], b: l.pron[1], tip: l.pron[2], label: l.pron[3] || '' });
  const base = shuffle(items.filter((x) => x.type !== 'fill' && x.type !== 'error')).concat(items.filter((x) => x.type === 'fill' || x.type === 'error'));
  const out = []; let fi = 0; const gram = base.filter((x) => x.skill === 'grammar' && (x.type === 'fill' || x.type === 'error')); const rest = base.filter((x) => !gram.includes(x));
  rest.forEach((x, k) => { out.push(x); if (k % 2 === 1 && fi < gram.length) out.push(gram[fi++]); }); while (fi < gram.length) out.push(gram[fi++]);
  if (l.reading) { const r = l.reading; out.push({ type: 'readView', reading: r }); r.tf.forEach((t) => out.push({ type: 'rtf', skill: 'listening', reading: r, stmt: t[0], ans: t[1] })); (r.mc || []).forEach((m) => out.push({ type: 'rmc', skill: 'reading', reading: r, q: m[0], options: m[1], answer: m[2] })); (r.qa || []).forEach((q) => out.push({ type: 'qa', skill: 'speaking', reading: r, q: q[0], qVi: q[1], keys: q[2], model: q[3] })); }
  return out;
}
const skillsOf = (res) => { const o = {}; res.forEach((r) => { o[r.skill] = o[r.skill] || [0, 0]; o[r.skill][1]++; if (r.ok) o[r.skill][0]++; }); const s = {}; Object.keys(o).forEach((k) => s[k] = Math.round(o[k][0] / o[k][1] * 100)); return s; };
function stepPractice(l) {
  runner({ title: 'Luyện tập', items: buildPractice(l), onExit: exitLesson(l), onDone: (res) => { const p = LP(l.id); Object.assign(p.skills, skillsOf(res)); completeStep(l, 3); sfx('done'); runStep(l, 4); } });
}

/* --- Step 5: writing --- */
function stepWriting(l) {
  const list = l.writing || []; let i = 0; const scores = [];
  const show = () => {
    if (i >= list.length) { const p = LP(l.id); p.skills.writing = scores.length ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 100; completeStep(l, 4); sfx('done'); return runStep(l, 5); }
    const w = list[i]; let checked = false;
    const html = stepHeader(l, 4, 'Viết · ' + (i + 1) + ' / ' + list.length) +
      '<div style="display:flex;flex-direction:column;gap:8px"><span class="s13 mut">Dịch sang tiếng Anh</span><p style="font-size:22px;font-weight:500;letter-spacing:-.4px;line-height:1.4">' + esc(w[0]) + '</p>' + (w[2] && w[2].length ? '<div class="chips">' + w[2].map((x) => '<span class="tag">' + esc(x) + '</span>').join('') + '</div>' : '') + '</div>' +
      '<label style="display:flex;flex-direction:column;gap:8px"><span class="s13 mut">Bạn viết</span><textarea class="inp" id="win" rows="3" placeholder="Viết câu tiếng Anh…" autocapitalize="sentences" spellcheck="false"></textarea></label><div id="wres"></div>' +
      '<span class="s12 mut">Chấm offline: app so câu của bạn với các đáp án mẫu được chấp nhận.</span><div class="cta" id="cta"><button class="btn line" style="flex:none;padding:0 20px" data-a="show">Xem đáp án</button><button class="btn" data-a="chk">Kiểm tra</button></div>';
    paint(html, { exit: exitLesson(l),
      show: () => { if (checked) return; checked = true; scores.push(0); $('#wres').innerHTML = '<div class="card" style="display:flex;flex-direction:column;gap:6px;padding:16px"><span class="s12 mut">Đáp án mẫu</span><span style="font-size:16px">' + esc(w[1][0]) + '</span>' + (w[3] ? '<span class="s13" style="color:var(--ink2)">' + esc(w[3]) + '</span>' : '') + '</div>'; nextBtn(); speak(w[1][0]); },
      chk: () => {
        if (checked) return; const v = $('#win').value.trim(); if (!v) { toast('Hãy viết câu trả lời'); return; } checked = true;
        const r = judgeWriting(v, w[1]); scores.push(r.score); const ok = r.score >= 90; sfx(ok ? 'ok' : 'bad'); if (ok) addXP(10); S.qT++; if (ok) S.qR++; save();
        $('#win').classList.add(ok ? 'ok' : 'bad'); $('#win').disabled = true;
        $('#wres').innerHTML = '<div class="card" style="display:flex;flex-direction:column;gap:12px;padding:18px"><div style="display:flex;justify-content:space-between;align-items:baseline"><span class="s13 mut">So với đáp án mẫu</span><span style="font-size:20px;font-weight:600">' + r.score + '%</span></div>' + (r.exact ? '<p style="font-size:17px;color:var(--okInk)">' + esc(v) + '</p>' : '<div style="display:flex;flex-direction:column;gap:6px"><span class="s12 mut">Bạn viết</span><p style="font-size:16px;line-height:1.7">' + r.userHtml + '</p><span class="s12 mut">Câu đúng</span><p style="font-size:16px;line-height:1.7">' + r.accHtml + '</p></div>') + (w[3] ? '<div style="border-top:1px solid var(--line2);padding-top:12px;display:flex;flex-direction:column;gap:4px"><span class="s13" style="font-weight:500">Ghi chú</span><span class="s14" style="color:var(--ink2);line-height:1.5">' + esc(w[3]) + '</span></div>' : '') + '</div>';
        nextBtn(); speak(w[1][0]);
      } });
    function nextBtn() { $('#cta').innerHTML = ctaBtn('nx', i + 1 < list.length ? 'Câu tiếp theo' : 'Sang kiểm tra'); bind(Object.assign(A, { nx: () => { i++; show(); } })); }
  };
  show();
}

/* --- Step 6: test + result --- */
function buildTest(l) {
  const ws = l.words.map(wordObj); const items = [];
  const a = shuffle(ws);
  a.slice(0, 2).forEach((w) => items.push(mcMeaning(w))); a.slice(2, 4).forEach((w) => items.push(mcWord(w))); a.slice(4, 6).forEach((w) => items.push(mcListen(w)));
  const f = (l.drills && l.drills.fill) || []; pick(f, 2).forEach((x) => items.push({ type: 'fill', skill: 'grammar', label: x[5] || 'Điền vào chỗ trống', sentence: x[0], answer: x[1], options: x[2], explain: x[3], vi: x[4] }));
  const e = (l.drills && l.drills.error) || []; if (e.length) { const x = pick(e, 1)[0]; items.push({ type: 'error', skill: 'grammar', sentence: x[0], wrong: x[1], fix: x[2], options: x[3], explain: x[4] }); }
  if (l.reading && l.reading.tf.length) { const t = pick(l.reading.tf, 1)[0]; items.push({ type: 'rtf', skill: 'listening', reading: l.reading, stmt: t[0], ans: t[1] }); }
  return shuffle(items);
}
function stepTest(l) {
  runner({ title: 'Kiểm tra', items: buildTest(l), onExit: exitLesson(l), onDone: (res) => {
    const score = Math.round(res.filter((r) => r.ok).length / Math.max(1, res.length) * 100); const p = LP(l.id); const pass = score >= 80;
    p.best = Math.max(p.best || 0, score); Object.keys(skillsOf(res)).forEach((k) => { p.skills[k] = p.skills[k] != null ? Math.round((p.skills[k] + skillsOf(res)[k]) / 2) : skillsOf(res)[k]; });
    const wrong = res.filter((r) => !r.ok && r.word).map((r) => r.word);
    if (pass) { const first = !p.passed; p.passed = true; p.step = 6; addXP(first ? 50 : 10); } save(); sfx(pass ? 'done' : 'bad');
    resultScreen(l, score, pass, wrong);
  } });
}
const SK = [['vocab', 'Từ vựng'], ['grammar', 'Ngữ pháp'], ['listening', 'Nghe'], ['reading', 'Đọc'], ['speaking', 'Nói'], ['writing', 'Viết']];
function resultScreen(l, score, pass, wrong) {
  const p = LP(l.id); const nxt = LESSONS[l.idx + 1];
  const html = top(ib('exit', 'close', 'Đóng'), '<span class="tag">' + (pass ? 'Hoàn thành bài ' + lnum(l) : 'Chưa đạt bài ' + lnum(l)) + '</span>') +
    '<div style="display:flex;flex-direction:column;align-items:center;gap:4px;padding:10px 0 4px"><span class="big-score">' + score + '<small>%</small></span><span class="s14" style="color:var(--ink2)">' + (pass ? (nxt ? 'Đạt yêu cầu · đã mở bài ' + lnum(nxt) : 'Đạt yêu cầu · bạn đã học hết các bài hiện có') : 'Cần đạt 80% để mở bài tiếp') + '</span><span class="s13 mut">Tổng ' + S.xp + ' XP</span></div>' +
    '<div class="card" style="display:flex;flex-direction:column;gap:14px"><span class="s13 mut">Theo kỹ năng</span>' + SK.filter(([k]) => p.skills[k] != null).map(([k, n]) => '<div class="skill"><span>' + n + '</span><div class="line-prog"><i style="width:' + p.skills[k] + '%"></i></div><b>' + p.skills[k] + '%</b></div>').join('') + '</div>' +
    (wrong.length ? '<div class="card list"><span class="s13 mut" style="display:block;padding:12px 0 4px">Cần ôn lại · đã thêm vào ôn tập</span>' + wrong.map((id) => '<div class="row"><b style="font-size:15px;font-weight:500;flex:1">' + esc(WORDS[id].en) + '</b><span class="s13 mut">' + esc(WORDS[id].vi) + '</span></div>').join('') + '</div>' : '') +
    '<div class="cta"><button class="btn line" data-a="again">' + (pass ? 'Làm lại' : 'Kiểm tra lại') + '</button>' + (pass && nxt ? '<button class="btn" style="flex:1.6" data-a="nextL">Sang bài ' + lnum(nxt) + '</button>' : '<button class="btn" style="flex:1.6" data-a="home">Về trang chủ</button>') + '</div>';
  paint(html, { exit: () => tab('home'), again: () => stepTest(l), nextL: () => { tab('home'); go('lesson', { id: nxt.id }); }, home: () => tab('home') });
}

/* --- Review (SRS) --- */
SCREENS.review = () => {
  const due = dueCards(); const total = Object.keys(S.cards).length;
  if (!due.length) {
    const html = '<div style="display:flex;flex-direction:column;gap:6px"><span class="s13 mut">' + total + ' từ trong bộ ôn tập</span><h1>Ôn tập</h1></div><div class="card center" style="display:flex;flex-direction:column;align-items:center;gap:14px;padding:36px 20px"><div class="grid-dots" style="grid-template-columns:repeat(7,10px);gap:6px">' + Array.from({ length: 21 }, (_, i) => '<i class="' + ([3, 9, 10, 11, 15, 16, 17, 18, 19].includes(i) ? 'on' : '') + '"></i>').join('') + '</div><h2>' + (total ? 'Đã ôn hết thẻ hôm nay' : 'Chưa có thẻ nào') + '</h2><p class="s14 mut">' + (total ? 'Từ đã học sẽ quay lại đúng lúc bạn sắp quên.' : 'Học bài đầu tiên để thêm từ vào bộ ôn tập.') + '</p>' + (total ? '<button class="btn line" style="width:100%" data-a="extra">Ôn thêm 10 từ</button>' : '<button class="btn" style="width:100%" data-a="start">Bắt đầu học</button>') + '</div>';
    paint(html, { extra: () => runReview(pick(Object.keys(S.cards), 10)), start: () => go('lesson', { id: currentLesson().id }) }, 'review');
    return;
  }
  runReview(due.slice(0, 30));
};
function runReview(ids) {
  flashFlow(ids.map((k) => WORDS[k]).filter(Boolean), { header: (d, t) => top(ib('ex', 'back', 'Quay lại'), '<b>Ôn tập · ' + Math.min(d + 1, t) + ' / ' + t + '</b>'), actions: { ex: () => tab('review') }, onDone: () => { sfx('done'); toast('Đã ôn xong'); tab('review'); } });
}

/* --- Practice tab --- */
SCREENS.practice = () => {
  const done = LESSONS.filter((l) => S.lessons[l.id] && S.lessons[l.id].step >= 3);
  let html = '<div style="display:flex;flex-direction:column;gap:6px"><span class="s13 mut">Luyện lại những gì đã học</span><h1>Luyện tập</h1></div>' +
    '<div class="card list"><button class="row" data-a="quiz"><span class="ric">' + ic('circ') + '</span><span class="t"><b>Quiz nhanh</b><span>10 câu trộn từ các bài đã học</span></span>' + ic('chev', 16) + '</button>' +
    '<button class="row" data-a="nb"><span class="ric">' + ic('book') + '</span><span class="t"><b>Sổ tay</b><span>Từ vựng và ngữ pháp đã học</span></span>' + ic('chev', 16) + '</button>' +
    '<button class="row" data-a="games"><span class="ric">' + ic('spk2') + '</span><span class="t"><b>Trò chơi từ vựng</b><span>Mưa từ · Từ bí ẩn · Nghe – gõ · Unit ' + currentLesson().unit + '</span></span>' + ic('chev', 16) + '</button>' +
    '<button class="row" data-a="place"><span class="ric">' + ic('chart') + '</span><span class="t"><b>Kiểm tra trình độ</b><span>20 câu · gợi ý unit phù hợp</span></span>' + ic('chev', 16) + '</button></div>';
  if (done.length) {
    html += '<span class="s13 mut">Nói lại hội thoại</span><div class="card list">' + done.map((l) => '<button class="row" data-a="dlg" data-v="' + l.id + '"><span class="ric">' + ic('mic') + '</span><span class="t"><b>' + esc(l.title) + '</b><span>Bài ' + lnum(l) + ' · ' + l.dialogue.lines.length + ' câu</span></span>' + ic('chev', 16) + '</button>').join('') + '</div>';
    const rd = done.filter((l) => l.reading);
    if (rd.length) html += '<span class="s13 mut">Đọc và nghe</span><div class="card list">' + rd.map((l) => '<button class="row" data-a="rd" data-v="' + l.id + '"><span class="ric">' + ic('book') + '</span><span class="t"><b>' + esc(l.reading.title) + '</b><span>Bài ' + lnum(l) + '</span></span>' + ic('chev', 16) + '</button>').join('') + '</div>';
  } else html += '<p class="s14 mut">Học xong phần hội thoại của bài đầu tiên để mở các bài luyện nói và nghe.</p>';
  paint(html, { quiz: () => startQuiz(), nb: () => go('notebook'), place: () => startPlacement(), games: () => { const c = currentLesson(); go('games', { st: c.stage, u: c.unit }); },
    dlg: (id) => { const l = LBY[id]; stack.push({ name: 'practice', params: {} }); dialogueListen(l, { header: () => top(ib('back', 'back', 'Quay lại'), '<b>' + esc(l.title) + '</b>'), nextLabel: 'Nói lại', onNext: () => dialogueSpeak(l, { header: () => top(ib('back', 'back', 'Quay lại'), '<b>Nói lại hội thoại</b>'), finishLabel: 'Xong', onDone: () => { sfx('done'); tab('practice'); } }) }); },
    rd: (id) => { const l = LBY[id]; const r = l.reading; const items = [{ type: 'readView', reading: r }].concat(r.tf.map((t) => ({ type: 'rtf', skill: 'listening', reading: r, stmt: t[0], ans: t[1] })), (r.mc || []).map((m) => ({ type: 'rmc', skill: 'reading', reading: r, q: m[0], options: m[1], answer: m[2] })), (r.qa || []).map((q) => ({ type: 'qa', skill: 'speaking', reading: r, q: q[0], qVi: q[1], keys: q[2], model: q[3] })));
      runner({ title: 'Đọc và nghe', items, onExit: () => tab('practice'), onDone: () => { sfx('done'); tab('practice'); } }); } }, 'practice');
};
function startQuiz() {
  const ws = learnedWords(); if (ws.length < 4) { toast('Học thêm từ mới để làm quiz'); return; }
  const items = pick(ws, 10).map((w, k) => [mcMeaning, mcWord, mcListen][k % 3](w));
  runner({ title: 'Quiz', items, onExit: () => tab(curTab), onDone: (res) => { const sc = res.filter((r) => r.ok).length; sfx('done'); toast('Quiz: đúng ' + sc + ' / ' + res.length); tab(curTab); } });
}

/* --- Placement test (G5) --- */
function startPlacement() {
  const units = Array.from(new Set(LESSONS.filter((l) => l.stage === 1).map((l) => l.unit))).sort((a, b) => a - b);
  const items = [];
  units.forEach((u) => {
    const pool = []; LESSONS.filter((l) => l.stage === 1 && l.unit === u).forEach((l) => ((l.drills && l.drills.fill) || []).forEach((f) => pool.push(f)));
    if (!pool.length) return;
    const f = pick(pool, 1)[0]; const ans = f[1].split('|')[0]; const opts = f[2].slice(); if (!opts.includes(ans)) opts.push(ans);
    items.push({ type: 'mc', skill: 'grammar', unit: u, label: 'Chọn đáp án đúng', prompt: '<p style="font-size:22px;font-weight:500;letter-spacing:-.4px;line-height:1.5">' + esc(f[0]).replace('___', '<span style="display:inline-block;min-width:64px;border-bottom:2px solid var(--ink)">&nbsp;</span>') + '</p>', options: shuffle(opts), answer: ans, info: esc(f[0].replace('___', ans)) });
  });
  runner({ title: 'Kiểm tra đầu vào', items, onExit: () => tab(curTab), onDone: (res) => placementResult(items, res) });
}
function placementResult(items, res) {
  let miss = 0, start = items.length ? items[items.length - 1].unit : 1;
  for (let k = 0; k < items.length; k++) { if (!res[k] || !res[k].ok) { miss++; if (miss === 2) { start = Math.max(1, items[k].unit - 1); break; } } }
  const right = res.filter((r) => r.ok).length;
  const first = LESSONS.find((l) => l.stage === 1 && l.unit === start) || LESSONS[0];
  S.placed = { start, score: right, total: items.length, date: dkey() }; save(); sfx('done');
  const lvl = start <= 3 ? 'Mới bắt đầu · A1' : start <= 8 ? 'Sơ cấp · A1+' : start <= 14 ? 'Sơ trung cấp · A2' : 'Khá · A2+';
  const html = top(ib('home', 'close', 'Về trang chủ'), '<b>Kết quả kiểm tra</b>') +
    '<div style="display:flex;flex-direction:column;gap:6px"><span class="s13 mut">Đúng ' + right + ' / ' + items.length + ' câu</span><h1>' + lvl + '</h1></div>' +
    '<div class="card" style="display:flex;flex-direction:column;gap:14px">' + dotsRow(res.map((r) => (r.ok ? 'ok' : 'bad'))) +
    '<span class="s14">' + (start > 1 ? 'Gợi ý: bắt đầu từ <b>Unit ' + start + ' · ' + esc(first.unitTitle || '') + '</b>. Các bài trước đó sẽ được mở sẵn, bạn vẫn có thể học lại bất cứ lúc nào.' : 'Gợi ý: học từ <b>Unit 1</b> để có nền tảng vững chắc.') + '</span></div>' +
    '<div class="cta">' + (start > 1 ? '<button class="btn line" style="flex:0 0 auto" data-a="zero">Từ đầu</button>' + ctaBtn('jump', 'Học từ Unit ' + start) : ctaBtn('zero', 'Bắt đầu Unit 1')) + '</div>';
  paint(html, {
    home: () => tab('home'),
    jump: () => { LESSONS.forEach((l) => { if (l.stage === 1 && l.unit < start) { const p = LP(l.id); if (!p.passed) { p.passed = true; p.step = 6; p.skipped = true; } } }); save(); toast('Đã mở đến Unit ' + start); tab('home'); go('lesson', { id: first.id }); },
    zero: () => { tab('home'); go('lesson', { id: LESSONS[0].id }); }
  });
}

/* --- Games (G8): 3 trò chơi theo từng unit --- */
const GAMES = [
  ['rain', 'Mưa từ', 'Chạm đúng nghĩa trước khi từ rơi chạm đáy', 'spk2'],
  ['myst', 'Từ bí ẩn', 'Đoán từ theo nghĩa, 6 lượt mỗi từ', 'bulb'],
  ['dict', 'Nghe – gõ', 'Nghe giọng đọc rồi gõ lại từ', 'kbd']
];
const unitKey = (st, u) => 's' + st + 'u' + u;
const unitLessons = (st, u) => LESSONS.filter((l) => l.stage === st && l.unit === u);
const unitWords = (st, u) => { const seen = {}; const out = []; unitLessons(st, u).forEach((l) => l.words.forEach((w) => { const o = WORDS[w[0].toLowerCase()]; if (o && !seen[o.id]) { seen[o.id] = 1; out.push(o); } })); return out; };
const weakFirst = (ws) => shuffle(ws).sort((a, b) => { const ca = S.cards[a.id], cb = S.cards[b.id]; return (ca ? ca.b : -1) - (cb ? cb.b : -1); });
const GB = (k) => { S.games = S.games || {}; return S.games[k] || (S.games[k] = {}); };
const normAns = (s) => String(s || '').toLowerCase().replace(/[’‘]/g, "'").replace(/[-‐–]/g, ' ').replace(/[^a-z0-9' ]/g, '').replace(/\s+/g, ' ').trim();
function missToReview(ids) { ids.forEach((id) => { if (WORDS[id]) grade(id, 0); }); }

SCREENS.games = ({ st, u }) => {
  const ls = unitLessons(st, u); const l0 = ls[0];
  if (!l0) { back(); return; }
  const k = unitKey(st, u), best = GB(k), n = unitWords(st, u).length;
  const html = top(ib('back', 'back', 'Quay lại'), '<b>Trò chơi</b><small>Chặng ' + STAGES[st - 1].roman + ' · Unit ' + u + '</small>') +
    '<div style="display:flex;flex-direction:column;gap:6px"><span class="s13 mut">' + n + ' từ của unit</span><h1 style="font-size:26px">' + esc(l0.unitTitle || ('Unit ' + u)) + '</h1></div>' +
    '<div class="card list">' + GAMES.map(([g, name, sub, icn]) => '<button class="row" data-a="play" data-v="' + g + '"><span class="ric">' + ic(icn) + '</span><span class="t"><b>' + name + '</b><span>' + sub + '</span></span><span class="s13 mut" style="white-space:nowrap">' + (best[g] ? 'Kỷ lục ' + best[g] : '') + '</span>' + ic('chev', 16) + '</button>').join('') + '</div>' +
    '<p class="s13 mut">Từ bạn chơi sai sẽ được thêm vào Ôn tập để học lại.</p>';
  paint(html, { back: () => back(), play: (g) => startGame(g, st, u) });
};
function startGame(g, st, u) {
  const ws = unitWords(st, u);
  if (ws.length < 4) { toast('Unit này chưa đủ từ để chơi'); return; }
  ({ rain: gameRain, myst: gameMyst, dict: gameDict })[g](st, u, ws);
}
function gameResult(g, st, u, score, rows, extra) {
  const k = unitKey(st, u), best = GB(k); const isBest = score > (best[g] || 0); if (isBest) best[g] = score;
  const miss = rows.filter((r) => !r.ok).map((r) => r.w.id); missToReview(miss);
  addXP(Math.min(20, rows.filter((r) => r.ok).length)); save(); sfx('done');
  const name = GAMES.find((x) => x[0] === g)[1];
  const html = top(ib('home', 'close', 'Thoát'), '<b>' + name + '</b>') +
    '<div style="display:flex;flex-direction:column;gap:6px"><span class="s13 mut">' + (isBest ? 'Kỷ lục mới' : 'Kỷ lục: ' + best[g]) + (extra ? ' · ' + extra : '') + '</span><h1>' + score + ' điểm</h1></div>' +
    '<div class="card">' + dotsRow(rows.map((r) => (r.ok ? 'ok' : 'bad'))) + '</div>' +
    (rows.length ? '<div class="card list">' + rows.map((r) => '<button class="row" data-a="say" data-v="' + esc(r.w.id) + '"><span style="width:10px;height:10px;border-radius:50%;flex-shrink:0;background:var(--' + (r.ok ? 'ok' : 'bad') + ')"></span><b style="font-size:15px;font-weight:500;flex:1">' + esc(r.w.en) + '</b><span class="s13 mut" style="text-align:right">' + esc(r.w.vi) + '</span></button>').join('') + '</div>' : '') +
    (miss.length ? '<p class="s13 mut">' + miss.length + ' từ chơi sai đã được thêm vào Ôn tập.</p>' : '') +
    '<div style="height:80px"></div><div class="cta"><button class="btn line" data-a="hub">Trò khác</button><button class="btn" style="flex:1.6" data-a="again">Chơi lại</button></div>';
  paint(html, { home: () => go('games', { st, u }, true), hub: () => go('games', { st, u }, true), again: () => startGame(g, st, u), say: (id) => { const w = WORDS[id]; if (w) speak(w.en); } });
}

/* Game 1 · Mưa từ */
function gameRain(st, u, ws) {
  const pool = weakFirst(ws); let qi = 0, score = 0, lives = 3, level = 1, streak = 0, raf = 0, alive = true, cur = null, t0 = 0, y = 0;
  const rows = [];
  const H = () => { const f = $('#rf'); return f ? f.clientHeight - 56 : 300; };
  const speedFor = () => 26 + level * 9; // px/s
  function nextWord() {
    if (!alive) return;
    if (qi >= pool.length) qi = 0;
    const w = pool[qi++]; const viSet = {}; viSet[w.vi] = 1;
    const others = shuffle(ws.filter((x) => x.id !== w.id && !viSet[x.vi] && (viSet[x.vi] = 1))).slice(0, 3);
    cur = { w, opts: shuffle([w].concat(others)), done: false }; y = 0; t0 = 0; draw();
  }
  function draw() {
    const html = top(ib('ex', 'close', 'Thoát'), '<b>Mưa từ</b><small>Cấp ' + level + '</small>', '<span class="pill" style="height:40px">' + score + '</span>') +
      '<div style="display:flex;justify-content:space-between;align-items:center"><div class="dots">' + [0, 1, 2].map((i) => '<i class="' + (i < lives ? 'on' : '') + '"></i>').join('') + '</div><span class="s13 mut">' + (streak >= 3 ? 'Chuỗi ' + streak + ' · x2' : 'Chuỗi ' + streak) + '</span></div>' +
      '<div id="rf" style="position:relative;height:38vh;min-height:220px;border:1px solid var(--line);border-radius:22px;background:var(--card);overflow:hidden">' +
      '<div style="position:absolute;left:0;right:0;bottom:0;height:3px;background:var(--line)"></div>' +
      '<div id="rw" style="position:absolute;left:50%;top:0;transform:translate(-50%,0);padding:10px 18px;border-radius:999px;background:var(--inv);color:var(--onInv);font-size:18px;font-weight:600;letter-spacing:-.3px;white-space:nowrap;will-change:transform">' + esc(cur.w.en) + '</div></div>' +
      '<div class="opts">' + cur.opts.map((o, i) => '<button class="opt" data-a="ans" data-v="' + i + '">' + esc(o.vi) + '</button>').join('') + '</div>';
    paint(html, { ex: () => { alive = false; cancelAnimationFrame(raf); go('games', { st, u }, true); }, ans: (v) => answer(+v) });
    cancelAnimationFrame(raf); raf = requestAnimationFrame(tick);
  }
  function tick(ts) {
    if (!alive || !cur || cur.done) return;
    const el = $('#rw'); if (!el) return;
    if (!t0) t0 = ts; const dt = Math.min(0.05, (ts - t0) / 1000); t0 = ts;
    y += speedFor() * dt; el.style.transform = 'translate(-50%,' + y + 'px)';
    if (y >= H()) { fail(null); return; }
    raf = requestAnimationFrame(tick);
  }
  function answer(i) {
    if (!cur || cur.done) return; const o = cur.opts[i]; const btns = $$('.opt');
    if (o.id === cur.w.id) {
      cur.done = true; cancelAnimationFrame(raf); streak++; score += streak >= 3 ? 2 : 1; rows.push({ w: cur.w, ok: true }); sfx('match');
      btns[i].classList.add('ok'); const el = $('#rw'); if (el) { el.style.transition = 'opacity .25s, transform .25s'; el.style.opacity = '0'; }
      if (rows.filter((r) => r.ok).length % 5 === 0) level++;
      setTimeout(nextWord, 380);
    } else fail(i);
  }
  function fail(i) {
    if (!cur || cur.done) return; cur.done = true; cancelAnimationFrame(raf); streak = 0; lives--; rows.push({ w: cur.w, ok: false }); sfx('bad');
    const btns = $$('.opt'); if (i != null && btns[i]) btns[i].classList.add('bad');
    const ci = cur.opts.findIndex((o) => o.id === cur.w.id); if (btns[ci]) btns[ci].classList.add('ok');
    speak(cur.w.en);
    setTimeout(() => { if (!alive) return; if (lives <= 0) { alive = false; gameResult('rain', st, u, score, rows, 'cấp ' + level); } else nextWord(); }, 1100);
  }
  nextWord();
}

/* Game 2 · Từ bí ẩn */
function gameMyst(st, u, ws) {
  let cand = ws.filter((w) => /^[a-z]{3,9}$/i.test(w.en));
  if (cand.length < 3) { toast('Unit này ít từ đơn, thử trò khác nhé'); return; }
  const list = weakFirst(cand).slice(0, 5); let wi = 0, score = 0; const rows = [];
  let guesses = [], cur = '', hint = false, over = false;
  const KB = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'];
  function evalGuess(g, ans) {
    const res = Array(ans.length).fill('x'); const rem = {};
    for (let i = 0; i < ans.length; i++) { if (g[i] === ans[i]) res[i] = 'g'; else rem[ans[i]] = (rem[ans[i]] || 0) + 1; }
    for (let i = 0; i < ans.length; i++) { if (res[i] !== 'g' && rem[g[i]]) { res[i] = 'y'; rem[g[i]]--; } }
    return res;
  }
  function cellStyle(s) { return s === 'g' ? 'background:var(--ok);color:#fff;border-color:var(--ok)' : s === 'y' ? 'background:var(--accBg);color:var(--acc);border-color:var(--acc)' : s === 'x' ? 'background:var(--seg);color:var(--mut);border-color:var(--seg)' : 'background:var(--card)'; }
  function draw() {
    const w = list[wi], ans = w.en.toLowerCase(), n = ans.length;
    const rank = { g: 3, y: 2, x: 1 }; const keyState = {}; guesses.forEach((g) => { const r = evalGuess(g, ans); g.split('').forEach((ch, i) => { if (!keyState[ch] || rank[r[i]] > rank[keyState[ch]]) keyState[ch] = r[i]; }); });
    const cell = Math.min(40, Math.floor((330 - (n - 1) * 6) / n));
    let grid = '';
    for (let r = 0; r < 6; r++) {
      const g = guesses[r]; const res = g ? evalGuess(g, ans) : null; const txt = g || (r === guesses.length ? cur : '');
      grid += '<div style="display:flex;gap:6px;justify-content:center">' + Array.from({ length: n }, (_, i) => '<span style="width:' + cell + 'px;height:' + cell + 'px;border:1.5px solid var(--line);border-radius:10px;display:flex;align-items:center;justify-content:center;font-weight:600;font-size:' + Math.round(cell * 0.48) + 'px;text-transform:uppercase;' + (res ? cellStyle(res[i]) : (txt[i] ? 'border-color:var(--ink);background:var(--card)' : 'background:var(--card)')) + '">' + esc(txt[i] || '') + '</span>').join('') + '</div>';
    }
    const kb = over ? '' : KB.map((row, ri) => '<div style="display:flex;gap:5px;justify-content:center">' + (ri === 2 ? '<button data-a="ent" style="height:46px;padding:0 10px;border-radius:10px;background:var(--inv);color:var(--onInv);font-size:12px;font-weight:600">Đoán</button>' : '') + row.split('').map((ch) => '<button data-a="k" data-v="' + ch + '" style="width:30px;height:46px;border-radius:8px;border:1px solid var(--line);font-size:15px;font-weight:500;text-transform:uppercase;' + cellStyle(keyState[ch]) + '">' + ch + '</button>').join('') + (ri === 2 ? '<button data-a="del" aria-label="Xoá" style="height:46px;padding:0 10px;border-radius:10px;border:1px solid var(--line);background:var(--card)">' + ic('back', 16) + '</button>' : '') + '</div>').join('');
    const won = guesses.length && guesses[guesses.length - 1] === ans;
    const info = over ? '<div class="card" style="display:flex;flex-direction:column;gap:6px"><span class="s13" style="color:var(--' + (won ? 'ok' : 'bad') + ')">' + (won ? 'Chính xác!' : 'Đáp án là') + '</span><b style="font-size:20px;font-weight:600">' + esc(w.en) + ' <span class="s13 mut" style="font-weight:400">' + esc(w.ipa) + '</span></b><span class="s14">' + esc(w.ex) + '</span><span class="s13 mut">' + esc(w.exVi) + '</span></div>' : '';
    const html = top(ib('ex', 'close', 'Thoát'), '<b>Từ bí ẩn</b><small>Từ ' + (wi + 1) + ' / ' + list.length + '</small>', '<span class="pill" style="height:40px">' + score + '</span>') +
      '<div class="card" style="display:flex;flex-direction:column;gap:4px;padding:16px 20px"><span class="s12 mut">' + esc(w.pos) + ' · ' + n + ' chữ cái</span><b style="font-size:17px;font-weight:600">' + esc(w.vi) + '</b>' + (hint ? '<span class="s13 mut">Gợi ý: ' + esc(w.ipa) + ' · bắt đầu bằng "' + esc(ans[0].toUpperCase()) + '"</span>' : '') + '</div>' +
      '<div style="display:flex;flex-direction:column;gap:6px">' + grid + '</div>' + info +
      (over ? '<div style="height:80px"></div><div class="cta">' + '<button class="btn line" style="flex:0 0 auto" data-a="say">' + ic('spk', 17) + '</button>' + '<button class="btn" data-a="nx">' + (wi + 1 < list.length ? 'Từ tiếp theo' : 'Xem kết quả') + '</button></div>' :
        '<div style="display:flex;flex-direction:column;gap:6px">' + kb + '</div>' + (!hint ? '<button class="btn line" style="height:44px;font-size:13px;flex:none" data-a="hint">' + ic('bulb', 15) + 'Gợi ý (−1 điểm)</button>' : ''));
    paint(html, {
      ex: () => go('games', { st, u }, true),
      k: (ch) => { if (cur.length < n) { cur += ch; sfx('tap'); draw(); } },
      del: () => { cur = cur.slice(0, -1); draw(); },
      ent: () => {
        if (cur.length < n) { toast('Cần đủ ' + n + ' chữ cái'); return; }
        guesses.push(cur); const okNow = cur === ans; cur = '';
        if (okNow) { over = true; const pts = Math.max(1, 7 - guesses.length - (hint ? 1 : 0)); score += pts; rows.push({ w, ok: true }); sfx('ok'); speak(w.en); }
        else if (guesses.length >= 6) { over = true; rows.push({ w, ok: false }); sfx('bad'); speak(w.en); }
        else sfx('tap');
        draw();
      },
      hint: () => { hint = true; draw(); },
      say: () => speak(w.en),
      nx: () => { wi++; if (wi >= list.length) { gameResult('myst', st, u, score, rows); return; } guesses = []; cur = ''; hint = false; over = false; draw(); }
    });
  }
  draw();
}

/* Game 3 · Nghe – gõ */
function gameDict(st, u, ws) {
  const list = weakFirst(ws).slice(0, 10); let i = 0, score = 0, streak = 0, tries = 0, state = 'ask'; const rows = [];
  function draw() {
    const w = list[i];
    const fb = state === 'ask' ? (tries ? '<div class="card" style="padding:14px 18px;display:flex;flex-direction:column;gap:2px"><span class="s13" style="color:var(--bad)">Chưa đúng, thử lại một lần</span><span class="s13 mut">Gợi ý: ' + esc(w.vi) + ' · ' + w.en.length + ' ký tự · bắt đầu bằng "' + esc(w.en[0].toUpperCase()) + '"</span></div>' : '') :
      '<div class="card" style="display:flex;flex-direction:column;gap:6px"><span class="s13" style="color:var(--' + (state === 'ok' ? 'ok' : 'bad') + ')">' + (state === 'ok' ? 'Chính xác!' : 'Đáp án đúng') + '</span><b style="font-size:20px;font-weight:600">' + esc(w.en) + ' <span class="s13 mut" style="font-weight:400">' + esc(w.ipa) + '</span></b><span class="s14">' + esc(w.vi) + '</span></div>';
    const html = top(ib('ex', 'close', 'Thoát'), '<b>Nghe – gõ</b><small>' + (i + 1) + ' / ' + list.length + '</small>', '<span class="pill" style="height:40px">' + score + '</span>') +
      barsRow(list.length, i) +
      '<div style="display:flex;justify-content:center;gap:14px;padding:18px 0"><button class="ib fill" style="width:84px;height:84px" data-a="play" aria-label="Nghe">' + ic('spk2', 30) + '</button><button class="ib" style="width:56px;height:56px;align-self:center" data-a="slow" aria-label="Nghe chậm"><span class="s12" style="font-weight:600">0.7×</span></button></div>' +
      '<label style="display:flex;flex-direction:column;gap:8px"><span class="s13 mut">' + (streak >= 3 ? 'Chuỗi ' + streak + ' · điểm x2' : 'Gõ lại từ bạn nghe được') + '</span><input class="inp" id="din" autocomplete="off" autocapitalize="none" autocorrect="off" spellcheck="false" placeholder="Gõ từ tiếng Anh…" ' + (state === 'ask' ? '' : 'disabled') + '></label>' + fb +
      '<div style="height:80px"></div><div class="cta">' + (state === 'ask' ? '<button class="btn line" style="flex:0 0 auto" data-a="skip">Bỏ qua</button><button class="btn" data-a="chk">Kiểm tra</button>' : '<button class="btn" data-a="nx">' + (i + 1 < list.length ? 'Từ tiếp theo' : 'Xem kết quả') + '</button>') + '</div>';
    paint(html, {
      ex: () => go('games', { st, u }, true),
      play: () => speak(w.en), slow: () => speak(w.en, { slow: true }),
      chk: () => { const v = $('#din').value; if (!v.trim()) { toast('Hãy gõ từ bạn nghe được'); return; } check(v); },
      skip: () => { finish(false); },
      nx: () => { i++; if (i >= list.length) { gameResult('dict', st, u, score, rows); return; } tries = 0; state = 'ask'; draw(); setTimeout(() => speak(list[i].en), 250); }
    });
    const inp = $('#din'); if (inp && state === 'ask') { inp.onkeydown = (e) => { if (e.key === 'Enter') { e.preventDefault(); A.chk(); } }; }
  }
  function check(v) {
    const w = list[i];
    if (normAns(v) === normAns(w.en)) { streak++; score += (tries ? 1 : 2) * (streak >= 3 ? 2 : 1); finish(true); }
    else if (!tries) { tries = 1; sfx('bad'); draw(); }
    else finish(false);
  }
  function finish(ok) { const w = list[i]; if (!ok) streak = 0; rows.push({ w, ok }); state = ok ? 'ok' : 'bad'; sfx(ok ? 'ok' : 'bad'); draw(); }
  draw(); setTimeout(() => speak(list[0].en), 300);
}

/* --- Notebook (G5) --- */
SCREENS.notebook = ({ tabv }) => {
  const t = tabv || 'w';
  const ws = learnedWords().sort((a, b) => a.en.toLowerCase().localeCompare(b.en.toLowerCase()));
  const gl = LESSONS.filter((l) => { const p = S.lessons[l.id]; return p && !(p.skipped && !p.best) && (p.passed || p.step >= 2); });
  let html = top(ib('back', 'back', 'Quay lại'), '<b>Sổ tay</b>') +
    '<div class="seg"><button class="' + (t === 'w' ? 'on' : '') + '" data-a="tb" data-v="w">Từ vựng · ' + ws.length + '</button><button class="' + (t === 'g' ? 'on' : '') + '" data-a="tb" data-v="g">Ngữ pháp · ' + gl.length + '</button></div>';
  if (t === 'w') {
    if (!ws.length) html += '<p class="s14 mut">Từ bạn đã học sẽ được lưu ở đây để tra lại nhanh.</p>';
    else html += '<input class="inp" id="nbq" placeholder="Tìm tiếng Anh hoặc tiếng Việt" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Tìm từ">' +
      '<div class="card list" id="nbl">' + ws.map((w) => { const c = S.cards[w.id] || {}; return '<button class="row" data-a="w" data-v="' + esc(w.id) + '" data-s="' + esc((w.en + ' ' + w.vi).toLowerCase()) + '"><span class="t"><b>' + esc(w.en) + ' <span class="s12 mut" style="font-weight:400">' + esc(w.ipa) + '</span></b><span>' + esc(w.vi) + '</span></span>' + ((c.b || 0) >= 4 ? '<span class="s12 mut">Đã thuộc</span>' : ic('spk', 16)) + '</button>'; }).join('') + '</div>' +
      '<p class="s12 mut center" id="nbe" style="display:none">Không tìm thấy từ nào</p>';
  } else {
    if (!gl.length) html += '<p class="s14 mut">Học đến bước Ngữ pháp của một bài để lưu điểm ngữ pháp vào đây.</p>';
    else html += '<div class="card list">' + gl.map((l) => '<button class="row" data-a="g" data-v="' + l.id + '"><span class="ric">' + ic('book') + '</span><span class="t"><b>' + esc(l.grammar.name) + '</b><span>Bài ' + lnum(l) + ' · ' + esc(l.title) + '</span></span>' + ic('chev', 16) + '</button>').join('') + '</div>';
  }
  paint(html, {
    back, tb: (v) => go('notebook', { tabv: v }, true),
    w: (id) => { const w = WORDS[id]; if (!w) return; speak(w.en); const src = LBY[w.lesson];
      const m = sheet('<div style="display:flex;flex-direction:column;gap:10px"><div style="display:flex;align-items:center;gap:12px"><span style="font-size:30px;font-weight:600;letter-spacing:-1px">' + esc(w.en) + '</span><button class="ib" data-say aria-label="Phát âm">' + ic('spk', 18) + '</button></div><span class="s14 mut">' + esc(w.ipa) + ' · ' + esc(w.pos) + '</span><b style="font-size:18px;font-weight:500">' + esc(w.vi) + '</b><div class="card" style="display:flex;flex-direction:column;gap:4px"><i>' + esc(w.ex) + '</i><span class="s13 mut">' + esc(w.exVi) + '</span></div>' + (src ? '<span class="s12 mut">Bài ' + lnum(src) + ' · ' + esc(src.title) + '</span>' : '') + '</div>');
      const b = m.querySelector('[data-say]'); if (b) b.onclick = (e) => { e.stopPropagation(); speak(w.ex); }; },
    g: (id) => { const l = LBY[id]; const g = l.grammar;
      sheet('<div style="display:flex;flex-direction:column;gap:12px"><span class="s12 mut">Bài ' + lnum(l) + ' · ' + esc(g.nameEn || '') + '</span><h2>' + esc(g.name) + '</h2><p class="s14">' + esc(g.desc) + '</p><div class="card" style="display:flex;flex-direction:column;gap:8px">' + g.formula.map((f) => '<div class="s14"><span class="mut" style="display:inline-block;min-width:26px">' + esc(f[0]) + '</span>' + f[1] + '</div>').join('') + '</div>' +
        g.examples.map((e) => '<div style="display:flex;flex-direction:column;gap:2px"><span class="s14">' + e[0] + '</span><span class="s13 mut">' + esc(e[1]) + '</span></div>').join('') +
        (g.mistake ? '<div class="fb bad"><span class="ic">' + ic('x', 14, 2.2) + '</span><div style="display:flex;flex-direction:column;gap:3px"><b>' + esc(g.mistake[0]) + '</b><p>Đúng: ' + esc(g.mistake[1]) + ' — ' + esc(g.mistake[2]) + '</p></div></div>' : '') + '</div>'); }
  });
  const q = $('#nbq'); if (q) q.oninput = () => { const v = q.value.toLowerCase().trim(); let n = 0; $$('#nbl .row').forEach((r) => { const on = !v || r.dataset.s.includes(v); r.style.display = on ? '' : 'none'; if (on) n++; }); $('#nbe').style.display = n ? 'none' : ''; };
};

/* --- Progress + settings --- */
SCREENS.progress = () => {
  const learned = Object.keys(S.cards).length, mastered = Object.values(S.cards).filter((c) => c.b >= 4).length, passed = Object.values(S.lessons).filter((p) => p.passed).length;
  const days = []; for (let i = 6; i >= 0; i--) { const d = new Date(Date.now() - i * DAY); days.push({ k: dkey(d), l: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'][d.getDay()], t: i === 0 }); }
  const max = Math.max(S.goal, ...days.map((d) => S.days[d.k] || 0));
  const st = S.settings;
  const seg = (key, opts) => '<div class="seg">' + opts.map(([v, t]) => '<button class="' + (String(st[key]) === String(v) ? 'on' : '') + '" data-a="set" data-v="' + key + ':' + v + '">' + t + '</button>').join('') + '</div>';
  const sw = (key, label, sub) => '<button class="row" data-a="tog" data-v="' + key + '"><span class="t"><b>' + label + '</b>' + (sub ? '<span>' + sub + '</span>' : '') + '</span><span class="switch ' + (st[key] ? 'on' : '') + '"></span></button>';
  const html = '<div style="display:flex;flex-direction:column;gap:6px"><span class="s13 mut">Tổng ' + S.xp + ' XP · cấp ' + (Math.floor(S.xp / 300) + 1) + '</span><h1>Tiến độ</h1></div>' +
    '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">' + [[streakNow(), 'ngày liên tiếp'], [passed, 'bài đã xong'], [learned, 'từ đã học'], [mastered, 'từ thuộc lòng'], [S.qT ? Math.round(S.qR / S.qT * 100) + '%' : '–', 'tỉ lệ đúng'], [S.days[dkey()] || 0, 'XP hôm nay']].map(([n, t]) => '<div class="card" style="padding:14px"><div style="font-size:24px;font-weight:600;letter-spacing:-.6px">' + n + '</div><div class="s12 mut">' + t + '</div></div>').join('') + '</div>' +
    '<div class="card" style="display:flex;flex-direction:column;gap:12px"><span class="s13 mut">XP 7 ngày qua</span><div style="display:flex;align-items:flex-end;gap:8px;height:120px">' + days.map((d) => { const v = S.days[d.k] || 0; return '<div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:flex-end;gap:6px;height:100%"><span class="s12" style="font-weight:500">' + (v || '') + '</span><i style="display:block;width:100%;max-width:30px;border-radius:999px;background:' + (d.t ? 'var(--ink)' : 'var(--dot)') + ';height:' + Math.max(6, Math.round(v / max * 80)) + 'px"></i><span class="s12 mut">' + d.l + '</span></div>'; }).join('') + '</div></div>' +
    '<span class="s13 mut">Cài đặt</span><div class="card" style="display:flex;flex-direction:column;gap:14px"><div style="display:flex;flex-direction:column;gap:8px"><span class="s13">Giao diện</span>' + seg('theme', [['auto', 'Theo máy'], ['light', 'Sáng'], ['dark', 'Tối']]) + '</div>' +
    '<div style="display:flex;flex-direction:column;gap:8px"><span class="s13">Mục tiêu mỗi ngày</span>' + seg('goal', [[30, '30 XP'], [50, '50 XP'], [100, '100 XP'], [150, '150 XP']]) + '</div>' +
    '<div style="display:flex;flex-direction:column;gap:8px"><span class="s13">Giọng đọc</span>' + seg('voice', [['en-US', 'Anh – Mỹ'], ['en-GB', 'Anh – Anh']]) + '</div>' +
    '<div style="display:flex;flex-direction:column;gap:8px"><span class="s13">Tốc độ đọc</span>' + seg('rate', [[0.8, 'Chậm'], [0.95, 'Vừa'], [1.1, 'Nhanh']]) + '</div></div>' +
    '<div class="card list">' + sw('free', 'Học tự do', 'Mở mọi bài, không cần học tuần tự') + sw('sfx', 'Âm hiệu ứng', 'Ting khi đúng, tộc khi sai') + sw('haptics', 'Rung nhẹ', 'Chỉ trên Android') + '<button class="row" data-a="testv"><span class="t"><b>Nghe thử giọng đọc</b><span>' + (pickVoice() ? esc(pickVoice().name) : 'Chưa tìm thấy giọng tiếng Anh') + '</span></span>' + ic('spk', 18) + '</button></div>' +
    '<span class="s13 mut">Dữ liệu</span><div class="card list"><button class="row" data-a="exp"><span class="ric">' + ic('dl') + '</span><span class="t"><b>Xuất file sao lưu</b><span>Lưu tiến độ ra một file</span></span></button><label class="row" style="cursor:pointer"><span class="ric">' + ic('ul') + '</span><span class="t"><b>Nhập file sao lưu</b><span>Khôi phục tiến độ từ file</span></span><input type="file" id="imp" accept="application/json,.json" class="hidden"></label><button class="row" data-a="reset"><span class="ric">' + ic('replay') + '</span><span class="t"><b>Làm lại từ đầu</b><span>Xoá toàn bộ tiến độ trên máy này</span></span></button></div>' +
    '<p class="s12 mut center" style="padding:8px 0">Tiếng Anh Mỗi Ngày · Phiên bản 1.6.3 · Thinhphan</p>';
  paint(html, {
    set: (v) => { const [k, val] = v.split(':'); st[k] = (k === 'goal' || k === 'rate') ? +val : val; if (k === 'goal') S.goal = +val; save(); if (k === 'theme') applyTheme(); if (k === 'voice' || k === 'rate') speak('Hello, nice to meet you.'); SCREENS.progress(); },
    tog: (k) => { st[k] = !st[k]; save(); if (k === 'sfx' && st.sfx) sfx('ok'); SCREENS.progress(); },
    testv: () => speak('Hello! This is your English voice.'),
    exp: () => { try { const b = new Blob([JSON.stringify(S)], { type: 'application/json' }); const a = document.createElement('a'); a.href = URL.createObjectURL(b); a.download = 'tieng-anh-moi-ngay-' + dkey() + '.json'; document.body.appendChild(a); a.click(); a.remove(); toast('Đã xuất file sao lưu'); } catch (e) { toast('Không xuất được file trên trình duyệt này'); } },
    reset: async () => { if (await confirmBox('Làm lại từ đầu?', 'Toàn bộ XP, chuỗi ngày, bài đã học và thẻ ôn tập trên máy này sẽ bị xoá.', 'Xoá hết')) { const keep = S.settings; S = defaults(); S.settings = keep; save(); toast('Đã đặt lại'); tab('home'); } }
  }, 'progress');
  $('#imp').onchange = (e) => { const f = e.target.files[0]; if (!f) return; const rd = new FileReader(); rd.onload = () => { try { const o = JSON.parse(rd.result); if (!o || o.v !== 1) throw 0; S = Object.assign(defaults(), o); save(); applyTheme(); toast('Đã khôi phục tiến độ'); tab('home'); } catch (x) { toast('File sao lưu không hợp lệ'); } }; rd.readAsText(f); };
};

/* ---------- SPLASH ---------- */
function splash(done) {
  const el = $('#splash'); if (!el) return done();
  const orb = $('#orb'); const N = 26, c0 = 12.5, R = 12.6; const cells = [];
  for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) { const d = Math.hypot(x - c0, y - c0); const i = document.createElement('i'); orb.appendChild(i); cells.push({ i, d }); }
  const light = $('.wm .l'), bar = $('.sp-bar i'); const t0 = performance.now(); const DUR = 1700; let fin = false;
  const frame = (now) => {
    const t = (now - t0) / 1000;
    cells.forEach((c) => { if (c.d > R) { c.i.style.width = c.i.style.height = '0px'; return; } const sh = 1 - c.d / R; const w = 0.5 + 0.5 * Math.sin(c.d * 0.85 - t * 8); const s = (0.8 + 9.4 * Math.pow(sh, 0.8) * (0.3 + 0.7 * w)).toFixed(1); c.i.style.width = c.i.style.height = s + 'px'; });
    const p = Math.min(1, (now - t0) / DUR); const rev = Math.max(0, Math.min(1, (p - 0.15) / 0.7));
    light.style.clipPath = 'inset(0 ' + (100 - rev * 100).toFixed(1) + '% 0 0)'; bar.style.width = (p * 100).toFixed(0) + '%';
    if (p >= 1 && !fin) { fin = true; setTimeout(() => { el.classList.add('out'); done(); setTimeout(() => el.remove(), 500); }, 250); }
    if (!fin || p < 1.4) requestAnimationFrame(frame);
  };
  requestAnimationFrame(frame);
}

/* ---------- START ---------- */
function start() {
  tab('home');
  if ('serviceWorker' in navigator && /^https?:$/.test(location.protocol) && window.top === window.self) { const hadCtl = !!navigator.serviceWorker.controller; let reloaded = false; navigator.serviceWorker.addEventListener('controllerchange', () => { if (hadCtl && !reloaded) { reloaded = true; location.reload(); } }); navigator.serviceWorker.register('sw.js').then((r) => { try { r.update(); } catch (e) {} document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible') { try { r.update(); } catch (e) {} } }); }).catch(() => {}); }
  window.addEventListener('online', () => toast('Đã có mạng · chấm phát âm tự động bật lại'));
  window.addEventListener('offline', () => toast('Đang offline · app vẫn dùng được bình thường'));
}
splash(start);
window.__app = { S: () => S, tab, go, LESSONS, WORDS };
})();
