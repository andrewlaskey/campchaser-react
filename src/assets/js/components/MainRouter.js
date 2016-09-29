import React from 'react';
import {browserHistory, Router, Route, IndexRoute} from 'react-router';
import Container from './Container';

export class MainRouter extends React.Component {

	render() {
		return (
			<Router history={browserHistory} >
				<Route path="/" component={Container} >
					<IndexRoute component={Container} />
				</Route>
			</Router>
		);
	}
}

export default MainRouter;