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
									<td className="event" rowSpan="2">Registration</td>
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
									<td className="event empty"></td>
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
									<td className="event" rowSpan="2">Goenche Kalakar: Cultural performances & fancy dress parade</td>
									<td className="event empty"></td>
									<td className="event empty"></td>
								</tr>
								<tr>
									<td className="time">7:00 PM</td>
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
									<td className="time">9:00 PM (until night)</td>
									<td className="event">Musical Night with Sidhanath Buyao and Karaoke</td>
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
									<td className="event">Fitness dance boot camp by Jonathan Bosco</td>
									<td className="event" rowSpan="2">Breakfast</td>
									<td className="event empty"></td>
								</tr>
								<tr>
									<td className="time">8:00 AM</td>
									<td className="event">Bollywood Hip Hop Master Class by Jonathan Bosco</td>
									<td className="event empty"></td>
								</tr>
								<tr>
									<td className="time">8:45 AM</td>
									<td className="event empty"></td>
									<td className="event empty"></td>
									<td className="event empty"></td>
								</tr>
								<tr>
									<td className="time">9:30 AM</td>
									<td className="event">Bus ride to picnic</td>
									<td className="event empty"></td>
									<td className="event empty"></td>
								</tr>
								<tr>
									<td className="time">10:00 AM</td>
									<td className="event">Picnic at William Mason Park, Irvine</td>
									<td className="event">Youth and Kids Activities</td>
									<td className="event empty"></td>
								</tr>
								<tr>
									<td className="time">12:30 PM</td>
									<td className="event">Picnic Lunch</td>
									<td className="event empty"></td>
									<td className="event empty"></td>
								</tr>
								<tr>
									<td className="time">1:30 PM</td>
									<td className="event empty"></td>
									<td className="event empty"></td>
									<td className="event empty"></td>
								</tr>
								<tr>
									<td className="time">1:45 PM</td>
									<td className="event">Bus ride back to hotel</td>
									<td className="event empty"></td>
									<td className="event empty"></td>
								</tr>
								<tr>
									<td className="time">2:30 PM</td>
									<td className="event">Vanhibailyo Vasryo: Siesta/Pool time</td>
									<td className="event" rowSpan="2">Bowling for young adults (15-22)</td>
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
									<td className="event">Sonia Shirsat, Varun Carvalho & Mukesh Ghatwal Live in Concert</td>
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
									<td className="event">Yoga</td>
									<td className="event" rowSpan="2">Breakfast</td>
									<td className="event empty"></td>
								</tr>
								<tr>
									<td className="time">8:00 AM</td>
									<td className="event empty"></td>
									<td className="event empty"></td>
								</tr>
								<tr>
									<td className="time">10:00 AM</td>
									<td className="event">Closing Ceremony</td>
									<td className="event" rowSpan="2">Youth and Kids Activities</td>
									<td className="event empty"></td>
								</tr>
								<tr>
									<td className="time">11:00 AM</td>
									<td className="event">Financial report and vote of thanks</td>
									<td className="event empty"></td>
								</tr>
								<tr>
									<td className="time">11:30 AM</td>
									<td className="event">Lunch to go and check-out</td>
									<td className="event"> Shuttles to airport will be available (book one at the hotel reception)</td>
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
