import React from 'react';

export default React.createClass({
	render() {
		return (
			<div className='text'>
				{this.props.children}
			</div>
		);
	}
});