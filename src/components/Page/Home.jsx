import React from 'react';
import { Link } from 'react-router';
import Footer from '../Footer';

class Home extends React.Component {
	render() {
		return (
			<div className='content home'> 
				<div className='home-inner'>
					<div className='home-header'> </div>
					<div className='extension'>
						Early bird registration extended up to April 30
						<span className="note">th</span>, 2016!!
					</div>
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

						<div className="parrikar-video-container">
							<div className="message">
								<span className="fa fa-envelope"></span>
								<span>A message from Shri. Manohar Parrikar (Defense Minister of India)</span>
								<a className="youtube-link" href="https://youtu.be/UCfU9UbbH4k" target="_blank"></a>
							</div>
						</div>
						<ul className="more-description">
							<li className="point">Enjoy authentic Goan cuisine</li>
							<li className="point">A musical concert by Sonia Shirsat, Varun Carvalho and Mukesh Ghatwal</li>
							<li className="point">Guest of honor, Sidhanath Buyao will present some great Konkani music</li>
							<li className="point">Opportunity for Goan of all ages to perform and show off their talents</li>
							<li className="point">Indoor and outdoor activities for all ages including Hip Hop dance class, volleyball tournament, Bowling, Face painting and lot more</li>
							<li className="point">Fitness dance lessons to let you burn the excess fat consumed at the dinners</li>
						</ul>
					</div>

					<div className='button-container'>
						<Link to='/register' className='button register-button'>Register</Link>
						{ /*<Link to='/sponsors' className='button donate-button'>Donate</Link> */ }
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

export default Home;
