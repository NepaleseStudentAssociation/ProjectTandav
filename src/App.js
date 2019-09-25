import React from 'react';
import './App.css';
import {Layout,
        Header, Navigation, Drawer,
        Content, 
        Footer, FooterSection,FooterLinkList,FooterDropDownSection} from 'react-mdl';


import Main from './Components/main';
import {Link} from 'react-router-dom';

function App() {
  return (
  <div className="demo-big-content">
      <Layout>
        <Header className="header-color" title="NSA CCNY"  >
            {
            <Navigation>
                
                <Link  to ="/home">Home </Link >
                <Link  to ="/about_us">About US</Link >
                <Link  to ="/contact">Contact US </Link >
                <Link  to ="/projects">Projects</Link >
                <Link  to ="/resources">Resources </Link >
                
            </Navigation>
            }
        </Header>
            
        <Content> 
            <div className="page-content" />
            <Main/>
        </Content>
        
        <Footer className="footer-color">
            <FooterSection type="bottom" >
            <p className="footer-notes">Copyright © 2019 NSA CCNY- All Rights Reserved.</p>
                <FooterLinkList className="footer-links">
                    <a href="/">Help</a>
                    <a href="/">Privacy & Terms</a>
                </FooterLinkList>
            </FooterSection>
        </Footer>

      </Layout>
    </div>
        );
}

export default App;
