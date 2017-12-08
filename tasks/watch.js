
/*!
 * subtheme_child (OWNER_NAME)
 * Gulp Tasks (CURRENT_YEAR)
 *
 * Tâche permettant de surveiller
 * les modifications des fichiers
 */
const config = require('config-yml');
const gulp = require('gulp');
const watch = require('gulp-watch');
const browserSync = require('browser-sync');

const pathBuild = config.buildPath;

const WATCH_FILES = [
  config.theme_path + '/css/**/*.css',
  config.theme_path + '/js/**/*.js',
  config.theme_path + '/img/**/*',
  config.theme_path + '/*.{php,inc,info,html,md,twig}'
];

// Watch files task
gulp.task('watch', () => {

  // Initialize browsersync
  browserSync.init(WATCH_FILES, {
    proxy: config.url,
    notify: true
  });

  gulp.watch(
    config.theme_path + pathBuild.source + '/scss/**/*.scss', ['styles']);

  gulp.watch(
    config.theme_path + pathBuild.source + '/js/*.js', ['scripts']);

  gulp.watch(config.theme_drupal + '/**/*.{php,inc,info,html,md,twig}').on('change', browserSync.reload);
});
