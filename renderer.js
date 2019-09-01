const { ipcRenderer } = require('electron');

ipcRenderer.on('message', (event, text) => {
  const message = document.createElement('div')
  message.innerHTML = text
  document.querySelector('#messages').appendChild(message)
})

ipcRenderer.on('version', (event, text) => {
  document.querySelector('#version').innerText = text
})

ipcRenderer.on('download-progress', (event, text) => {
  document.querySelector('#progressBar').innerText = `${text}%`
})