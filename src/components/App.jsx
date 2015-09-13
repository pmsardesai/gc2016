import React from 'react';
import Footer from './Footer';
import Header from './Header';
import MenuContainer from './MenuContainer';

class App extends React.Component {
	static propTypes = {
		/*
		* The state of the menu. It can be 'pinned' or 'unpinned'.
		* Default: 'unpinned'
		*/
		menuState: React.PropTypes.oneOf(['pinned', 'unpinned'])
	}

	static defaultProps = {
		menuState: 'unpinned'
	}

	/*
  	* When the menu button is clicked, toggle the state.
  	*/
	onMenuStateChanged() {
		this.props.menuState =
			this.props.menuState === 'unpinned' ? 'pinned' : 'unpinned';
	}

	onMenuItemChanged() {

	}

	render() {
		return (
			<div>
				<Header onClick={this.onMenuStateChanged} />
				<Footer />

				<MenuContainer state={this.props.menuState} />
			</div>
		);
	}
}

export default App;
