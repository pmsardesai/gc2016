import React from 'react';
import Footer from '../Footer';

class Sponsors extends React.Component {
	render() { 
		return (
			<div className="page sponsors">
				<div className="black-header-background" /> 
				<div className="page-header">
					<div className="background" /> 
					<div className="page-title">Sponsors</div>
				</div>
				<div className="page-content sponsors-container"> 
					<div className="sponsors-container-inner">
						<div className="info title">
							Sponsorship for the 2016 Goan Convention
						</div>

						<div className="info">
							Since 1993, the Goan Convention is held every two years in different parts of USA. We are fortunate to host the 2016 convention in southern California. We are all excited to make this a grand event.
						</div>
						<div className="info">
							The 2016 Goan Convention will only be possible with generous donations from all the Goan-Indian community and businesses in USA and back in India. We will be publishing a convention souvenir booklet which will include information of all the cultural programs, pictures, and contacts of fellow Goans. We urge individuals, corporations and private businesses to participate by advertising in this souvenir. Sponsors will be able to specify their own message in their advertisement space. In addition, sponsors who advertise for $500 or more will get to sponsor an event during the convention (such as cultural program events, lunches, dinners, drinks and more) and we will recognize their support during the event in the form of announcements. An event may have multiple sponsors.
						</div>
						<div className="info">
							For mega sponsors, we will also prepare a banner which will be displayed in the convention hall.
						</div>
						<div className="info">
							Following are the rates to advertise in the souvenir:
						</div>

						<div className="info">
							<table>
								<tr> 
									<td className="left">Pillars</td>
									<td className="middle">Name on the sponsor list page with donation amount</td>
									<td className="right">&lt; USD $250</td>
								</tr>

								<tr> 
									<td className="left">Bronze Sponsor</td>
									<td className="middle">¼ page black and white</td>
									<td className="right">USD $250 - USD $499</td>
								</tr>

								<tr> 
									<td className="left">Sapphire Sponsor</td>
									<td className="middle">½ page black and white</td>
									<td className="right">USD $500 - USD $749</td>
								</tr>

								<tr> 
									<td className="left">Silver Sponsor</td>
									<td className="middle">Full page black and white</td>
									<td className="right">USD $750 - USD $999</td>
								</tr>

								<tr> 
									<td className="left">Gold Sponsor</td>
									<td className="middle">½ page color</td>
									<td className="right"> USD $1000 - USD $1999</td>
								</tr>

								<tr> 
									<td className="left">Platinum Sponsor</td>
									<td className="middle">Full page color</td>
									<td className="right">USD $2000 - USD $3499</td>
								</tr>

								<tr> 
									<td className="left">Diamond Sponsor</td>
									<td className="middle">Full page color back page or full page inside cover</td>
									<td className="right">USD $3500 - USD $4999</td>
								</tr>

								<tr> 
									<td className="left">Mega Sponsor</td>
									<td className="middle">Full page color back page or full page inside cover, banner on stage and social media promotion</td>
									<td className="right">USD $5000 (and above)</td>
								</tr>
							</table>
						</div>

						<div className="info">
							There are two ways you can donate for this event. You may click on “Online Donation” button below and complete the sponsorship form and payment on our secure online payment website. Or you can click on the “Mail-in Donation” button below to download the Sponsorship form.
						</div>

						<div className="info buttons">
							<a href="" target="_blank" className="online">Online Donation</a>
							<a href="documents/sponsorship-form.pdf" target="_blank" className="mailin">Mail-In Donation</a>
						</div>

						<div className="info">
							Please complete and mail this form with your check made payable to:
							<div className="indent">Goan Organization of America</div>
						</div>

						<div className="info">
							Mail to:
							<div className="indent">Rohin Parkar, 7189 Galli Ct, Unit#4, San Jose CA 95129, USA</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

export default Sponsors;
