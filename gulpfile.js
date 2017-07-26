var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
gulp.task('pranie', function(){
    console.log('robię pranie');
});

var sass = require('gulp-sass');
var sassOptions = {outputStyle: 'expanded'};
var input = 'sass/**/*.scss';
var output = 'css';

gulp.task('sass', function(){
    return gulp
    .src(input)
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(output))
})

gulp.task('watch', function(){
    gulp.watch(input, ['sass'])
});
