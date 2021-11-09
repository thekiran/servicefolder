const gulp = require('gulp');
var server = require('gulp-webserver');


gulp.task('server', function() {
    gulp.src('/')	// <-- your app folder
      .pipe(server({
        livereload: true,
        open: true,
        port: 3000	// set a port to avoid conflicts with other local apps
      }));
  });

  
gulp.task('serveprod', function() {
    connect.server({
      root: ['servicefolder_welcome'],
      port: process.env.PORT || 5000, // localhost:5000
      livereload: false
    });
  });
  
  