import React from 'react';
import ContactCard from '../ContactCard';
import Footer from '../Footer';
import data from '../../constants/Members';

class Committee extends React.Component {
	render() { 
		return (
			<div className="page committee">
				<div className="black-header-background" /> 
				<div className="page-header">
					<div className="background" /> 
					<div className="page-title">Our Team</div>
				</div>
				<div className="page-content contacts-container"> 
					<div className="contacts-container-inner">
						{ data.map(c => {
							return <ContactCard memberInfo={c} />;
						})}
					</div>
				</div>
				<Footer />
				
			</div>
		);
	}
}

export default Committee;
