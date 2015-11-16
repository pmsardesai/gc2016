import React from 'react';
import ContestCard from '../ContestCard';
import Footer from '../Footer';
import data from '../../constants/ContestDetails';

class Contests extends React.Component {
	render() { 
		return (
			<div className="page contests">
				<div className="black-header-background" /> 
				<div className="page-header">
					<div className="background" /> 
					<div className="page-title">Contests</div>
				</div>
				<div className="page-content contests-container"> 
					<div className="contests-container-inner">
						{ data.map(c => {
							return <ContestCard contestInfo={c} />;
						})}

						<div className="disclaimer">
							<div className="title">DISCLAIMER for Photography and Drawing contests:</div>
							<div>The decisions of the judges are final and binding to all entrants. By entering the Contest, entrant represents, acknowledges, and warrants that the submitted photograph is an original work created solely by the entrant, that the photograph/drawing does not infringe on the copyrights, trademarks, moral rights, rights of privacy/publicity or intellectual property rights of any person or entity, and that no other party has any right, title, claim, or interest in the photograph/drawings. The organizing committee reserves the right to cancel or suspend contest if, for any reason the Contest is not capable of running as planned or any other causes beyond the control. By submitting an entry, each entrant agrees to the rules and warrants that his or her entry complies with all requirements.</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

export default Contests;
