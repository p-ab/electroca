const { app, BrowserWindow } = require('electron');

let win;

function createWindow() {
    win = new BrowserWindow({
        width: 600,
        height: 600,
        background: '#f5f5f5',
        icon: `file://${__dirname}/dist/electro-pd/assets/logo.png`
    })

    win.loadURL(`file://${__dirname}/dist/electro-pd/index.html`)

    win.on('closed', function() {
        win = null
    })
}


app.on('ready', createWindow)

app.on('window-all-closed', function() {

    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', function() {

    if (win === null) {
        createWindow()
    }
})
