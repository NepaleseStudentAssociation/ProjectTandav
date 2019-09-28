import React, {Component} from 'react';
import {Card, CardTitle, CardText} from 'react-mdl';



class AboutUS extends Component{
	render(){
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


            
		<div>	<p class="aboutBio">Execute Team:<br/> <br/>Meet our cool and responsible executive team: </p></div>
			<div className="card">
			
			<Card  shadow={1} style={{width: '300px', height: '320px', margin: 'auto' }}>
    				<CardTitle  className="aboutName" expand style={{color: '#fff', background: 'url(https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/44707128_2141218272761658_5599564849110581248_n.jpg?_nc_cat=100&_nc_oc=AQltuQ_2vJCI6AjkCruRUczoqNOeeIO2vYfgJuD6YLN4CDhQfbT4ujmWfMWD16663SM-03L_lh1Al_c7_iShCrNw&_nc_ht=scontent-iad3-1.xx&oh=f2e8ba4d1f759fe5b1189ffc3678ef6b&oe=5DFD0E67) center/cover'}}>
					President:<br/> Sanjib Lamichhane
					</CardTitle>
    				<CardText>
					I need a bio to put here<br/>
					<a href="https://facebook.com" ><i class="fa fa-facebook" aria-hidden="true" href="https://facebook.com"></i></a>
					<a href="https://linkedin.com"  style={{ padding: 10}}  ><i class="fa fa-linkedin" aria-hidden="true" ></i></a>
					<a href="https://youtube.com"  style={{ padding: 10}}  ><i class="fa fa-youtube" aria-hidden="true" ></i></a>
					
    				</CardText>
			
			</Card>
			<Card  shadow={0} style={{width: '300px', height: '320px', margin: 'auto'}}>
    				<CardTitle  className="aboutName" expand style={{color: '#fff', background: 'url(https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-1/p320x320/15726757_1301914236495486_7501882486979800809_n.jpg?_nc_cat=103&_nc_oc=AQkryaRxiuyp46X5fKow_BOimFBXxr3pVBpNo9GoDNwfT7BgeA2S2_G1KG_Mp3-hKpcyP--E3IkuCZ3bNtEcKRam&_nc_ht=scontent-iad3-1.xx&oh=90de58a156fb3bc52506a8d1669f5920&oe=5E2E0F2A) center/cover'}}>
						Vice President:<br/> Nima Lama
					</CardTitle>
    				<CardText>
					I need a bio to put here<br/>
					<a href="https://facebook.com" ><i class="fa fa-facebook" aria-hidden="true" href="https://facebook.com"></i></a>
					<a href="https://linkedin.com"  style={{ padding: 10}}  ><i class="fa fa-linkedin" aria-hidden="true" ></i></a>
					<a href="https://youtube.com"  style={{ padding: 10}}  ><i class="fa fa-youtube" aria-hidden="true" ></i></a>
    				</CardText>
			
			</Card>
			
			<Card  shadow={0} style={{width: '300px', height: '320px', margin: 'auto'}}>
    				<CardTitle className="aboutName" expand style={{color: '#fff', background: 'url(https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-1/c0.0.320.320a/p320x320/38630021_1830688027052210_3149548360524890112_n.jpg?_nc_cat=105&_nc_oc=AQmjhk8ojXMpVEZOeKs3-5_mbmkKTtZXzofsD5uies2-Tb6L_50WSpbXzZU9FLmf4Y1vhD-_BU4mcEEspvKDA4kr&_nc_ht=scontent-iad3-1.xx&oh=d2523a972cefc6c46a54eea5503b15c0&oe=5DF8EAC8) center/cover'}}>
						Secretary:<br/> Bhumika Bajracharya
					</CardTitle>
    				<CardText>
					I need a bio to put here<br/>
					<a href="https://facebook.com" ><i class="fa fa-facebook" aria-hidden="true" href="https://facebook.com"></i></a>
					<a href="https://linkedin.com"  style={{ padding: 10}}  ><i class="fa fa-linkedin" aria-hidden="true" ></i></a>
					<a href="https://youtube.com"  style={{ padding: 10}}  ><i class="fa fa-youtube" aria-hidden="true" ></i></a>
    				</CardText>
			
			</Card>
			
			<Card  shadow={0} style={{width: '300px', height: '320px', margin: 'auto'}}>
    				<CardTitle  className="aboutName" expand style={{color: '#fff', background: 'url(https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-1/p320x320/62504870_2321042958177042_8272512564382924800_n.jpg?_nc_cat=101&_nc_oc=AQmGo9ZPqYlRjzmStHwahJ4uuvCsJyIQ68hXXn840G1U0LLxCdhHJL9ByszNtc50u7upAoX7hgQLR0RZpRD8WCzH&_nc_ht=scontent-iad3-1.xx&oh=706f6117a8e362d3150871f7364e2f42&oe=5E3A794D) center/cover'}}>
						Treasurer:<br/>Shailesh Ghale
					</CardTitle>
    				<CardText>
        				I need a bio to put here<br/>
						<a href="https://facebook.com" ><i class="fa fa-facebook" aria-hidden="true" href="https://facebook.com"></i></a>
					<a href="https://linkedin.com"  style={{ padding: 10}}  ><i class="fa fa-linkedin" aria-hidden="true" ></i></a>
					<a href="https://youtube.com"  style={{ padding: 10}}  ><i class="fa fa-youtube" aria-hidden="true" ></i></a>
    				</CardText>
			
			</Card>
			</div>
			
			{/*<div style={{width:'100%', margin: "auto"}}>
				<Grid className = "landing-grid">
					<Cell col={12}>
					<img
					 src="https://avatars3.githubusercontent.com/u/55328846?s=200&v=4"
					 alt ="profile"
					className="avatar-img" />

					<div className="banner-text">
						<h1>About US </h1>

						<hr/>

						<p>Follow us: </p>
						<div className="social-links">
													
							<a href="https://www.linkedin.com/company/nsa-ccny/about/" target="_blank" rel="noopener noreferrer">
							<i className ="fa fa-linkedin-square"  aria-hidden="true"/>
							</a>
													
							<a href="https://github.com/NepaleseStudentAssociation" target="_blank" rel="noopener noreferrer">
							<i className ="fa fa-github-square"  aria-hidden="true"/>
							</a>
													
							<a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
							<i className ="fa fa-youtube-square"  aria-hidden="true"/>
							</a>
																				
							<a href="https://www.facebook.com/nsaccny19/" target="_blank" rel="noopener noreferrer">
							<i className ="fa fa-facebook-square"  aria-hidden="true"/>
							</a>

						</div>

					 </div>
					</Cell>
		</Grid>*/}

			</div>)

	}
}
export default AboutUS;