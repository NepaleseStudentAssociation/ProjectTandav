import React from 'react';
import './App.css';
import {Layout,
         Navigation, Drawer,
        Content, 
        Footer, FooterSection,FooterLinkList,FooterDropDownSection} from 'react-mdl';

        
import Router from './Router';
import Header from  './Components/header.js';



//import {Link} from 'react-router-dom';

function App() {
  return (
  <div className="demo-big-content">
      <Layout>
       


       
            {/**<Navigation className="header-color">
            
                <Link   to ="/home"><p className="name"><i className="fa fa-home" aria-hidden="true"/> home</p> </Link >
                <Link  to ="/about_us"><p className="name"><i className="fa fa-id-badge" aria-hidden="true"/> about us </p></Link >
                <Link  to ="/projects"><p className="name"><i className="fa fa-database" aria-hidden="true"/> projects </p></Link >
                <Link  to ="/resources"><p className="name"><i className="fa fa-folder" aria-hidden="true"/> resources </p></Link >
                <Link  to ="/contact"><p className="name"><i className="fa fa-envelope" aria-hidden="true"/> sign up </p></Link >
                
  
               
                
            </Navigation>
            **/}
       
            
            
        
            
        <Content> 
           
           <div className="page-content" />
           <Header />
            
             
        </Content>
        
        <Router/>
        
        
        <Footer className="footer-color">
            
            <p className="footer-notes">Copyright © 2019 NSA CCNY All Rights Reserved.
                    
            </p>  
          
        </Footer>

      </Layout>
    </div>
        );
}

export default App;
