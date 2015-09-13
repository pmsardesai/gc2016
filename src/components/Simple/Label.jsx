import React from 'react';

class Text extends React.Component {
	static propTypes = {
		/*
		* Custom class name.
		*/
		customCss: React.PropTypes.string,

		/*
		* The text to set in the label.
		*/
		text: React.PropTypes.string
	}

	render() {
		const baseClass = 'label';

		const className = baseClass
			+ (this.props.customCss
				? ' ' + this.props.customCss : '');

		return (
			<div className={className}>
				{this.props.text}
			</div>
		);
	}
}

export default Text;
