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
					<div className='event-details'>
						<div className='title'>Goan Convention</div>
						<div className='phone'>July 2 - 4, 2016</div>
						<div className='hotel'>Hotel Name</div>
						<div className='address'>Address and Postal Code</div>
					</div>
					<div className='button-container'>
						<Link to='/comingsoon' className='button register-button'>Register</Link>
						<Link to='/comingsoon' className='button donate-button'>Donate</Link>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

export default Home;
