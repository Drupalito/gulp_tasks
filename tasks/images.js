
/*!
 * [SITE_NAME]
 * Gulp Tasks: images.js
 *
 * Tâche permettant de copier et optimiser
 * les images png, jpg et gif.
 *
 * [OWNER_NAME] <[OWNER_EMAIL]>
 * ([CURRENT_YEAR]) - Licensed MIT
 */
const config = require('config-yml');
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');

const pathFolder = config.pathfolder;

// Optimize Images task
gulp.task('images', () => {
  return gulp.src(config.path.src + pathFolder.source + '/images/**/*')
    .pipe(imagemin({
      progressive: true,
      interlaced: true,
      svgoPlugins: [{removeViewBox: false}, {removeUselessStrokeAndFill:false}],
      use: [pngquant()]
    }))
    .pipe(gulp.dest(config.path.dist + pathFolder.dist.images));
});
