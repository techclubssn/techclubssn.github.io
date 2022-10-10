import './Landing.css'
import News from './News/News.js';
import React, {Component} from 'react';
import * as Scroll from 'react-scroll';
import Sessions from './Sessions/Sessions.js';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faYoutube, faGithub, faInstagram, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

// Particle JS is commented out for now since it is not 
// letting the site deploy.
// import Particles from 'react-particles-js';
// import particlesJSON from './particles.json';
import Particles from 'react-particles-js';

let homeDebounceCounter = 0; //Required to prevent spurious scrolling
let Element = Scroll.Element;
let scroller = Scroll.scroller;
// const particleParams = particlesJSON;

const introPage = {
  height: "100vh",
  border: "3px",
  boxSizing: "border-box",
  overflowX: "hidden",
  overflowY: "hidden",
  margin: "0px",
}

const particleStyle = {
  position:"absolute",
  bottom: '0vh'
}

class Home extends Component {

  constructor(props){
    super(props);
    this.state = {
      enableHomeScroll: false
    }
  }

  scrollToElement(element, disableSmooth = false) {
    
    let options = {}
    if(!disableSmooth){
      options = {
      smooth: true,
      offset: -50,
      }
    }
    scroller.scrollTo(element, options)
  }

  componentDidMount(){
    if(this.props.dest === 'sessions')
      this.scrollToElement('sess')
    if(this.props.dest === 'news')
      this.scrollToElement('news')
    if(this.props.dest === 'home')
      this.scrollToElement('home', true)
  }

  componentDidUpdate(){
    if(this.props.dest === 'sessions')
      this.scrollToElement('sess')
    if(this.props.dest === 'news')
      this.scrollToElement('news')
    if(this.props.dest === 'home')
    {
      if(homeDebounceCounter < 1)
        homeDebounceCounter += 1
      else
        this.scrollToElement('home')
    }
  }

  render() {
    return (
      <div>
        <div style={introPage}>
          <Element name="home"></Element>
          {/*
            // Particle JS is commented out for now since it is not 
            // letting the site deploy.
            <div>
              <Particles params={particleParams} style={particleStyle}/>
            </div>
          */}
          <div className="logoMobile">
            <img src = "/imgs/logo.png" alt="logo" className="logoSize" />
            <h1 className='motto-text' >WE RISE BY LIFTING OTHERS</h1>
          </div>
          <Particles
            style={particleStyle}
            params={{
              "particles": {
                  "number": {
                      "value": window.innerWidth <= 600 ? 30 : 60
                  },
                  "size": {
                      "value": window.innerWidth <= 600 ? 1 : 3
                  }
              },
              "interactivity": {
                  "events": {
                      "onhover": {
                          "enable": true,
                          "mode": "repulse"
                      }
                  }
              }
          }} />
        </div>
        <div className='about-section'>
          <h1 className='about-title' >ABOUT US</h1>
          <div className='about-flex-div' >
            <p className='about-content' >Tech Club SSN is a student run organization of the department of ECE in SSN College of Engineering. Tech club is an enthusiastic forum for students craving for technical exposure. Started by a group of students discussing about their GitHub repositories this forum has now evolved into an independent club striving towards excellence every year. Multiple sessions conducted by students on various core domains gives the ebullient engineers a wide exposure on how to approach concepts. On the whole it's a fun filled flexible forum with a group of lads more than willing to extend help to cheer and motivate the students on becoming technical masterminds.</p>
            <div className='about-right'>
              <div className='join-us-div' style={{marginBottom: '10vh'}}>
              <h1 className='about-sub-headings' >BECOME A MEMBER</h1>
                <a onClick={() => window.open('https://discord.gg/VvYkn6CNhc')} href="/" rel="noopener noreferrer" target="_blank">
                  <button className="discord-button">
                    <FontAwesomeIcon className='discord-icon' icon={faDiscord} />
                    JOIN OUR SERVER
                  </button>
                </a>
              </div>
              <h1 className='about-sub-headings hide-title' >FOLLOW US</h1>
              <div className='about-socials' >
                <FontAwesomeIcon className='about-social-button' onClick={() => window.open('https://www.linkedin.com/company/techclub-ssn/')} icon={faLinkedin} size='2x' />
                <FontAwesomeIcon className='about-social-button' onClick={() => window.open('https://www.youtube.com/channel/UCju9hpXppiHDuKjbcTNAZKw')} icon={faYoutube} size='2x' />
                <FontAwesomeIcon className='about-social-button' onClick={() => window.open('https://github.com/techclubssn')} icon={faGithub} size='2x' />
                <FontAwesomeIcon className='about-social-button' onClick={() => window.open('https://www.instagram.com/tech_club_ssn/')} icon={faInstagram} size='2x' />
              </div>
            </div>
          </div>
        </div>
        {/*<Link to='/hackinfinity'>
          <div className='hi-link-div'>
              <h1 className='hi-link-text'>UPCOMING EVENTS : </h1>
              <div>
                <h1 className='hi-link-title'>HACKINFINITY</h1>
                <h1 className='hi-link-subtitle'>To Hackinfinity and Beyond</h1>
              </div>          
          </div>
        </Link>
        <Element name="news">
          <News data={this.props.newsData} sticky={this.props.sticky} />
        </Element>
        <Element name="sess">
          <Sessions data={this.props.sessionData} sticky={this.props.sticky} />
        </Element>*/}
      </div>
    );
  }
}

export default Home;