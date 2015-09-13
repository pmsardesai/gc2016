import React from 'react';
import Button from './Simple/Button';
import Label from './Simple/Label';

class Header extends React.Component {
	static propTypes = {
		/*
		* The click event handler.
		*/
		onClick: React.PropTypes.funct
	}

	render() {
		return (
			<div className='header'>
				<Label text="Goan Convention 2016" />
				<div className='menu-button-container'>
					<Label text="MENU" />
					<Button
						customCss="fa fa-bars fa-2x"
						onClick={this.props.onClick}
					/>
				</div>
			</div>
		);
	}
}

export default Header;
