const { ipcRenderer } = require('electron')
const { contextBridge } = require('electron/renderer')

contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron

})
contextBridge.exposeInMainWorld('windowsAPI', {
    
  makeWindow: (width,height) => ipcRenderer.send('create-window', width, height)
  
})