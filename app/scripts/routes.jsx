import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import Stories from './components/Stories';
import NotFound from './components/NotFound';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Stories} />
		<Route path="home" component={Home} />
		<Route path="stories" component={Stories} />
		<Route path="*" component={NotFound} />
	</Route>
);
