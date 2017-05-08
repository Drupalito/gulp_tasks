
/*!
 * subtheme_child (OWNER_NAME)
 * Gulp Tasks (CURRENT_YEAR)
 *
 * Tâche permettant de supprimer
 * les dossiers de construction
 */
const config = require('config-yml');
const gulp = require('gulp');
const del = require('del');

const pathBuild = config.buildPath;

const REMOVE_FOLDERS = [
  config.theme_path + pathBuild.dist.css,
  config.theme_path + pathBuild.dist.images,
  config.theme_path + pathBuild.dist.js,
  config.theme_path + pathBuild.dist.fonts
];

// Remove build folder
gulp.task('clean', () => {
  return del(REMOVE_FOLDERS, {force: true}).then(paths => {
    console.log('Deleted files and folders:\n *', paths.join('\n * '));
  });
});
