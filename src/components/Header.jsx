import React from 'react';
import Button from './Simple/Button';
import Label from './Simple/Label';
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
					<Label customCss='logo' text='' />
					<MenuBar type='web' pages={this.props.pages} />
					<Button
						customCss="menu-button fa fa-bars fa-2x"
						onClick={this.props.onClick}
					/>
				</div>
			</div>
		);
	}
}

export default Header;
