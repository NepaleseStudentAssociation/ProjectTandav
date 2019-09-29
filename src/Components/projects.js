import React, {Component} from 'react';
import {Card, CardTitle, CardText} from 'react-mdl';



const details=[
	{
		title:"Digital Platform Development",
		description:
		{
			first:"First Bullet",
			second:"Second Bullet",
			third: "Third Bullet"
		},
		pic:"url(https://img.business.com/rc/300x200/aHR0cHM6Ly93d3cuYnVzaW5lc3MuY29tL2ltYWdlcy9jb250ZW50LzVjYS8zY2JhMTVhMjE1ZThhNDU4YjRkYjIvMC04MDAt) center/cover",
		contact:"Baivab Pokhrel",
		email:"mailto:baivab.pokhrel@gmail.com",
		link:"https://github.com/NepaleseStudentAssociation",
		

	},
	{
		title:"Biology Project",
		description:
		{
			first:"First Bullet",
			second:"Second Bullet",
			third: "Third Bullet"
		},
		pic:"url(https://blogs.biomedcentral.com/on-biology/wp-content/uploads/sites/5/2018/08/dna-3539309_640-e1556102208629-620x320.jpg) center/cover",
		contact:"Nisha Bisht",
		email:"",
		link:"https://github.com",
		

	},
	{
		title:"Robotics",
		description:
		{
			first:"First Bullet",
			second:"Second Bullet",
			third: "Third Bullet"
		},
		pic:"url(https://cruxnow.com/wp-content/uploads/2019/02/robo-ethics-vatica-academy-for-life-1024x557.jpg) center/cover",
		contact:"Sanjib Lamichhane",
		email:"mailto:sanjiblc13@gmail.com ",
		link:"https://github.com",
		


	},
	{
		title:"Dashain Tihar",
		description:
		{
		 first:"First Bullet",
		 second:"Second Bullet",
		 third: "Third Bullet"
		},
		pic:"url(http://gbsnote.com/wp-content/uploads/tihar-1-1.jpg) center/cover",
		contact:"Shailesh Ghale",
		email:"mailto:ghale112@gmail.com",
		link:"https://github.com",
		



	}
]
class projects extends Component{
	render(){

		const slides = details.map((details) => {
			return (
				
				<Card  shadow={4} style={{width: '400px', height: '420px', margin: 'auto' }}>
				<CardTitle  className="projectName" expand	 style={{color: '#fff', background:details.pic }}>
				</CardTitle>
				<CardText class="projectText">
				{details.title}<br/>
				<ul >
					<li className="projectDescription">{details.description.first}</li>
					<li className="projectDescription">{details.description.second}</li>
					<li className="projectDescription">{details.description.third}</li>

				</ul>
				Project Manager: <a href={details.email}>{details.contact}</a><br/>
				<a href={details.link} target="_blank"><i  aria-hidden="true" >details</i></a><br/>
				
				
				</CardText>
		
		</Card>
			);
		  });
		return(	
			<div>		
				<div className="projectTitle">
					<h1 className="projectTitle">Our ongoing projects</h1>
				</div>

				<div className="projectCard">
					{slides}
				</div>
			</div>
		)
	}
}
export default projects;