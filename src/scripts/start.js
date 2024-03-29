#!/usr/bin/env node

const nodemon = require('nodemon');
const open = require('open');
const { devServerExecPath } = require('../core/client-injector/webpack');

nodemon({
  watch: [`${process.cwd()}/**/*`],
  ext: 'md',
  ignore: ['node_modules/', 'README.md'],
  quiet: 'true',
  exec: `node "${devServerExecPath}"`,
});

open('http://localhost:8080');
