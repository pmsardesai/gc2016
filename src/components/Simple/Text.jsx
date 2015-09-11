import React from 'react';

export default React.createClass({
	propTypes: {
		/*
		* Custom class name.
		*/
		className: React.PropTypes.string
	},

	render() {
		let baseClass = 'text';

		let className = baseClass 
			+ (this.props.customCss 
				? ' ' + this.props.customCss : '');
			
		return (
			<div className={className}>
				{this.props.children}
			</div>
		);
	}
});