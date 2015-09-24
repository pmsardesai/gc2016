import React from 'react';
import Footer from './Footer';
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

	render() {
		const className = 'main-app ' + this.state.menuState;

		return (
			<div className={className}>
				<Header onClick={this.onToggleMenuState.bind(this)} />
				{ this.props.children }
				<Footer />
				<MenuBar type='mobile' />
			</div>
		);
	}
}

export default App;
