import React, {Component} from 'react';
import {Card, CardTitle, CardText} from 'react-mdl';


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
				<a href={details.fb}><i class="fa fa-facebook" aria-hidden="true" ></i></a>
				<a href={details.li} style={{ padding: 10}}  ><i class="fa fa-linkedin" aria-hidden="true" ></i></a>
				
				
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
				<div class="aboutLogo">
				<a className="logo" href= "https://facebook.com" target="_blank"><i class="fa fa-facebook" aria-hidden="true" ></i></a>
				<a className="logo" href="https://linkedin.com" target="_blank"><i class="fa fa-linkedin" aria-hidden="true" ></i></a>
				<a className="logo" href="https://github.com" target="_blank"><i class="fa fa-github" aria-hidden="true" ></i></a>
				<a className="logo" href="https://instagram.com" target="_blank"><i class="fa fa-instagram" aria-hidden="true" ></i></a>
				</div>
			
			
			

			</div>)

	}
}
export default AboutUS;