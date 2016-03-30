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
		onItemClick: React.PropTypes.func,

		/*
		* The current active page.
		*/
		activePage: React.PropTypes.string
	}

	_getButtonCss(pathname) {
		let css = 'menu-button';
		css += (this.props.activePage === pathname) ? ' active' : '';
		return css;
	}

	render() {
		const baseClass = 'menu-bar ' + 
							(this.props.type === 'mobile' ? 'mobile' : 'web');

		const highlights = this._getButtonCss('highlights');
		const scheduleCss = this._getButtonCss('schedule');
		const hotelCss = this._getButtonCss('hotel');
		const concertCss = this._getButtonCss('concert');
		const contestsCss = this._getButtonCss('contests');
		const sponsorsCss = this._getButtonCss('sponsors');
		const committeeCss = this._getButtonCss('committee');
		//const galleryCss = this._getButtonCss('gallery');
		const pastEventsCss = this._getButtonCss('pastevents');
		const registerCss = this._getButtonCss('register');

		return (
			<div className={baseClass}>
				<Link to="/register" className={registerCss} onClick={this.props.onItemClick}>Register</Link>
				<Link to="/highlights" className={highlights} onClick={this.props.onItemClick}>Attractions</Link>
				<Link to="/schedule" className={scheduleCss} onClick={this.props.onItemClick}>Schedule</Link>
				<Link to="/concert" className={concertCss} onClick={this.props.onItemClick}>Concert</Link>
				<Link to="/contests" className={contestsCss} onClick={this.props.onItemClick}>Contests</Link>
				<Link to="/hotel" className={hotelCss} onClick={this.props.onItemClick}>Hotel</Link>
				<Link to="/committee" className={committeeCss} onClick={this.props.onItemClick}>Committee</Link>
				<Link to="/sponsors" className={sponsorsCss} onClick={this.props.onItemClick}>Sponsors</Link>
				{ /*<Link to="/gallery" className={galleryCss} onClick={this.props.onItemClick}>Gallery</Link>*/ }
				<Link to="/pastevents" className={pastEventsCss} onClick={this.props.onItemClick}>Past Events</Link>
			</div>
		);
	}
}

export default MenuBar;
