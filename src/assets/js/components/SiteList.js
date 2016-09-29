import React from 'react';

export class SiteList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			sites: []
		}
	}

	render() {
		return(
			<ul></ul>
		)
	}
}

export default SiteList;