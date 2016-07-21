/**
 * 自动化工具 gulp 脚本
 */
var gulp = require('gulp');
var debug = require('gulp-debug');

var browserSync = require('browser-sync').create();

gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });

    gulp.watch('*.html').on('change', browserSync.reload);
    gulp.watch('./src/less/**', ['less']);
});

gulp.task('less', function() {
    logInfo('** less compile **');

    var less = require('gulp-less');
    var autoprefixer = require('gulp-autoprefixer');
    var cleanCSS = require('gulp-clean-css');

    var srcFile = 'index.less';

    return gulp.src('./src/less/' + srcFile)
        .pipe(debug({
            title: '** less input  >> '
        }))
        .pipe(less())
        .pipe(autoprefixer({
            browser: ['not ie <= 8']
        }))
        .pipe(cleanCSS({
            compatibility: '*',
        }))
        .pipe(gulp.dest('./dist/css/'))
        .pipe(debug({
            title: '** less output << '
        }))
        .pipe(browserSync.stream());
});

/**
 * logInfo - 格式化输出
 *
 * @param  {string} str 待输出的字符串
 * @return {null}
 */
function logInfo(str) {
    if (str) {
        console.log('\n\n\t' + str + '\n\n');
    }
}
