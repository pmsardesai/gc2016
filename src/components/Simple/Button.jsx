import React from 'react';

export default React.createClass({
	propTypes: {
		/*
		* Custom class name.
		*/
		className: React.PropTypes.string
	},

	render() {
		let baseClass = 'button';

		let className = baseClass 
			+ (this.props.customCss 
				? ' ' + this.props.customCss : '');

		return (
			<button className={className}>
				{this.props.children}
			</button>
		);
	}
});