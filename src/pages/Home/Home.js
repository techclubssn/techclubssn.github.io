import React from "react";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import logo from '../../assets/images/logo.png'
import './Home.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faYoutube, faGithub, faInstagram, faDiscord } from '@fortawesome/free-brands-svg-icons';

const introPage = {
    height: "100vh",
    border: "3px",
    boxSizing: "border-box",
    overflowX: "hidden",
    overflowY: "hidden",
    margin: "0px",
    backgroundColor: 'black'
  }
  
const Home = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
      }, []);
    
      const particlesLoaded = useCallback(async (container) => {
        // await console.log(container);
      }, []);


    return (
        <div>
          <div style={introPage}>
            <div className="home-logo">
              <img src ={logo}  alt="logo" className="logoSize" />
              <h1 className='motto-text' >WE RISE BY LIFTING OTHERS</h1>
            </div>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                  fpsLimit: 60,
                  interactivity: {
                    detectsOn: 'canvas',
                    events: {
                      // onClick: { enable: true, mode: 'push' },
                      onHover: { enable: true, mode: 'repulse' },
                      resize: true,
                    },
                    modes: {
                      bubble: {
                        distance: 400,
                        duration: 2,
                        opacity: 0.8,
                        size: 40,
                      },
                      push: { particles_nb: 4 },
                      repulse: { distance: 100, duration: 0.4 },
                    },
                  },
                  particles: {
                    color: { value: '#ffffff' },
                    links: { color: '#ffffff', distance: 150, enable: true, opacity: 0.5, width: 1 },
                    move: {
                      bounce: false,
                      direction: 'none',
                      enable: true,
                      outMode: 'bounce',
                      random: false,
                      speed: 1,
                      straight: false,
                    },
                    number: { density: { enable: true, value_area: 800 }, value: 80 },
                    opacity: { value: 0.5 },
                    shape: { type: 'circle' },
                    size: { random: true, value: 5 },
                  },
                  detectRetina: true,
                }}
                />
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


export default Home;