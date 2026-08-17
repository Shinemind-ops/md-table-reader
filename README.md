# MD Table Reader 📊

**Read markdown tables with an Excel/Notion-grade experience.**

A single-file HTML tool that turns the markdown tables in your `.md` files into a full-featured data grid — no install, no dependencies, double-click and go.

> 讀 md 檔案的表格，享受 Excel/Notion 數據庫級的閱讀體驗。單檔 HTML，零安裝，雙擊即用。

![screenshot](docs/screenshot.png)

## Why? / 為什麼做這個

Standard markdown renderers (Obsidian, VS Code preview, Typora, Trae…) squeeze wide tables into narrow columns — headers stack vertically, cells become tall and skinny, and a 16-column table becomes unreadable. This tool renders those tables like a spreadsheet: full-width, sortable, filterable, with full control over columns.

> 一般 md 渲染器（Obsidian、VS Code 預覽、Typora…）會把寬表格壓縮成又高又瘦的窄欄，16 欄表格根本沒法讀。這個工具把表格當 Excel 渲染：全寬、可排序、可過濾、欄位全權在手。

## Features / 功能

| Feature | 說明 |
|---|---|
| 📌 Frozen header / frozen first column | 凍結表頭 / 凍結首欄 — scroll without losing context |
| ↔️ Column drag-resize | 拖欄線調整欄寬（不誤觸發其他事件） |
| 🔀 Drag columns to reorder | 拖欄標題重排欄位（最左/最右/中間/第七，隨你） |
| ⚙️ Column show/hide | ⚙ 欄位 — 勾選控制每欄顯示/隱藏，全選/全不選 |
| ⚙️ Table show/hide | ⚙ 表格 — 多表格檔案中控制顯示哪些表格 |
| 🔍 Global & column-scoped search | 全域搜尋 or 只搜某個欄的旗下內容 |
| 🃏 Table view / Card view | 表格視圖 / Notion 式卡片視圖 |
| 🌙 Dark / light theme | 深淺色主題（記住偏好） |
| 📂 Drag & drop or open file | 拖放 / 選檔載入，支援多表格 |

## Quick start / 快速開始

1. Download `md-table-reader.html`
2. Double-click to open in any browser
3. Drag a `.md` file into the window (or click "打開 md 檔")

That's it. Your file never leaves your machine — everything runs locally.

> 下載 `md-table-reader.html` → 雙擊用瀏覽器打開 → 把 md 檔拖進去（或點「打開 md 檔」）。完成。檔案不出本機，一切本地運行。

## Tips / 小技巧

- Click a column header to sort (asc → desc → original). 點欄頭排序（升→降→原序）
- Drag the column edge to resize. 拖欄線調寬
- Drag the column header itself to reorder. 拖欄標題重排
- Use "⚙ 欄位" to hide columns, "⚙ 表格" to hide tables. 用 ⚙ 欄位 / ⚙ 表格 控制顯示

## Privacy / 隱私

100% offline. No network calls, no telemetry, no uploads — the app is a single static HTML file.

## License

MIT
