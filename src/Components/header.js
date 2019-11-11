/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from "react";
import "./header.css";
import { CSSTransition } from "react-transition-group";

function Header() 
{
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <header className="Header">
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="Nav">
          <a href="/home">home</a>
          <a href="/about_us">about us</a>
          <a href="/projects">projects</a>
          <a href="/resources">resources</a>
          <a href="/contact">sign up</a>
          
        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="Icon">
      🇳🇵
      </button>
    </header>
  );
}

export default Header;
