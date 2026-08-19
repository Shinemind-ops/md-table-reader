// MD 表格閱讀器 — preload（暴露安全 API 給 renderer）
const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("api", {
  openMd: () => ipcRenderer.invoke("open-md"),
  resolveImage: (absPath) => ipcRenderer.invoke("resolve-image", absPath),
  readMd: (filePath) => ipcRenderer.invoke("read-md", filePath),
});
