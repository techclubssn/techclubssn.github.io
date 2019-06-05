import Tabletop from 'tabletop';
import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import * as Scroll from 'react-scroll';

import NavbarTC from './Components/Navbar/Navbar.js';
import HackerSpace from './Components/Events/Hackerspace/Hackerspace.js';
import Home from './Components/Home/Landing.js';

// let Element = Scroll.Element;
// let scroller = Scroll.scroller;
let scroll = Scroll.animateScroll;

class About extends Component{

  componentDidMount(){
    window.scrollTo(0,0);
  }

  render() {
    return(
      <div className='aboutUsStyle'>
        <div className='aboutContainer'>
          <img className='aboutImg' src={this.props.largeScreen ? "/imgs/cover_large.jpg" : "/imgs/cover_small.jpg"} alt="Hackathon" />
          <div className='aboutHeading'><h1>A B O U T</h1></div>
        </div>
        <div className='aboutContent'>
          <h4>
             Tech Club SSN is a student run organization of the department of ECE in SSN College of Engineering.
          </h4>
          <hr />
          <h1>Our Mission</h1>
          <p> 
             Since its inception in 2014, Tech Club SSN serves to enhance  
             student involvement in fields revolving around Electronics and Computer Science. We do this by conducting tutorials, classes and events on practical 
             concepts in fields such as Computer Vision, IoT, Robotics and Machine Learning. We organize technical events around the year where students can 
             apply their newly acquired skills. Moreover, we guide students to pursue their aspirations in the fields of their interest by preparing them for internships, 
             independant research work, significant technical events and hackathons.  
          </p>
          <hr />
          <h1>Join Us</h1>
          <p>
            Let's build something great together. We conduct weekly sessions and lots of events throughout the year. Sessions are mostly conducted during TechClub hours, 
            which are usually kept at the last few periods of Thursday or Tuesday. Details of upcoming sessions will be updated on the website. Stay tuned to the news 
            section of the website for information on exciting events!
          </p>
          <p>
            Tech Club SSN is a welcoming community that is open for all. No pre-requisite knowledge is required! A desire to learn and build something is more than enough. 
            Even though Tech Club is an organization based in the department of ECE, students of all departments are welcome to join our activities! However,
            since most sessions are conducted on Tech Club hours which are only available on ECE timetables (from 3rd semester and above), we cannot guarantee OD for regular 
            sessions for students belonging to other departments (and first years students). OD will be provided for almost every other acitivity for everyone!
          </p>
          <hr />
          <h1>Study Guides</h1>
          <p>
            We document the materials used in our sessions so that students can refer to it even if they miss out on the sessions. Also, we document information regarding 
            internships, technical opportunities, MS application process and much more. Checkout our GitHub page for all such materials.
          </p>
        </div>
      </div>
      );
  }
}

class Footer extends Component{

  scrollToTop(){
    scroll.scrollToTop();
  }

  render(){
    return(
      <div className='footer'>
        
        <button onClick={this.scrollToTop} className='footer-chevron'>
          <i className="fas fa-chevron-up"></i>
        </button>
        <hr width='80%' style={{marginTop: '7px'}} />
        <h3>TechClubSSN</h3>
        <p>Built using React. Fork the website 
            <a href="https://github.com/techclubssn/techclubssn.github.io" 
               target="_blank" 
               rel="noopener noreferrer" 
               className='footer-link'> here</a>.
        </p>
      </div>
    )
  }
}

class Team extends Component{

  componentDidMount(){
    window.scrollTo(0,0);
  }

  noUrlHandler(url, name) {
    if(url === '')
      return <h4><b>{name}</b></h4>
    else
      return <h4><a href={url} target="_blank" rel="noopener noreferrer">{name}</a></h4>
  }

  noImgHandler(name, src) {
    if(src === '')
      return <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" alt={name} className='teamImg' />
    else
      return <img src={src} alt={name} className='teamImg' />
  }

  rowBuilder(data) {
    let len = data.length;
    let rows = Math.ceil(len / 3);
    let imgRows = [];

    for(let i = 0; i < rows; i++){  
      let imageCols = [];
      for(let j = 0; j < 3; j++){
        let idx = i * 3 + j;
        if(idx < len){
          imageCols.push(
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div key={idx}>
                {this.noImgHandler(data[idx].name, data[idx].dp)}
                {this.noUrlHandler(data[idx].web, data[idx].name)}
                <h5 style={{marginTop: "-5px"}}>{data[idx].role}</h5>
              </div>
            </div>
          );
        }
      }
      imgRows.push(
        <div className="row" style={{paddingTop: "20px"}}>
          {imageCols}
        </div>
      );
    }

    return(
      <div className="container">
        {imgRows}
      </div>
    );
  }

  renderTeam(){
    if(this.props.data.length === 0){
      return(
        <div align="center" style={{paddingBottom: "15px"}}>
          <h4>Fetching team information</h4>
          <div className="loader"></div> 
        </div>
      )
    }
    else{
      return(
        <div> 
          {this.rowBuilder(this.props.data)} 
        </div>
      )
    }
  }

  render() {
    return(
      <div className="teamStyle">
        <h1 style={{fontFamily:'Cabin'}}>Meet the Team</h1>
        {this.renderTeam()}
      </div>
      )
  }

}

// const introPage = {
//   height: "100vh",
//   border: "3px",
//   boxSizing: "border-box",
//   overflowX: "hidden",
//   overflowY: "hidden",
//   margin: "0px"
// }

// const particleStyle = {
//   position:"absolute",
//   top: "5%"
// }

// class Home extends Component {

//   constructor(props){
//     super(props);
//     this.state = {
//       enableHomeScroll: false
//     }
//   }

//   scrollToElement(element, disableSmooth = false) {
    
//     let options = {}
//     if(!disableSmooth){
//       options = {
//       smooth: true,
//       offset: -50,
//       }
//     }
//     scroller.scrollTo(element, options)
//   }

//   componentDidMount(){
//     if(this.props.dest === 'sessions')
//       this.scrollToElement('sess')
//     if(this.props.dest === 'news')
//       this.scrollToElement('news')
//     if(this.props.dest === 'home')
//       this.scrollToElement('home', true)
//   }

//   componentDidUpdate(){
//     if(this.props.dest === 'sessions')
//       this.scrollToElement('sess')
//     if(this.props.dest === 'news')
//       this.scrollToElement('news')
//     if(this.props.dest === 'home')
//     {
//       if(homeDebounceCounter < 1)
//         homeDebounceCounter += 1
//       else
//         this.scrollToElement('home')
//     }
//   }

//   render() {
//     return (
//       <div>
//         <div style={introPage}>
//           <Element name="home"></Element>
//           <div>
//             <Particles params={particleParams} style={particleStyle}/>
//           </div>
//           <div className="logoMobile">
//             <img src = "/imgs/logo.png" alt="logo" className="logoSize" />
//           </div>
//         </div>
//         <Element name="news">
//           <News data={this.props.newsData} sticky={this.props.sticky} />
//         </Element>
//         <Element name="sess">
//           <Sessions data={this.props.sessionData} sticky={this.props.sticky} />
//         </Element>
//       </div>
//     );
//   }
// }

class Pages extends Component{
  render() {
    return(
      <Switch>
        <Route exact path='/' render={
          (props) => <Home newsData={this.props.data.newsData} 
                           sessionData={this.props.data.sessionData} 
                           sticky={this.props.data.sticky} 
                           dest="home" />}/>
        
        <Route path='/news' render={
          (props) => <Home newsData={this.props.data.newsData} 
                           sessionData={this.props.data.sessionData} 
                           sticky={this.props.data.sticky} 
                           dest="news" />}/>
        
        <Route path='/sessions' render={
          (props) => <Home newsData={this.props.data.newsData} 
                           sessionData={this.props.data.sessionData} 
                           sticky={this.props.data.sticky} 
                           dest="sessions" />}/>
        
        <Route path='/about' render={(props) => <About largeScreen={this.props.data.sticky} />} />

        <Route path='/team' render={(props) => <Team data={this.props.data.teamData} dest="team" />} />

        <Route path='/hackerspace' render={(props) => <HackerSpace largeScreen={this.props.data.sticky} />} />

      </Switch>
    )
  }
}

class App extends Component {

  constructor(props) {
        super(props)
        this.state = {
          sessionData: [],
          newsData: [],
          teamData: [],
          sticky:window.innerWidth > 768 ? true : false,
        };
        this.updateWidth = this.updateWidth.bind(this);
    }

  updateWidth() {
  if(this.state.sticky === false && window.innerWidth > 768)
    this.setState({sticky: true});
  else if(this.state.sticky === true && window.innerWidth <= 768)
    this.setState({sticky: false});
  }

  componentDidMount() {

      window.addEventListener('resize', this.updateWidth);

      Tabletop.init({
      key: '1AOZhova18bEDHNjI7OfdqzxtVyZg6Mg5ECAuMERHwD4',
      callback: (googleData, tabletop) => {
        this.setState({
          sessionData: googleData.Sessions.elements,
          newsData: googleData.News.elements,
          teamData: googleData.Team.elements
        })
      },
      simpleSheet: false
    })   
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWidth);
  }

  render() {
    return (
      <div>
        <div>
          <NavbarTC />
        </div>
        <Pages data={this.state}/>
        <Footer />
      </div>
    );
  }
}

export default App;
