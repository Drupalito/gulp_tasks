
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
const concat = require('gulp-concat-multi');
const uglify = require('gulp-uglify');
const gulpif = require('gulp-if');

const pathFolder = config.pathfolder;

const CONCAT_JS_FILES = [{
  'main.js': [
    config.path.src + pathFolder.source + '/js/main.js'
  ]
}];

// Concat and uglify JS file task
gulp.task('scripts', () => {
  return concat(CONCAT_JS_FILES)
    .pipe(gulp.dest(config.path.dist + pathFolder.dist.js))
    // .pipe(gulpif(isProd, rename('main.min.js')))
    .pipe(gulpif(isProd, uglify({
      mangle: false
    })))
    .pipe(gulp.dest(config.path.dist + pathFolder.dist.js));
});
