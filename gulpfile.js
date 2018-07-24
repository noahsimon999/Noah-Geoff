//compile sass files
//combine & concat js
//minify the js fies
//watch

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var ulglify = require('gulp-uglify');

gulp.task('sass', function(){
    return gulp.src('scss/*.scss')
        .pipe(sass())//pipe sass into plugin & convert all sass files
        .pipe(gulp.dest('css')) // destination of converted sass files
});

gulp.task('scripts', function(){
    return gulp.src('js/scripts/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('js'))
});

gulp.task('watch', function(){
    gulp.watch('js/scripts/*.js', ['scripts'])
    gulp.watch('scss/*.scss',["sass"]);
})