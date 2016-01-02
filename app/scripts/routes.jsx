import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import Popular from './components/Popular';
import LastWeek from './components/LastWeek';
import NotFound from './components/NotFound';

export default (
	<Route path="/" component={App}>
		<IndexRedirect to="popular" />
		<Route path="home" component={Home} />
		<Route path="popular" component={Popular} />
		<Route path="lastweek" component={LastWeek} />
		<Route path="*" component={NotFound} />
	</Route>
);
