/* global __dirname */
var app = require('app')
var BrowserWindow = require('browser-window')
var mainWindow = null;

// Cerrar la aplicacion cuando todas las ventanas se cierren.
app.on('window-all-closed', function () {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

//Al iniciar la aplicacion
app.on('ready',function(){
    var mainWindow = new BrowserWindow({
      with:800,
      height:600,
      title: 'Hadro Electron',
      'auto-hide-menu-bar': true
    })

    //esto es para cargar un html local
    mainWindow.loadUrl('file://' + __dirname + '/index.html')

    //mainWindow.loadUrl('http://hadro.drovancal.com/login.html')
    mainWindow.maximize()
    
    mainWindow.on('closed', function () {
        mainWindow = null;
    });

})


