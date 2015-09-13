import React from 'react';
import Footer from './Footer';
import Header from './Header';
import MenuContainer from './MenuContainer';

class App extends React.Component {
	constructor(props) {
		super(props);

		/*
		* The state of the menu. It can be 'pinned' or 'unpinned'.
		* Default: 'unpinned'
		*/
		this.state = {menuState: 'unpinned'};
	}

	/*
  	* When the menu button is clicked, toggle the state of menu.
  	*/
	onMenuStateChanged() {
		this.setState({
			menuState: this.state.menuState === 'unpinned' ? 'pinned' : 'unpinned'
		});
	}

	render() {
		const className = 'mainApp ' + this.state.menuState;

		return (
			<div className={className}>
				<Header onClick={this.onMenuStateChanged.bind(this)} />
				<Footer />
				<MenuContainer />
			</div>
		);
	}
}

export default App;
