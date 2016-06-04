/*eslint-disable no-var, vars-on-top, no-console */
var path = require('path');
var exec = require('child_process').exec;
var del = require('del');
var ghPages = require('gh-pages');

var args = process.argv.slice(2);

if (!args[0]) {
  console.log(`Valid arguments:
  • publish (push to github)
  • deploy (build & publish)
  • docs (rebuild documentation)
  • modified (file has changed in the last merge)
  • commits (has new remote commits)`
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

if (args[0] === 'modified') {
  if (!args[1]) {
    throw new Error('Nothing to search');
  }

  exec('git diff-tree -r --name-only --no-commit-id ORIG_HEAD HEAD', (err, stdout) => {
    if (err) {
      throw new Error(err);
    }

    if (!stdout.match(args[1])) {
      process.exit(1);
    }
  });
}

if (args[0] === 'commits') {
  exec('git remote -v update', (errRemote) => {
    if (errRemote) {
      throw new Error(errRemote);
    }

    var local = new Promise((resolve, reject) => {
      exec('git rev-parse @', (err, stdout) => {
        if (err) {
          return reject(err);
        }

        return resolve(stdout);
      });
    });

    var remote = new Promise((resolve, reject) => {
      exec('git rev-parse @{u}', (err, stdout) => {
        if (err) {
          return reject(err);
        }

        return resolve(stdout);
      });
    });

    var base = new Promise((resolve, reject) => {
      exec('git rev-parse @ @{u}', (err, stdout) => {
        if (err) {
          return reject(err);
        }
        return resolve(stdout);
      });
    });

    Promise.all([local, remote, base])
      .then(values => {
        let [$local, $remote, $base] = values;

        if ($local === $base) {
          process.exit(1);
        }
      });
  });
}
