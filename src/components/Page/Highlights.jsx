import React from 'react';
import Footer from '../Footer';

class Concert extends React.Component {
	render() { 
		return (
			<div className="page highlights">
				<div className="black-header-background" /> 
				<div className="page-header">
					<div className="background" /> 
					<div className="page-title">Attractions</div>
				</div>
				<div className="page-content highlight-container"> 
					<div className="highlight-container-inner">
						<div className="highlight">
							<div className="name">Guest of Honor: Sidhanath Buyao</div>
							<div className="photo sidhanath"> </div>
							<div className="description"> 
								There are very few musicians in Goa who contribute to original Konkani music. Sidhanath Buyao definitely tops the list. Having inherited his father’s musical talent and having imbibed the love and passion for Konkani from his childhood, it was quite natural for him to take over the reins of Buyao Theatres Goem. In his sophisticated music studio, he has so far accomplished many music albums and other music projects. He has several awards and recongnitions to his credit. He was recently elected the President of the Jagotik Konkani Songhotton (JKS) in Mangalore. We are honored to have him as our guest of Honor for the Goan convention 2016.
							</div>
						</div>
						<div className="highlight">
							<div className="name">Saili Oak</div>
							<div className="photo saili"> </div>
							<div className="description"> 
								Saili Oak will be performing live at the Goan Convention 2016 on 3rd July afternoon. A finalist on the popular reality TV series Zee Marathi SaReGaMaPa, Saili is a senior disciple of Dr. Ashwini Bhide Deshpande, a leading vocalist of the Jaipur-Atrauli gharana. She has established her own identity with enriched talent in classical as well as semi-classical music. Saili has been learning music since the age of three and has given performances at music festivals all over India and abroad. Some of her memorable performances include the Summer Sounds festival at the Hollywood bowl, Vedic Heritage in New York and Beyond Borders concert at the University of Maine. Saili has been awarded the prestigious Pt.Jasraj Yuva award, Pt Vasantrao Deshpande Yuva award and Gaanwardhan Award.
								
								<div className="more-details">
									You can find more about Saili  
									<a className="here" href="http://www.sailioak.com/" target="_blank">here</a>.
								</div>
							</div>
						</div>
						<div className="highlight">
							<div className="name">Jonathan Bosco</div>
							<div className="photo jonathan"> </div>
							<div className="description"> 
								There will be a scintillating dance performance and a Bollywood Hip Hop Master dance class by San Diego's very own renowned Film and Dance Choreographer, Jonathan Bosco. He graduated from Penn State University with Bachelors of Arts in Communications and Film Production. His main inspirational roots of his dance style are Breakin (or Bboying) followed by Popping/Boogaloo and Indian dances. He was a choreographer for Penn State Ghaamudyaz Garba-Raas 2004-2006 team, which won 7 back-to-back National 1st Place titles. He has worked with Tricia Miranda, Nakul Dev Mahajan, Wanted Ashiqz, Project Pulse, Doonya Dance Workout, Aatma Performing Arts, and many more. He has contributed his talent to the San Diego's Wild Animal Park & Safari Park, FOX’s So You Think You Can Dance, MTV’s America’s Best Dance Crew, Pulse On Tour, ZeeTV, StarPlus, SonyTV. He was chosen to compete in Bombay, India as the first ever Indo-Canadian-American male dancer by renowned Hindi Film Director, Farah Khan, and established Indian Choreographer, Vaibhavi Merchant and he reached Top 30 on Hrithik Roshan's reality show Star Plus JUST DANCE and was an assistant for the program. He is the extended member of India's infamous crew "I AM HIP HOP" directed by Ruel Dausan Varindani. Jonathan Bosco currently teaches Indian Hip Hop, Bollywood Freestyle and Chutney Cardio at The Naad Studios San Diego, Studio FX San Diego, Studio K Dance & Fitness, and with over 150 students.  
							</div>
						</div>

						<div className="highlight">
							<div className="name">Blaze brings his talent to Southern California all the way from Goa, India</div>
							<div className="photo blaze"> </div>
							<a className="blaze-menu" href="documents/attractions-menu.pdf" target="_blank">Menu</a>
							<div className="description"> 
								Coming from a third generation of catering business, Blaze started young, helping out the family with their catering and restaurant business. Blaze pursued his culinary career in Carnival Cruise Lines for over 12 years and then in Hyatt Hotels in Pittsburg, PA and La Jolla, San Diego and has been rewarded with many culinary awards. He is accomplished in all kinds of cuisines of around the world and specializes in Goan food. He has catered for Goan weddings and other events from Bakersfield to San Diego , CA. Blaze is happy to bring his culinary expertise to South California to tease your taste buds.
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
