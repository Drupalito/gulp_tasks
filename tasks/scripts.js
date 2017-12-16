
/*!
 * subtheme_child (OWNER_NAME)
 * Gulp Tasks (CURRENT_YEAR)
 *
 * Tâche permettant de construire et optimiser
 * les scripts Javascript du thème
 */
const config = require('config-yml');
const gulp = require('gulp');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const gulpif = require('gulp-if');

const pathFolder = config.pathfolder;

// Concat and uglify JS file task
gulp.task('scripts', () => {
  gulp.src([
      config.path.src + pathFolder.source + '/js/main.js'
    ])
    .pipe(concat('main.js'))
    .pipe(gulp.dest(config.path.dist + pathFolder.dist.js))
    .pipe(gulpif(isProd, rename('main.min.js')))
    .pipe(gulpif(isProd, uglify({
      mangle: false
    })))
    .pipe(gulp.dest(config.path.dist + pathFolder.dist.js));
});
