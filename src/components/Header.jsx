import React from 'react';
import Text from './Simple/Text';
import Button from './Simple/Button';

export default React.createClass({
	render() {
		return (
			<div className='header'>
				<Text>Goan Convention 2016</Text>
				<div className='main-menu-container'>
					<Text>MENU</Text>
					<Button customCss="fa fa-bars fa-2x"></Button>
				</div>
			</div>
		);
	}
});
