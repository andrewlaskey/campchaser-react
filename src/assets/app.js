import React from 'react';
import ReactDOM from 'react-dom';

const App = React.createClass({
	render: function () {
		return (<div>Text Text Text</div>);
	}
});

const mountNode = document.querySelector('#app');

ReactDOM.render(<App />, mountNode);