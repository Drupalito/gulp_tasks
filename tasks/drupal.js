
/*!
 * subtheme_child (OWNER_NAME)
 * Gulp Tasks (CURRENT_YEAR)
 *
 * Tâche permettant de convertir le framework CSS
 * en feuilles de style Drupal, afin de pouvoir les overrider indépendamment.
 */
const config = require('config-yml')
const gulp = require('gulp')
const fs = require('fs')
const path = require('path')
const del = require('del')
const rename = require('gulp-rename')
const sass = require('gulp-sass')
const gulpif = require('gulp-if')

const pathFolder = config.pathfolder

function getFolders (dir) {
  return fs.readdirSync(dir).filter(file => {
    if (fs.statSync(path.join(dir, file)).isFile()) {
      if (file != '_import.scss') {
        fs.unlink(path.join(dir, file))
      }
    }
    if (file != "helpers" && file != "modules") {
      return fs.statSync(path.join(dir, file)).isDirectory()
    }
  })
}

function getFiles (dir) {
  return fs.readdirSync(dir).filter(file => {
    if (path.extname(file) == '.scss') {
      return fs.statSync(path.join(dir, file)).isFile()
    }
  })
}

var sourceFiles = config.path.src + pathFolder.source + '/scss'

// BuildDrupal CSS files task
gulp.task('drupal', () => {

  var baseFiles = getFolders(sourceFiles)

  var tasks = baseFiles.map(dir => {

    var buildFile = getFiles(sourceFiles + '/' + dir)
    if (dir != "helpers" || dir != "modules") {
      var scssFile = buildFile.map(file => {

        var destfilename = file.replace(/^\_/, dir + ".")

        output  = "\n"
        output += "// Import Variables / Helpers\n"
        output += "@import 'import'\n\n"
        output += "/**\n"
        output += " * subtheme_child Drupal Theme\n"
        output += " * " + destfilename + "\n"
        output += " *\n"
        output += " * OWNER_NAME <OWNER_EMAIL>\n"
        output += " * (CURRENT_YEAR)\n"
        output += " */\n\n"
        output += "@import \"" + dir + "/" + file.replace(/^\_/, "").replace(path.extname(file), '') + "\"\n"

        console.log(config.path.src + pathFolder.source + '/scss/' + destfilename)
        fs.writeFileSync(config.path.src + pathFolder.source + '/scss/' + destfilename, output)
      })
    }
  })
})
