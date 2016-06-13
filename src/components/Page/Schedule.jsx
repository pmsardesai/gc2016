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
								</tr>
								<tr>
									<td className="time">3:00 PM</td>
									<td className="event" rowSpan="2">Garam Cha, Bhaji ani Thand Limbu Sarbat</td>
								</tr>
								<tr>
									<td className="time">4:00 PM</td>
									<td className="event empty"></td>
								</tr>
								<tr>
									<td className="time">4:30 PM</td>
									<td className="event">Welcome ceremony</td>
									<td className="event">Youth and kids activities</td>
								</tr>
								<tr>
									<td className="time">6:00 PM</td>
									<td className="event" rowSpan="2">Goenche Kalakar: Cultural performances & fancy dress parade</td>
									<td className="event empty"></td>
								</tr>
								<tr>
									<td className="time">7:00 PM</td>
									<td className="event empty"></td>
								</tr>
								<tr>
									<td className="time">7:30 PM</td>
									<td className="event">Cocktail hour, followed by dinner</td>
									<td className="event empty"></td>
								</tr>
								<tr>
									<td className="time">9:00 PM (until night)</td>
									<td className="event highlight">Musical night with Sidhanath Buyao, followed by Karaoke and DJ Music</td>
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
									<td className="event">Fitness dance boot camp by Jonathan Bosco OR Yoga</td>
									<td className="event" rowSpan="3">Breakfast</td>
								</tr>
								<tr>
									<td className="time">8:00 AM</td>
									<td className="event">Bollywood Hip Hop Master Class by Jonathan Bosco</td>
								</tr>
								<tr>
									<td className="time">8:45 AM</td>
									<td className="event empty"></td>
								</tr>
								<tr>
									<td className="time">9:30 AM</td>
									<td className="event">Bus ride to picnic</td>
									<td className="event empty"></td>
								</tr>
								<tr>
									<td className="time">10:00 AM</td>
									<td className="event">Picnic at William Mason Park, Irvine</td>
									<td className="event">Youth and kids activities</td>
								</tr>
								<tr>
									<td className="time">12:30 PM</td>
									<td className="event">Picnic lunch</td>
									<td className="event empty"></td>
								</tr>
								<tr>
									<td className="time">1:30 PM</td>
									<td className="event empty"></td>
									<td className="event empty"></td>
								</tr>
								<tr>
									<td className="time">1:45 PM</td>
									<td className="event">Bus ride back to hotel</td>
									<td className="event empty"></td>
								</tr>
								<tr>
									<td className="time">2:30 PM</td>
									<td className="event empty"></td>
									<td className="event empty"></td>
								</tr>
								<tr>
									<td className="time">3:00 PM</td>
									<td className="event">Siesta time</td>
									<td className="event" rowSpan="3">Bowling for young adults (15-22)</td>
								</tr>
								<tr>
									<td className="time">3:30 PM</td>
									<td className="event">GOA presentation followed by tea</td>
								</tr>
								<tr>
									<td className="time">4:00 PM</td>
									<td className="event">Ami Goenkar - Cultural program</td>
								</tr>
								<tr>
									<td className="time">4:45 PM</td>
									<td className="event highlight">Indian classical performance by Saili Oak</td>
									<td className="event empty"></td>
								</tr>
								<tr>
									<td className="time">6:15 PM</td>
									<td className="event highlight">Comedy Konkani Natak: Mogache Lagna</td>
									<td className="event empty"></td>
								</tr>
								<tr>
									<td className="time">7:30 PM</td>
									<td className="event">Cocktail hour followed by dinner</td>
									<td className="event empty"></td>
								</tr>
								<tr>
									<td className="time">9:00 PM</td>
									<td className="event highlight">Sonia Shirsat, Varun Carvalho & Mukesh Ghatwal Live in Concert</td>
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
									<td className="event empty"></td>
									<td className="event" rowSpan="2">Breakfast</td>
								</tr>
								<tr>
									<td className="time">9:00 AM</td>
									<td className="event">A better Goa: Group discussion</td>
								</tr>
								<tr>
									<td className="time">10:00 AM</td>
									<td className="event">Closing ceremony</td>
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
