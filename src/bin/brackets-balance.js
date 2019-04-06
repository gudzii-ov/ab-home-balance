#!/usr/bin/env node

import program from 'commander';
import isBalanced from '..';
import { version } from '../../package.json';

program
  .version(version)
  .description('Check brackets balance in arothmetic operation string')
  .arguments('<string>')
  .action(string => console.log(isBalanced(string)));

program.parse(process.argv);
