import React from 'react';
import { Link } from 'react-router';

/* 
* This is a navigation bar with menu items.
*/
class MenuBar extends React.Component {
	static propTypes = {
		/*
		* The type of menu. Can be either 'mobile' or 'web'.
		*/
		type: React.PropTypes.string,

		/*
		* The click event handler.
		*/
		onItemClick: React.PropTypes.func
	}

	render() {
		const baseClass = 'menu-bar ' + 
							(this.props.type === 'mobile' ? 'mobile' : 'web');

		return (
			<div className={baseClass}>
				<Link to="/schedule" className='menu-button' onClick={this.props.onItemClick}>Schedule</Link>
				<Link to="/hotel" className='menu-button' onClick={this.props.onItemClick}>Hotel</Link>
				<Link to="/concert" className='menu-button' onClick={this.props.onItemClick}>Concert</Link>
				<Link to="/contests" className='menu-button' onClick={this.props.onItemClick}>Contests</Link>
				<Link to="/sponsors" className='menu-button' onClick={this.props.onItemClick}>Sponsors</Link>
				<Link to="/committee" className='menu-button' onClick={this.props.onItemClick}>Committee</Link>
				<Link to="/comingsoon" className='menu-button' onClick={this.props.onItemClick}>Gallery</Link>
				<Link to="/pastevents" className='menu-button' onClick={this.props.onItemClick}>Past Events</Link>
				<Link to="/register" className='menu-button register' onClick={this.props.onItemClick}>Register</Link>
			</div>
		);
	}
}

export default MenuBar;
