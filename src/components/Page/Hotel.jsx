import React from 'react';
import Footer from '../Footer';

class Sponsors extends React.Component {
	render() { 
		const googleMapClass = 'desktop';
		const googleMapMobileClass = 'mobile';

		return (
			<div className="page hotel">
				<div className="black-header-background" /> 
				<div className="page-header">
					<div className="background" /> 
					<div className="page-title">Hotel</div>
				</div>
				<div className="page-content hotel-container"> 
					<div className="hotel-container-inner">

						<div className="description">The Goan Convention 2016 will be held at</div>
						<div className="title"> Double Tree by Hilton Santa Ana - Orange County Airport</div>

						<div className="details-container"> 
							<div className="info">
								<div className="cell left">Address</div>
								<div className="cell right">
									<div>201 E MacArthur Blvd</div>
									<div>Santa Ana, CA 92707, USA</div>
								</div>
							</div>
							<div className="info ">
								<div className="cell left">Room Type</div>
								<div className="cell right"> Single and Double Beds</div>
							</div>
							<div className="info">
								<div className="cell left">Pricing</div>
								<div className="cell right">$119 + tax</div>
							</div>
							<div className="info">
								<div className="cell left">What's Included?</div>
								<div className="cell right">Free Airport Shuttle to John Wayne Airport (Orange County), Breakfast, Wifi & Discounted Parking at $8 per day</div>
							</div>
							<div className="info">
								<div className="cell left">Phone Number</div>
								<div className="cell right">(714) 825 3333</div>
							</div>
							<div className="info last">
								<div className="cell left">Website</div>
								<div className="cell right">doubletree3.hilton.com</div>
							</div>
						</div>

						<div className="map-container">
							<iframe className={googleMapClass} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.321519314015!2d-117.86819264982368!3d33.70062838060833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcdecfd7f12573%3A0xed1e13cc1d40ece9!2s201+E+MacArthur+Blvd%2C+Santa+Ana%2C+CA+92707!5e0!3m2!1sen!2sus!4v1447038002825" 
							frameborder="0" allowfullscreen></iframe>
							<iframe className={googleMapMobileClass} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.321519314015!2d-117.86819264982368!3d33.70062838060833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcdecfd7f12573%3A0xed1e13cc1d40ece9!2s201+E+MacArthur+Blvd%2C+Santa+Ana%2C+CA+92707!5e0!3m2!1sen!2sus!4v1447038002825" 
							frameborder="0" allowfullscreen></iframe>


							{ /*<div id="googleMap" className={googleMapClass}></div>
							<div id="googleMapMobile" className={googleMapMobileClass}></div> */ }
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

export default Sponsors;
