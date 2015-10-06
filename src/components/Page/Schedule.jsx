import React from 'react';
import Footer from '../Footer';

class Schedule extends React.Component {
	render() { 
		return (
			<div className="page schedule">
				<div className="black-header-background" /> 
				<div className="page-header">
					<div className="background" /> 
					<div className="page-title">Schedule</div>
				</div>
				<div className="page-content schedule-container"> 
					<div className="schedule-container-inner">

						<div className="info note">
							NOTE: The following is a tentative schedule only - it is subject to change.
						</div>
						<div className="info printable">
							<a href="documents/schedule.pdf" target="_blank">
								<span className="fa fa-print"></span>
								<span className="document">Printable PDF</span>
							</a>
						</div>

						<div className="info">
							<table>
								{   /* DAY ONE */   }
								<tr>
									<td className="day" colSpan="4">Saturday, July 2<sup>nd</sup>, 2016</td>
								</tr>
								<tr>
									<td className="time">2:30 PM</td>
									<td className="event" rowSpan="3">Registration</td>
									<td className="event empty"></td>
									<td className="event empty"></td>
								</tr>
								<tr>
									<td className="time">3:00 PM</td>
									<td className="event" rowSpan="3">Garam Cha, Bhaji ani Thand Limbu Sarbat</td>
									<td className="event" rowSpan="4">Youth and Kids Activities</td>
								</tr>
								<tr>
									<td className="time">4:00 PM</td>
								</tr>
								<tr>
									<td className="time">4:30 PM</td>
									<td className="event empty"></td>
								</tr>
								<tr>
									<td className="time">5:00 PM</td>
									<td className="event">Welcome Ceremony</td>
									<td className="event empty"></td>
								</tr>
								<tr>
									<td className="time">6:00 PM</td>
									<td className="event">Goenche Kalakar: Kids</td>
									<td className="event empty"></td>
									<td className="event empty"></td>
								</tr>
								<tr>
									<td className="time">7:00 PM</td>
									<td className="event empty"></td>
									<td className="event empty"></td>
									<td className="event empty"></td>
								</tr>
								<tr>
									<td className="time">7:30 PM</td>
									<td className="event">Cocktail hour and dinner</td>
									<td className="event empty"></td>
									<td className="event empty"></td>
								</tr>
								<tr>
									<td className="time">9:30 PM (until night)</td>
									<td className="event">DJ and Karaoke night</td>
									<td className="event empty"></td>
									<td className="event empty"></td>
								</tr>
								<tr>
									<td className="end" colSpan="4"></td>
								</tr>

								{   /* DAY TWO */   }
								<tr>
									<td className="day" colSpan="4">Sunday, July 3<sup>rd</sup>, 2016</td>
								</tr>
								<tr>
									<td className="time">7:00 AM</td>
									<td className="event" rowSpan="3">Breakfast</td>
									<td className="event empty"></td>
									<td className="event empty"></td>
								</tr>
								<tr>
									<td className="time">7:30 AM</td>
									<td className="event" rowSpan="3">Yoga/Zumba</td>
									<td className="event empty"></td>
								</tr>
								<tr>
									<td className="time">8:30 AM</td>
									<td className="event empty"></td>
								</tr>
								<tr>
									<td className="time">9:00 AM</td>
									<td className="event empty"></td>
									<td className="event empty"></td>
								</tr>
								<tr>
									<td className="time">10:30 AM</td>
									<td className="event">Bus ride to picnic</td>
									<td className="event empty"></td>
									<td className="event empty"></td>
								</tr>
								<tr>
									<td className="time">11:00 AM</td>
									<td className="event">Picnic</td>
									<td className="event empty"></td>
									<td className="event empty"></td>
								</tr>
								<tr>
									<td className="time">12:30 PM</td>
									<td className="event">Picnic Lunch</td>
									<td className="event empty"></td>
									<td className="event empty"></td>
								</tr>
								<tr>
									<td className="time">2:00 PM</td>
									<td className="event">Bus ride back to hotel</td>
									<td className="event empty"></td>
									<td className="event empty"></td>
								</tr>
								<tr>
									<td className="time">2:30 PM</td>
									<td className="event">Vanhibailyo Vasryo: Siesta/Pool time</td>
									<td className="event" rowSpan="2">Youth and Kids Activities</td>
									<td className="event empty"></td>
								</tr>
								<tr>
									<td className="time">4:00 PM</td>
									<td className="event">Tea time, GOA presentation</td>
									<td className="event empty"></td>
								</tr>
								<tr>
									<td className="time">5:00 PM</td>
									<td className="event">Ami Goenkar - Program for ageless kids</td>
									<td className="event empty"></td>
									<td className="event empty"></td>
								</tr>
								<tr>
									<td className="time">7:00 PM</td>
									<td className="event empty"></td>
									<td className="event empty"></td>
									<td className="event empty"></td>
								</tr>
								<tr>
									<td className="time">7:30 PM</td>
									<td className="event">Cocktail hour, Dinner</td>
									<td className="event empty"></td>
									<td className="event empty"></td>
								</tr>
								<tr>
									<td className="time">9:00 PM</td>
									<td className="event">Musical Concert</td>
									<td className="event empty"></td>
									<td className="event empty"></td>
								</tr>
								<tr>
									<td className="end" colSpan="4"></td>
								</tr>

								{   /* DAY THREE */   }
								<tr>
									<td className="day" colSpan="4">Monday, July 4<sup>th</sup>, 2016</td>
								</tr>
								<tr>
									<td className="time">7:00 AM</td>
									<td className="event">Breakfast</td>
									<td className="event empty"></td>
									<td className="event empty"></td>
								</tr>
								<tr>
									<td className="time">10 AM</td>
									<td className="event">Closing Ceremony</td>
									<td className="event" rowSpan="2">Youth and Kids Activities</td>
									<td className="event empty"></td>
								</tr>
								<tr>
									<td className="time">11 AM</td>
									<td className="event">Financial report and vote of thanks</td>
									<td className="event empty"></td>
								</tr>
								<tr>
									<td className="time">11:30</td>
									<td className="event">Lunch</td>
									<td className="event empty"></td>
									<td className="event empty"></td>
								</tr>
							</table>
						</div>

					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

export default Schedule;
