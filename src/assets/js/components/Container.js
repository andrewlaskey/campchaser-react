import React from 'react';
import Header from './Header';
import SiteList from './SiteList';

export class Container extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<SiteList />
			</div>
		);
	}
}

export default Container;