import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from "./Containers/home";
import AboutUS from "./Containers/about_us";
import Contact from './Containers/contact';
import Projects from "./Containers/projects";
import Resources from "./Containers/resources";

const Main = () => (
	<Switch>
		<Route exact path="/" component={Home} />
		<Route path="/home" component = {Home} />
		<Route path="/about_us" component={AboutUS} />
		<Route path="/contact" component={Contact} />
		<Route path="/projects" component={Projects} />
		<Route path="/resources" component={Resources} />
	</Switch>
	)

export default Main;
