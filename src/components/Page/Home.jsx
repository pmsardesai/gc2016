import React from 'react';
import { Link } from 'react-router';
import Footer from '../Footer';

class Home extends React.Component {
	render() {
		return (
			<div className='content home'> 
				<div className='home-inner'>
					<div className='home-header'> </div>
					<div className='tagline'>
						<div className='hindi'>थंड वाऱ्यार दर्या ल्हारार, गोंया तुजी याद येता</div>
						<div className='english'>Come enjoy Goa in Southern California</div>
					</div>
					<div className='event-details-container'>
						<div className='title-statement'>The 13<span className="super">th</span> biennial</div>
						<div className='title'>Goan Convention</div>
						<div className='details'>
							<span className='date-details'>
								<div className='date'>July 2<sup>nd</sup> - 4<sup>th</sup>, 2016</div>
							</span>
							<span className='hotel-details'>
								<div className='name'>DoubleTree by Hilton Hotel</div>
								<div className='location'>Santa Ana – Orange County Airport</div>
								<div className='address'>201 E MacArthur Blvd</div>
								<div className='postal-code'>Santa Ana, CA 92707, USA</div>
							</span>
						</div>

						<div className="invitation">
							A warm invitation to all Goenkars across North America to join us and strengthen our ties with Goa, and connect the younger generation to our culture and heritage
						</div>
					</div>

					<div className='button-container'>
						<Link to='/register' className='button register-button'>Register</Link>
						<Link to='/sponsors' className='button donate-button'>Donate</Link>
					</div>

					<div className="parrikar-video-container">
						<div className="message">
							<span className="fa fa-envelope"></span>
							<span>A message from Shri. Manohar Parrikar (Defense Minister of India)</span>
							<a className="youtube-link" href="https://youtu.be/UCfU9UbbH4k" target="_blank"></a>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

export default Home;
