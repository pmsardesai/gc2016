import React from 'react';
import { Link } from 'react-router';
import MenuBar from './MenuBar';

class Header extends React.Component {
	static propTypes = {
		/*
		* The click event handler.
		*/
		onClick: React.PropTypes.func
	}

	render() {
		return (
			<div className='header'>
				<div className='header-content'>
					<Link to='/' className='logo' />
					<MenuBar type='web' onItemClick={this.props.onClick} />
					<button
						className="hamburger-icon fa fa-bars fa-2x"
						onClick={this.props.onClick}
					/>
				</div>
			</div>
		);
	}
}

export default Header;
