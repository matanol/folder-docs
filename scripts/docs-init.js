const FS = require("fs");
const dirTree = require("directory-tree");
const argv = require("./utils/argv.utils");

const addDocFileToData = (docsData, dir) => {
  for (const item of dir.children) {
    if (item.name === argv.fileName) {
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

const tree = dirTree(__dirname + argv.path);
const docsData = readDocs(tree);

const CLIENT_PATH = __dirname + "/../client/src/data/";

FS.writeFile(
  CLIENT_PATH + "tree.json",
  JSON.stringify(tree, null, 2),
  function (err) {
    if (err) throw err;
    console.log("Tree File Saved!");
  }
);

FS.writeFile(
  CLIENT_PATH + "docs.json",
  JSON.stringify(docsData, null, 2),
  function (err) {
    if (err) throw err;
    console.log("Docs File Saved!");
  }
);
