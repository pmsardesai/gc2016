import React from 'react';
import { Link } from 'react-router';
import Footer from '../Footer';
import ComingSoon from './ComingSoon';

class Concert extends React.Component {
	render() { 
		return (
			<div className="page coming-soon">
			{ /*<div className="page concert">
				<div className="black-header-background" /> 
				<div className="page-header">
					<div className="background" /> 
					<div className="page-title">Concert</div>
				</div>
				<div className="page-content concert-container"> 
					<div className="concert-container-inner">
						<div className='singer'>Remo</div>
						<div className='and'>&</div>
						<div className='food'>The Microwave Papadums</div>
						<div className='live'>Live in Concert at Goan Convention 2016</div>
						
						<div className='photo'></div>

						<div className='tagline'>Come witness the musical genius of "The Baap of Indian Pop", Padmashri Remo Fernandes</div>
						<div className='date'>3<sup>rd</sup> July 2016, 9:30 PM</div>
						<div className='at'>@</div>
						<span className='hotel-address'>
							<div className='name'>DoubleTree by Hilton Santa Ana – Orange County Airport</div>
							<div className='address'>201 E MacArthur Blvd</div>
							<div className='postal-code'>Santa Ana, CA 92707, USA</div>
						</span>

						<div className='sponsorship'>
							<div className='description'>For sponsorship and advertizing, please contact us at:</div>
							<div className='email'><b>Email:</b> <a href="mailto:goanconvention2016@gmail.com" target="_blank" className='email'>goanconvention2016@gmail.com</a></div>
							<div className='phone'><b>Phone:</b> 214-235-4525</div>
							<div className='donate'>or 
								<Link to="/sponsors">Donate</Link>
								Online
							</div>
							<div className='learn-more'>To learn more about Remo, visit: 
								<a href="http://remofernandes.com" target="_blank" className='remo-link'>http://remofernandes.com</a>
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>*/ }
				<ComingSoon />
			</div>
		);
	}
}

export default Concert;
