import React from 'react';
import AttendeesInfo from '../constants/Attendees';

class Attendees extends React.Component {

	_renderAttendee() {
		let blocks = [];
		let total = 0;
		for (let i = 0; i < AttendeesInfo.length; i++) {
			let info = AttendeesInfo[i];
			total += info.count;
			blocks.push(
				<div className="attendee-container">
					<div className="left"> 
						<span className="last">{info.lastName}</span>
						<span className="first">&mdash; {info.firstNames}</span>
					</div>
					<div className="right">{info.location}</div>
				</div>
			);
		}
		return blocks;
	}

	render() {
		return (
			<div className="attendees-block">
				{this._renderAttendee()}
			</div>
		);
	}
}

export default Attendees;
