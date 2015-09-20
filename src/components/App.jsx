import React from 'react';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import MenuContainer from './MenuContainer';

class App extends React.Component {
	constructor(props) {
		super(props);

		/*
		* The state of the menu. It can be 'pinned' or 'unpinned'.
		* Default: 'unpinned'
		*
		* The current page displayed.
		* Default: 'home' -- the home page is displayed by default
		*/
		this.state = {menuState: 'unpinned', currentPage: 'home'};
	}

	/*
  	* When the menu button is clicked, toggle the state of menu.
  	*/
	onToggleMenuState() {
		this.setState({
			menuState: this.state.menuState === 'unpinned' ? 'pinned' : 'unpinned'
		});
	}

	/*
  	* When the menu item is clicked, navigate to the selected page.
  	*/
	onSelectedMenuItemChanged(item) {
		this.setState( {
			menuState: 'unpinned', // unpin menu
			currentPage: item
		});
	}

	render() {
		const className = 'main-app ' + this.state.menuState;

		const pages = ['Home', 'Schedule', 'Committee', 'Sponsors', 'Contests', 'Gallery', 'Past Events'];

		return (
			<div className={className}>
				<Header onClick={this.onToggleMenuState.bind(this)} pages={pages} />
				<Content selectedPage={this.state.currentPage} />
				<Footer />
				<MenuContainer type='mobile' pages={pages} onToggleMenuState={this.onToggleMenuState.bind(this)} />
			</div>
		);
	}
}

export default App;
