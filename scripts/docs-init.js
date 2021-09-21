const FS = require("fs");
const path = require("path");
const getDirTree = require("directory-tree");
// const argv = require("./utils/argv.utils");

const addDocFileToData = (docsData, dir) => {
  for (const item of dir.children) {
    // FIXME: CHANGE TO EXTENSION
    if (item.name === "docs.md") {
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

// FIXME: MAKE DIR CONFIGURABLE
const dirTree = getDirTree(path.join(__dirname, "../demo"));
console.log("[Success] - Collected directory tree data");
const docsFiles = readDocs(dirTree);
console.log("[Success] - Collected docs files data");

module.exports = {
  dirTree,
  docsFiles,
};

// const CLIENT_PATH = __dirname + "/../client/src/data/";

// FS.writeFile(
//   CLIENT_PATH + "tree.json",
//   JSON.stringify(tree, null, 2),
//   function (err) {
//     if (err) throw err;
//     console.log("Tree File Saved!");
//   }
// );

// FS.writeFile(
//   CLIENT_PATH + "docs.json",
//   JSON.stringify(docsData, null, 2),
//   function (err) {
//     if (err) throw err;
//     console.log("Docs File Saved!");
//   }
// );
