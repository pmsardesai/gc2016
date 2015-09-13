import React from 'react';
import Button from './Simple/Button';

class MenuContainer extends React.Component {
	static propTypes = {
		/*
		* The state of the menu. It can be 'pinned' or 'unpinned'.
		* Default: 'unpinned'
		*/
		menuState: React.PropTypes.oneOf(['pinned', 'unpinned'])
	}

	render() {
		const baseClass = 'menu-container';

		const className = baseClass
			+ (this.props.menuState === 'pinned' ? ' pinned' : ' unpinned');

		const menuItems =
		['Home',
		'Schedule',
		'Sponsors',
		'Venue',
		'Team',
		'Past Events',
		'Attendees'];

		const rows = [];

		menuItems.forEach(function eachMenuItem(item) {
			rows.push(<Button text={item} />);
		});

		return (
			<div className={className}>
				{rows}
			</div>
		);
	}
}

export default MenuContainer;
