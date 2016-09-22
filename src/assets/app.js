import React from 'react';
import ReactDOM from 'react-dom';

import {browserHistory, Router, Route} from 'react-router'

const Home = React.createClass({
	render: function () {
		return (<div>Hello World</div>);
	}
});

const routes = (
	<Router>
		<Route path="/" component={Home} />
	</Router>
);

import App from './js/components/App';

const mountNode = document.querySelector('#app');

ReactDOM.render(
	<App 
		routes={routes}
		history={browserHistory} />, 
	mountNode
);