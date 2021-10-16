const FS = require('fs');
const dirTree = require('./dirTree');
const { isInArray } = require('../utils');

const extensions = ['.md', '.mdx'];

const getDocFiles = (docFilesObj, dir) => {
  for (const item of dir.children) {
    // FIXME: CHANGE TO EXTENSION
    if (isInArray(extensions, item.extension)) {
      try {
        const docFile = FS.readFileSync(item.path);
        docFilesObj[item.path] = docFile.toString();
      } catch (error) {
        console.error(error);
      }
    } else if (item.type === 'directory') {
      getDocFiles(docFilesObj, item);
    }
  }
};

const docFiles = {};

getDocFiles(docFiles, dirTree);

module.exports = docFiles;
