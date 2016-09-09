/*
  gulpfile.js
  ===========
  @see gulp/tasks.
*/

/* eslint import/no-extraneous-dependencies: ["error", {"peerDependencies": true}] */

const requireDir = require('require-dir');

requireDir('./gulp/tasks', { recurse: true });
