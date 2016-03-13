/*eslint-disable no-var, one-var, func-names, indent, prefer-arrow-callback, object-shorthand, no-console, newline-per-chained-call, one-var-declaration-per-line, prefer-template, vars-on-top  */

var gulp               = require('gulp'),
    $                  = require('gulp-load-plugins')(),
    babelRegister      = require('babel-register'),
    browserify         = require('browserify'),
    browserSync        = require('browser-sync').create(),
    buffer             = require('vinyl-buffer'),
    del                = require('del'),
    exec               = require('child_process').exec,
    historyApiFallback = require('connect-history-api-fallback'),
    lrload             = require('livereactload'),
    merge              = require('merge-stream'),
    path               = require('path'),
    runSequence        = require('run-sequence'),
    source             = require('vinyl-source-stream'),
    vinylPaths         = require('vinyl-paths'),
    watchify           = require('watchify');

var AUTOPREFIXER_BROWSERS = [
      'ie >= 9',
      'ie_mob >= 10',
      'ff >= 30',
      'chrome >= 34',
      'safari >= 7',
      'opera >= 23',
      'ios >= 7',
      'android >= 4.4',
      'bb >= 10'
    ],
    isProduction          = function() {
      return process.env.NODE_ENV === 'production';
    },
    middleware            = historyApiFallback({}),
    commitMessage;

// Functions
function watchifyTask(options) {
  var bundler, rebundle, tap, iteration = 0;
  bundler = browserify({
    entries: path.join(__dirname, '/app/scripts/main.js'),
    basedir: __dirname,
    insertGlobals: false,
    cache: {}, // required for watchify
    // debug: options.watch,
    packageCache: {}, // required for watchify
    fullPaths: false,
    plugin: options.watch ? [lrload] : [],
    extensions: ['.jsx']
  });

  if (options.watch) {
    bundler = watchify(bundler);
  }

  tap = function() {
    if (iteration === 0 && options.cb) {
      options.cb();
    }
    iteration++;
  };

  rebundle = function() {
    var stream = bundler.bundle();

    if (options.watch) {
      stream.on('error', $.util.log);
    }

    stream
      .pipe(source('app.js'))
      .pipe(buffer())
      .pipe(gulp.dest('.tmp/scripts'))
      .pipe($.tap(tap));
  };

  bundler.on('update', rebundle);
  return rebundle();
}

gulp.task('styles', function() {
  return gulp.src('app/styles/main.scss')
    .pipe($.changed('styles', {
      extension: '.scss'
    }))
    .pipe($.plumber())
    .pipe($.sass.sync({
      includePaths: ['bower_components/'],
      precision: 10
    }).on('error', $.sass.logError))
    .pipe($.plumber.stop())
    .pipe($.autoprefixer({
      browsers: AUTOPREFIXER_BROWSERS
    }))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(gulp.dest('.tmp/styles'))
    .pipe(browserSync.stream())
    .pipe($.size({
      title: 'Styles'
    }));
});

gulp.task('scripts', function(cb) {
  return watchifyTask({
    watch: !isProduction(),
    cb: cb
  });
});

gulp.task('scripts:lint', function() {
  return gulp.src('app/scripts/**/*')
    .pipe($.eslint({
      plugins: ['react', 'jsdoc']
    }))
    .pipe($.eslint.format())
    .pipe($.eslint.failOnError());
});

gulp.task('modernizr', function(cb) {
  return exec('./node_modules/.bin/modernizr -c .modernizr.json -d .tmp/scripts/modernizr.js', cb);
});

gulp.task('bundle', function() {
  var copy,
      fonts,
      optimize;

  optimize = gulp.src('app/index.html')
    .pipe($.useref())
    .pipe($.if('*.css', $.cssmin()))
    .pipe($.if('*.js', $.uglify()))
    .pipe(gulp.dest('dist'))
    .pipe($.size({
      title: 'optimize'
    }));

  fonts = gulp.src('.tmp/styles/fonts/**/*')
    .pipe(gulp.dest('dist/styles/fonts'))
    .pipe($.size({
      title: 'Fonts'
    }));

  copy = gulp.src([
      'app/*.*',
      '!app/*.html',
      '!app/*.appcache'
    ], { dot: true })
    .pipe(gulp.dest('dist'))
    .pipe($.size({
      title: 'copy'
    }));

  return merge(optimize, fonts, copy);
});

gulp.task('media', function() {
  return gulp.src('app/media/**/*')
    .pipe($.cache($.imagemin({
      verbose: true,
      progressive: true,
      interlaced: true
    })))
    .pipe(gulp.dest('dist/media'))
    .pipe($.size({
      title: 'Media'
    }));
});

gulp.task('fonts', function() {
  return gulp.src('bower_components/fontawesome/fonts/*.{eot,svg,ttf,woff,woff2}')
    .pipe($.flatten())
    .pipe(gulp.dest('.tmp/styles/fonts'))
    .pipe($.size({
      title: 'Fonts'
    }));
});

gulp.task('clean', function() {
  var target = ['.tmp/*'];

  if (isProduction()) {
    target.push('dist/*');
  }

  return del(target);
});

gulp.task('sizer', function() {
  return gulp.src('dist/**/*')
    .pipe($.size({
      title: 'Build',
      gzip: true
    }));
});

gulp.task('assets', function(cb) {
  runSequence('styles', 'scripts', ['modernizr', 'fonts'], cb);
});

gulp.task('test', function() {
  return gulp.src('app/scripts/**/__tests__/*.js', {
      read: false
    })
    .pipe($.mocha({
      reporter: 'spec',
      compilers: {
        js: babelRegister
      }
    }));
});

gulp.task('docs', function(cb) {
  del(['docs/*'])
    .then(function() {
      return exec('jsdoc -c .jsdoc.json -R README.md', cb);
    });
});

gulp.task('get-commit', function(cb) {
  exec('git log -1 --pretty=%s && git log -1 --pretty=%b', function(err, stdout) {
    var parts = stdout.replace('\n\n', '').split('\n');

    commitMessage = parts[0];
    if (parts[1]) {
      commitMessage += ' — ' + parts[1];
    }

    cb(err);
  });
});

gulp.task('gh-pages', ['get-commit'], function() {
  var clean,
      push;

  clean = gulp.src('.publish/.DS_Store')
    .pipe(vinylPaths(del));

  push = gulp.src([
      'dist/**/*',
      'README.md'
    ])
    .pipe($.ghPages({
      branch: 'gh-pages',
      message: commitMessage,
      force: true
    }));

  return merge(clean, push);
});

gulp.task('serve', ['assets', 'scripts'], function() {
  browserSync.init({
    notify: true,
    logPrefix: 'react-redux',
    server: {
      baseDir: ['.tmp', 'app'],
      routes: {
        '/bower_components': 'bower_components',
        '/node_modules': 'node_modules'
      },
      middleware: [middleware]
    }
  });
  gulp.watch('app/styles/**/*.scss', function(e) {
    if (e.type === 'changed') {
      gulp.start('styles');
    }
  });
  gulp.watch(['app/*.html', 'app/media/**/*']).on('change', browserSync.reload);
  gulp.watch('.modernizr.json', ['modernizr', browserSync.reload]);
});

gulp.task('build', ['clean'], function(cb) {
  process.env.NODE_ENV = 'production';
  runSequence('scripts:lint', 'assets', ['bundle', 'media'], 'sizer', cb);
});

gulp.task('deploy', function(cb) {
  runSequence('build', 'gh-pages', cb);
});

gulp.task('default', ['serve']);
