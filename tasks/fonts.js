
const config = require('configure');
const gulp = require('gulp');

const pathBuild = config.buildPath;

// Copy fonts task
gulp.task('fonts', () => {
  return gulp.src(config.theme_path + pathBuild.source + '/fonts/**.*')
    .pipe(gulp.dest(config.theme_path + pathBuild.dist.fonts));
});
