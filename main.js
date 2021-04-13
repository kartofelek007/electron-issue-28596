const path = require('path');
const {
    app,
    shell,
    BrowserWindow,
    ipcMain,
    globalShortcut,
    Menu,
} = require('electron');

const debug = process.argv.includes("debug");

app.on('ready', () => {
    let mainWindow = new BrowserWindow({
        transparent: true, //this issue exist only if transparent is true
        frame: false, //change this to see differences
        resizable: false, //change this to see differences
        fullscreen: true,
        //alwaysOnTop : true,
        // kiosk: true,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
            contextIsolation: false
        }
    });

    mainWindow.loadFile('index.html');

    // Menu.setApplicationMenu(null);

    globalShortcut.register("Escape", () => {
        app.quit()
    });
});

app.on('window-all-closed', () => {
    app.quit()
});