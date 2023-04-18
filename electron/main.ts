import electron, { app, BrowserWindow, ipcMain } from 'electron';

let mainWindow: BrowserWindow | null;

declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

// const assetsPath =
//   process.env.NODE_ENV === 'production'
//     ? process.resourcesPath
//     : app.getAppPath()

function createWindow(width: number, height: number) {
    mainWindow = new BrowserWindow({
        // icon: path.join(assetsPath, 'assets', 'icon.png'),
        show: false,
        backgroundColor: '#ffffff',
        minimizable: false,
        maximizable: false,
        resizable: false,
        width,
        height,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
        },
    });
    mainWindow.maximize();
    mainWindow.show();

    mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

async function registerListeners() {
    /**
     * This comes from bridge integration, check bridge.ts
     */
    ipcMain.on('message', (_, message) => {
        console.log(message);
    });
}

app.on('ready', () => {
    const { width, height } = electron.screen.getPrimaryDisplay().workAreaSize;
    createWindow(width, height);
})
    .whenReady()
    .then(registerListeners)
    .catch((e) => console.error(e));

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        const { width, height } =
            electron.screen.getPrimaryDisplay().workAreaSize;
        createWindow(width, height);
    }
});
