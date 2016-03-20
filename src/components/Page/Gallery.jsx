import React from 'react';
//import Footer from '../Footer';
import ComingSoon from './ComingSoon';

class Gallery extends React.Component {
	render() { 
		return (
			<div className="page coming-soon">
			{ /*<div className="page gallery">
				<div className="black-header-background" /> 
				<div className="page-header">
					<div className="background" /> 
					<div className="page-title">Gallery</div>
				</div>
				<div className="page-content gallery-container"> 
					<div className="gallery-container-inner"></div>
				</div>
				<Footer />
			</div>*/ }
			<ComingSoon />
			</div>
		);
	}
}

export default Gallery;
