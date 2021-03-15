const { app, BrowserWindow } = require('electron');
app.whenReady().then(() => {
  //create a browser window
  const myWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  // load a webpage
  myWindow.loadFile('web/index.html');
});