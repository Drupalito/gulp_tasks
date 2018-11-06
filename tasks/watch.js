
/*!
 * [SITE_NAME]
 * Gulp Tasks: watch.js
 *
 * Tâche permettant de surveiller
 * les modifications des fichiers.
 *
 * [OWNER_NAME] <[OWNER_EMAIL]>
 * ([CURRENT_YEAR]) - Licensed MIT
 */
const config = require('config-yml')
const gulp = require('gulp')
const watch = require('gulp-watch')
const browserSync = require('browser-sync')

const pathFolder = config.pathfolder

const WATCH_FILES = [
  config.path.src + pathFolder.dist.css + '/**/*.css',
  config.path.src + pathFolder.dist.js + '/**/*.js',
  config.path.src + pathFolder.dist.images / '/**/*',
  config.path.src + pathFolder.dist.fonts / '/**/*',
  config.path.src + pathFolder.dist.libraries / '/**/*',
  config.path.src + '/*.{php,inc,info,html,md,twig}'
]

// Watch files task
gulp.task('watch', () => {

  // Initialize browsersync
  browserSync.init(WATCH_FILES, {
    proxy: config.url,
    notify: true
  })

  gulp.watch(
    config.path.src + pathFolder.source + '/scss/**/*.scss', ['styles'])

  gulp.watch(
    config.path.src + pathFolder.source + '/js/*.js', ['scripts'])

  gulp.watch(config.path.dist + '/**/*.{php,inc,info,html,md,twig}').on('change', browserSync.reload)
})
