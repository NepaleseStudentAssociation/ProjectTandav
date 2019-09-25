import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';


class AboutUS extends Component{
	render(){
		return(
			<div style={{width:'100%', margin: "auto"}}>
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
													{/* LinkedIn */}
							<a href="https://www.linkedin.com/company/nsa-ccny/about/" target="_blank" rel="noopener noreferrer">
							<i className ="fa fa-linkedin-square"  aria-hidden="true"/>
							</a>
													{/* GitHub*/}
							<a href="https://github.com/NepaleseStudentAssociation" target="_blank" rel="noopener noreferrer">
							<i className ="fa fa-github-square"  aria-hidden="true"/>
							</a>
													{/* YouTube */}
							<a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
							<i className ="fa fa-youtube-square"  aria-hidden="true"/>
							</a>
													{/* Facebook */}							
							<a href="https://www.facebook.com/nsaccny19/" target="_blank" rel="noopener noreferrer">
							<i className ="fa fa-facebook-square"  aria-hidden="true"/>
							</a>

						</div>

					 </div>
					</Cell>
				</Grid>

			</div>
			)

	}
}
export default AboutUS;