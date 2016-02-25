import React from 'react';

class Footer extends React.Component {
	render() {
		return (
			<div className='footer'>
				<span className='contact-us-container'>
					<span className='contact-us'>
						Contact us at 
					</span>
					<a href="mailto:goanconvention2016@gmail.com" target="_blank" className='email'>goanconvention2016@gmail.com</a>
					<a href="https://www.facebook.com/goanconvention2016" target="_blank" className='fa fa-facebook-official'></a>
				</span>
				<span className='copyright-info'>2016 © Designed by Pooja Sardesai</span>
			</div>
		);
	}
}

export default Footer;
