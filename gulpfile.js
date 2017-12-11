
/*!
 * subtheme_child (OWNER_NAME)
 * Gulp Tasks (CURRENT_YEAR)
 * Licensed MIT
 */
'use strict';

// Module to require whole directories
var requireDir = require('require-dir');

global.isProd = process.argv[3] == '--prod';

// Pulling in all tasks from the tasks folder
requireDir('./tasks', { recurse: true });
