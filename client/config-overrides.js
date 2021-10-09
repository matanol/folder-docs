const path = require("path");

module.exports = {
  paths: function (paths, env) {
    paths.appBuild = path.join(__dirname, "../lib/client");
    return paths;
  },
};
