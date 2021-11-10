import './Landing.css'
import News from './News/News.js';
import React, {Component} from 'react';
import * as Scroll from 'react-scroll';
import Sessions from './Sessions/Sessions.js';
import { Link } from 'react-router-dom';

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
          </div>
          <Particles
            style={particleStyle}
            params={{
              "particles": {
                  "number": {
                      "value": 60
                  },
                  "size": {
                      "value": 3
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