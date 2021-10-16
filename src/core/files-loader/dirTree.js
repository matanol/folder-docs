const getDirTree = require('directory-tree');

// FIXME: MAKE DIR CONFIGURABLE
const DIR_TREE_PATH = process.cwd();

const dirTree = getDirTree(DIR_TREE_PATH, { exclude: /node_modules/ });
console.log('[Success] - Collected directory tree data');

module.exports = dirTree;
