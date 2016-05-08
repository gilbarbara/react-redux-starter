/*eslint-disable no-console */
const path = require('path');
const exec = require('child_process').exec;
const del = require('del');
const webpack = require('webpack');
const config = require('./webpack.config');
const ghPages = require('gh-pages');

const args = process.argv.slice(2);

if (!args[0]) {
  console.log(`Valid arguments:
  • publish
  • docs`
  );
}

if (args[0] === 'publish') {
  console.log('Getting commit');
  exec('git log -1 --pretty=%s && git log -1 --pretty=%b', (err, stdout) => {
    if (err) {
      console.log(err);
      return;
    }

    const parts = stdout.replace('\n\n', '').split('\n');
    const commitMessage = `${(parts[0] ? parts[0] : 'Auto-generated commit')} ${new Date().toISOString()}`;

    console.log('Bundling');
    exec('npm run build', (errBuild) => {
      if (errBuild) {
        console.log(errBuild);
        return;
      }

      console.log('Copying README');
      exec('cp README.md dist/', (errCopy) => {
        if (err) {
          console.log(errCopy);
          return;
        }

        console.log('Publishing');
        ghPages.publish(path.join(__dirname, 'dist'), {
          message: commitMessage
        });
      });
    });
  });
}

if (args[0] === 'docs') {
  del(['./docs/*'])
    .then(() => {
      console.log('Generating documentation...');
      return exec('jsdoc -c .jsdoc.json -R README.md');
    });
}

