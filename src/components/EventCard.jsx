import React from 'react';

class EventCard extends React.Component {
	static propTypes = {
		/*
		* An object that has the event details
		*/
		eventInfo: React.PropTypes.object
	}

	_renderEvent(event) {
		let blocks = [];

		event && event.dvd &&
			blocks.push(<a href={event.dvd} target="_blank" className="fa fa-1dot5x fa-video-camera"></a>);

		event && event.website &&
			blocks.push(<a href={event.website} target="_blank" className="fa fa-1dot5x fa-globe"></a>);

		event && event.souvenir &&
			blocks.push(<a href={event.souvenir} target="_blank" className="fa fa-1dot5x fa-book"></a>);
			
		return blocks;
	}

	render() {
		const event = this.props.eventInfo;
		return (
			<div className="event-card">
				<div className="year-container">{event.year}</div>
				<div className="location-container">{event.location}</div>
				<div className="links-container">
					{this._renderEvent(event)}
				</div>
			</div>
		);
	}
}

export default EventCard;
