React Redux Starter Kit
===

React with [redux](https://github.com/rackt/redux) and [react-router](https://github.com/rackt/react-router).  

###[View Demo](http://gilbarbara.github.io/react-redux/)

#### Tired of silly counters and todos?
This starter kit implements the Hypemachine API to demonstrate how to use actions and reducers in real life.

## Getting Started
Clone the repo and install the dependencies.

```bash
$ git clone https://github.com/gilbarbara/react-redux.git
$ cd react-redux
$ npm install && bower install
$ gulp serve
```

## Features

#### Code style
- [eslint](https://github.com/eslint/eslint) with [airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) config
- [scss_lint](https://github.com/brigade/scss-lint)

#### Building
- [browserify](https://github.com/substack/node-browserify) with [babelify](https://github.com/babel/babelify) (for ES2015, JSX, stage-1), [debowerify](https://github.com/eugeneware/debowerify) (for bower modules) and [browserify-shim](https://github.com/thlorenz/browserify-shim) (for globals like jQuery)
- [redux-thunk](https://github.com/gaearon/redux-thunk) and [redux-api-middleware](https://github.com/agraboso/redux-api-middleware)
- [core-js](https://github.com/zloirock/core-js) for polyfills.

#### Development
- [redux-devtools](https://github.com/gaearon/redux-devtools) and [redux-logger](https://github.com/fcomb/redux-logger)
- [livereactload](https://github.com/milankinen/livereactload) (for "hot" reloading).

#### Testing
- [mocha](https://github.com/mochajs/mocha) with [expect](https://github.com/mjackson/expect)

## Requirements
- node `^4.2.0`
- npm `^3.0.0`

