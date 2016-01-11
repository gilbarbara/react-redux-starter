import React from 'react';
import { Route, IndexRedirect } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import Artists from './components/Artists';
import Popular from './components/Popular';
import LastWeek from './components/LastWeek';
import NotFound from './components/NotFound';

export default (
	<Route path="/" component={App}>
		<Route path="home" component={Home} />
		<IndexRedirect to="artists" />
		<Route path="artists" component={Artists} />
		<Route path="popular" component={Popular} />
		<Route path="lastweek" component={LastWeek} />
		<Route path="*" component={NotFound} />
	</Route>
);
