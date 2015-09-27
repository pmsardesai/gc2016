import React from 'react';
import Contact from '../Contact';
import Footer from '../Footer';
import data from '../../constants/Members';

class Committee extends React.Component {
	render() { 
		return (
			<div className="committee">
				<div className="committee-header" /> 
				<div className="committee-background" /> 
				<div className="committee-title">Our Team</div>
				<div className="contacts-container"> 
					<div className="contacts-container-inner">
						{ data.map(c => {
							return <Contact memberInfo={c} />;
						})}
					</div>
				</div>
				<Footer />
				
			</div>
		);
	}
}

export default Committee;
