const dirTree = require("directory-tree");
const readDocs = require("./readDocs");

const tree = dirTree(__dirname + "/../poc");
const docsData = readDocs(tree);

console.log(tree);
console.log(docsData);
