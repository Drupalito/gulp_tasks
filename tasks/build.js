
/*!
 * [SITE_NAME]
 * Gulp Tasks: build.js
 *
 * Tâche permettant d'exécuter
 * les tâches de construction.
 *
 * [OWNER_NAME] <[OWNER_EMAIL]>
 * ([CURRENT_YEAR]) - Licensed MIT
 */
const config = require('config-yml')
const gulp = require('gulp')

// Register tasks
gulp.task('build', [
  'fonts',
  'libraries',
  'images',
  'styles',
  'scripts',
])
