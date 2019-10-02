import React, {Component} from 'react';
import {Card, CardTitle, CardText,Button} from 'react-mdl';


const details=[
	{
		name:"New York Times",
		description:"All CUNY students are provided with free New York Times membership for their school period, pelase use the provided resource.",
		pic:"url(http://www.longbeach.gov/globalassets/library/media-library/images/news/new-york-times-logo.jpg) center/cover",
		link:"http://www.hunter.cuny.edu/fda/faculty-matters/free-ny-times-digital-subscription?fbclid=IwAR0qfGIFiOILwIGZYHBDDf_oceCeXUP5VetAlmA4RShkqKIbw81juQ5cvBI"

	},
	{
		name:"GitHub Student Developer Pack",
		description:"All students are provided with github developer pack which includes a number of services starting with a free domain to hosting a website, please use the provided resource.",
		pic:"url(https://dwa5x7aod66zk.cloudfront.net/assets/pack/opengraph-image-c6d692948bb5fbf237b8a72d6576b4dcc84586335b522a6036904fc16ec7eccd.png) center/cover",
		link:"https://education.github.com/pack?fbclid=IwAR3ukI2CU_BU5ZCXQOQhxbr_eh2_A37aSIn4p44vZ11W4TL8u_ZNxE3Owzo"

	},

	{
		name: "Project Work division",
		description:"Work load is divided on the basis of frontend, backend & database. Please check out for detail roles. ",
		pic:" ",
		link:" https://files.slack.com/files-pri/TNX04UK46-FNQAV4741/screen_shot_2019-09-30_at_6.38.38_pm.png"
		
	},
	{
		name:"Basic UI Management",
		description:"Brief description about user interface with branches and git tools",
		pic:"",
		link:" https://files.slack.com/files-pri/TNX04UK46-FNZ1R3EK0/github_branching_instruction_v1-13.jpg"
	},

]
class Resources extends Component{
	render(){

		
		const slides = details.map((details) => {
			return (
				
				<Card  shadow={4} style={{width: '400px', height: '450px', margin: 'auto' }}>
				<CardTitle  expand	 style={{color: '#fff', background:details.pic }}>
				</CardTitle>
				<CardText class="resourcesText">
				{details.name}
				<p class="resourcesPara">{details.description}</p>
				<Button >
				<a href={details.link} target="_blank" rel="noopener noreferrer" className="resourcesButton"> Click Me for details</a><br/>

				</Button>
				
				
				</CardText>
		
		</Card>
			);
		  });
		return(
			<div>
				<h1 className="resourcesTitle" >Resources for CUNY students<br/>Always increasing...</h1>
				<div className="resourcesCard">
					{slides}
				</div>
			</div>
			)

	}
}
export default Resources;