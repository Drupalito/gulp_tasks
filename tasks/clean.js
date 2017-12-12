
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

const pathFolder = config.pathfolder;

const REMOVE_FOLDERS = [
  config.path.dist + pathFolder.dist.css,
  config.path.dist + pathFolder.dist.images,
  config.path.dist + pathFolder.dist.js,
  config.path.dist + pathFolder.dist.fonts,
  config.path.dist + pathFolder.dist.libraries
];

// Remove build folder
gulp.task('clean', () => {
  return del(REMOVE_FOLDERS, {force: true}).then(paths => {
    console.log('Deleted files and folders:\n *', paths.join('\n * '));
  });
});
