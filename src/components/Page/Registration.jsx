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
					<div className="page-title">Registration</div>
				</div>
				<div className="page-content registration-container"> 
					<div className="registration-container-inner">
						<div className="info first">
							It gives us immense pleasure to invite you all to the 13th Goan Convention in Orange County, CA. The table below lists the registration fees for the convention. Registration opens in December 2015. Early bird registration is available if you register before 30th April 2016.
						</div>
						<div className="info">
							<div className="highlight">
							The deadline for registration is <b>30<sup>th</sup> June 2016</b>, after which no entries will be accepted. This is to allow time for accurate estimation and planning.
							</div>
						</div>
						<div className="info table">
							<table>
								<tr className="table-header"> 
									<td>2016 Registration Fees*</td>
									<td className="cost">Dec-Apr</td>
									<td className="cost">May-Jun</td>
								</tr>

								<tr> 
									<td>Adult Regular (21+)</td>
									<td className="cost">$185</td>
									<td className="cost">$198</td>
								</tr>

								<tr> 
									<td>Adult Student (16-21)</td>
									<td className="cost">$145</td>
									<td className="cost">$165</td>
								</tr>

								<tr> 
									<td>Child (6-15)</td>
									<td className="cost">$115</td>
									<td className="cost">$125</td>
								</tr>
							</table>
						</div>
						<div className="info note">* Subject to change before December 2015</div>

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

						<div className="info whos-coming">
							Who is coming so far?
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
