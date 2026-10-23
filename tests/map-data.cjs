const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

module.exports = function loadMaps(webRoot) {
  const window = {};
  const directory = path.join(webRoot, 'maps');
  for (const file of fs.readdirSync(directory).filter(name => name.endsWith('.js')).sort()) {
    vm.runInNewContext(fs.readFileSync(path.join(directory, file), 'utf8'), {window}, {filename: file});
  }
  return window.LANTERN_DUNGEONS;
};
