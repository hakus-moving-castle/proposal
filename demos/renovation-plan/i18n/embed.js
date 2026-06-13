window.__I18N_EMBEDDED__={
  "zh-tw": {
    "meta": {
      "title": "專案全面翻新：AI 驅動的敏捷考古與重構計畫"
    },
    "common": {
      "fold_docflow": "文件流向圖",
      "fold_iof": "Input / Output / Format 細節",
      "fold_output_tree": "Output 目錄結構",
      "fold_note": "盤點備註",
      "fold_steps": "翻譯準備步驟（共 {n} 步）",
      "fold_skills_table": "Skills 對照表",
      "fold_deliverables": "產出物清單",
      "label_input": "Input",
      "label_output": "Output",
      "label_format": "Format",
      "tier_budget": "可省",
      "tier_required": "必用",
      "tier_context": "需上下文",
      "tier_human": "人工",
      "tier_budget_desc": "可用較便宜模型",
      "tier_required_desc": "不建議降級",
      "tier_context_desc": "需完整 codebase",
      "tier_human_desc": "不需 AI",
      "tool_claude": "Claude",
      "tool_cursor": "Cursor",
      "tool_human": "人工"
    },
    "nav": {
      "toc": "目錄"
    },
    "hero": {
      "title": "專案全面翻新：AI 驅動的敏捷考古與重構計畫",
      "subtitle": "透過 AI 考古、資料邊界隔離、Figma 設計系統重建與 Matt Pocock Skills 流水線，徹底終結設計脫鉤與技術債。"
    },
    "toc": [
      {
        "id": "problems",
        "label": "前情提要"
      },
      {
        "id": "vision",
        "label": "現況與願景"
      },
      {
        "id": "roles",
        "label": "四角色流水線"
      },
      {
        "id": "docflow",
        "label": "文件流向"
      },
      {
        "id": "survey",
        "label": "盤點優先順序"
      },
      {
        "id": "freeze",
        "label": "凍結與變更管理"
      },
      {
        "id": "figma",
        "label": "Figma 設計系統"
      },
      {
        "id": "i18n",
        "label": "翻譯準備"
      },
      {
        "id": "dev",
        "label": "開發階段分工"
      },
      {
        "id": "pipeline",
        "label": "執行工廠"
      },
      {
        "id": "roadmap",
        "label": "Roadmap"
      }
    ],
    "problems": {
      "heading": "前情提要：目前遇到的問題",
      "groups": [
        {
          "title": "前端程式碼混亂",
          "items": [
            "出現許多不推薦的寫法，容易踩到 Framework Bug 且不易排查"
          ]
        },
        {
          "title": "後端沒有規格書",
          "items": [
            "單從前端程式碼無法準確判斷 API 回應格式，為暫解錯誤格式而加上額外判斷",
            "Error 格式不統一，前端累積大量處理不同錯誤格式的額外邏輯",
            "回傳格式與命名混亂，前端自行多一層 transform，但分散各處，難以追溯原始 value"
          ]
        }
      ]
    },
    "vision": {
      "heading": "現況痛點 vs 翻新願景",
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
    "roles": {
      "heading": "規格書建立：四角色 Skills Workflow",
      "subheading": "精準框定人機協作邊界，將混亂代碼提煉為可凍結的永久事實文檔。",
      "cards": [
        {
          "title": "1. 代碼考古學家",
          "ai_recommendation": {
            "tool": "claude",
            "model": "Sonnet 4.5",
            "tier": "budget",
            "hint": "大量檔案分批考古"
          },
          "task": "摸清舊系統 As-is，提煉純粹業務行為，排除死碼。",
          "inputs": [
            "舊專案特定路由/組件原始碼（Repomix 打包）"
          ],
          "output": "docs/records/[domain]/flow.md",
          "format": [
            "### Happy Path — 極簡成功操作步驟",
            "### Edge Cases — 所有業務 if-else 分支（排除基建錯誤）",
            "### Unverified Logic — 死碼/神祕邏輯，留待討論"
          ]
        },
        {
          "title": "2. 資料邊界規劃師",
          "ai_recommendation": {
            "tool": "claude",
            "model": "Opus 4.6",
            "tier": "required",
            "hint": "型別精度要求高"
          },
          "task": "阻絕舊後端不良格式，定義乾淨前端 Interface，收攏 Transformer。",
          "inputs": [
            "舊 API Raw JSON",
            "flow.md 業務邏輯",
            "組件轉換/衍生計算片段",
            "Store 觸發源與衍生狀態"
          ],
          "output": "docs/main/contract-schemas/endpoints/[name].md",
          "format": [
            "Upstream Raw JSON Schema (TS type)",
            "Target Interface（@upstream_source / @old_logic_location）",
            "Transformer 純函數原型（可執行 TS）"
          ]
        },
        {
          "title": "3. 行為測試架構師",
          "ai_recommendation": {
            "tool": "claude",
            "model": "Sonnet 4.5",
            "tier": "budget",
            "hint": "結構化 BDD 輸出"
          },
          "task": "將 flow.md + contract-schemas 轉化為解耦的 BDD 驗收案例。",
          "inputs": [
            "docs/records/[domain]/flow.md",
            "docs/main/contract-schemas/"
          ],
          "output": "docs/records/[domain]/e2e-cases.feature",
          "format": [
            "Gherkin Given-When-Then",
            "涵蓋所有業務 Edge Cases",
            "排除 404/500/斷線等基建錯誤"
          ]
        },
        {
          "title": "4. 文件盤點員",
          "ai_recommendation": {
            "tool": "human",
            "tier": "human",
            "hint": "最終防線"
          },
          "task": "以代碼覆蓋率視角客觀審查考古進度，確保不漏任何檔案。",
          "inputs": [
            "舊專案檔案清單",
            "docs/records/ 已產出文檔"
          ],
          "output": "docs/survey-checklist.md",
          "format": [
            "模組下所有 .ts/.tsx 已盤點",
            "每隻 API 有 contract-schemas + BDD",
            "100% 勾選 = Main Docs 凍結點"
          ]
        }
      ]
    },
    "docflow": {
      "heading": "頂層架構與文件流向",
      "subheading": "從舊 Codebase 到可凍結 Main Docs 的完整產出鏈。",
      "diagram": "graph TD\n    Code[\"舊專案原始碼\"] -->|Repomix / Cursor| R1[\"1. 代碼考古學家\"]\n    R1 -->|As-is 業務行為| Flow[\"records/…/flow.md\"]\n    Payload[\"舊 API Raw JSON\"] --> R2[\"2. 資料邊界規劃師\"]\n    Flow --> R2\n    Comp[\"舊組件與 Store\"] --> R2\n    R2 -->|To-be 乾淨型別| Schema[\"main/contract-schemas/\"]\n    R2 --> Ctx[\"context.md\"]\n    R1 --> Ctx\n    Flow --> R3[\"3. 行為測試架構師\"]\n    Schema --> R3\n    R3 -->|BDD| BDD[\"records/…/e2e-cases.feature\"]\n    Flow --> R4[\"4. 文件盤點員\"]\n    Schema --> R4\n    BDD --> R4\n    R4 -->|覆蓋率審查| Check[\"survey-checklist.md\"]\n    Check -->|100%| Final[\"Main Docs 凍結點\"]"
    },
    "docstructure": {
      "heading": "Output 目錄規範",
      "tree": "docs/\n├── context.md               # 全域 Terminology（常駐不刪）\n├── survey-checklist.md      # 考古進度追蹤（文件盤點員維護）\n├── records/                 # 考古暫存區（凍結後可刪）\n│   └── [domain]/\n│       ├── flow.md          # As-is 業務行為\n│       └── e2e-cases.feature\n└── main/                    # 永久事實來源 SSOT\n    ├── flows/               # 核心業務流程\n    ├── pages/               # 頁面與區塊邏輯\n    └── contract-schemas/\n        ├── shared/          # 全域 Entities\n        └── endpoints/       # API 規格 + Transformer"
    },
    "survey": {
      "heading": "核心盤點優先順序",
      "categories": [
        {
          "title": "1. 核心業務流程",
          "priority": "最高優先",
          "items": [
            "Booking Flow（預約主流程）",
            "Search & Filter（逆向盤點 UI 衍生狀態）",
            "Coupon / Affiliate（優惠券與引流）"
          ],
          "note": "跨頁面連續動作，必須優先處理。需完整 flow.md + contract-schemas + BDD。",
          "ai_recommendation": {
            "tool": "claude",
            "model": "Opus 4.6",
            "tier": "required",
            "hint": "核心流程"
          }
        },
        {
          "title": "2. 靜態與內容頁",
          "priority": "簡化盤點",
          "items": [
            "導覽頁、FAQ、Top Page 區塊等"
          ],
          "note": "存於前端翻譯檔（無 CMS），不需 contract-schemas 與 BDD。只需在 docs/main/pages/ 列出區塊與 i18n key 結構。",
          "ai_recommendation": {
            "tool": "claude",
            "model": "Sonnet 4.5",
            "tier": "budget",
            "hint": "靜態頁盤點"
          }
        },
        {
          "title": "3. 全域基礎設施",
          "priority": "收攏至 global-constraints",
          "items": [
            "驗證狀態有效期限（Session 生存週期）",
            "錯誤嘗試次數限制（防刷邏輯）",
            "全域狀態與 URL 同步（語系、貨幣）"
          ],
          "note": "不屬單一頁面但具強烈業務行為。統一收攏至 docs/records/global-constraints/e2e-cases.feature。",
          "ai_recommendation": {
            "tool": "claude",
            "model": "Sonnet 4.5",
            "tier": "budget",
            "hint": "跨模組收攏"
          }
        }
      ]
    },
    "freeze": {
      "heading": "變更管理與 Main Docs 凍結",
      "phase1_title": "第一階段：考古期",
      "phase1_items": [
        "records/ 記錄 As-is 現況",
        "main/flows/ 寫入確認過的 As-is 邏輯",
        "main/contract-schemas/ 產出 To-be 純淨型別",
        "survey-checklist.md 達 100% → Main Docs 凍結點，與 PM 進行技術變更討論"
      ],
      "phase2_title": "第二階段：重構與新需求開發期",
      "phase2_items": [
        "新需求在 Feature Branch 修改 docs/main/（永遠保持 To-be 終點狀態）",
        "PR 附帶 CHANGELOG.md（Ticket link + 修改文件清單）",
        "程式碼上線時文檔一併 Merge — 代碼即文件，文件即代碼"
      ]
    },
    "figma": {
      "heading": "Figma 設計系統",
      "org_heading": "組織架構：中央範本，本地清洗",
      "org_desc": "Figma Professional 無法跨檔案連動 Variables，改採 Standard Recipe 務實架構。",
      "variables_note": "⚠️ 建立 Figma Variables 至少需要 Pro plan 的 Full seat（非 Collab seat）。",
      "org_central": "中央 Workspace → Core shadcn Template（Primitive Tokens + Standard Components）",
      "org_local": "各專案本地 → 複製範本 + Local Semantic 覆寫 + 100% 還原 As-is 畫面",
      "pattern_heading": "業務模組維護邊界",
      "pattern_central": "中央維護：100% 邏輯視覺一致、絕無客製化可能（如日本地圖選區）→ Copy-Paste",
      "pattern_local": "本地維護：會因產品線改變語意的複合組件（BookingCard、CouponSelector）→ 中央 shadcn 基礎 + 本地組裝",
      "token_heading": "三層 Token 物理隔離防線",
      "token_subheading": "設計師在畫布上只能且必須使用第三層 Semantic Token。",
      "tiers": [
        {
          "layer": "1. Primitive",
          "example": "primitive/neutral/100, primitive/blue/500",
          "css": "--nv-primitive-neutral-100",
          "access": "🔒 設計師全面禁止",
          "locked": true
        },
        {
          "layer": "2. Brand",
          "example": "brand/primary, brand/secondary",
          "css": "--nv-brand-primary",
          "access": "🔒 設計師全面禁止",
          "locked": true
        },
        {
          "layer": "3. Semantic",
          "example": "semantic/bg/base, semantic/badge/anniversary-bg",
          "css": "--nv-semantic-bg-base",
          "access": "🔓 畫布唯一合法層",
          "locked": false
        }
      ],
      "align_heading": "畫面重建與 i18n-key 脈絡對齊",
      "align_desc": "設計稿 100% 對齊正式環境結構。文案不強求即時同步，但 Figma 組件 Description 必須備註 i18n key。",
      "align_example": "畫布顯示 \"Please enter your booking code\" → Description: [i18n-key] booking.field.code_placeholder"
    },
    "i18n_prep": {
      "heading": "翻譯準備流程",
      "note": "考古文件建議用 Claude Web 產出；翻新實作交給 Cursor。",
      "steps": [
        "AI 整理 legacy 翻譯為 JSON（status: active | unused | in-progress，含 namespace + legacy_key）",
        "Script 比對 legacy_key 與原 translations，檢查缺漏（動態 key 需手動標 active）",
        "Script 寫入 Google Spreadsheet（單一 sheet + namespace 欄位；Instruction Sheet 放 Tone Guide）",
        "Gemini 可代勞初版翻譯委託（日文統一敬體）",
        "新專案 script 從 Sheet 同步回程式碼（unused 過濾、in-progress 顯示 🚧）",
        "SKILL.md 鐵律：缺 key 禁止自創，hardcode + // TODO: i18n-missing"
      ],
      "step_details": [
        {
          "ai_recommendation": {
            "tool": "claude",
            "model": "Haiku 4.5",
            "tier": "budget",
            "hint": "格式整理"
          }
        },
        {},
        {},
        {},
        {},
        {}
      ]
    },
    "dev": {
      "heading": "開發階段：Matt Pocock Agent Skills 分工",
      "subheading": "參考 Matt Pocock 五步驟 Skills 流水線，明確區分 Claude 與 Cursor 職責。",
      "ref_label": "參考來源",
      "ref_url": "https://www.aihero.dev/5-agent-skills-i-use-every-day",
      "claude_title": "Claude 負責（考古 → To-Issues）",
      "claude_desc": "文件產出、需求釐清、PRD 撰寫、Issue 原子化拆解。適合無記憶但需要嚴格流程的規劃階段。",
      "cursor_title": "Cursor Agent + 新人練習（TDD → 翻新實作）",
      "cursor_desc": "TDD 紅綠重構、架構深化、實際程式碼翻新。部分 Issue 交給新人練習，資深用 Cursor Agent 把關。",
      "table_skill": "Skill",
      "table_desc": "說明",
      "table_ai": "建議 AI",
      "table_phase": "階段",
      "skills": [
        {
          "name": "Grill-with-Docs",
          "desc": "結合考古文件，沿設計樹逐項釐清決策分支",
          "tool": "Claude",
          "phase": "規劃",
          "ai_recommendation": {
            "tool": "claude",
            "model": "Opus 4.6",
            "tier": "required",
            "hint": "決策樹深度推理"
          }
        },
        {
          "name": "To-PRD",
          "desc": "從共識產出 PRD，含 User Stories 與模組草圖",
          "tool": "Claude",
          "phase": "規劃",
          "ai_recommendation": {
            "tool": "claude",
            "model": "Sonnet 4.5",
            "tier": "budget",
            "hint": "結構化 PRD"
          }
        },
        {
          "name": "To-Issues",
          "desc": "PRD 拆解為垂直切片 Issue，建立 blocking 關係",
          "tool": "Claude",
          "phase": "規劃",
          "ai_recommendation": {
            "tool": "claude",
            "model": "Sonnet 4.5",
            "tier": "budget",
            "hint": "原子化拆解"
          }
        },
        {
          "name": "TDD",
          "desc": "紅綠重構循環，一行測試一行實作，確保重構不漏",
          "tool": "Cursor",
          "phase": "開發",
          "ai_recommendation": {
            "tool": "cursor",
            "model": "Composer 2.5",
            "tier": "context",
            "hint": "紅綠重構"
          }
        },
        {
          "name": "Architecture-Refactor",
          "desc": "深化淺層模組、釐清測試邊界，讓 Agent 能穩定導航",
          "tool": "Cursor",
          "phase": "開發",
          "ai_recommendation": {
            "tool": "cursor",
            "model": "Composer 2.5",
            "tier": "context",
            "hint": "跨檔案重構"
          }
        }
      ]
    },
    "pipeline": {
      "heading": "執行工廠：原子化 Issue 範例",
      "subheading": "To-Issues 產出的垂直切片，每張 Issue 貫穿所有整合層（Tracer Bullet）。",
      "mock_issues": [
        {
          "id": "#01",
          "tag": "Schema",
          "title": "實作 transformBookingAmount 純函數",
          "blocks": "無阻塞，可立即開始",
          "ai_recommendation": {
            "tool": "cursor",
            "model": "Composer 2.5",
            "tier": "context",
            "hint": "TDD 純函數"
          }
        },
        {
          "id": "#02",
          "tag": "UI",
          "title": "依據 Figma 實作新版 BookingCard 靜態元件",
          "blocks": "阻塞於 #01",
          "ai_recommendation": {
            "tool": "cursor",
            "model": "Composer 2.5",
            "tier": "context",
            "hint": "元件實作"
          }
        },
        {
          "id": "#03",
          "tag": "BDD",
          "title": "撰寫預約代碼驗證 Edge Cases 驗收案例",
          "blocks": "可與 #01 平行",
          "ai_recommendation": {
            "tool": "cursor",
            "model": "Composer 2.5",
            "tier": "context",
            "hint": "寫驗收測試"
          }
        }
      ]
    },
    "roadmap": {
      "heading": "Roadmap",
      "phases": [
        {
          "title": "Phase 1：考古與資料邊界",
          "description": "四角色 Skills 產出 Main Docs，達成 100% survey-checklist",
          "risk": "🔥 風險控制點：凍結後與 PM 發動技術變更討論",
          "deliverables": [
            "flow.md × N domains",
            "contract-schemas/",
            "e2e-cases.feature",
            "context.md"
          ],
          "ai_recommendation": {
            "tool": "claude",
            "model": "Opus+Sonnet",
            "tier": "required",
            "hint": "規劃階段"
          }
        },
        {
          "title": "Phase 2：Figma 系統重組",
          "description": "中央範本複製 + Local Semantic 覆寫 + 100% As-is 畫面還原",
          "deliverables": [
            "Design System File",
            "i18n-key 對齊備註",
            "翻譯 JSON → Google Sheet"
          ],
          "ai_recommendation": {
            "tool": "human",
            "tier": "human",
            "hint": "Figma 手動作業"
          }
        },
        {
          "title": "Phase 3：開發與重構啟動",
          "description": "Claude 完成 To-Issues 後，Cursor Agent + 新人執行 TDD 翻新流水線",
          "deliverables": [
            "垂直切片 PR",
            "CHANGELOG.md",
            "測試覆蓋達標"
          ],
          "ai_recommendation": {
            "tool": "cursor",
            "model": "Composer 2.5",
            "tier": "context",
            "hint": "開發與重構"
          }
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
      "fold_docflow": "Document flow diagram",
      "fold_iof": "Input / Output / Format details",
      "fold_output_tree": "Output directory structure",
      "fold_note": "Survey notes",
      "fold_steps": "Translation prep steps ({n} steps)",
      "fold_skills_table": "Skills reference table",
      "fold_deliverables": "Deliverables",
      "label_input": "Input",
      "label_output": "Output",
      "label_format": "Format",
      "tier_budget": "Budget",
      "tier_required": "Required",
      "tier_context": "Context",
      "tier_human": "Human",
      "tier_budget_desc": "cheaper model OK",
      "tier_required_desc": "do not downgrade",
      "tier_context_desc": "needs full codebase",
      "tier_human_desc": "no AI needed",
      "tool_claude": "Claude",
      "tool_cursor": "Cursor",
      "tool_human": "Human"
    },
    "nav": {
      "toc": "Contents"
    },
    "hero": {
      "title": "Full Project Renovation: AI-Driven Agile Archaeology & Refactor Plan",
      "subtitle": "End design drift and technical debt through AI archaeology, data boundary isolation, Figma design system rebuild, and the Matt Pocock Skills pipeline."
    },
    "toc": [
      {
        "id": "problems",
        "label": "Background"
      },
      {
        "id": "vision",
        "label": "As-is vs To-be"
      },
      {
        "id": "roles",
        "label": "4-Role Pipeline"
      },
      {
        "id": "docflow",
        "label": "Doc Flow"
      },
      {
        "id": "survey",
        "label": "Survey Priority"
      },
      {
        "id": "freeze",
        "label": "Freeze & Change"
      },
      {
        "id": "figma",
        "label": "Figma System"
      },
      {
        "id": "i18n",
        "label": "i18n Prep"
      },
      {
        "id": "dev",
        "label": "Dev Workflow"
      },
      {
        "id": "pipeline",
        "label": "Execution Factory"
      },
      {
        "id": "roadmap",
        "label": "Roadmap"
      }
    ],
    "problems": {
      "heading": "Background: Current Problems",
      "groups": [
        {
          "title": "Messy frontend code",
          "items": [
            "Non-recommended patterns that trigger hard-to-debug framework bugs"
          ]
        },
        {
          "title": "No backend specification",
          "items": [
            "Cannot infer API response format from frontend code alone; extra guards added as workarounds",
            "Inconsistent error formats leading to scattered error-handling logic",
            "Chaotic naming and shapes; transforms are scattered, making original values hard to trace"
          ]
        }
      ]
    },
    "vision": {
      "heading": "Pain Points vs Renovation Vision",
      "as_is_title": "As-is Pain Points",
      "to_be_title": "To-be Vision",
      "as_is_items": [
        "Design specs out of sync with production",
        "Code degradation and tech debt",
        "Difficult onboarding and tribal knowledge",
        "Chaotic backend formats with scattered transforms"
      ],
      "to_be_items": [
        "100% test coverage — refactor without regressions",
        "Figma design system synced with code",
        "AI Agent dispatch with clear human-AI boundaries",
        "Data boundary isolation with clean types"
      ]
    },
    "roles": {
      "heading": "Spec Creation: 4-Role Skills Workflow",
      "subheading": "Define human-AI boundaries and distill chaos into freezable fact documentation.",
      "cards": [
        {
          "title": "1. Code Archaeologist",
          "ai_recommendation": {
            "tool": "claude",
            "model": "Sonnet 4.5",
            "tier": "budget",
            "hint": "batch archaeology"
          },
          "task": "Map As-is behavior, extract pure business logic, eliminate dead code.",
          "inputs": [
            "Legacy route/component source (Repomix bundle)"
          ],
          "output": "docs/records/[domain]/flow.md",
          "format": [
            "### Happy Path",
            "### Edge Cases (business branches only)",
            "### Unverified Logic"
          ]
        },
        {
          "title": "2. Data Boundary Planner",
          "ai_recommendation": {
            "tool": "claude",
            "model": "Opus 4.6",
            "tier": "required",
            "hint": "high-precision types"
          },
          "task": "Block dirty backend formats; define clean interfaces; consolidate transformers.",
          "inputs": [
            "Raw API JSON",
            "flow.md",
            "Component transform logic",
            "Store triggers & derived state"
          ],
          "output": "docs/main/contract-schemas/endpoints/[name].md",
          "format": [
            "Upstream Raw JSON Schema",
            "Target Interface with JSDoc",
            "Transformer pure function prototypes"
          ]
        },
        {
          "title": "3. Behavior Test Architect",
          "ai_recommendation": {
            "tool": "claude",
            "model": "Sonnet 4.5",
            "tier": "budget",
            "hint": "structured BDD"
          },
          "task": "Convert flow.md + schemas into decoupled BDD acceptance tests.",
          "inputs": [
            "flow.md",
            "contract-schemas/"
          ],
          "output": "docs/records/[domain]/e2e-cases.feature",
          "format": [
            "Gherkin Given-When-Then",
            "All business edge cases",
            "Exclude infra errors (404/500/offline)"
          ]
        },
        {
          "title": "4. Documentation Auditor",
          "ai_recommendation": {
            "tool": "human",
            "tier": "human",
            "hint": "final gate"
          },
          "task": "Audit archaeology progress from a code-coverage perspective.",
          "inputs": [
            "Legacy file inventory",
            "docs/records/ output"
          ],
          "output": "docs/survey-checklist.md",
          "format": [
            "All .ts/.tsx accounted for",
            "Every API has schema + BDD",
            "100% check = Main Docs freeze"
          ]
        }
      ]
    },
    "docflow": {
      "heading": "Top-Level Architecture & Document Flow",
      "subheading": "From legacy codebase to freezable Main Docs.",
      "diagram": "graph TD\n    Code[\"Legacy codebase\"] -->|Repomix / Cursor| R1[\"1. Code Archaeologist\"]\n    R1 -->|As-is behavior| Flow[\"records/…/flow.md\"]\n    Payload[\"Raw API JSON\"] --> R2[\"2. Data Boundary Planner\"]\n    Flow --> R2\n    Comp[\"Legacy components & Store\"] --> R2\n    R2 -->|To-be clean types| Schema[\"main/contract-schemas/\"]\n    R2 --> Ctx[\"context.md\"]\n    R1 --> Ctx\n    Flow --> R3[\"3. Behavior Test Architect\"]\n    Schema --> R3\n    R3 -->|BDD| BDD[\"records/…/e2e-cases.feature\"]\n    Flow --> R4[\"4. Documentation Auditor\"]\n    Schema --> R4\n    BDD --> R4\n    R4 -->|Coverage audit| Check[\"survey-checklist.md\"]\n    Check -->|100%| Final[\"Main Docs freeze point\"]"
    },
    "docstructure": {
      "heading": "Output Directory Convention",
      "tree": "docs/\n├── context.md               # Global terminology (permanent)\n├── survey-checklist.md      # Archaeology progress tracker\n├── records/                 # Staging (deletable after freeze)\n│   └── [domain]/\n│       ├── flow.md\n│       └── e2e-cases.feature\n└── main/                    # Single Source of Truth\n    ├── flows/\n    ├── pages/\n    └── contract-schemas/\n        ├── shared/\n        └── endpoints/"
    },
    "survey": {
      "heading": "Core Survey Priority",
      "categories": [
        {
          "title": "1. Core Domain Flows",
          "priority": "Highest",
          "items": [
            "Booking Flow",
            "Search & Filter",
            "Coupon / Affiliate"
          ],
          "note": "Cross-page flows — full flow.md + contract-schemas + BDD required.",
          "ai_recommendation": {
            "tool": "claude",
            "model": "Opus 4.6",
            "tier": "required",
            "hint": "core flows"
          }
        },
        {
          "title": "2. Static & Content Pages",
          "priority": "Simplified",
          "items": [
            "Navigation, FAQ, Top Page blocks"
          ],
          "note": "Stored in i18n files (no CMS). List blocks and i18n keys in docs/main/pages/ only.",
          "ai_recommendation": {
            "tool": "claude",
            "model": "Sonnet 4.5",
            "tier": "budget",
            "hint": "static pages"
          }
        },
        {
          "title": "3. Global Infrastructure",
          "priority": "global-constraints",
          "items": [
            "Session validity period",
            "Error attempt limits (anti-abuse)",
            "Global state & URL sync (locale, currency)"
          ],
          "note": "Consolidated into docs/records/global-constraints/e2e-cases.feature.",
          "ai_recommendation": {
            "tool": "claude",
            "model": "Sonnet 4.5",
            "tier": "budget",
            "hint": "cross-module"
          }
        }
      ]
    },
    "freeze": {
      "heading": "Change Management & Main Docs Freeze",
      "phase1_title": "Phase 1: Archaeology",
      "phase1_items": [
        "records/ captures As-is",
        "main/flows/ writes confirmed As-is logic",
        "main/contract-schemas/ produces To-be clean types",
        "survey-checklist.md 100% → freeze point, PM change discussion"
      ],
      "phase2_title": "Phase 2: Refactor & New Development",
      "phase2_items": [
        "Feature branches modify docs/main/ (always To-be endpoint)",
        "PR includes CHANGELOG.md with ticket links",
        "Docs merge with code — code is docs, docs is code"
      ]
    },
    "figma": {
      "heading": "Figma Design System",
      "org_heading": "Organization: Central Template, Local Customization",
      "org_desc": "Figma Professional cannot cross-file link Variables — Standard Recipe architecture.",
      "variables_note": "⚠️ Creating Figma Variables requires at least a Pro plan Full seat (not Collab seat).",
      "org_central": "Central Workspace → Core shadcn Template (Primitives + Standard Components)",
      "org_local": "Per-project → Copy template + Local Semantic overrides + 100% As-is screen rebuild",
      "pattern_heading": "Pattern Maintenance Boundaries",
      "pattern_central": "Central: 100% identical logic & visuals, zero customization (e.g. Japan map selector) → Copy-Paste",
      "pattern_local": "Local: Product-specific semantics (BookingCard, CouponSelector) → Central shadcn base + local assembly",
      "token_heading": "3-Tier Token Physical Isolation",
      "token_subheading": "Designers may only use Layer 3 Semantic tokens on canvas.",
      "tiers": [
        {
          "layer": "1. Primitive",
          "example": "primitive/neutral/100, primitive/blue/500",
          "css": "--nv-primitive-neutral-100",
          "access": "🔒 Designers forbidden",
          "locked": true
        },
        {
          "layer": "2. Brand",
          "example": "brand/primary, brand/secondary",
          "css": "--nv-brand-primary",
          "access": "🔒 Designers forbidden",
          "locked": true
        },
        {
          "layer": "3. Semantic",
          "example": "semantic/bg/base",
          "css": "--nv-semantic-bg-base",
          "access": "🔓 Only legal canvas layer",
          "locked": false
        }
      ],
      "align_heading": "Screen Rebuild & i18n-key Contextual Alignment",
      "align_desc": "100% structural alignment with production. Figma component Description must note i18n key.",
      "align_example": "Canvas shows \"Please enter your booking code\" → Description: [i18n-key] booking.field.code_placeholder"
    },
    "i18n_prep": {
      "heading": "Translation Preparation",
      "note": "Archaeology docs via Claude Web; renovation implementation via Cursor.",
      "steps": [
        "AI consolidates legacy translations to JSON (status: active | unused | in-progress)",
        "Script compares legacy_key vs original translations; flag dynamic keys as active manually",
        "Script writes to Google Spreadsheet (single sheet + namespace; Instruction Sheet for Tone Guide)",
        "Gemini can handle initial translation delegation (Japanese: 敬體)",
        "New project script syncs Sheet → code (filter unused; in-progress shows 🚧)",
        "SKILL.md rule: missing keys → hardcode + // TODO: i18n-missing, never invent keys"
      ],
      "step_details": [
        {
          "ai_recommendation": {
            "tool": "claude",
            "model": "Haiku 4.5",
            "tier": "budget",
            "hint": "format cleanup"
          }
        },
        {},
        {},
        {},
        {},
        {}
      ]
    },
    "dev": {
      "heading": "Development: Matt Pocock Agent Skills Split",
      "subheading": "Matt Pocock's 5-step Skills pipeline with clear Claude vs Cursor responsibilities.",
      "ref_label": "Reference",
      "ref_url": "https://www.aihero.dev/5-agent-skills-i-use-every-day",
      "claude_title": "Claude (Archaeology → To-Issues)",
      "claude_desc": "Documentation, requirement clarification, PRD writing, atomic issue breakdown. Strict process for planning.",
      "cursor_title": "Cursor Agent + Junior Practice (TDD → Renovation)",
      "cursor_desc": "TDD red-green-refactor, architecture deepening, actual code renovation. Some issues for juniors; seniors gate with Cursor Agent.",
      "table_skill": "Skill",
      "table_desc": "Description",
      "table_ai": "Recommended AI",
      "table_phase": "Phase",
      "skills": [
        {
          "name": "Grill-with-Docs",
          "desc": "Walk the design tree using archaeology docs",
          "tool": "Claude",
          "phase": "Planning",
          "ai_recommendation": {
            "tool": "claude",
            "model": "Opus 4.6",
            "tier": "required",
            "hint": "decision-tree reasoning"
          }
        },
        {
          "name": "To-PRD",
          "desc": "Produce PRD with user stories and module sketch",
          "tool": "Claude",
          "phase": "Planning",
          "ai_recommendation": {
            "tool": "claude",
            "model": "Sonnet 4.5",
            "tier": "budget",
            "hint": "structured PRD"
          }
        },
        {
          "name": "To-Issues",
          "desc": "Break PRD into vertical-slice issues with blocking relations",
          "tool": "Claude",
          "phase": "Planning",
          "ai_recommendation": {
            "tool": "claude",
            "model": "Sonnet 4.5",
            "tier": "budget",
            "hint": "atomic breakdown"
          }
        },
        {
          "name": "TDD",
          "desc": "Red-green-refactor loop; one test, one implementation",
          "tool": "Cursor",
          "phase": "Development",
          "ai_recommendation": {
            "tool": "cursor",
            "model": "Composer 2.5",
            "tier": "context",
            "hint": "red-green refactor"
          }
        },
        {
          "name": "Architecture-Refactor",
          "desc": "Deepen shallow modules; clarify test boundaries for agents",
          "tool": "Cursor",
          "phase": "Development",
          "ai_recommendation": {
            "tool": "cursor",
            "model": "Composer 2.5",
            "tier": "context",
            "hint": "cross-file refactor"
          }
        }
      ]
    },
    "pipeline": {
      "heading": "Execution Factory: Sample Atomic Issues",
      "subheading": "Vertical slices from To-Issues — each cuts through all integration layers (Tracer Bullet).",
      "mock_issues": [
        {
          "id": "#01",
          "tag": "Schema",
          "title": "Implement transformBookingAmount pure function",
          "blocks": "No blockers — start immediately",
          "ai_recommendation": {
            "tool": "cursor",
            "model": "Composer 2.5",
            "tier": "context",
            "hint": "TDD pure fn"
          }
        },
        {
          "id": "#02",
          "tag": "UI",
          "title": "Build BookingCard static component per Figma",
          "blocks": "Blocked by #01",
          "ai_recommendation": {
            "tool": "cursor",
            "model": "Composer 2.5",
            "tier": "context",
            "hint": "component build"
          }
        },
        {
          "id": "#03",
          "tag": "BDD",
          "title": "Write booking code validation edge case tests",
          "blocks": "Parallel with #01",
          "ai_recommendation": {
            "tool": "cursor",
            "model": "Composer 2.5",
            "tier": "context",
            "hint": "acceptance tests"
          }
        }
      ]
    },
    "roadmap": {
      "heading": "Roadmap",
      "phases": [
        {
          "title": "Phase 1: Archaeology & Data Boundaries",
          "description": "4-role Skills produce Main Docs; 100% survey-checklist",
          "risk": "🔥 Risk checkpoint: Freeze then PM change discussion",
          "deliverables": [
            "flow.md × N domains",
            "contract-schemas/",
            "e2e-cases.feature",
            "context.md"
          ],
          "ai_recommendation": {
            "tool": "claude",
            "model": "Opus+Sonnet",
            "tier": "required",
            "hint": "planning phase"
          }
        },
        {
          "title": "Phase 2: Figma System Reorganization",
          "description": "Copy central template + Local Semantic + 100% As-is rebuild",
          "deliverables": [
            "Design System File",
            "i18n-key alignment notes",
            "Translation JSON → Google Sheet"
          ],
          "ai_recommendation": {
            "tool": "human",
            "tier": "human",
            "hint": "manual Figma work"
          }
        },
        {
          "title": "Phase 3: Development & Refactor Launch",
          "description": "After Claude To-Issues: Cursor Agent + juniors run TDD pipeline",
          "deliverables": [
            "Vertical-slice PRs",
            "CHANGELOG.md",
            "Test coverage target met"
          ],
          "ai_recommendation": {
            "tool": "cursor",
            "model": "Composer 2.5",
            "tier": "context",
            "hint": "dev & refactor"
          }
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
      "fold_docflow": "文書フロー図",
      "fold_iof": "Input / Output / Format 詳細",
      "fold_output_tree": "Outputディレクトリ構造",
      "fold_note": "棚卸備考",
      "fold_steps": "翻訳準備ステップ（全{n}ステップ）",
      "fold_skills_table": "Skills対照表",
      "fold_deliverables": "成果物一覧",
      "label_input": "Input",
      "label_output": "Output",
      "label_format": "Format",
      "tier_budget": "節約可",
      "tier_required": "必須",
      "tier_context": "要コンテキスト",
      "tier_human": "人手",
      "tier_budget_desc": "安価なモデル可",
      "tier_required_desc": "ダウングレード非推奨",
      "tier_context_desc": "codebase全体が必要",
      "tier_human_desc": "AI不要",
      "tool_claude": "Claude",
      "tool_cursor": "Cursor",
      "tool_human": "人手"
    },
    "nav": {
      "toc": "目次"
    },
    "hero": {
      "title": "プロジェクト全面刷新：AI駆動のアジャイル考古学とリファクタリング計画",
      "subtitle": "AI考古学、データ境界の分離、Figmaデザインシステム再構築、Matt Pocock Skillsパイプラインにより、デザイン乖離と技術的負債を根本から解消します。"
    },
    "toc": [
      {
        "id": "problems",
        "label": "前情提要"
      },
      {
        "id": "vision",
        "label": "現状とビジョン"
      },
      {
        "id": "roles",
        "label": "4ロール"
      },
      {
        "id": "docflow",
        "label": "文書フロー"
      },
      {
        "id": "survey",
        "label": "棚卸優先順位"
      },
      {
        "id": "freeze",
        "label": "凍結と変更管理"
      },
      {
        "id": "figma",
        "label": "Figma"
      },
      {
        "id": "i18n",
        "label": "翻訳準備"
      },
      {
        "id": "dev",
        "label": "開発分担"
      },
      {
        "id": "pipeline",
        "label": "実行ファクトリー"
      },
      {
        "id": "roadmap",
        "label": "ロードマップ"
      }
    ],
    "problems": {
      "heading": "前情提要：現在の課題",
      "groups": [
        {
          "title": "フロントエンドコードの混乱",
          "items": [
            "非推奨パターンが多く、Framework Bugに遭遇しやすく排查が困難"
          ]
        },
        {
          "title": "バックエンド仕様書の欠如",
          "items": [
            "フロントエンドコードだけではAPIレスポンス形式を正確に判断できず、暫定対応の分岐が増加",
            "エラー形式が統一されておらず、異なる形式への対応ロジックが散在",
            "命名・形式が混乱し、transformが各所に分散し元のvalueを追跡困難"
          ]
        }
      ]
    },
    "vision": {
      "heading": "現状の課題 vs 刷新ビジョン",
      "as_is_title": "As-is 現状の課題",
      "to_be_title": "To-be 刷新ビジョン",
      "as_is_items": [
        "デザイン稿と本番環境の乖離",
        "コード劣化・技術的負債の蓄積",
        "新人オンボーディング困難・属人化",
        "バックエンド形式混乱・transform分散"
      ],
      "to_be_items": [
        "100%テストカバレッジでリファクタリング時の機能漏れ防止",
        "Figmaデザインシステムとコードの同期",
        "AI Agent自動配分＋人とAIの協業境界明確化",
        "データ境界分離によるクリーンな型定義"
      ]
    },
    "roles": {
      "heading": "仕様書構築：4ロール Skills Workflow",
      "subheading": "人とAIの協業境界を明確にし、混乱したコードを凍結可能な事実文書に昇華します。",
      "cards": [
        {
          "title": "1. コード考古学者",
          "ai_recommendation": {
            "tool": "claude",
            "model": "Sonnet 4.5",
            "tier": "budget",
            "hint": "大量ファイル分割考古"
          },
          "task": "As-isを把握し、純粋なビジネスロジックを抽出し、デッドコードを除去します。",
          "inputs": [
            "レガシーの特定ルート/コンポーネント（Repomixバンドル）"
          ],
          "output": "docs/records/[domain]/flow.md",
          "format": [
            "### Happy Path",
            "### Edge Cases（業務分岐のみ）",
            "### Unverified Logic"
          ]
        },
        {
          "title": "2. データ境界プランナー",
          "ai_recommendation": {
            "tool": "claude",
            "model": "Opus 4.6",
            "tier": "required",
            "hint": "型精度が重要"
          },
          "task": "不良なバックエンド形式を遮断し、クリーンなInterfaceとTransformerを定義します。",
          "inputs": [
            "Raw API JSON",
            "flow.md",
            "コンポーネント変換ロジック",
            "Storeトリガーと派生状態"
          ],
          "output": "docs/main/contract-schemas/endpoints/[name].md",
          "format": [
            "Upstream Raw JSON Schema",
            "Target Interface（JSDoc付き）",
            "Transformer純関数プロトタイプ"
          ]
        },
        {
          "title": "3. 振る舞いテストアーキテクト",
          "ai_recommendation": {
            "tool": "claude",
            "model": "Sonnet 4.5",
            "tier": "budget",
            "hint": "構造化BDD"
          },
          "task": "flow.mdとschemasをBDD受入テストに変換します。",
          "inputs": [
            "flow.md",
            "contract-schemas/"
          ],
          "output": "docs/records/[domain]/e2e-cases.feature",
          "format": [
            "Gherkin Given-When-Then",
            "全業務Edge Cases",
            "インフラエラー（404/500/オフライン）除外"
          ]
        },
        {
          "title": "4. ドキュメント監査員",
          "ai_recommendation": {
            "tool": "human",
            "tier": "human",
            "hint": "最終防衛線"
          },
          "task": "コードカバレッジ視点で考古進捗を客観的に監査します。",
          "inputs": [
            "レガシーファイル一覧",
            "docs/records/ 産出物"
          ],
          "output": "docs/survey-checklist.md",
          "format": [
            "全.ts/.tsxの棚卸完了",
            "全APIにschema+BDD",
            "100%チェック＝Main Docs凍結点"
          ]
        }
      ]
    },
    "docflow": {
      "heading": "トップレベルアーキテクチャと文書フロー",
      "subheading": "レガシーCodebaseから凍結可能なMain Docsまでの完全な産出チェーン。",
      "diagram": "graph TD\n    Code[\"レガシーコードベース\"] -->|Repomix / Cursor| R1[\"1. コード考古学者\"]\n    R1 -->|As-is業務行為| Flow[\"records/…/flow.md\"]\n    Payload[\"Raw API JSON\"] --> R2[\"2. データ境界プランナー\"]\n    Flow --> R2\n    Comp[\"レガシーコンポーネントとStore\"] --> R2\n    R2 -->|To-beクリーン型| Schema[\"main/contract-schemas/\"]\n    R2 --> Ctx[\"context.md\"]\n    R1 --> Ctx\n    Flow --> R3[\"3. 振る舞いテストアーキテクト\"]\n    Schema --> R3\n    R3 -->|BDD| BDD[\"records/…/e2e-cases.feature\"]\n    Flow --> R4[\"4. ドキュメント監査員\"]\n    Schema --> R4\n    BDD --> R4\n    R4 -->|カバレッジ監査| Check[\"survey-checklist.md\"]\n    Check -->|100%| Final[\"Main Docs凍結点\"]"
    },
    "docstructure": {
      "heading": "Outputディレクトリ規範",
      "tree": "docs/\n├── context.md               # グローバルTerminology（常駐）\n├── survey-checklist.md      # 考古進捗追跡\n├── records/                 # 考古ステージング（凍結後削除可）\n│   └── [domain]/\n│       ├── flow.md\n│       └── e2e-cases.feature\n└── main/                    # Single Source of Truth\n    ├── flows/\n    ├── pages/\n    └── contract-schemas/\n        ├── shared/\n        └── endpoints/"
    },
    "survey": {
      "heading": "コア棚卸優先順位",
      "categories": [
        {
          "title": "1. コアドメインフロー",
          "priority": "最優先",
          "items": [
            "Booking Flow",
            "Search & Filter",
            "Coupon / Affiliate"
          ],
          "note": "ページ横断フロー — flow.md + contract-schemas + BDD必須。",
          "ai_recommendation": {
            "tool": "claude",
            "model": "Opus 4.6",
            "tier": "required",
            "hint": "コアフロー"
          }
        },
        {
          "title": "2. 静的・コンテンツページ",
          "priority": "簡易棚卸",
          "items": [
            "ナビ、FAQ、Top Pageブロック等"
          ],
          "note": "i18nファイルに格納（CMSなし）。docs/main/pages/にブロックとi18n keyをリスト即可。",
          "ai_recommendation": {
            "tool": "claude",
            "model": "Sonnet 4.5",
            "tier": "budget",
            "hint": "静的ページ棚卸"
          }
        },
        {
          "title": "3. グローバルインフラ",
          "priority": "global-constraints",
          "items": [
            "検証状態の有効期限",
            "エラー試行回数制限（防刷）",
            "グローバル状態とURL同期（言語・通貨）"
          ],
          "note": "docs/records/global-constraints/e2e-cases.featureに統合。",
          "ai_recommendation": {
            "tool": "claude",
            "model": "Sonnet 4.5",
            "tier": "budget",
            "hint": "横断モジュール統合"
          }
        }
      ]
    },
    "freeze": {
      "heading": "変更管理とMain Docs凍結",
      "phase1_title": "第一段階：考古期",
      "phase1_items": [
        "records/にAs-isを記録",
        "main/flows/に確認済みAs-isロジック",
        "main/contract-schemas/にTo-beクリーン型",
        "survey-checklist.md 100% → 凍結点、PMと技術変更討論"
      ],
      "phase2_title": "第二段階：リファクタリングと新規開発",
      "phase2_items": [
        "Feature Branchでdocs/main/を修正（常にTo-be終点状態）",
        "PRにCHANGELOG.md（Ticket link付き）",
        "コードと文書を同時Merge — コード即文書"
      ]
    },
    "figma": {
      "heading": "Figmaデザインシステム",
      "org_heading": "組織構造：中央テンプレート、ローカルカスタマイズ",
      "org_desc": "Figma Professionalはファイル間Variable連動不可 — Standard Recipeアーキテクチャを採用。",
      "variables_note": "⚠️ Figma Variablesの作成には、Pro planのFull seat（Collab seat不可）が必要です。",
      "org_central": "中央Workspace → Core shadcn Template（Primitive + Standard Components）",
      "org_local": "各プロジェクト → テンプレート複製 + Local Semantic上書き + As-is画面100%復元",
      "pattern_heading": "業務モジュール維持境界",
      "pattern_central": "中央維持：100%同一ロジック・視覚、カスタマイズ不可（日本地図選択等）→ Copy-Paste",
      "pattern_local": "ローカル維持：製品線で語意が変わる複合コンポーネント → 中央shadcn基礎 + ローカル組立",
      "token_heading": "Token三層物理分離防衛線",
      "token_subheading": "デザイナーはキャンバスで第三層Semantic Tokenのみ使用可能。",
      "tiers": [
        {
          "layer": "1. Primitive",
          "example": "primitive/neutral/100, primitive/blue/500",
          "css": "--nv-primitive-neutral-100",
          "access": "🔒 デザイナー使用禁止",
          "locked": true
        },
        {
          "layer": "2. Brand",
          "example": "brand/primary, brand/secondary",
          "css": "--nv-brand-primary",
          "access": "🔒 デザイナー使用禁止",
          "locked": true
        },
        {
          "layer": "3. Semantic",
          "example": "semantic/bg/base",
          "css": "--nv-semantic-bg-base",
          "access": "🔓 キャンバス唯一の合法層",
          "locked": false
        }
      ],
      "align_heading": "画面再構築とi18n-key脈絡整合",
      "align_desc": "本番環境と100%構造整合。FigmaコンポーネントDescriptionにi18n key必須。",
      "align_example": "キャンバス \"Please enter your booking code\" → Description: [i18n-key] booking.field.code_placeholder"
    },
    "i18n_prep": {
      "heading": "翻訳準備フロー",
      "note": "考古文書はClaude Webで産出。刷新実装はCursorに委任。",
      "steps": [
        "AIがレガシー翻訳をJSONに整理（status: active | unused | in-progress）",
        "Scriptでlegacy_keyと元translationsを比較（動的keyは手動でactive指定）",
        "ScriptでGoogle Spreadsheetに書き込み（単一sheet + namespace、Instruction SheetにTone Guide）",
        "Geminiが初版翻訳委託を代行可能（日本語は敬體統一）",
        "新プロジェクトscriptでSheet→コード同期（unused除外、in-progressは🚧表示）",
        "SKILL.md鉄則：key不足時はhardcode + // TODO: i18n-missing、新key禁止"
      ],
      "step_details": [
        {
          "ai_recommendation": {
            "tool": "claude",
            "model": "Haiku 4.5",
            "tier": "budget",
            "hint": "フォーマット整理"
          }
        },
        {},
        {},
        {},
        {},
        {}
      ]
    },
    "dev": {
      "heading": "開発段階：Matt Pocock Agent Skills分担",
      "subheading": "Matt Pocockの5ステップSkillsパイプラインでClaudeとCursorの役割を明確化。",
      "ref_label": "参考",
      "ref_url": "https://www.aihero.dev/5-agent-skills-i-use-every-day",
      "claude_title": "Claude担当（考古 → To-Issues）",
      "claude_desc": "文書産出、要件明確化、PRD作成、Issue原子化分解。厳格なプロセスが必要な計画段階に最適。",
      "cursor_title": "Cursor Agent + 新人練習（TDD → 刷新実装）",
      "cursor_desc": "TDD赤緑リファクタリング、アーキテクチャ深化、実際のコード刷新。一部Issueは新人練習、シニアがCursor Agentで品質管理。",
      "table_skill": "Skill",
      "table_desc": "説明",
      "table_ai": "推奨AI",
      "table_phase": "段階",
      "skills": [
        {
          "name": "Grill-with-Docs",
          "desc": "考古文書を活用し設計ツリーを逐次明確化",
          "tool": "Claude",
          "phase": "計画",
          "ai_recommendation": {
            "tool": "claude",
            "model": "Opus 4.6",
            "tier": "required",
            "hint": "決定ツリー推論"
          }
        },
        {
          "name": "To-PRD",
          "desc": "合意からPRDを産出（User Stories + モジュール草案）",
          "tool": "Claude",
          "phase": "計画",
          "ai_recommendation": {
            "tool": "claude",
            "model": "Sonnet 4.5",
            "tier": "budget",
            "hint": "構造化PRD"
          }
        },
        {
          "name": "To-Issues",
          "desc": "PRDを垂直スライスIssueに分解、blocking関係を設定",
          "tool": "Claude",
          "phase": "計画",
          "ai_recommendation": {
            "tool": "claude",
            "model": "Sonnet 4.5",
            "tier": "budget",
            "hint": "原子化分解"
          }
        },
        {
          "name": "TDD",
          "desc": "赤緑リファクタリングループ、一行テスト一行実装",
          "tool": "Cursor",
          "phase": "開発",
          "ai_recommendation": {
            "tool": "cursor",
            "model": "Composer 2.5",
            "tier": "context",
            "hint": "赤緑リファクタ"
          }
        },
        {
          "name": "Architecture-Refactor",
          "desc": "浅いモジュールを深化、Agentが安定ナビゲーション可能に",
          "tool": "Cursor",
          "phase": "開発",
          "ai_recommendation": {
            "tool": "cursor",
            "model": "Composer 2.5",
            "tier": "context",
            "hint": "ファイル横断リファクタ"
          }
        }
      ]
    },
    "pipeline": {
      "heading": "実行ファクトリー：原子化Issueサンプル",
      "subheading": "To-Issuesが産出する垂直スライス — 各Issueが全統合層を貫通（Tracer Bullet）。",
      "mock_issues": [
        {
          "id": "#01",
          "tag": "Schema",
          "title": "transformBookingAmount純関数を実装",
          "blocks": "ブロッカーなし — 即開始可能",
          "ai_recommendation": {
            "tool": "cursor",
            "model": "Composer 2.5",
            "tier": "context",
            "hint": "TDD純関数"
          }
        },
        {
          "id": "#02",
          "tag": "UI",
          "title": "Figmaに基づきBookingCard静的コンポーネントを実装",
          "blocks": "#01にブロック",
          "ai_recommendation": {
            "tool": "cursor",
            "model": "Composer 2.5",
            "tier": "context",
            "hint": "コンポーネント実装"
          }
        },
        {
          "id": "#03",
          "tag": "BDD",
          "title": "予約コード検証Edge Cases受入テストを作成",
          "blocks": "#01と並行可能",
          "ai_recommendation": {
            "tool": "cursor",
            "model": "Composer 2.5",
            "tier": "context",
            "hint": "受入テスト作成"
          }
        }
      ]
    },
    "roadmap": {
      "heading": "ロードマップ",
      "phases": [
        {
          "title": "Phase 1：考古学とデータ境界",
          "description": "4ロールSkillsでMain Docs産出、survey-checklist 100%達成",
          "risk": "🔥 リスク管理：凍結後PMと技術変更討論",
          "deliverables": [
            "flow.md × N domains",
            "contract-schemas/",
            "e2e-cases.feature",
            "context.md"
          ],
          "ai_recommendation": {
            "tool": "claude",
            "model": "Opus+Sonnet",
            "tier": "required",
            "hint": "計画段階"
          }
        },
        {
          "title": "Phase 2：Figmaシステム再編",
          "description": "中央テンプレート複製 + Local Semantic + As-is画面100%復元",
          "deliverables": [
            "Design System File",
            "i18n-key整合備考",
            "翻訳JSON → Google Sheet"
          ],
          "ai_recommendation": {
            "tool": "human",
            "tier": "human",
            "hint": "Figma手作業"
          }
        },
        {
          "title": "Phase 3：開発とリファクタリング開始",
          "description": "Claude To-Issues完了後、Cursor Agent + 新人がTDD刷新パイプライン実行",
          "deliverables": [
            "垂直スライスPR",
            "CHANGELOG.md",
            "テストカバレッジ達成"
          ],
          "ai_recommendation": {
            "tool": "cursor",
            "model": "Composer 2.5",
            "tier": "context",
            "hint": "開発とリファクタ"
          }
        }
      ]
    },
    "footer": {
      "text": "Project Renovation & Refactor Plan"
    }
  }
};