
/*!
 * subtheme_child (OWNER_NAME)
 * Gulp Tasks (CURRENT_YEAR)
 */
const config = require('configure');
const gulp = require('gulp');
const watch = require('gulp-watch');
const browserSync = require('browser-sync');

const pathBuild = config.buildPath;

const WATCH_FILES = [
  config.theme_path + '/css/**/*.css',
  config.theme_path + '/js/**/*.js',
  config.theme_path + '/img/**/*',
  config.theme_path + '/*.{php,inc,info}'
];

// Watch files task
gulp.task('watch', () => {

  // Initialize browsersync
  browserSync.init(WATCH_FILES, {
    proxy: 'starterdrupal.localhost',
    notify: true
  });

  gulp.watch(
    config.theme_path + pathBuild.source + '/scss/**/*.scss', ['styles']);

  gulp.watch(
    config.theme_path + pathBuild.source + '/js/*.js', ['scripts']);

  gulp.watch(config.theme_drupal + '/**/*.{php,inc,info}').on('change', browserSync.reload);
});
