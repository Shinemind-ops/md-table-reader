// MD 表格閱讀器 — Electron 主進程
// 目的：選檔回傳真實路徑 + 讀取圖片（圖片自然顯示，主人 2026-08-19）
const { app, BrowserWindow, dialog, ipcMain } = require("electron");
const fs = require("fs");
const path = require("path");

const MIME = {
  ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg",
  ".gif": "image/gif", ".svg": "image/svg+xml", ".webp": "image/webp",
  ".bmp": "image/bmp", ".ico": "image/x-icon"
};

function createWindow() {
  const win = new BrowserWindow({
    width: 1400,
    height: 900,
    title: "MD 表格閱讀器",
    backgroundColor: "#0f1115",
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });
  win.loadFile("renderer.html");
  win.webContents.setWindowOpenHandler(() => ({ action: "deny" }));
}

app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
app.on("window-all-closed", () => {
  app.quit();
});

// 選 md 檔：回傳完整路徑 + 內容（renderer 因此知道 md 目錄 → 圖片自然解析）
ipcMain.handle("open-md", async () => {
  const res = await dialog.showOpenDialog({
    title: "打開 Markdown 檔",
    properties: ["openFile"],
    filters: [
      { name: "Markdown", extensions: ["md", "markdown", "txt"] },
      { name: "所有檔案", extensions: ["*"] },
    ],
  });
  if (res.canceled || !res.filePaths.length) return null;
  const filePath = res.filePaths[0];
  let content = "";
  try {
    content = fs.readFileSync(filePath, "utf-8");
  } catch (e) {
    return { filePath, name: path.basename(filePath), content: "", error: String(e) };
  }
  return { filePath, name: path.basename(filePath), content };
});

// 讀圖片（絕對路徑）→ dataURL（renderer 顯示用）
ipcMain.handle("resolve-image", async (_e, absPath) => {
  try {
    const data = fs.readFileSync(absPath);
    const mime = MIME[path.extname(absPath).toLowerCase()] || "application/octet-stream";
    return "data:" + mime + ";base64," + data.toString("base64");
  } catch (e) {
    return null;
  }
});

// 重讀 md（非F5重新整理——Electron 下重新讀取同一檔案）
ipcMain.handle("read-md", async (_e, filePath) => {
  try {
    return { filePath, name: path.basename(filePath), content: fs.readFileSync(filePath, "utf-8") };
  } catch (e) {
    return null;
  }
});
