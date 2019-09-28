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
        <Header className="header-color" >


            {
            <Navigation>
            
                <Link   to ="/home"><p className="name"><i class="fa fa-home" aria-hidden="true"/> home</p> </Link >
                <Link  to ="/about_us"><p className="name"><i class="fa fa-id-badge" aria-hidden="true"/> about us </p></Link >
                <Link  to ="/projects"><p className="name"><i class="fa fa-database" aria-hidden="true"/> projects </p></Link >
                <Link  to ="/resources"><p className="name"><i class="fa fa-folder" aria-hidden="true"/> resources </p></Link >
                <Link  to ="/contact"><p className="name"><i class="fa fa-comments" aria-hidden="true"/> contact us </p></Link >
                
            </Navigation>
            }
        </Header>
            
        <Content> 
            <div className="page-content" />
            <Main/>
        </Content>
        
        <Footer className="footer-color">
            
            <p className="footer-notes">Copyright © 2019 NSA CCNY All Rights Reserved.
                    
            </p>  
          
        </Footer>

      </Layout>
    </div>
        );
}

export default App;
