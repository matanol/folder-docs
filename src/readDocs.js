const FS = require("fs");

const DOCS_FILE_NAME = ".docs.md";

const addDocFileToData = (docsData, dir) => {
  for (const item of dir.children) {
    if (item.name === DOCS_FILE_NAME) {
      try {
        const docFile = FS.readFileSync(item.path);
        docsData[item.path] = docFile.toString();
      } catch (error) {
        console.error(error);
      }
    } else if (item.type === "directory") {
      addDocFileToData(docsData, item);
    }
  }
};

const readDocs = (tree) => {
  const docsData = {};

  addDocFileToData(docsData, tree);

  return docsData;
};

module.exports = readDocs;
