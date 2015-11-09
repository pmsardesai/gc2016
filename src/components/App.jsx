import React from 'react';
import GoogleAnalytics from 'react-google-analytics';
import {Initializer} from 'react-google-analytics';
import Header from './Header';
import MenuBar from './MenuBar';

class App extends React.Component {
	static propTypes = {
		/*
		* The list of different routes.
		*/
		children: React.PropTypes.array
	}

	constructor(props) {
		super(props);

		/*
		* The state of the menu. It can be 'pinned' or 'unpinned'.
		* Default: 'unpinned'
		*/
		this.state = {menuState: 'unpinned', isNewPage: true, pathname: '/'};
	}

	/*
  	* When the menu button is clicked, toggle the state of menu.
  	*/
	onToggleMenuState(unpin) {
		let state = unpin === true ? 'pinned' : this.state.menuState;
		this.setState({
			menuState: (state === 'unpinned') ? 'pinned' : 'unpinned',
			isNewPage: false
		});

		window.scrollTo(0, 0);
	}

	/*
  	* Get new page details whenever the props changes
  	*/
	componentWillReceiveProps(nextProps) {
		this.setState( {
			isNewPage: true,
			pathname: nextProps.location.pathname
		});
	}

	render() {
		const className = 'main-app ' + this.state.menuState;

		// if user navigates to new page, send pageview to google analytics
		if (window.location.hostname !== 'localhost' &&
		 	window.location.host !== 'dev.goansinamerica.com') { // exclude development traffic
			const GA_TRACKING_CODE = 'UA-49795903-4';
			GoogleAnalytics('create', GA_TRACKING_CODE);
			this.state.isNewPage && GoogleAnalytics('send', 'pageview', this.state.pathname);
		}

		return (
			<div className={className}>
				<Header onClick={this.onToggleMenuState.bind(this)} />
				{ this.props.children }
				<MenuBar type='mobile' onItemClick={this.onToggleMenuState.bind(this)} />
				<Initializer />
			</div>
		);
	}
}

export default App;
