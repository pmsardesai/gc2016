import React from 'react';
import Home from './Page/Home';

class Content extends React.Component {
	static propTypes = {
		/*
		* The selected page
		*/
		selectedPage: React.PropTypes.string
	}

	render() {
		switch (this.props.selectedPage) {
			default: return ( <Home />);
		}
	}
}

export default Content;
