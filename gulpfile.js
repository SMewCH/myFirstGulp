var gulp = require('gulp');
var exec = require('child_process').exec;

// gulp.watch('**/*.js', gulp.parallel());


// gulp.task('gpush', function(){
//   exec('clasp push');
// });


gulp.task('test', function(){
  console.log("It is working!");
});


//// clasp
gulp.task('clasp_push', function(){
 exec('clasp push');
});
//
gulp.task('watch', function(){
 gulp.watch([
   '**/*.gs',
   '**/*.js',
   '**/*.html'
 ],
 ['clasp_push']);
});
//
gulp.task('default', ['watch']);
