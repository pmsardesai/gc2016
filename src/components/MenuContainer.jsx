import React from 'react';
import Button from './Simple/Button';

class MenuContainer extends React.Component {
	render() {
		const baseClass = 'menu-container';

		const className = baseClass;
		
		const menuItems =
		['Home',
		'Schedule',
		'Sponsors',
		'Venue',
		'Team',
		'Past Events',
		'Attendees'];

		return (
			<div className={className}>
				{ menuItems.map(i => <Button text={i} />) }
			</div>
		);
	}
}

export default MenuContainer;
