---
name: create-demo
description: 產出單頁 HTML 互動簡報至 demos/ 目錄。當使用者要求建立 presentation、pitch deck、demo 頁面、或丟入 Prompt 要求產出報告時使用。
---

# Create Demo

將使用者的 Prompt 轉為可開啟的單頁 HTML 簡報，存放於 `demos/<slug>/`。

## 觸發條件

- 使用者提供 Prompt 要求產出簡報 / 報告 / presentation
- 使用者說「做一個 demo」「pitch 給 PM」

## 產出流程

### 1. 決定 slug

從標題產生 `kebab-case` slug，例如「Project Renovation Plan」→ `renovation-plan`。

### 2. 建立目錄

```
demos/<slug>/
├── PROMPT.md      # 完整 Prompt + Context 原文
├── index.html     # 單檔互動簡報
└── i18n/
    ├── zh-tw.json
    ├── en.json
    └── ja.json
```

### 3. 撰寫 PROMPT.md

留存使用者原始 Prompt 與 Context，方便日後追溯。

### 4. 撰寫 i18n JSON

**所有可見文字必須走 i18n key，禁止硬編在 HTML。**

Key 命名：`<section>.<element>`，例如：

- `hero.title`
- `hero.as_is_toggle`
- `roles.card1.title`
- `pipeline.simulate_btn`
- `pipeline.mock_issues`（陣列，含動態內容）

三語要求：

| Locale | 要求 |
|--------|------|
| `zh-tw` | 若 Prompt 指定繁中原文，一字不差 |
| `en` | 專業簡報語氣 |
| `ja` | 敬體（です/ます） |

缺翻譯時用 `"🚧 missing"`，禁止在 HTML 自創文案。

### 5. 撰寫 index.html

技術棧（固定）：

- Tailwind CSS v3 CDN
- Vanilla JavaScript（內嵌於 `<script>`）
- 無 build step，雙擊即可開啟

必備功能：

- 右上角語系切換器（`zh-tw` / `en` / `ja`）
- `localStorage` 記憶語系選擇（key: `demo-locale`）
- `data-i18n="key.path"` 綁定靜態文字
- `applyI18n(locale)` 重繪動態內容（lists、cards），保持互動狀態
- Dark/light 對比（跟隨 `prefers-color-scheme` 或手動 toggle）
- Responsive（mobile 單欄、desktop 多欄）

### 6. 互動實作

- Toggle / Tab：切換顯示不同內容區
- 按鈕觸發：動態注入 DOM（如 mock Issue cards）
- 動畫：Tailwind `transition` + `opacity`/`translate`，簡短即可

## 鐵律

1. 新 demo **一律**放 `demos/`，不污染 `docs/`
2. 單檔 HTML 優先；互動極複雜才拆 `app.js`
3. 完成後更新根目錄 `README.md` 的 demos 列表

## 驗收清單

- [ ] `demos/<slug>/index.html` 無 build 可直接開啟
- [ ] 三語切換後所有文字同步更新
- [ ] `PROMPT.md` 已留存原始需求
- [ ] 互動元素正常（toggle、按鈕、動畫）
- [ ] Mobile RWD 正常
