import React, {Component} from 'react';
import {Layout, Card,CardTitle,CardText,CardActions,Button} from 'react-mdl';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

import makeCarousel from 'react-reveal/makeCarousel';
// we'll need the Slide component for sliding animations
// but you can use any other effect
import Slide from 'react-reveal/Slide';
// we'll use styled components for this tutorial
// but you can use any other styling options ( like plain old css )
import styled, { css } from 'styled-components';


class Home extends Component{

	

	render(){
		const Container = styled.div`
  	border: 0px solid red;
  	position: absolute;
  	width: 100%;
	height: 100%;
	min-height:600px;
	
`	;
	const CarouselUI = ({ children }) => <Container>{children}</Container>;
	const Carousel = makeCarousel(CarouselUI);

		return(<div >
    

	<Carousel defaultWait={2000} /*wait for 1000 milliseconds*/ >
   	 <Slide right >
    	<div className="carouselFirst" style={{background: 'url(https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/66383263_2302302496653234_1312723519565463552_o.jpg?_nc_cat=104&_nc_oc=AQnIQc4useH9uRCRcUbDBH0JMwXw78dycEaodMZe1gJw39AvbN9pHcEFGO_Mhoxgw0Xsg6FU88uZn4TQXU0v6o3c&_nc_ht=scontent-iad3-1.xx&oh=e7039b7c8de488d6c7e1f1c52637b8ee&oe=5E29059D) center / cover'}} >
        <h1 className="headerFirst">Welcome to <br/>The City College of New York<br/>Nepalese Student Association</h1>
		
        
      </div>
    	</Slide>
    	<Slide right>
      	<div className="carouselFirst" style={{background: 'url(https://cdn.pixabay.com/photo/2017/01/18/16/46/hong-kong-1990268_1280.jpg)center / cover'}} >
        	<h1 className="headerFirst">World is advancing<br/>So are we!!!</h1>
       	 
      	</div>
    	</Slide>

		<Slide right>
      	<div className="carouselFirst" style={{background: 'url(https://upload.wikimedia.org/wikipedia/commons/4/43/Kanchanjunga_mountain_range_06.jpg)center / cover'}} >
        	<h1 className="headerFirst"><a href="/contact">Sign Up for our newsletter</a></h1>
       	 
      	</div>
    	</Slide>
  	</Carousel>

	
			</div>)
			


		
			

	}
}
export default Home;