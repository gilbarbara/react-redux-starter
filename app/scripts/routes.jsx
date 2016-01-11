import React from 'react';
import { Route, IndexRedirect } from 'react-router';

import App from './components/App';
import About from './components/About';
import Artists from './components/Artists';
import Popular from './components/Popular';
import LastWeek from './components/LastWeek';
import NotFound from './components/NotFound';

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
