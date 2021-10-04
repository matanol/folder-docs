#!/usr/bin/env node

const nodemon = require("nodemon");
const path = require("path");

const mainFilePath = path.join(__dirname, "./main.js");

nodemon({
  watch: [`${process.cwd()}/**/*`],
  ext: "md",
  ignore: ["node_modules/", "README.md"],
  quiet: "true",
  exec: `node \"${mainFilePath}\"`,
});
