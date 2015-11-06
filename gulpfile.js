// Dependencias
var gulp        = require('gulp'), 
  childProcess  = require('child_process'), 
  electron      = require('electron-prebuilt');

// Crear la tarea
gulp.task('run', function () { 
  childProcess.spawn(electron, ['./app'], { stdio: 'inherit' }); 
  //childProcess.spawn(electron, ['--debug=5858','./app'], { stdio: 'inherit' }); 
});