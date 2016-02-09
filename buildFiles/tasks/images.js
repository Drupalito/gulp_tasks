
const config = require('configure');
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');

const pathBuild = config.buildPath;

// Optimize Images task
gulp.task('images', () => {
  return gulp.src(config.theme_path + pathBuild.source + '/images/**/*')
    .pipe(imagemin({
      progressive: true,
      interlaced: true,
      svgoPlugins: [{removeViewBox: false}, {removeUselessStrokeAndFill:false}],
      use: [pngquant()]
    }))
    .pipe(gulp.dest(config.theme_path + pathBuild.dist.images));
});
