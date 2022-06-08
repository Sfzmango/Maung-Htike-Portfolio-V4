import React from "react";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import logo from "./assets/logo.png";
import resume from "./assets/resume.pdf";
import background from "./assets/background.png";

//import { Link } from "react-router-dom";

const bg = {
  backgroundImage: `url(${background})`
}

const navStyle = {
  background: "#222222",
};

const footerStyle = {
  color: "black"
};

export default function App() {
  return (
    <div style={bg}>

      <header>
        <nav className="uk-width-1-1\@s uk-background-cover" uk-navbar="uk-navbar" style={navStyle}>
          <div className="uk-navbar-left">
            <ul className="uk-margin-small-left uk-navbar-nav">
              <li><img src={logo} alt="website logo" width="100px" /></li>
            </ul>
          </div>

          <div className="uk-navbar-right">
            <ul className="uk-navbar-nav uk-margin-medium-right">
              <a href="#">
                <span uk-icon="icon: menu; ratio: 1.5" className="uk-text-muted"></span>
              </a>
              <div className="uk-navbar-dropdown">
                <ul className="uk-nav uk-navbar-dropdown-nav">
                  <li>About Me</li>
                  <li>Projects</li>
                  <li>Contact</li>
                  <li><a href={resume} target="_blank" rel="noreferrer">Resume</a></li>
                </ul>
              </div>
            </ul>
          </div>
        </nav>
      </header>

      {/* <AboutMe /> */}
      <Projects />
      {/* <Contacts /> */}

      <footer className="uk-container uk-margin-large-top uk-text-center" style={footerStyle}>
        <div className="contactsContents">

          {/* <Link to="https://github.com/Sfzmango" target="_blank"> */}
          <span
            uk-icon="icon: github-alt; ratio: 1.5"></span>
          {/* </Link> */}

          {/* <Link to="https://twitter.com/Sfzm_" target="_blank"> */}
          <span
            uk-icon="icon: twitter; ratio: 1.5"></span>
          {/* </Link> */}

          {/* <Link to="https://www.linkedin.com/in/maung-htike-482b4b143/" target="_blank"> */}
          <span
            uk-icon="icon: linkedin; ratio: 1.5"></span>
          {/* </Link> */}

        </div>
        <p>- © Maung Htike, 2022 MIT. Made using the UIkit CSS framework -</p>
      </footer>
    </div>
  );
}