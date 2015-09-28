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
		type: React.PropTypes.string
	}

	render() {
		const baseClass = 'menu-bar ' + 
							(this.props.type === 'mobile' ? 'mobile' : 'web');

		return (
			<div className={baseClass}>
				<Link to="/" className='menu-button'>Home</Link>
				<Link to="/comingsoon" className='menu-button'>Schedule</Link>
				<Link to="/committee" className='menu-button'>Committee</Link>
				<Link to="/comingsoon" className='menu-button'>Sponsors</Link>
				<Link to="/comingsoon" className='menu-button'>Contests</Link>
				<Link to="/comingsoon" className='menu-button'>Gallery</Link>
				<Link to="/comingsoon" className='menu-button'>Past Events</Link>
			</div>
		);
	}
}

export default MenuBar;
