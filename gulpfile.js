
var fileinclude = require('gulp-file-include'),
  gulp = require('gulp');
 
gulp.task('copy-img', function() {
    return gulp.src('./source/img/**/*')
      .pipe(gulp.dest('./dist/img'));
  });
  
 gulp.task('copy-css', function() {
    return gulp.src('./source/css/**/*')
      .pipe(gulp.dest('./dist/css'));
  });
  
  gulp.task('copy-fonts', function() {
    return gulp.src('./source/fonts/**/*')
      .pipe(gulp.dest('./dist/fonts'));
  });
  
gulp.task('copy-resources', gulp.parallel('copy-img', 'copy-css','copy-fonts'));

gulp.task('fileinclude', function() {
  return gulp.src(['source/*.html'])
        .pipe(fileinclude({
          prefix: '@@',
          basepath: '@file'
        }))
        .pipe(gulp.dest('./dist/'));
});