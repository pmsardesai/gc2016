import React from 'react';
import Footer from '../Footer';

class Concert extends React.Component {
	render() { 
		return (
			<div className="page highlights">
				<div className="black-header-background" /> 
				<div className="page-header">
					<div className="background" /> 
					<div className="page-title">Highlights</div>
				</div>
				<div className="page-content highlight-container"> 
					<div className="highlight-container-inner">
						<div className="highlight">
							<div className="name">Sidhanath Buyao</div>
							<div className="photo sidhanath"> </div>
							<div className="description"> 
								There are very few musicians in Goa who contribute to original Konkani music. Sidhanath Buyao definitely tops the list. Having inherited his father’s musical talent and having imbibed the love and passion for Konkani from his childhood, it was quite natural for him to take over the reins of Buyao Theatres Goem. In his sophisticated music studio, he has so far accomplished many music albums and other music projects. He has several awards and recongnitions to his credit. He was recently elected the President of the Jagotik Konkani Songhotton (JKS) in Mangalore. We are honored to have him as our guest of Honor for the Goan convention 2016.
							</div>
						</div>
						<div className="highlight">
							<div className="name">Jonathan Bosco</div>
							<div className="photo jonathan"> </div>
							<div className="description"> 
								There will be a scintillating dance performance by San Diego's very own renowned Film and Dance Choreographer, Jonathan Bosco. He graduated from Penn State University with Bachelors of Arts in Communications and Film Production. His main inspirational roots of his dance style are Breakin (or Bboying) followed by Popping/Boogaloo and Indian dances. He was a choreographer for Penn State Ghaamudyaz Garba-Raas 2004-2006 team, which won 7 back-to-back National 1st Place titles. He has worked with Tricia Miranda, Nakul Dev Mahajan, Wanted Ashiqz, Project Pulse, Doonya Dance Workout, Aatma Performing Arts, and many more. He has contributed his talent to the San Diego's Wild Animal Park & Safari Park, FOX’s So You Think You Can Dance, MTV’s America’s Best Dance Crew, Pulse On Tour, ZeeTV, StarPlus, SonyTV. He was chosen to compete in Bombay, India as the first ever Indo-Canadian-American male dancer by renowned Hindi Film Director, Farah Khan, and established Indian Choreographer, Vaibhavi Merchant and he reached Top 30 on Hrithik Roshan's reality show Star Plus JUST DANCE and was an assistant for the program. He is the extended member of India's infamous crew "I AM HIP HOP" directed by Ruel Dausan Varindani. Jonathan Bosco currently teaches Indian Hip Hop, Bollywood Freestyle and Chutney Cardio at The Naad Studios San Diego, Studio FX San Diego, Studio K Dance & Fitness, and with over 150 students.  
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

export default Concert;
