const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");

const defaultArgv = {
  path: "/.",
  fileName: "docs.md",
};
const providedArgv = yargs(hideBin(process.argv)).argv;
const argv = { ...defaultArgv, ...providedArgv };

module.exports = argv;
