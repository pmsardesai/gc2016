import React from 'react';
import Button from './Simple/Button';

/* 
* This collapsible menu is used on tablets and smartphones.
*/
class MenuBar extends React.Component {
	static propTypes = {
		/*
		* Event handler that toggles the state of the menu
		*/
		onToggleMenuState: React.PropTypes.func,

		/*
		* The list of pages to display
		*/
		pages: React.PropTypes.array,

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
				{ this.props.pages.map(p => (
					<Button 
						text={p}
						onClick={this.props.onToggleMenuState} />
				))}
			</div>
		);
	}
}

export default MenuBar;
