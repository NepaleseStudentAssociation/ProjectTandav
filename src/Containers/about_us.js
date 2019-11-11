import React, {Component} from 'react';
import {Card, CardTitle, CardText} from 'react-mdl';

import"./about_js.css"


const details=[
	{
		title:"President",
		name:"Sanjib Lamichhane",
		pic:"url(https://wallpaperplay.com/walls/full/9/7/0/145562.jpg) center/cover",
		bio:"I need a bio to add here",
		fb:"https://facebook.com",
		li:"https://linkedin.com"

	},
	{
		title:"Vice President",
		name:"Tsering Nima",
		pic:"url(https://wallpaperplay.com/walls/full/9/7/0/145562.jpg) center/cover",
		bio:"I need a bio to add here",
		fb:"https://facebook.com",
		li:"https://linkedin.com"


	},
	{
		title:"Secretary",
		name:"Bhumika Bajracharya",
		pic:"url(https://wallpaperplay.com/walls/full/9/7/0/145562.jpg) center/cover",
		bio:"I need a bio to add here",
		fb:"https://facebook.com",
		li:"https://linkedin.com"


	},
	{
		title:"Treasurer",
		name:"Shailesh Ghale",
		pic:"url(https://wallpaperplay.com/walls/full/9/7/0/145562.jpg) center/cover",
		bio:"I need a bio to add here",
		fb:"https://facebook.com",
		li:"https://linkedin.com"


	}
]


class AboutUS extends Component{
	render(){

		const slides = details.map((details) => {
			return (
				
				<Card  shadow={4} style={{width: '300px', height: '320px', margin: 'auto' }}>
				<CardTitle  className="aboutName" expand	 style={{color: '#fff', background:details.pic }}>
				{details.title}<br/> {details.name}
				</CardTitle>
				<CardText>
				<a href={details.fb} target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"  ></i></a>
				<a href={details.li} style={{ padding: 10} } target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"  ></i></a>
				
				
				</CardText>
		
		</Card>
			);
		  });
		return(
		<div  className="about">
		<div className="aboutNSA" >
			<h1 className="aboutNSA">ABOUT US</h1>
			<p >
			NSA CCNY stands for Nepalese Students'​ Association at the City College of New York.
					 NSA CCNY  helps Nepalese students create a platform, where academically intensive projects 
					 are launched which would, in fact, be useful for the community welfare. Historically, 
					 it has also played a significant role in bringing people together during Nepali festivals 
					 and events.
					 </p>

		</div>		


            
		<div>	<p className="aboutBio">Executive Team:<br/> <br/>Meet our cool and responsible executive team: </p></div>
			<div className="aboutCard">
			
			{slides}
			</div>
			
			
				<p className="aboutBio">
					Connect with us in the following platforms
				</p>
				<div className="aboutLogo">
				<a className="logo" href= "https://www.facebook.com/nsaccny19/" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook" ></i></a>
				<a className="logo" href="https://www.linkedin.com/company/nsa-ccny" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" ></i></a>
				<a className="logo" href="https://github.com/NepaleseStudentAssociation" target="_blank" rel="noopener noreferrer"><i className="fa fa-github" ></i></a>
				<a className="logo" href="https://www.instagram.com/nsa_ccny/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"  ></i></a>
				<a className="logo" href="mailto:nsaccny19@gmail.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-envelope" ></i></a>

				</div>
			
			
			

			</div>)

	}
}
export default AboutUS;