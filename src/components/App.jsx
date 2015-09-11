import React from 'react';
import Header from './Header';
import Footer from './Footer';
import MenuContainer from './MenuContainer';

export default React.createClass({
	render() {
		return (
			<div>
				<Header />
				<Footer />

				<MenuContainer state='unpinned' />
			</div>
		);
	}
});