import React from 'react';
import Footer from '../Footer';

class Concert extends React.Component {
	render() { 
		return (
			<div className="page concert">
				<div className="black-header-background" /> 
				<div className="page-header">
					<div className="background" /> 
					<div className="page-title">Concert</div>
				</div>
				<div className="page-content concert-container"> 
					<div className="concert-container-inner">
						<div className="singer">
							<div className="name">Sonia Shirsat</div>
							<div className="photo sonia"> </div>
							<div className="description sonia"> 
								Sonia Shirsat has one of the boldest voices in India. When she sings, she’ll leave you with goosebumps on your skin. From Lisbon to Goa, she is being compared to the greatest Portuguese singing icon of all time Amalia Rodrigues. She is a world renowned Fadista who has made Goa and India Proud. Her latest Album “Ugddas” comprises songs composed by legends of the like of Alfred Rose, Chris Perry, Frank Fernand, Wilfy, etc. Here is a chance to witness the magic in her voice at the Goan Convention 2016. To learn more about Sonia Shirsat, visit her website at 
								<a href="http://www.soniashirsat.com/" target="_blank"> http://www.soniashirsat.com/ </a>
							</div>
						</div>
						<div className="singer">
							<div className="name">Dr. Varun Carvalho</div>
							<div className="photo varun"> </div>
							<div className="description"> 
								A dentist by profession, Varun Carvalho believes that the greatest joy is to create music. His passion for music drives him to take time off from the clinic and focus on writing lyrics, composing music and singing. His latest songs for ISL titled “Dii Tekha” and the anthem for the International Film festival in 2015 have become really popular. Through the years, he has composed a number of music tracks, both in English and Konkani. His Song “<a href="https://www.youtube.com/watch?v=UrfCFIBL_YA&feature=youtu.be" target="_blank">Amchem Goa</a>” received great appreciation.
							</div>
						</div>
						<div className="singer">
							<div className="name">Mukesh Ghatwal</div>
							<div className="photo mukesh"> </div>
							<div className="description"> 
								Mukesh Ghatwal is a music director, composer and arranger, who created many theme songs for state, national and international events like the International Lusofonia Games theme song, IFFI anthem, FC Goa, JCI and  many to make Goa proud. Mukesh has composed and arranged music for many documentaries and films, like movie 'Digant' which was officially chosen for CANNES festival by directorate of film festival of India. Besides that, he has done music in Konkani, Hindi, English and Marathi for albums, jingles, festival theme songs, news channels, companies and more. He has won several awards for his contribution for music, including the GOA SRUJAN PURSKAR 2013 and ADARSH GOENKAR award 2014.
							</div>
						</div>
						<div className="singer">
							<div className="name">Steve Carvalho</div>
							<div className="description"> 
								A musician, sound engineer and software developer by profession. Born and brought up in Goa, Steve has worked in the music and software industry in different countries like UAE and UK. He has also been playing guitar in various top bands from Goa and Dubai from 1999. He has completed his sound engineering studies in London and has worked with renowned artists like Zakir Hussain and Ali Campbell of ub40 among a host of others. Music is a passionate way of life which has brought him back to India as a musician and sound engineer after 10 long years.
							</div>
						</div>
						<div className="singer">
							<div className="name">Mozwin Noronha</div>
							<div className="photo mozwin"> </div>
							<div className="description"> 
								Mozwin comes from a musical family and music runs in his blood. He started playing drums at the age of 6, and played drum solos at IFFI in Goa at the age of 8. He learned to read and write music from a well know violin and Mandolin teacher, Mr. Avelino from Loutolim. He is an all around musician and plays keyboard, bass guitar and lead guitar for retro and pop songs. Mozwin plays drums for his college band and will be releasing their own album around Christmas this year. He is currently pursuing his education in music production at Uxbridge college in London.
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
