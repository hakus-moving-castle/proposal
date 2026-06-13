# Proposals

AI 友善的 demo 與考古文件工作區。使用者通常只丟 Prompt，由 Agent 產出成果。

## 快速導航

| 要做什麼 | 讀這裡 | 輸出位置 |
|----------|--------|----------|
| 產 HTML 簡報 / pitch deck | [`.claude/skills/create-demo/SKILL.md`](.claude/skills/create-demo/SKILL.md) | `demos/<slug>/` |
| 考古舊專案、產文件 | [`.claude/skills/archaeology-docs/SKILL.md`](.claude/skills/archaeology-docs/SKILL.md) | `docs/` |
| 翻譯 key 慣例 | [`i18n/README.md`](i18n/README.md) | — |

## 目錄結構

```
proposals/
├── demos/           # 互動 HTML 簡報（無 build，雙擊 index.html 即可）
├── docs/            # 考古文件工作區（SSOT）
├── i18n/            # 專案層翻譯慣例
└── .claude/skills/  # Agent 固定產出規範
```

## 現有 Demos

| Slug | 說明 | 開啟方式 |
|------|------|----------|
| [`renovation-plan`](demos/renovation-plan/index.html) | 專案全面翻新：AI 驅動的敏捷考古與重構計畫 | 開啟 `demos/renovation-plan/index.html` |

## Docs 工作區

- [`docs/context.md`](docs/context.md) — 全域 Terminology
- [`docs/survey-checklist.md`](docs/survey-checklist.md) — 考古進度追蹤
- `docs/records/` — 考古暫存（凍結後可刪）
- `docs/main/` — 永久事實來源（flows / pages / contract-schemas）

## 語系

支援 `zh-tw` / `en` / `ja`。各 demo 的 i18n JSON 放於 `demos/<slug>/i18n/`。
