var app = require('app')
var BrowserWindow = require('browser-window')

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
})
