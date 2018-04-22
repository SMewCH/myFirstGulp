var gulp = require('gulp');
var exec = require('child_process');

gulp.watch('**/*.js', gulp.parallel());


gulp.task('gpush', function(){
  exec('clasp push');
});
