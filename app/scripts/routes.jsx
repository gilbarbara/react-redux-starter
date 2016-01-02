import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import Featured from './components/Featured';
import NotFound from './components/NotFound';

export default (
	<Route path="/" component={App}>
		<IndexRedirect to="stories" />
		<Route path="home" component={Home} />
		<Route path="featured" component={Featured} />
		<Route path="*" component={NotFound} />
	</Route>
);
