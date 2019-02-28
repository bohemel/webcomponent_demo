const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/demo-app/runtime.js',
    './dist/demo-app/polyfills.js',
    './dist/demo-app/scripts.js',
    './dist/demo-app/main.js'
  ];

  await fs.ensureDir('dist/element');
  await concat(files, 'dist/element/element.js');
})();
