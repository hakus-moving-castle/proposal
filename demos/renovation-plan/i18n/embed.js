window.__I18N_EMBEDDED__={
  "zh-tw": {
    "meta": {
      "title": "專案全面翻新：AI 驅動的敏捷考古與重構計畫"
    },
    "common": {
      "label_input": "Input",
      "label_output": "Output",
      "fold_specs": "展開詳細規格要求",
      "fold_doc_tree": "📂 點擊展開查看：結構化目錄樹狀規範 (Docusaurus Output)",
      "fold_figma_org": "組織架構：中央範本，本地清洗",
      "fold_figma_pattern": "業務模組維護邊界",
      "fold_figma_align": "畫面重建與 EN 語系脈絡對齊",
      "fold_i18n_json": "🔍 查看：i18n 數據型別與腳本規範細節",
      "fold_i18n_steps": "翻譯準備完整步驟（共 {n} 步）",
      "fold_deliverables": "產出物清單",
      "tier_budget": "可省",
      "tier_required": "必用",
      "tier_context": "需上下文",
      "tier_human": "人工",
      "tool_claude": "Claude",
      "tool_cursor": "Cursor",
      "tool_human": "人工"
    },
    "hero": {
      "title": "專案全面翻新：AI 驅動的敏捷考古與重構計畫",
      "subtitle": "透過 AI 考古、資料邊界隔離、Figma 設計系統重建與 Matt Pocock Skills 流水線，徹底終結設計脫鉤與技術債。"
    },
    "toc": [
      {
        "id": "s1",
        "label": "前情提要"
      },
      {
        "id": "s2",
        "label": "頂層架構"
      },
      {
        "id": "s3",
        "label": "四角色 Workflow"
      },
      {
        "id": "s4",
        "label": "考古盤點"
      },
      {
        "id": "s5",
        "label": "凍結管理"
      },
      {
        "id": "s6",
        "label": "Figma 設計系統"
      },
      {
        "id": "s7",
        "label": "多國語系"
      },
      {
        "id": "s8",
        "label": "開始翻新"
      }
    ],
    "s1": {
      "emoji": "🛑",
      "heading": "前情提要與現況痛點盤點",
      "table_cols": [
        "痛點",
        "影響",
        "根因描述"
      ],
      "table_rows": [
        {
          "pain": "前端程式碼混亂",
          "impact": "修復成本極高",
          "cause": "出現許多不推薦的寫法，導致踩到某些 Framework Bug 時極不排查。"
        },
        {
          "pain": "後端無規格",
          "impact": "前端通靈判斷",
          "cause": "後端沒有規格書，單從前端程式碼中無法準確判斷回應格式，且為了暫時解決某些後端回傳的錯誤格式而前端加上的額外通靈判斷。"
        },
        {
          "pain": "Error 格式不統一",
          "impact": "髒邏輯累積",
          "cause": "回傳 error 格式不統一，前端出現很多為了處理不同錯誤格式而加上的髒邏輯。"
        },
        {
          "pain": "資料格式命名混亂",
          "impact": "重構難追溯",
          "cause": "前端目前自創了一層 transform，但因為分散在各處，重構時難以快速找到原始 value。"
        }
      ],
      "vision_heading": "現況痛點 vs 翻新願景",
      "as_is_title": "As-is 現況痛點",
      "to_be_title": "To-be 翻新願景",
      "as_is_items": [
        "設計稿與正式環境脫鉤",
        "程式碼劣化、技術債累積",
        "新人 Onboarding 困難、通靈成本高",
        "後端格式混亂，前端 transform 分散"
      ],
      "to_be_items": [
        "100% 測試覆蓋，重構不漏功能",
        "Figma 設計系統與程式碼同步",
        "AI Agent 自動化派工 + 人機協作邊界清晰",
        "資料邊界隔離，乾淨型別取代髒資料"
      ]
    },
    "s2": {
      "emoji": "🗺️",
      "heading": "頂層架構、文件流向與目錄規範",
      "subheading": "從舊 Codebase 到可凍結 Main Docs 的完整產出鏈。核心導覽必須大方呈現。",
      "diagram": "graph TD\n    Code[\"舊原始碼\"] -->|Repomix打包/Cursor檢索| R1[\"🕵️ 1.代碼考古學家\"]\n    R1 -->|產出 As-is 業務行為| Flow[\"docs/records/domain/flow.md\"]\n    Payload[\"舊API Raw JSON\"] --> R2[\"📐 2.資料邊界規劃師\"]\n    Flow --> R2\n    Comp[\"Components\"] --> R2\n    R2 -->|產出 To-be 乾淨型別| Schema[\"docs/main/contract-schemas/\"]\n    R2 --> Ctx[\"context.md Terminology\"]\n    Flow --> R3[\"✍️ 3.行為測試架構師\"]\n    Schema --> R3\n    R3 -->|產出 BDD案例| BDD[\"docs/records/domain/e2e-cases.feature\"]\n    Flow --> R4[\"⚖️ 4.文件盤點員\"]\n    Schema --> R4\n    BDD --> R4\n    R4 -->|Cover審查| Check[\"docs/survey-checklist.md\"]\n    Check -->|100% Check| Final[\"第一階段凍結\"]",
      "doc_tree_cols": [
        "路徑",
        "用途"
      ],
      "doc_tree_rows": [
        {
          "path": "context.md",
          "desc": "全域字典（常駐）。採用全新定義的業務領域字典（terminology.md）。"
        },
        {
          "path": "survey-checklist.md",
          "desc": "檔案級考古進度追蹤表。"
        },
        {
          "path": "records/",
          "desc": "考古暫存區（checklist 100% 完成後移入 main，本區全數刪除）。"
        },
        {
          "path": "records/[domain]/flow.md",
          "desc": "As-is 現況業務規則（如 booking, coupon）。"
        },
        {
          "path": "records/[domain]/e2e-cases.feature",
          "desc": "BDD 測試案例。"
        },
        {
          "path": "docs/main/flows/",
          "desc": "新專案永久 SSOT — 流程基石。"
        },
        {
          "path": "docs/main/pages/",
          "desc": "頁面邏輯。"
        },
        {
          "path": "docs/main/contract-schemas/shared/",
          "desc": "全域 Entities。"
        },
        {
          "path": "docs/main/contract-schemas/endpoints/",
          "desc": "API 規格。"
        }
      ]
    },
    "s3": {
      "emoji": "🛠️",
      "heading": "透過 Skills Workflow 產出資料",
      "subheading": "四角色核心任務與精準 I/O。技術規格收進各自折疊抽屜。",
      "roles": [
        {
          "emoji": "🕵️",
          "title": "代碼考古學家 (Code Archaeologist)",
          "task": "摸清舊系統的「現況（As-is）」，將混亂的代碼提煉為純粹的業務行為，排除死碼。",
          "input": "舊專案特定路由/組件原始碼（Repomix 打包）",
          "output": "docs/records/[domain]/flow.md",
          "ai_recommendation": {
            "tool": "claude",
            "model": "Sonnet 4.5",
            "tier": "budget",
            "hint": "大量檔案分批考古"
          },
          "spec_summary": "展開詳細規格要求",
          "spec_sections": [
            {
              "title": "### Happy Path",
              "desc": "極簡的使用者成功操作步驟。"
            },
            {
              "title": "### Edge Cases",
              "desc": "程式碼內所有涉及業務邏輯的分支（排除網路斷線等基建錯誤）。"
            },
            {
              "title": "### Unverified Logic",
              "desc": "程式碼有寫、但無踩到或無法解釋的死碼/神祕邏輯（留待後續討論）。"
            }
          ]
        },
        {
          "emoji": "📐",
          "title": "資料邊界規劃師 (Data Boundary Planner)",
          "task": "嫌棄並阻絕舊後端的不良格式。定義全新乾淨 Frontend Interface，並將散落在組件與 Store 的計算/轉換邏輯收攏至 Transformer。",
          "input": "舊 API Raw JSON payload、flow.md 業務邏輯、舊組件衍生計算片段、舊 Store 的 Mutations/Selectors 觸發源",
          "output": "docs/main/contract-schemas/endpoints/[endpoint-name].md",
          "ai_recommendation": {
            "tool": "claude",
            "model": "Opus 4.6",
            "tier": "required",
            "hint": "型別精度要求高"
          },
          "spec_summary": "展開詳細規格要求",
          "spec_sections": [
            {
              "title": "Upstream Raw JSON Schema (TypeScript Type)",
              "desc": "後端原始格式。"
            },
            {
              "title": "Target TypeScript Interface",
              "desc": "全新的前端純淨型別，使用 JSDoc 標註 @upstream_source 與 @old_logic_location。"
            },
            {
              "title": "Transformer Pure Functions",
              "desc": "若涉及複雜衍生計算（如金額、距離），必須直接寫出具備完整型別、可執行的 TypeScript 轉換函數原型。"
            }
          ],
          "spec_code": "/** @upstream_source GET /api/booking/{id} */\ninterface BookingViewModel {\n  /** @old_logic_location src/pages/booking/transform.ts:42 */\n  displayAmount: string;\n}\n\nfunction transformBookingAmount(raw: RawBooking): string {\n  return (raw.amount_cents / 100).toFixed(2);\n}"
        },
        {
          "emoji": "✍️",
          "title": "行為測試架構師 (Behavior Test Architect)",
          "task": "將 flow.md 業務邏輯轉化為與實作解耦的 BDD 測試案例。",
          "input": "docs/records/[domain]/flow.md + docs/main/contract-schemas/",
          "output": "docs/records/[domain]/e2e-cases.feature",
          "ai_recommendation": {
            "tool": "claude",
            "model": "Sonnet 4.5",
            "tier": "budget",
            "hint": "結構化 BDD 輸出"
          },
          "spec_summary": "展開詳細規格要求",
          "spec_sections": [
            {
              "title": "Gherkin 語法",
              "desc": "必須使用 Given-When-Then 語法。"
            },
            {
              "title": "業務 Edge Cases",
              "desc": "必須涵蓋所有的業務層 Edge Cases（例如：預約代碼查無此人）。"
            },
            {
              "title": "排除基建錯誤",
              "desc": "404/500/網路斷線由全域 Client 處理，不寫入 Feature 檔。"
            }
          ],
          "spec_code": "Scenario: 預約代碼查無此人\n  Given 使用者輸入不存在的預約代碼\n  When 使用者提交查詢\n  Then 顯示「查無此預約」錯誤訊息"
        },
        {
          "emoji": "⚖️",
          "title": "文件盤點員 (Documentation Auditor)",
          "task": "以最嚴格的「代碼覆蓋率視角」，客觀審查考古進度，確保不漏掉任何一個現存檔案。",
          "input": "舊專案資料夾檔案實體清單、docs/records/ 已產出的文檔",
          "output": "docs/survey-checklist.md",
          "ai_recommendation": {
            "tool": "human",
            "tier": "human",
            "hint": "最終防線"
          },
          "spec_summary": "展開詳細規格要求",
          "spec_sections": [
            {
              "title": "Check 物理標準",
              "desc": "只有當該舊資料夾/模組底下的所有 .tsx / .ts 檔案都盤點完畢，且裡面每隻 API 都有對應 contract-schemas 與 BDD 案例時，才能勾選。"
            }
          ]
        }
      ]
    },
    "s4": {
      "emoji": "🔄",
      "heading": "核心考古盤點流程與執行 SUPPLEMENT",
      "card_scope_label": "範圍",
      "card_standard_label": "盤點標準",
      "table_cols": [
        "類別",
        "優先級",
        "範圍",
        "盤點標準"
      ],
      "table_rows": [
        {
          "category": "核心業務流程 (Core Domain Flows)",
          "priority": "最高優先",
          "priority_type": "emerald",
          "scope": "Booking Flow、Search & Filter（逆向盤點 UI 組件所有隱藏狀態）、Coupon / Affiliate（優惠券與引流邏輯）",
          "standard": "跨頁面的連續動作，必須優先處理。需完整 flow.md + contract-schemas + BDD。"
        },
        {
          "category": "靜態與內容頁面/區塊 (Static & Content)",
          "priority": "簡化盤點",
          "priority_type": "blue",
          "scope": "導覽頁、FAQ、Top Page 區塊等。存於前端翻譯檔（無 CMS）。",
          "standard": "不需要寫 schemas 與 BDD。考古直接在 docs/main/pages/ 中 Markdown 列表出頁面區塊與翻譯 Key 結構即可。"
        },
        {
          "category": "全域設施與約束 (Global Infrastructure)",
          "priority": "收攏 global-constraints",
          "priority_type": "indigo",
          "scope": "驗證狀態有效期限（Session 生存週期）、錯誤嘗試次數限制（防刷提示）、全域狀態與 URL 同步（語系貨幣在網址上的重新整理）",
          "standard": "具備強烈業務行為但跨頁面。必須由「行為測試架構師」收攏至 docs/records/global-constraints/e2e-cases.feature 嚴防遺漏防刷與時效邏輯。"
        }
      ]
    },
    "s5": {
      "emoji": "🔒",
      "heading": "變更管理 ＆ Main Docs 凍結",
      "freeze_callout": "survey-checklist.md 達 100% 勾選 → 定義為 Main Docs 凍結點，以此版本的 main/ 與 PM 進行技術與業務變更討論。",
      "phase1_title": "第一階段（考古期）",
      "phase1_items": [
        "records/ 記錄 As-is。",
        "main/flows/ 先行寫入確認過的 As-is 邏輯。",
        "main/contract-schemas/ 直接產出新設計的 To-be 純淨型別。",
        "checklist 達 100% → Main Docs 凍結點，與 PM 進行技術變更討論。"
      ],
      "phase2_title": "第二階段（重構與開發期）",
      "phase2_items": [
        "針對討論通過大改與新需求，直接在新 Repo 功能分支（Feature Branch）修改 docs/main/，使其永遠保持為 To-be。",
        "該 PR 必須附帶一個 CHANGELOG.md，記錄 Ticket Link 修改了哪些文件。",
        "代碼上線時文件一併 Merge，確保「代碼即文件，文件即代碼」。"
      ]
    },
    "s6": {
      "emoji": "🧱",
      "heading": "Figma 設計系統與三層 Token 架構",
      "intro_p1": "多產品「孤島式維護」方案：由於無法跨檔案 Variables 連動，放棄自動同步，改採「中央範本，本地清洗（Template）」務實架構。",
      "intro_p2": "中央 Core shadcn Template 維護純 Primitive 定義與元件原型。各翻新專案本地複製基礎元件變數、手動覆寫 Semantic Tokens 換皮、並 100% 還原 As-is 畫布。",
      "pro_warning": "⚠️ 建立 Figma Variables 至少需要 Pro plan 的 Full seat（非 Collab seat）。",
      "token_rule": "三層 Token 物理隔離鐵律：畫布上只能且必須使用第三層（Semantic）Token。",
      "token_cols": [
        "層級 (Layer)",
        "Figma Variable 命名規範",
        "代碼端 Namespace 變數對照",
        "設計師使用權限"
      ],
      "token_rows": [
        {
          "layer": "1. Primitive 🔒",
          "figma": "primitive/neutral/100",
          "css": "--nv-primitive-neutral-100",
          "access": "❌ 全面禁止綁定於畫布。層色彩大字典。"
        },
        {
          "layer": "2. Brand 🔒",
          "figma": "brand/primary",
          "css": "--nv-brand-primary",
          "access": "❌ 全面禁止綁定於畫布。"
        },
        {
          "layer": "3. Semantic 🔓",
          "figma": "semantic/bg/base",
          "css": "--nv-semantic-bg-base",
          "access": "🔓 唯一合法 Token。必須在此層命名。"
        }
      ],
      "fold_org_content": "中央 Workspace → Core shadcn Template（Primitive Tokens + Standard Components）。各專案本地 → 複製範本 + Local Semantic 覆寫 + 100% 還原 As-is 畫面。",
      "fold_pattern_central": "中央維護：100% 業務邏輯視覺一致、絕無客製化可能（如日本地圖選區）→ Copy-Paste。",
      "fold_pattern_local": "本地維護：會因產品線改變語意的複合組件（BookingCard、CouponSelector）→ 中央 shadcn 基礎 + 本地組裝。",
      "fold_align_desc": "Figma 組件備註規範：設計師組裝時必須在 Description 中手動備註 frontend i18n key。",
      "fold_align_example": "畫布顯示 \"Please enter your booking code\" → Description: [i18n-key] booking.field.code_placeholder。效益：未來無論 EN 文案如何微調，前端一眼就能確認兩者代表同一個功能欄位。"
    },
    "s7": {
      "emoji": "🌍",
      "heading": "多國語系 (i18n) 全自動管線 (Pipeline)",
      "toolchain_note": "工具鏈數據清洗與對照：建議用 Claude Web 去產出文件（考古），翻新才用 Cursor。整理過程會要求模型改掉奇怪格式、status 欄位標出 unused。",
      "gemini_rule": "Gemini 自動翻譯與新專案鐵律：現在 Gemini 可以直接操控 Sheets 代勞翻譯。建議在 Sheet 第一列 instruction sheet 放上 Tone & Style Guide。新專案過濾 unused，建立 SKILL.md 做參照。",
      "iron_rule": "System Prompt 級別全域鐵律：若需要的翻譯在 JSON 中不存在，嚴禁自行發明新 Key。請先代碼中 Hardcode 並加上 // TODO: i18n-missing 標記批次提取。",
      "fold_json_content": "JSON 格式範例：包含 status, key, legacy_key, zh_TW。\n\n自動化 script 去比對 legacy_key 和原本 translations 檢查是否少 key。JSON 寫回 sheet（namespace 欄位管理方便對照）。",
      "steps": [
        "AI 整理 legacy 翻譯為 JSON（status: active | unused | in-progress，含 namespace + legacy_key）",
        "Script 比對 legacy_key 與原 translations，檢查缺漏（動態 key 需手動標 active）",
        "Script 寫入 Google Spreadsheet（單一 sheet + namespace 欄位；Instruction Sheet 放 Tone Guide）",
        "Gemini 可代勞初版翻譯委託（日文統一敬體）",
        "新專案 script 從 Sheet 同步回程式碼（unused 過濾、in-progress 顯示 🚧）",
        "SKILL.md 鐵律：缺 key 禁止自創，hardcode + // TODO: i18n-missing"
      ]
    },
    "s8": {
      "emoji": "🏁",
      "heading": "盤點、校對與開始翻新",
      "validation_heading": "平行對照與驗收",
      "validation_items": [
        "新舊專案放同一個 workspace 方便前後對照。",
        "遇到 \\n 前端用 CSS whitespace-pre-line 處理。",
        "起獨立 Docusaurus 網站 repo 確認與 PM 確認。"
      ],
      "log_rule": "鐵律邊界：為了不要壞掉邏輯全數對齊，針對不清楚的舊邏輯全數加上 log 去紀錄線上是否有執行到，若跑一陣子都沒有任何數據，即可放心刪除。",
      "skills_heading": "Issue 拆分與 Matt Pocock Agent Skills",
      "skills_subheading": "拆 Issues 導入 5 大 Agent Skills。活用 monorepo 特性整合。Issue 並行任務。",
      "skills_cols": [
        "Skill",
        "說明",
        "建議 AI",
        "階段"
      ],
      "skills_rows": [
        {
          "name": "Grill-with-Docs",
          "desc": "結合考古文件，沿設計樹逐項釐清決策分支",
          "ai": "Claude Opus 4.6",
          "phase": "規劃"
        },
        {
          "name": "To-PRD",
          "desc": "從共識產出 PRD，含 User Stories 與模組草圖",
          "ai": "Claude Sonnet 4.5",
          "phase": "規劃"
        },
        {
          "name": "To-Issues",
          "desc": "PRD 拆解為垂直切片 Issue，建立 blocking 關係",
          "ai": "Claude Sonnet 4.5",
          "phase": "規劃"
        },
        {
          "name": "TDD",
          "desc": "紅綠重構循環，一行測試一行實作，確保重構不漏",
          "ai": "Cursor Composer 2.5",
          "phase": "開發"
        },
        {
          "name": "Architecture-Refactor",
          "desc": "深化淺層模組、釐清測試邊界，讓 Agent 能穩定導航",
          "ai": "Cursor Composer 2.5",
          "phase": "開發"
        }
      ],
      "refs_heading": "技術參考連結",
      "refs": [
        {
          "label": "Stop writing docs by hand",
          "url": "https://www.aihero.dev/5-agent-skills-i-use-every-day"
        },
        {
          "label": "Playwright BDD",
          "url": "https://playwright.dev/docs/test-agents"
        }
      ],
      "issues_heading": "原子化 Issue 範例",
      "issues": [
        {
          "id": "#01",
          "tag": "Schema",
          "title": "實作 transformBookingAmount 純函數",
          "blocks": "無阻塞，可立即開始"
        },
        {
          "id": "#02",
          "tag": "UI",
          "title": "依據 Figma 實作新版 BookingCard 靜態元件",
          "blocks": "阻塞於 #01"
        },
        {
          "id": "#03",
          "tag": "BDD",
          "title": "撰寫預約代碼驗證 Edge Cases 驗收案例",
          "blocks": "可與 #01 平行"
        }
      ],
      "roadmap_heading": "Roadmap",
      "roadmap": [
        {
          "title": "Phase 1：考古與資料邊界",
          "desc": "四角色 Skills 產出 Main Docs，達成 100% survey-checklist",
          "risk": "🔥 風險控制點：凍結後與 PM 發動技術變更討論"
        },
        {
          "title": "Phase 2：Figma 系統重組",
          "desc": "中央範本複製 + Local Semantic 覆寫 + 100% As-is 畫面還原"
        },
        {
          "title": "Phase 3：開發與重構啟動",
          "desc": "Claude 完成 To-Issues 後，Cursor Agent + 新人執行 TDD 翻新流水線"
        }
      ]
    },
    "footer": {
      "text": "Project Renovation & Refactor Plan"
    }
  },
  "en": {
    "meta": {
      "title": "Full Project Renovation: AI-Driven Agile Archaeology & Refactor Plan"
    },
    "common": {
      "label_input": "Input",
      "label_output": "Output",
      "fold_specs": "Expand detailed specifications",
      "fold_doc_tree": "📂 Click to expand: Structured directory tree (Docusaurus Output)",
      "fold_figma_org": "Organization: Central template, local customization",
      "fold_figma_pattern": "Business module maintenance boundaries",
      "fold_figma_align": "Screen rebuild & EN locale contextual alignment",
      "fold_i18n_json": "🔍 View: i18n data types & script specifications",
      "fold_i18n_steps": "Full translation prep steps ({n} steps)",
      "fold_deliverables": "Deliverables",
      "tier_budget": "Budget",
      "tier_required": "Required",
      "tier_context": "Context",
      "tier_human": "Human",
      "tool_claude": "Claude",
      "tool_cursor": "Cursor",
      "tool_human": "Human"
    },
    "hero": {
      "title": "Full Project Renovation: AI-Driven Agile Archaeology & Refactor Plan",
      "subtitle": "End design drift and technical debt through AI archaeology, data boundary isolation, Figma design system rebuild, and the Matt Pocock Skills pipeline."
    },
    "toc": [
      {
        "id": "s1",
        "label": "Background"
      },
      {
        "id": "s2",
        "label": "Architecture"
      },
      {
        "id": "s3",
        "label": "4-Role Workflow"
      },
      {
        "id": "s4",
        "label": "Survey Strategy"
      },
      {
        "id": "s5",
        "label": "Freeze Policy"
      },
      {
        "id": "s6",
        "label": "Figma System"
      },
      {
        "id": "s7",
        "label": "i18n Pipeline"
      },
      {
        "id": "s8",
        "label": "Kickoff"
      }
    ],
    "s1": {
      "emoji": "🛑",
      "heading": "Background & Current Pain Points",
      "table_cols": [
        "Pain Point",
        "Impact",
        "Root Cause"
      ],
      "table_rows": [
        {
          "pain": "Messy frontend code",
          "impact": "Extremely high fix cost",
          "cause": "Many anti-patterns make framework bugs hard to trace and debug."
        },
        {
          "pain": "No backend specs",
          "impact": "Frontend guesswork",
          "cause": "No spec docs — response formats inferred from frontend code, with extra hacks for malformed backend responses."
        },
        {
          "pain": "Inconsistent error formats",
          "impact": "Dirty logic accumulation",
          "cause": "Multiple error formats force frontend to add messy handling logic for each variant."
        },
        {
          "pain": "Chaotic data naming",
          "impact": "Hard to trace on refactor",
          "cause": "Custom transform layer scattered everywhere — original values hard to find during refactors."
        }
      ],
      "vision_heading": "As-is Pain Points vs To-be Vision",
      "as_is_title": "As-is Pain Points",
      "to_be_title": "To-be Vision",
      "as_is_items": [
        "Design files drift from production",
        "Code degradation and tech debt",
        "Difficult onboarding, high psychic cost",
        "Chaotic backend formats, scattered transforms"
      ],
      "to_be_items": [
        "100% test coverage, refactor without feature loss",
        "Figma design system synced with code",
        "Clear AI Agent automation + human-AI boundaries",
        "Data boundary isolation, clean types replace dirty data"
      ]
    },
    "s2": {
      "emoji": "🗺️",
      "heading": "Top-Level Architecture, Doc Flow & Directory Spec",
      "subheading": "Complete output chain from legacy codebase to freezable Main Docs. Core navigation must be visible.",
      "diagram": "graph TD\n    Code[\"Legacy Source\"] -->|Repomix/Cursor| R1[\"🕵️ 1.Code Archaeologist\"]\n    R1 -->|As-is behavior| Flow[\"docs/records/domain/flow.md\"]\n    Payload[\"Legacy API Raw JSON\"] --> R2[\"📐 2.Data Boundary Planner\"]\n    Flow --> R2\n    Comp[\"Components\"] --> R2\n    R2 -->|To-be clean types| Schema[\"docs/main/contract-schemas/\"]\n    R2 --> Ctx[\"context.md Terminology\"]\n    Flow --> R3[\"✍️ 3.Behavior Test Architect\"]\n    Schema --> R3\n    R3 -->|BDD cases| BDD[\"docs/records/domain/e2e-cases.feature\"]\n    Flow --> R4[\"⚖️ 4.Documentation Auditor\"]\n    Schema --> R4\n    BDD --> R4\n    R4 -->|Coverage review| Check[\"docs/survey-checklist.md\"]\n    Check -->|100% Check| Final[\"Phase 1 Freeze\"]",
      "doc_tree_cols": [
        "Path",
        "Purpose"
      ],
      "doc_tree_rows": [
        {
          "path": "context.md",
          "desc": "Global dictionary (permanent). Uses newly defined business domain terminology."
        },
        {
          "path": "survey-checklist.md",
          "desc": "File-level archaeology progress tracker."
        },
        {
          "path": "records/",
          "desc": "Archaeology staging area (deleted after checklist 100%, moved to main)."
        },
        {
          "path": "records/[domain]/flow.md",
          "desc": "As-is business rules (e.g. booking, coupon)."
        },
        {
          "path": "records/[domain]/e2e-cases.feature",
          "desc": "BDD test cases."
        },
        {
          "path": "docs/main/flows/",
          "desc": "Permanent SSOT — flow foundations."
        },
        {
          "path": "docs/main/pages/",
          "desc": "Page logic."
        },
        {
          "path": "docs/main/contract-schemas/shared/",
          "desc": "Global entities."
        },
        {
          "path": "docs/main/contract-schemas/endpoints/",
          "desc": "API specifications."
        }
      ]
    },
    "s3": {
      "emoji": "🛠️",
      "heading": "Skills Workflow Data Production",
      "subheading": "Four roles with core tasks and precise I/O. Technical specs in collapsible drawers.",
      "roles": [
        {
          "emoji": "🕵️",
          "title": "Code Archaeologist",
          "task": "Map the legacy system's As-is state — distill pure business behavior from messy code, exclude dead code.",
          "input": "Legacy route/component source (Repomix bundle)",
          "output": "docs/records/[domain]/flow.md",
          "ai_recommendation": {
            "tool": "claude",
            "model": "Sonnet 4.5",
            "tier": "budget",
            "hint": "Batch archaeology"
          },
          "spec_summary": "Expand detailed specifications",
          "spec_sections": [
            {
              "title": "### Happy Path",
              "desc": "Minimal user success operation steps."
            },
            {
              "title": "### Edge Cases",
              "desc": "All business logic branches in code (excluding network/infrastructure errors)."
            },
            {
              "title": "### Unverified Logic",
              "desc": "Dead code or mysterious logic written but never hit — flagged for later discussion."
            }
          ]
        },
        {
          "emoji": "📐",
          "title": "Data Boundary Planner",
          "task": "Reject legacy backend bad formats. Define clean Frontend Interfaces, consolidate transforms from components and Store.",
          "input": "Legacy API Raw JSON, flow.md logic, component calc fragments, Store Mutations/Selectors triggers",
          "output": "docs/main/contract-schemas/endpoints/[endpoint-name].md",
          "ai_recommendation": {
            "tool": "claude",
            "model": "Opus 4.6",
            "tier": "required",
            "hint": "High type precision"
          },
          "spec_summary": "Expand detailed specifications",
          "spec_sections": [
            {
              "title": "Upstream Raw JSON Schema (TypeScript Type)",
              "desc": "Backend original format."
            },
            {
              "title": "Target TypeScript Interface",
              "desc": "Clean frontend types with JSDoc @upstream_source and @old_logic_location."
            },
            {
              "title": "Transformer Pure Functions",
              "desc": "For complex derived calculations (amount, distance), write fully typed executable TS transform prototypes."
            }
          ],
          "spec_code": "/** @upstream_source GET /api/booking/{id} */\ninterface BookingViewModel {\n  /** @old_logic_location src/pages/booking/transform.ts:42 */\n  displayAmount: string;\n}\n\nfunction transformBookingAmount(raw: RawBooking): string {\n  return (raw.amount_cents / 100).toFixed(2);\n}"
        },
        {
          "emoji": "✍️",
          "title": "Behavior Test Architect",
          "task": "Convert flow.md business logic into implementation-decoupled BDD test cases.",
          "input": "docs/records/[domain]/flow.md + docs/main/contract-schemas/",
          "output": "docs/records/[domain]/e2e-cases.feature",
          "ai_recommendation": {
            "tool": "claude",
            "model": "Sonnet 4.5",
            "tier": "budget",
            "hint": "Structured BDD output"
          },
          "spec_summary": "Expand detailed specifications",
          "spec_sections": [
            {
              "title": "Gherkin syntax",
              "desc": "Must use Given-When-Then syntax."
            },
            {
              "title": "Business Edge Cases",
              "desc": "Cover all business-layer edge cases (e.g. booking code not found)."
            },
            {
              "title": "Exclude infrastructure errors",
              "desc": "404/500/network handled by global Client — not in Feature files."
            }
          ],
          "spec_code": "Scenario: Booking code not found\n  Given user enters a non-existent booking code\n  When user submits query\n  Then display \"Booking not found\" error message"
        },
        {
          "emoji": "⚖️",
          "title": "Documentation Auditor",
          "task": "Strict code-coverage perspective audit of archaeology progress — ensure no file is missed.",
          "input": "Legacy folder file inventory, docs/records/ produced docs",
          "output": "docs/survey-checklist.md",
          "ai_recommendation": {
            "tool": "human",
            "tier": "human",
            "hint": "Final guard"
          },
          "spec_summary": "Expand detailed specifications",
          "spec_sections": [
            {
              "title": "Check physical standard",
              "desc": "Only check when ALL .tsx/.ts files in module are surveyed AND every API has contract-schemas + BDD cases."
            }
          ]
        }
      ]
    },
    "s4": {
      "emoji": "🔄",
      "heading": "Core Survey Strategy & Execution Supplement",
      "card_scope_label": "Scope",
      "card_standard_label": "Survey Standard",
      "table_cols": [
        "Category",
        "Priority",
        "Scope",
        "Survey Standard"
      ],
      "table_rows": [
        {
          "category": "Core Domain Flows",
          "priority": "Highest",
          "priority_type": "emerald",
          "scope": "Booking Flow, Search & Filter (reverse-map UI hidden states), Coupon / Affiliate",
          "standard": "Cross-page continuous actions — priority. Requires full flow.md + contract-schemas + BDD."
        },
        {
          "category": "Static & Content Pages",
          "priority": "Simplified",
          "priority_type": "blue",
          "scope": "Nav pages, FAQ, Top Page blocks. Stored in frontend translation files (no CMS).",
          "standard": "No schemas or BDD. List page blocks and translation key structure in docs/main/pages/."
        },
        {
          "category": "Global Infrastructure",
          "priority": "global-constraints",
          "priority_type": "indigo",
          "scope": "Session validity, error attempt limits (anti-abuse), global state & URL sync (locale/currency refresh)",
          "standard": "Strong business behavior across pages. Consolidate to docs/records/global-constraints/e2e-cases.feature."
        }
      ]
    },
    "s5": {
      "emoji": "🔒",
      "heading": "Change Management & Main Docs Freeze",
      "freeze_callout": "survey-checklist.md reaches 100% → Main Docs freeze point. Use this main/ version for technical and business change discussions with PM.",
      "phase1_title": "Phase 1: Archaeology",
      "phase1_items": [
        "records/ captures As-is.",
        "main/flows/ writes confirmed As-is logic.",
        "main/contract-schemas/ produces new To-be clean types.",
        "checklist 100% → Main Docs freeze point, PM change discussion."
      ],
      "phase2_title": "Phase 2: Refactor & Development",
      "phase2_items": [
        "Approved changes and new requirements modify docs/main/ in Feature Branch — always To-be state.",
        "PR must include CHANGELOG.md with Ticket links and modified files.",
        "Code and docs merge together — code is docs, docs is code."
      ]
    },
    "s6": {
      "emoji": "🧱",
      "heading": "Figma Design System & Three-Layer Token Architecture",
      "intro_p1": "Multi-product island maintenance: no cross-file Variable linking — adopt \"Central template, local customization\" pragmatic architecture.",
      "intro_p2": "Central Core shadcn Template maintains Primitive definitions and component prototypes. Each project copies locally, overrides Semantic Tokens, 100% restores As-is canvas.",
      "pro_warning": "⚠️ Figma Variables require Pro plan Full seat (not Collab seat).",
      "token_rule": "Three-layer Token isolation rule: canvas must ONLY use Layer 3 (Semantic) Tokens.",
      "token_cols": [
        "Layer",
        "Figma Variable Naming",
        "Code Namespace",
        "Designer Access"
      ],
      "token_rows": [
        {
          "layer": "1. Primitive 🔒",
          "figma": "primitive/neutral/100",
          "css": "--nv-primitive-neutral-100",
          "access": "❌ Forbidden on canvas. Color dictionary."
        },
        {
          "layer": "2. Brand 🔒",
          "figma": "brand/primary",
          "css": "--nv-brand-primary",
          "access": "❌ Forbidden on canvas."
        },
        {
          "layer": "3. Semantic 🔓",
          "figma": "semantic/bg/base",
          "css": "--nv-semantic-bg-base",
          "access": "🔓 Only legal Token. Must name at this layer."
        }
      ],
      "fold_org_content": "Central Workspace → Core shadcn Template (Primitive Tokens + Standard Components). Local projects → copy template + Local Semantic override + 100% As-is restore.",
      "fold_pattern_central": "Central: 100% logic-visual consistency, zero customization (e.g. Japan map selector) → Copy-Paste.",
      "fold_pattern_local": "Local: composite components with product-specific semantics (BookingCard, CouponSelector) → central shadcn base + local assembly.",
      "fold_align_desc": "Figma component note spec: designers must manually note frontend i18n key in Description when assembling.",
      "fold_align_example": "Canvas shows \"Please enter your booking code\" → Description: [i18n-key] booking.field.code_placeholder. Benefit: EN copy changes won't break frontend field mapping."
    },
    "s7": {
      "emoji": "🌍",
      "heading": "i18n Fully Automated Pipeline",
      "toolchain_note": "Toolchain data cleaning: use Claude Web for docs (archaeology), Cursor for renovation. Model cleans odd formats, marks unused in status field.",
      "gemini_rule": "Gemini auto-translation rule: Gemini can operate Sheets directly. Put Tone & Style Guide in Sheet instruction row. Filter unused in new projects, create SKILL.md reference.",
      "iron_rule": "System Prompt global rule: if translation key missing in JSON, NEVER invent new keys. Hardcode with // TODO: i18n-missing for batch extraction.",
      "fold_json_content": "JSON format example: status, key, legacy_key, zh_TW.\n\nAutomated script compares legacy_key with original translations to check missing keys. JSON writes back to sheet (namespace column for easy lookup).",
      "steps": [
        "AI organizes legacy translations to JSON (status: active | unused | in-progress, with namespace + legacy_key)",
        "Script compares legacy_key with original translations, checks gaps (dynamic keys manually marked active)",
        "Script writes to Google Spreadsheet (single sheet + namespace column; Instruction Sheet with Tone Guide)",
        "Gemini handles initial translation (Japanese unified keigo)",
        "New project script syncs from Sheet to code (unused filtered, in-progress shows 🚧)",
        "SKILL.md rule: missing keys forbidden — hardcode + // TODO: i18n-missing"
      ]
    },
    "s8": {
      "emoji": "🏁",
      "heading": "Survey, Validation & Renovation Kickoff",
      "validation_heading": "Parallel Comparison & Acceptance",
      "validation_items": [
        "Legacy and new projects in same workspace for side-by-side comparison.",
        "Handle \\n with CSS whitespace-pre-line on frontend.",
        "Standalone Docusaurus site repo for PM confirmation."
      ],
      "log_rule": "Boundary rule: for unclear legacy logic, add logs to track if executed in production. If no data after a period, safe to delete.",
      "skills_heading": "Issue Splitting & Matt Pocock Agent Skills",
      "skills_subheading": "Split Issues into 5 Agent Skills. Leverage monorepo integration. Parallel Issue tasks.",
      "skills_cols": [
        "Skill",
        "Description",
        "Recommended AI",
        "Phase"
      ],
      "skills_rows": [
        {
          "name": "Grill-with-Docs",
          "desc": "Clarify decision branches along design tree with archaeology docs",
          "ai": "Claude Opus 4.6",
          "phase": "Planning"
        },
        {
          "name": "To-PRD",
          "desc": "Produce PRD from consensus with User Stories and module sketches",
          "ai": "Claude Sonnet 4.5",
          "phase": "Planning"
        },
        {
          "name": "To-Issues",
          "desc": "Split PRD into vertical-slice Issues with blocking relationships",
          "ai": "Claude Sonnet 4.5",
          "phase": "Planning"
        },
        {
          "name": "TDD",
          "desc": "Red-green-refactor loop — one test one implementation, no feature loss",
          "ai": "Cursor Composer 2.5",
          "phase": "Development"
        },
        {
          "name": "Architecture-Refactor",
          "desc": "Deepen shallow modules, clarify test boundaries for stable Agent navigation",
          "ai": "Cursor Composer 2.5",
          "phase": "Development"
        }
      ],
      "refs_heading": "Technical References",
      "refs": [
        {
          "label": "Stop writing docs by hand",
          "url": "https://www.aihero.dev/5-agent-skills-i-use-every-day"
        },
        {
          "label": "Playwright BDD",
          "url": "https://playwright.dev/docs/test-agents"
        }
      ],
      "issues_heading": "Atomic Issue Examples",
      "issues": [
        {
          "id": "#01",
          "tag": "Schema",
          "title": "Implement transformBookingAmount pure function",
          "blocks": "No blockers, start immediately"
        },
        {
          "id": "#02",
          "tag": "UI",
          "title": "Implement new BookingCard static component per Figma",
          "blocks": "Blocked by #01"
        },
        {
          "id": "#03",
          "tag": "BDD",
          "title": "Write booking code validation Edge Cases acceptance tests",
          "blocks": "Parallel with #01"
        }
      ],
      "roadmap_heading": "Roadmap",
      "roadmap": [
        {
          "title": "Phase 1: Archaeology & Data Boundaries",
          "desc": "Four-role Skills produce Main Docs, achieve 100% survey-checklist",
          "risk": "🔥 Risk control: post-freeze technical change discussion with PM"
        },
        {
          "title": "Phase 2: Figma System Rebuild",
          "desc": "Central template copy + Local Semantic override + 100% As-is canvas restore"
        },
        {
          "title": "Phase 3: Development & Refactor Launch",
          "desc": "After Claude To-Issues, Cursor Agent + juniors execute TDD renovation pipeline"
        }
      ]
    },
    "footer": {
      "text": "Project Renovation & Refactor Plan"
    }
  },
  "ja": {
    "meta": {
      "title": "プロジェクト全面刷新：AI駆動のアジャイル考古学とリファクタリング計画"
    },
    "common": {
      "label_input": "Input",
      "label_output": "Output",
      "fold_specs": "詳細仕様を展開",
      "fold_doc_tree": "📂 クリックして展開：構造化ディレクトリツリー規範 (Docusaurus Output)",
      "fold_figma_org": "組織構造：中央テンプレート、ローカルカスタマイズ",
      "fold_figma_pattern": "ビジネスモジュール保守境界",
      "fold_figma_align": "画面再構築と EN ロケール文脈アライメント",
      "fold_i18n_json": "🔍 表示：i18n データ型とスクリプト規範詳細",
      "fold_i18n_steps": "翻訳準備完全ステップ（全 {n} ステップ）",
      "fold_deliverables": "成果物一覧",
      "tier_budget": "節約可",
      "tier_required": "必須",
      "tier_context": "要コンテキスト",
      "tier_human": "人手",
      "tool_claude": "Claude",
      "tool_cursor": "Cursor",
      "tool_human": "人手"
    },
    "hero": {
      "title": "プロジェクト全面刷新：AI駆動のアジャイル考古学とリファクタリング計画",
      "subtitle": "AI考古学、データ境界の分離、Figmaデザインシステム再構築、Matt Pocock Skillsパイプラインにより、デザイン乖離と技術的負債を根本から解消します。"
    },
    "toc": [
      {
        "id": "s1",
        "label": "前情提要"
      },
      {
        "id": "s2",
        "label": "トップアーキテクチャ"
      },
      {
        "id": "s3",
        "label": "4ロール Workflow"
      },
      {
        "id": "s4",
        "label": "考古棚卸"
      },
      {
        "id": "s5",
        "label": "凍結管理"
      },
      {
        "id": "s6",
        "label": "Figma DS"
      },
      {
        "id": "s7",
        "label": "多言語"
      },
      {
        "id": "s8",
        "label": "刷新開始"
      }
    ],
    "s1": {
      "emoji": "🛑",
      "heading": "前情提要と現状の痛点棚卸",
      "table_cols": [
        "痛点",
        "影響",
        "根本原因"
      ],
      "table_rows": [
        {
          "pain": "フロントエンドコード混乱",
          "impact": "修正コスト極大",
          "cause": "非推奨パターンが多く、Framework Bug 発生時の調査が困難です。"
        },
        {
          "pain": "バックエンド仕様なし",
          "impact": "フロント通霊判断",
          "cause": "仕様書がなく、フロントコードからレスポンス形式を正確に判断できず、暫定対応の追加判断が発生しています。"
        },
        {
          "pain": "Error 形式不統一",
          "impact": "汚いロジック蓄積",
          "cause": "error 形式が不統一で、各形式に対応する汚いロジックがフロントに蓄積されています。"
        },
        {
          "pain": "データ命名混乱",
          "impact": "リファクタ追跡困難",
          "cause": "transform 層が各所に分散し、リファクタ時に元の value を素早く見つけられません。"
        }
      ],
      "vision_heading": "現状痛点 vs 刷新ビジョン",
      "as_is_title": "As-is 現状痛点",
      "to_be_title": "To-be 刷新ビジョン",
      "as_is_items": [
        "デザイン稿と本番環境の乖離",
        "コード劣化、技術的負債の蓄積",
        "新人オンボーディング困難、通霊コスト高",
        "バックエンド形式混乱、transform 分散"
      ],
      "to_be_items": [
        "100% テストカバレッジ、リファクタで機能漏れなし",
        "Figma デザインシステムとコード同期",
        "AI Agent 自動化 + 人機協業境界の明確化",
        "データ境界分離、クリーン型で汚データ置換"
      ]
    },
    "s2": {
      "emoji": "🗺️",
      "heading": "トップアーキテクチャ、文書フローとディレクトリ規範",
      "subheading": "旧 Codebase から凍結可能な Main Docs への完全産出チェーン。コアナビは必ず表示します。",
      "diagram": "graph TD\n    Code[\"旧ソースコード\"] -->|Repomix/Cursor| R1[\"🕵️ 1.コード考古学者\"]\n    R1 -->|As-is 業務行為| Flow[\"docs/records/domain/flow.md\"]\n    Payload[\"旧API Raw JSON\"] --> R2[\"📐 2.データ境界プランナー\"]\n    Flow --> R2\n    Comp[\"Components\"] --> R2\n    R2 -->|To-be クリーン型| Schema[\"docs/main/contract-schemas/\"]\n    R2 --> Ctx[\"context.md Terminology\"]\n    Flow --> R3[\"✍️ 3.行為テストアーキテクト\"]\n    Schema --> R3\n    R3 -->|BDD案例| BDD[\"docs/records/domain/e2e-cases.feature\"]\n    Flow --> R4[\"⚖️ 4.文書棚卸員\"]\n    Schema --> R4\n    BDD --> R4\n    R4 -->|Cover審査| Check[\"docs/survey-checklist.md\"]\n    Check -->|100% Check| Final[\"第一段階凍結\"]",
      "doc_tree_cols": [
        "パス",
        "用途"
      ],
      "doc_tree_rows": [
        {
          "path": "context.md",
          "desc": "グローバル辞書（常駐）。新定義の業務領域辞書（terminology.md）を採用。"
        },
        {
          "path": "survey-checklist.md",
          "desc": "ファイル級考古進度追跡表。"
        },
        {
          "path": "records/",
          "desc": "考古仮置き場（checklist 100% 完了後 main へ移行、本区全削除）。"
        },
        {
          "path": "records/[domain]/flow.md",
          "desc": "As-is 現状業務規則（booking, coupon 等）。"
        },
        {
          "path": "records/[domain]/e2e-cases.feature",
          "desc": "BDD テスト案例。"
        },
        {
          "path": "docs/main/flows/",
          "desc": "新プロジェクト永久 SSOT — フロー基石。"
        },
        {
          "path": "docs/main/pages/",
          "desc": "ページロジック。"
        },
        {
          "path": "docs/main/contract-schemas/shared/",
          "desc": "グローバル Entities。"
        },
        {
          "path": "docs/main/contract-schemas/endpoints/",
          "desc": "API 仕様。"
        }
      ]
    },
    "s3": {
      "emoji": "🛠️",
      "heading": "Skills Workflow によるデータ産出",
      "subheading": "4ロールのコアタスクと精確 I/O。技術仕様は各折りたたみに格納。",
      "roles": [
        {
          "emoji": "🕵️",
          "title": "コード考古学者 (Code Archaeologist)",
          "task": "旧システムの「現況（As-is）」を把握し、混乱コードから純粋な業務行為を抽出、デッドコードを排除します。",
          "input": "旧プロジェクト特定ルート/コンポーネントソース（Repomix 打包）",
          "output": "docs/records/[domain]/flow.md",
          "ai_recommendation": {
            "tool": "claude",
            "model": "Sonnet 4.5",
            "tier": "budget",
            "hint": "大量ファイル分批考古"
          },
          "spec_summary": "詳細仕様を展開",
          "spec_sections": [
            {
              "title": "### Happy Path",
              "desc": "極簡のユーザー成功操作ステップ。"
            },
            {
              "title": "### Edge Cases",
              "desc": "コード内の全業務ロジック分岐（ネットワーク断等の基建エラー除外）。"
            },
            {
              "title": "### Unverified Logic",
              "desc": "コードに存在するが未実行/説明不能なデッドコード（後続議論用）。"
            }
          ]
        },
        {
          "emoji": "📐",
          "title": "データ境界プランナー (Data Boundary Planner)",
          "task": "旧バックエンドの不良形式を拒絶。新クリーン Frontend Interface を定義し、コンポーネントと Store の変換ロジックを Transformer に集約。",
          "input": "旧 API Raw JSON payload、flow.md 業務ロジック、旧コンポーネント衍生計算、旧 Store Mutations/Selectors",
          "output": "docs/main/contract-schemas/endpoints/[endpoint-name].md",
          "ai_recommendation": {
            "tool": "claude",
            "model": "Opus 4.6",
            "tier": "required",
            "hint": "型精度要求高"
          },
          "spec_summary": "詳細仕様を展開",
          "spec_sections": [
            {
              "title": "Upstream Raw JSON Schema (TypeScript Type)",
              "desc": "バックエンド原始形式。"
            },
            {
              "title": "Target TypeScript Interface",
              "desc": "新フロントエンド純粋型。JSDoc @upstream_source と @old_logic_location 标注。"
            },
            {
              "title": "Transformer Pure Functions",
              "desc": "複雑衍生計算（金額、距離等）は完全型付き実行可能 TS 変換関数原型を記述。"
            }
          ],
          "spec_code": "/** @upstream_source GET /api/booking/{id} */\ninterface BookingViewModel {\n  /** @old_logic_location src/pages/booking/transform.ts:42 */\n  displayAmount: string;\n}\n\nfunction transformBookingAmount(raw: RawBooking): string {\n  return (raw.amount_cents / 100).toFixed(2);\n}"
        },
        {
          "emoji": "✍️",
          "title": "行為テストアーキテクト (Behavior Test Architect)",
          "task": "flow.md 業務ロジックを実装解耦の BDD テスト案例に変換します。",
          "input": "docs/records/[domain]/flow.md + docs/main/contract-schemas/",
          "output": "docs/records/[domain]/e2e-cases.feature",
          "ai_recommendation": {
            "tool": "claude",
            "model": "Sonnet 4.5",
            "tier": "budget",
            "hint": "構造化 BDD 出力"
          },
          "spec_summary": "詳細仕様を展開",
          "spec_sections": [
            {
              "title": "Gherkin 構文",
              "desc": "Given-When-Then 構文必須。"
            },
            {
              "title": "業務 Edge Cases",
              "desc": "全業務層 Edge Cases を網羅（例：予約コード該当なし）。"
            },
            {
              "title": "基建エラー除外",
              "desc": "404/500/ネット断はグローバル Client 処理、Feature ファイルに記載しない。"
            }
          ],
          "spec_code": "Scenario: 予約コード該当なし\n  Given ユーザーが存在しない予約コードを入力\n  When ユーザーが照会を送信\n  Then 「予約が見つかりません」エラーを表示"
        },
        {
          "emoji": "⚖️",
          "title": "文書棚卸員 (Documentation Auditor)",
          "task": "最厳格な「コードカバレッジ視点」で考古進度を客観審査、既存ファイル漏れを防止。",
          "input": "旧プロジェクトフォルダ実体リスト、docs/records/ 産出文書",
          "output": "docs/survey-checklist.md",
          "ai_recommendation": {
            "tool": "human",
            "tier": "human",
            "hint": "最終防衛線"
          },
          "spec_summary": "詳細仕様を展開",
          "spec_sections": [
            {
              "title": "Check 物理基準",
              "desc": "旧フォルダ/モジュール下の全 .tsx/.ts が棚卸完了し、各 API に contract-schemas と BDD 案例がある場合のみチェック可能。"
            }
          ]
        }
      ]
    },
    "s4": {
      "emoji": "🔄",
      "heading": "コア考古棚卸フローと実行 SUPPLEMENT",
      "card_scope_label": "範囲",
      "card_standard_label": "棚卸基準",
      "table_cols": [
        "カテゴリ",
        "優先度",
        "範囲",
        "棚卸基準"
      ],
      "table_rows": [
        {
          "category": "コア業務フロー (Core Domain Flows)",
          "priority": "最高優先",
          "priority_type": "emerald",
          "scope": "Booking Flow、Search & Filter（UI 隠し状態の逆方向棚卸）、Coupon / Affiliate",
          "standard": "跨ページ連続動作、最優先処理。完全 flow.md + contract-schemas + BDD 必須。"
        },
        {
          "category": "静的・コンテンツページ (Static & Content)",
          "priority": "簡易棚卸",
          "priority_type": "blue",
          "scope": "ナビページ、FAQ、Top Page ブロック等。フロント翻訳ファイル保存（CMS なし）。",
          "standard": "schemas と BDD 不要。docs/main/pages/ にページブロックと翻訳 Key 構造を Markdown リスト。"
        },
        {
          "category": "グローバル施設・制約 (Global Infrastructure)",
          "priority": "global-constraints 集約",
          "priority_type": "indigo",
          "scope": "認証状態有効期限（Session 生存周期）、エラー試行回数制限（防刷）、グローバル状態と URL 同期（言語・通貨）",
          "standard": "強い業務行為だが跨ページ。行為テストアーキテクトが docs/records/global-constraints/e2e-cases.feature に集約。"
        }
      ]
    },
    "s5": {
      "emoji": "🔒",
      "heading": "変更管理 ＆ Main Docs 凍結",
      "freeze_callout": "survey-checklist.md が 100% チェック → Main Docs 凍結点。この main/ バージョンで PM と技術・業務変更を議論。",
      "phase1_title": "第一段階（考古期）",
      "phase1_items": [
        "records/ に As-is を記録。",
        "main/flows/ に確認済み As-is ロジックを先行記述。",
        "main/contract-schemas/ に新 To-be 純粋型を直接産出。",
        "checklist 100% → Main Docs 凍結点、PM と技術変更議論。"
      ],
      "phase2_title": "第二段階（リファクタ・開発期）",
      "phase2_items": [
        "議論通過の大改と新要件は Feature Branch で docs/main/ を修正、常に To-be 状態を維持。",
        "PR に CHANGELOG.md 必須（Ticket Link + 変更ファイル記録）。",
        "コードリリース時に文書も Merge。「コード即文書、文書即コード」。"
      ]
    },
    "s6": {
      "emoji": "🧱",
      "heading": "Figma デザインシステムと三層 Token アーキテクチャ",
      "intro_p1": "マルチプロダクト「孤島式保守」：跨ファイル Variables 連動不可のため、「中央テンプレート、ローカルカスタマイズ」実務アーキテクチャを採用。",
      "intro_p2": "中央 Core shadcn Template が Primitive 定義とコンポーネント原型を保守。各刷新プロジェクトはローカル複製、Semantic Tokens 手動上書き、As-is キャンバス 100% 還元。",
      "pro_warning": "⚠️ Figma Variables 作成には Pro plan の Full seat が必要（Collab seat 不可）。",
      "token_rule": "三層 Token 物理隔離鉄則：キャンバスは第三層（Semantic）Token のみ使用可能。",
      "token_cols": [
        "層級 (Layer)",
        "Figma Variable 命名規範",
        "コード端 Namespace 変数対照",
        "デザイナー使用権限"
      ],
      "token_rows": [
        {
          "layer": "1. Primitive 🔒",
          "figma": "primitive/neutral/100",
          "css": "--nv-primitive-neutral-100",
          "access": "❌ キャンバスバインド全面禁止。色彩大辞書。"
        },
        {
          "layer": "2. Brand 🔒",
          "figma": "brand/primary",
          "css": "--nv-brand-primary",
          "access": "❌ キャンバスバインド全面禁止。"
        },
        {
          "layer": "3. Semantic 🔓",
          "figma": "semantic/bg/base",
          "css": "--nv-semantic-bg-base",
          "access": "🔓 唯一合法 Token。この層で命名必須。"
        }
      ],
      "fold_org_content": "中央 Workspace → Core shadcn Template（Primitive Tokens + Standard Components）。各プロジェクトローカル → テンプレ複製 + Local Semantic 上書き + As-is 100% 還元。",
      "fold_pattern_central": "中央保守：100% 業務ロジック視覚一致、カスタマイズ不可（日本地図選区等）→ Copy-Paste。",
      "fold_pattern_local": "ローカル保守：プロダクト線で意味が変わる複合コンポーネント（BookingCard 等）→ 中央 shadcn 基礎 + ローカル組立。",
      "fold_align_desc": "Figma コンポーネント備考規範：組立時 Description に frontend i18n key を手動備考。",
      "fold_align_example": "キャンバス \"Please enter your booking code\" → Description: [i18n-key] booking.field.code_placeholder。EN 文案変更後もフロントが同一フィールドを確認可能。"
    },
    "s7": {
      "emoji": "🌍",
      "heading": "多言語 (i18n) 全自動パイプライン",
      "toolchain_note": "ツールチェーンデータ清洗：文書産出は Claude Web（考古）、刷新は Cursor。モデルに奇怪フォーマット修正、status で unused 标注を要求。",
      "gemini_rule": "Gemini 自動翻訳鉄則：Gemini が Sheets を直接操作可能。Sheet 第一行 instruction sheet に Tone & Style Guide を配置。新プロジェクトは unused フィルタ、SKILL.md 参照作成。",
      "iron_rule": "System Prompt 級グローバル鉄則：JSON に翻訳が存在しない場合、新 Key 創作禁止。Hardcode + // TODO: i18n-missing でバッチ抽出。",
      "fold_json_content": "JSON 形式例：status, key, legacy_key, zh_TW を含む。\n\n自動化 script が legacy_key と元 translations を比対し key 欠落をチェック。JSON を sheet に書き戻し（namespace 列で対照管理）。",
      "steps": [
        "AI が legacy 翻訳を JSON に整理（status: active | unused | in-progress、namespace + legacy_key 含む）",
        "Script が legacy_key と元 translations を比対、欠落チェック（動的 key は手動 active 标注）",
        "Script が Google Spreadsheet に書き込み（単一 sheet + namespace 列、Instruction Sheet に Tone Guide）",
        "Gemini が初版翻訳を代行（日本語統一敬体）",
        "新プロジェクト script が Sheet からコードに同期（unused フィルタ、in-progress は 🚧 表示）",
        "SKILL.md 鉄則：key 欠落時は創作禁止、hardcode + // TODO: i18n-missing"
      ]
    },
    "s8": {
      "emoji": "🏁",
      "heading": "棚卸、校対と刷新開始",
      "validation_heading": "平行対照と検収",
      "validation_items": [
        "新旧プロジェクトを同一 workspace に配置し前後対照。",
        "\\n はフロントで CSS whitespace-pre-line で処理。",
        "独立 Docusaurus サイト repo で PM と確認。"
      ],
      "log_rule": "鉄則境界：不明な旧ロジックには全て log を追加し本番実行を記録。一定期間データなしなら安全に削除可能。",
      "skills_heading": "Issue 分割と Matt Pocock Agent Skills",
      "skills_subheading": "Issues を 5 大 Agent Skills に分割。monorepo 特性を活用。Issue 並行タスク。",
      "skills_cols": [
        "Skill",
        "説明",
        "推奨 AI",
        "段階"
      ],
      "skills_rows": [
        {
          "name": "Grill-with-Docs",
          "desc": "考古文書と設計ツリーに沿い決策分岐を明確化",
          "ai": "Claude Opus 4.6",
          "phase": "計画"
        },
        {
          "name": "To-PRD",
          "desc": "合意から PRD 産出、User Stories とモジュール草案含む",
          "ai": "Claude Sonnet 4.5",
          "phase": "計画"
        },
        {
          "name": "To-Issues",
          "desc": "PRD を垂直スライス Issue に分解、blocking 関係構築",
          "ai": "Claude Sonnet 4.5",
          "phase": "計画"
        },
        {
          "name": "TDD",
          "desc": "赤緑リファクタ循環、一行テスト一行実装、機能漏れ防止",
          "ai": "Cursor Composer 2.5",
          "phase": "開発"
        },
        {
          "name": "Architecture-Refactor",
          "desc": "浅いモジュール深化、テスト境界明確化、Agent 安定ナビ",
          "ai": "Cursor Composer 2.5",
          "phase": "開発"
        }
      ],
      "refs_heading": "技術参考リンク",
      "refs": [
        {
          "label": "Stop writing docs by hand",
          "url": "https://www.aihero.dev/5-agent-skills-i-use-every-day"
        },
        {
          "label": "Playwright BDD",
          "url": "https://playwright.dev/docs/test-agents"
        }
      ],
      "issues_heading": "原子化 Issue 例",
      "issues": [
        {
          "id": "#01",
          "tag": "Schema",
          "title": "transformBookingAmount 純関数を実装",
          "blocks": "ブロッカーなし、即開始可"
        },
        {
          "id": "#02",
          "tag": "UI",
          "title": "Figma に基づく新版 BookingCard 静的コンポーネント実装",
          "blocks": "#01 にブロック"
        },
        {
          "id": "#03",
          "tag": "BDD",
          "title": "予約コード検証 Edge Cases 検収案例を記述",
          "blocks": "#01 と並行可"
        }
      ],
      "roadmap_heading": "Roadmap",
      "roadmap": [
        {
          "title": "Phase 1：考古とデータ境界",
          "desc": "4ロール Skills が Main Docs 産出、100% survey-checklist 達成",
          "risk": "🔥 リスク管理：凍結後 PM と技術変更議論"
        },
        {
          "title": "Phase 2：Figma システム再編",
          "desc": "中央テンプレ複製 + Local Semantic 上書き + As-is キャンバス 100% 還元"
        },
        {
          "title": "Phase 3：開発とリファクタ開始",
          "desc": "Claude To-Issues 完了後、Cursor Agent + 新人が TDD 刷新パイプライン実行"
        }
      ]
    },
    "footer": {
      "text": "Project Renovation & Refactor Plan"
    }
  }
};