import React from 'react';
import { Link } from 'react-router';

export class Header extends React.Component {
	render () {
		return (
			<header>
				<h1 className="app-title">CampChaser</h1>
				<ul className="nav">
					<li><Link to="/recent" activeClassName="active">Recent</Link></li>
					<li><Link to="/popular" activeClassName="active">Popular</Link></li>
				</ul>
			</header>
		)
	}
}

export default Header;

