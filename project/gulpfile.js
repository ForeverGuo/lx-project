var gulp = require('gulp');
// gulp.task('hello',function(){
//     console.log('Hello World!');

//
gulp.task('task-name',function(){

    return gulp.src('source-files')//Get source files with gulp.src
    //.pipe(aGulpPlugin())//Sends it through a gulp plugin
    //.pipe(gulp.dest('destination'))//Outputs the files in the destination folder

})
var gulp = require('gulp');
var sass = require('gulp-sass');
gulp.task('sass',function(){
  return gulp.src('source-files')
  .pipe(sass())//Using gulp-sass
  .pipe(gulp.dest('destination'))
});

gulp.task('sass',function(){
  return gulp.src('app/scss/**/*.scss') //匹配当前目录及其目录下的所有scss文件
  .pipe(sass()) //Converts Sass to CSS with gulp-sass
  .pipe(gulp.dest('app/css'))


});

//监听Sass文件
//gulp watch syntax
//gulp.watch('files-to-watch',['tasks','to','run']);


gulp.task('watch',function(){
  gulp.watch('app/scss/**/*.scss',['sass']);
  //Other watchers
})


//使用Browser Sync自动刷新

var browserSync = require('browser-sync');
