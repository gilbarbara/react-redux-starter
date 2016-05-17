/*eslint-disable no-console */
const path = require('path');
const exec = require('child_process').exec;
const del = require('del');
const ghPages = require('gh-pages');

const args = process.argv.slice(2);

if (!args[0]) {
  console.log(`Valid arguments:
  • publish (push to github)
  • deploy (build & publish)
  • docs (rebuild documentation)`
  );
}

function getCommit() {
  console.log('Getting commit...');
  return new Promise((resolve, reject) => {
    exec('git log -1 --pretty=%s && git log -1 --pretty=%b', (err, stdout) => {
      if (err) {
        return reject(err);
      }

      const parts = stdout.replace('\n\n', '').split('\n');

      return resolve(`${(parts[0] ? parts[0] : 'Auto-generated commit')} ${new Date().toISOString()}`);
    });
  });
}

function publish() {
  getCommit()
    .then(commit => {
      console.log('Copying README...');
      exec('cp README.md dist/', (errCopy) => {
        if (errCopy) {
          console.log(errCopy);
          return;
        }

        console.log('Publishing...');
        ghPages.publish(path.join(__dirname, 'dist'), {
          message: commit
        });
      });
    });
}

if (args[0] === 'deploy') {
  const start = Date.now();
  console.log('Bundling...');
  exec('npm run build', (errBuild) => {
    if (errBuild) {
      console.log(errBuild);
      return;
    }

    console.log(`Bundled in ${(Date.now() - start) / 1000} s`);

    publish();
  });
}

if (args[0] === 'publish') {
  publish();
}

if (args[0] === 'docs') {
  del(['./docs/*'])
    .then(() => {
      console.log('Generating documentation...');
      return exec('jsdoc -c .jsdoc.json -R README.md');
    });
}
