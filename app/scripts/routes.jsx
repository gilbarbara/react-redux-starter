import React from 'react';
import { Route, IndexRedirect } from 'react-router';

import App from 'containers/App';
import About from 'containers/About';
import Artists from 'containers/Artists';
import Popular from 'containers/Popular';
import LastWeek from 'containers/LastWeek';
import NotFound from 'containers/NotFound';

export default (
  <Route path="/" component={App}>
    <IndexRedirect to="artists" />
    <Route path="artists" component={Artists} />
    <Route path="popular" component={Popular} />
    <Route path="lastweek" component={LastWeek} />
    <Route path="about" component={About} />
    <Route path="*" component={NotFound} />
  </Route>
);
