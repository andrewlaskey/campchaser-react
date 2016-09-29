import React, { PropTypes } from 'react';
import MainRouter from './MainRouter';


class App extends React.Component {

	render() {
		return (
			<div style={ { height: '100%' } }>
				<MainRouter/>
			</div>
		)
	}

}

export default App;