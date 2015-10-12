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
				<div className="page-content committee-container"> 
					<div className="contacts-container">
						{ data.map(c => {
							return <ContactCard memberInfo={c} />;
						})}
					</div>
					<div className="advisory-committee-container">
						<table>
							<tr>
								<td className="table-header">Advisory Committee</td>
							</tr>
							<tr>
								<td className="name">Swati and Arun Virginkar</td>
							</tr>
							<tr>
								<td className="name">Smeeta and Rajendra (Raj) Sardesai</td>
							</tr>
							<tr>
								<td className="name">Meenal and Dilip Sanvordeker</td>
							</tr>
						</table>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

export default Committee;
