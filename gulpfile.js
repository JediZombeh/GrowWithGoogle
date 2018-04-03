// ================================================
// DSG Email Dev :: Automation Slavedriver
// version:  1.0.0
// author:   Steven Till (@jediZombeh)
// ================================================


// Include plugins
var gulp = require('gulp');
var browserSync = require('browser-sync').create();


/*Global watch*/

gulp.task('watch', function() {
  gulp.watch('./21_project_PixelArtMaker/index.html', ['triggerReload']);
	gulp.watch('./21_project_PixelArtMaker/designs.js', ['triggerReload']);
	gulp.watch('./21_project_PixelArtMaker/styles.css', ['triggerReload']);
});

// Launch web server & watch scss/html files
gulp.task('serve', function() {
    browserSync.init({
        server: "./21_project_PixelArtMaker/"
    });

    gulp.watch("./index.html").on('change', browserSync.reload);
		gulp.watch("./designs.js").on('change', browserSync.reload);
		gulp.watch("./styles.css").on('change', browserSync.reload);
});

// Auto-reload the index files after sass or mjml is updated
gulp.task('triggerReload', function() {
  browserSync.reload('./index.html');
});

// Default Task
gulp.task('default', ['watch', 'serve']);
