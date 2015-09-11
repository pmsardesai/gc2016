import React from 'react';

export default React.createClass({
	propTypes: {
		/*
		* The state of the menu. It can be pinned or unpinned.
		* Default: 'unpinned'
		*/
		state: React.PropTypes.string
	},

	render() {
		let baseClass = 'menu-container';

		let className = baseClass 
			+ (this.props.state === 'pinned' ? ' pinned' : '');

		return (
			<div className='menu-container'></div>
		);
	}
});