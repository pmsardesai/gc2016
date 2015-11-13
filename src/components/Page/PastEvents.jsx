import React from 'react';
import EventCard from '../EventCard';
import Footer from '../Footer';
import data from '../../constants/EventDetails';

class PastEvents extends React.Component {
	render() { 
		return (
			<div className="page past-events">
				<div className="black-header-background" /> 
				<div className="page-header">
					<div className="background" /> 
					<div className="page-title">Past Events</div>
				</div>
				<div className="page-content past-events-container"> 
					<div className="past-events-container-inner">
						<div className="page-details">
							Below are links to documents, websites and videos of previous Goan Conventions.
						</div>

						{ data.map(c => {
							return <EventCard eventInfo={c} />;
						})}
					</div>
				</div>
				<Footer />
				
			</div>
		);
	}
}

export default PastEvents;
