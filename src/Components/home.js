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
    {/*<Layout style={{background: 'url(https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/70208310_124940898876765_5659520475143864320_o.jpg?_nc_cat=106&_nc_oc=AQmMiN1oQzaXrtTXpDWC8fdh8gf_8TmqL5oE8F1vuqXSY330FGxl819Phtyiqc4asS8&_nc_ht=scontent-lga3-1.xx&oh=891dff14d19b83d7eaa774b80a2755ee&oe=5E2B4496) center / cover'}}  >
        
       
		</Layout>

		<Slider autoplay={1000}>
			
			<div style={{ background: `url('https://ccnyathletics.com/images/2019/3/6/CCNY_Wingate.jpg?&mode=crop&format=jpg&quality=80') no-repeat center center` }}>
			<div className="center">
				<h1>Hello</h1>
				<p>I am here</p>
				<button>Click me</button>
				</div>
			</div>

			<div style={{ background: `url('https://ccnyathletics.com/images/2019/3/6/CCNY_Wingate.jpg?width=1416&height=797&mode=crop&format=jpg&quality=80') no-repeat center center` }}>
			<div className="center">
				<h1>Hello2</h1>
				<p>I am here2</p>
				<button>Click me2</button>
				</div>
			</div>
		
		</Slider>*/}

	<Carousel defaultWait={3000} /*wait for 1000 milliseconds*/ >
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
  	</Carousel>

	
			</div>)
			


		
			

	}
}
export default Home;