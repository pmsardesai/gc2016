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
						<div className='hindi'>थंड वार्यार दर्या ल्हारार, गोंया तुजी याद येता</div>
						<div className='english'>Come enjoy Goa in Southern California</div>
					</div>
					<div className='event-details-container'>
						<div className='title'>Goan Convention</div>
						<div className='details'>
							<span className='date-details'>
								<div className='month'>July</div>
								<div className='day'>234</div>
								<div className='year'>2016</div>
							</span>
							<span className='hotel-details'>
								<div className='name'>Hotel Name</div>
								<div className='address'>Address</div>
								<div className='postal-code'>Postal Code</div>
							</span>
						</div>
					</div>
					<div className='button-container'>
						<Link to='/register' className='button register-button'>Register</Link>
						<Link to='/sponsors' className='button donate-button'>Donate</Link>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

export default Home;
