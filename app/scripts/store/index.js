/*eslint-disable import/no-mutable-exports */
let store;

if (process.env.NODE_ENV === 'production') {
  store = require('./configureStore.prod');
}
else {
  store = require('./configureStore.dev');
}

export default store;
