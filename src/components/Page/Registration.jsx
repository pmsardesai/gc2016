import React from 'react';
import Attendees from '../Attendees';
import Footer from '../Footer';

class Registration extends React.Component {
	render() { 
		return (
			<div className="page registration">
				<div className="black-header-background" /> 
				<div className="page-header">
					<div className="background" /> 
					<div className="page-title">Attendees</div>
				</div>
				<div className="page-content registration-container"> 
					<div className="registration-container-inner">
						<div className="info first">
							It gives us immense pleasure to invite you all to the 13th Goan Convention in Orange County, CA. The table below lists the registration fees for the convention. Registration is open until 30th June 2016. We have day-pass options available for people who are unable to attend the convention for all three days.
						</div>
						<div className="info">
							<div className="highlight">
							The deadline for registration is <b>30<sup>th</sup> June 2016</b>, after which no entries will be accepted. This is to allow time for accurate estimation and planning.
							</div>
						</div>
						<div className="info table">
							<div className="register-title">Full Event Registration</div>
							<div className="register-description">These fees are for guests who want to attend the convention on all three days. Includes all activities and drink coupons.</div>

							<table>
								<tr className="table-header"> 
									<td></td>
									<td className="cost">Dec-Apr</td>
									<td className="cost">May-Jun</td>
								</tr>

								<tr> 
									<td><b>Adult Regular (Age 21+)</b></td>
									<td className="cost">$185</td>
									<td className="cost">$199</td>
								</tr>

								<tr> 
									<td><b>Adult Student (Age 16-21)</b></td>
									<td className="cost">$145</td>
									<td className="cost">$165</td>
								</tr>

								<tr> 
									<td><b>Child (Age 6-15)</b></td>
									<td className="cost">$115</td>
									<td className="cost">$125</td>
								</tr>
							</table>
						</div>

						<div className="info table">
							<div className="register-title">Day Passes</div>
							<div className="register-description">These fees are for guests who want to attend the convention on specific dates. Price includes dinner. Drinks are not included, but will be available at the hotel for purchase.</div>


							<table>
								<tr className="table-header"> 
									<td></td>
									<td className="cost">Fees</td>
								</tr>

								<tr> 
									<td><b>Day 1 Pass (Age 6+)</b> 2nd July, 4:00pm to 11:00pm</td>
									<td className="cost">$75</td>
								</tr>

								<tr> 
									<td><b>Day 2 Pass (Age 6+)</b> 3rd July, 9:30am to 11:00pm</td>
									<td className="cost">$125</td>
								</tr>

								<tr> 
									<td><b>Day 2 Concert Pass (Age 6+)</b> 3rd July, 4:00pm to 11:00pm</td>
									<td className="cost">$75</td>
								</tr>
							</table>
						</div>

						<div className="info">
							There are two ways you can register for this event. You may click on “Online Registration" button below and complete the registration form and payment on our secure online payment website. Or you can click on the “Mail-in Registration" button below to download the registration form.
						</div>

						<div className="info">
							<div className="highlight">
							Please note that with online registration, we have to pay $5.50/person as transaction fee. If possible, please do the mail-in registration to save us some money.
							</div>
						</div>

						<div className="info buttons">
							<a className="online" href="http://events.constantcontact.com/register/event?llr=8vkiquvab&oeidk=a07ebskil3720734d23" target="_blank">Online Registration</a>
							<a className="mailin" href="documents/registration-form.pdf" target="_blank">Mail-In Registration</a>
						</div>

						<div className="info">
							Please complete the mail-in registration form with your check made payable to:
							<div className="indent">Goan Organization of America</div>
						</div>

						<div className="info">
							Mail to:
							<div className="indent">Rohin Parkar, 7189 Galli Ct, Unit#4, San Jose CA 95129, USA</div>
						</div>

						<div className="whos-coming">
							<Attendees />
						</div>

					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

export default Registration;
