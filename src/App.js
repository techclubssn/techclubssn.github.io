import './Logo.css';
import './Navbar.css';
import Tabletop from 'tabletop';
import React, { Component } from 'react';
import Particles from 'react-particles-js';
import particlesJSON from './particles.json';
import {Route, Link, Switch} from 'react-router-dom';
import {Timeline, TimelineEvent} from 'react-event-timeline';
import { StickyContainer, Sticky } from 'react-sticky';
import {Collapse} from 'react-collapse';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import * as Scroll from 'react-scroll';

let Element = Scroll.Element;
let scroller = Scroll.scroller;
let scroll = Scroll.animateScroll;
let homeDebounceCounter = 0; //Required to prevent spurious scrolling
const particleParams = particlesJSON


class NavbarTC extends Component {

  constructor(props) {
    super(props);
    this.state = {
      navExpanded:false 
    }
    this.setNavExpanded = this.setNavExpanded.bind(this)
    this.closeNav = this.closeNav.bind(this)
  }

  setNavExpanded(value) {
    this.setState({
      navExpanded: value
    });
  }

  closeNav() {
    this.setState({
      navExpanded: false
    });
  }

  render() {
    return(
      <Navbar inverse
              fixedTop 
              onToggle={this.setNavExpanded} 
              expanded={this.state.navExpanded}>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/" onClick={this.closeNav}>
              <button style={{background: 'transparent', borderColor:'transparent'}}>
                TechClubSSN
              </button>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle style={{marginRight: '27px'}} />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">
              <Link to="/news" onClick={this.closeNav} className='navbar-link-style'>News</Link>
            </NavItem>
            <NavItem eventKey={2} href="#">
              <Link to="/sessions" onClick={this.closeNav} className='navbar-link-style'>
                Sessions
              </Link>
            </NavItem>
            <NavItem eventKey={3} href="#">
              <Link to="/about" onClick={this.closeNav} className='navbar-link-style'>About Us</Link>
            </NavItem>
            <NavItem eventKey={4} href="#">
              <Link to="/team" onClick={this.closeNav} className='navbar-link-style'>Team</Link>
            </NavItem>
            <NavItem style={{paddingRight: '10px'}} 
                     className='navbar-link-style' 
                     eventKey={5} 
                     href="https://github.com/techclubssn" 
                     target="_blank" 
                     rel="noopener noreferrer">
              GitHub
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

class CustomMarkdown extends Component{

    customMarkdownParse(data){

    let paragraphStart = 0, aStart=0, aEnd=0;
    let paragraphEnd = 0;
    let fetchLink = false;
    let linkStart = -1;
    let fragments = {
      type: [],
      content: {
        data: [],
        link:[]
      }
    }

    for(let i=0; i<data.length; i++)
    {
      if(data[i] === '[' && !fetchLink)
      {
        paragraphEnd = i;
        aStart = i+1;
      }
      if(data[i] === ']' && data[i+1] === '(' && !fetchLink)
      {
        fragments.type.push('p');
        fragments.content.data.push(data.substr(paragraphStart, paragraphEnd - paragraphStart));
        fragments.content.link.push('');

        aEnd = i;
        linkStart = i+1;
        fetchLink = true;
      }
      if(data[i] === ')' && fetchLink)
      {
        fragments.type.push('a');
        fragments.content.data.push(data.substr(aStart, aEnd - aStart));
        fragments.content.link.push(data.substr(linkStart+1, i-linkStart-1));
        fetchLink = false;
        paragraphStart = i+1;
      }
    }

    //Handling final paragraph if any
    fragments.type.push('p');
    fragments.content.data.push(data.substr(paragraphStart, data.length));
    fragments.content.link.push('');

    /* Useful for debugging
    let customString = '';
    for(let i=0; i<fragments.type.length; i++)
    {
      if(fragments.type[i] === 'p')
        customString += fragments.content.data[i];
      else if(fragments.type[i] === 'a')
        customString += '<a href="' + fragments.content.link[i] + '">' + fragments.content.data[i] + '</a>';
    }

    console.log(fragments);
    console.log(customString);
    */

      return(
        <span>
          {fragments.type.map((data, i) => (
            <span key={i}>
              {data === 'p' ? <span>{fragments.content.data[i]}</span> : 
              <a className='footer-link' 
                 href={fragments.content.link[i]} 
                 target="_blank" 
                 rel="noopener noreferrer"><b>{fragments.content.data[i]}</b></a>}
            </span>
            ))}
        </span>
        );
    }

    render(){
      return(
        <span>{this.customMarkdownParse(this.props.data)}</span>
        );
    }

}

class Sessions extends Component{

  constructor(props){
    super(props)
    this.state = {
      displayPara: this.props.sticky,
    }
  }

  paraContent(){
    return(
      <div style={{paddingBottom: "5px"}}>
        <p>
          Sessions are weekly activities organized by the TechClub members. They are usually comprised of tutorials and classes on a particular 
          area of concentration. We also organize talks and provide guidance on technical events, projects and opportunities. 
        </p>
        <p>
          Sessions are mostly conducted during TechClub hours, which are usually kept at the last few periods of Thursday or Tuesday. All sessions 
          are open to everyone, however they might happen during class hours of other departments. This section lists out the date and venue of upcoming 
          and past sessions.
        </p>
      </div>
    )
  }

  toggleDisplayPara(){
    let sticky = this.props.sticky;
    let displayPara = this.state.displayPara;
    if(sticky === false && displayPara === true)
      this.setState({displayPara: false});
    else if(sticky === false && displayPara === false)
      this.setState({displayPara: true});
  }

  sessionHeaderSticky(){
    let displayPara = this.state.displayPara;
    return(<div>
    {
      this.props.sticky === true ?
        <Sticky>
          {({ style }) => (
            <div style={{...style, paddingTop:"30px", paddingBottom:"47px"}}>
              <h1>Sessions</h1>
              {this.paraContent()}
            </div>
            )}
        </Sticky> :
        <div>
          <h1>Sessions</h1>
          <Collapse isOpened={displayPara}>
            {this.paraContent()}
          </Collapse>
          <button onClick={() => this.toggleDisplayPara()} className='btn btn-warning'>
            {displayPara === true ? 'Less' : 'More'}
          </button>
        </div>
    }
    </div>)
  }

  renderTimeLine(){
    let paddingLoaderTop = this.props.sticky ? "87px" : "0px";
    if(this.props.data.length === 0){
      return(
        <div align="center" style={{paddingTop: paddingLoaderTop}}>
          <h4>Fetching latest information</h4>
          <div className="loader"></div> 
        </div>
      )
    }
    else{
      return(
        <Timeline orientation='right' lineColor="#333" lineStyle={{width: "4px"}} >
          {
            this.props.data.slice(0).reverse().map((object, i) =>
              (
                <TimelineEvent title={object.sessionName}
                               container="card"
                               subtitle={ <div>
                                            <p style={{margin: "0"}}> {'Date: ' + object.date } </p> 
                                            <p style={{margin: "0"}}>{object.venue === '' ? 'Venue: TBD' : 'Venue: ' + object.venue}</p> 
                                          </div>}
                               cardHeaderStyle={{background: "orange"}}
                               bubbleStyle={{
                                background: 'orange',
                                borderColor: '#333',
                                borderWidth: '4px'
                               }}
                               titleStyle={{
                                fontSize: '18px',
                                color: '#333',
                                fontFamily:'Cabin'
                               }}
                               subtitleStyle={{
                                fontSize: '11px',
                                color: 'white'
                               }}
                               contentStyle={{
                                fontFamily:'Cabin',
                                fontSize:'14px'
                               }}

                >
                  <CustomMarkdown data={object.details} />
                </TimelineEvent>
              )
            )
          }
        </Timeline>
      )
    }
  }

  render() {
    return(
    <div className="container-fluid">
      <StickyContainer>
          <div className="row">
            <div className="col-sm-6 col-sm-push-6 sessionsHeader">
                {this.sessionHeaderSticky()}
             </div>
              <div className="col-sm-6 col-sm-pull-6 sessionsStyle"> 
                {this.renderTimeLine()}
              </div>
          </div>
        </StickyContainer>
      </div>
      )
  }
}

class News extends Component{

  constructor(props){
    super(props)
    this.state = {
      displayPara: this.props.sticky,
    }
  }

  paraContent(){
    return(
      <div style={{paddingBottom: "5px"}}>
        <p>
          Information on the latest news regarding TechClub, Events and Hackathons. 
        </p>
      </div>
    )
  }

  toggleDisplayPara(){
    let sticky = this.props.sticky;
    let displayPara = this.state.displayPara;
    if(sticky === false && displayPara === true)
      this.setState({displayPara: false});
    else if(sticky === false && displayPara === false)
      this.setState({displayPara: true});
  }

  newsHeaderSticky(){
    let displayPara = this.state.displayPara;
    return(<div>
    {
      this.props.sticky === true ?
        <Sticky>
          {({ style }) => (
            <div style={{...style, paddingTop:"30px", paddingBottom:"30px"}}>
              <h1>Anouncements</h1>
              {this.paraContent()}
            </div>
            )}
        </Sticky> :
        <div>
          <h1>Anouncements</h1>
          <Collapse isOpened={displayPara}>
            {this.paraContent()}
          </Collapse>
          <button onClick={() => this.toggleDisplayPara()} className='btn btn-warning'>
            {displayPara === true ? 'Less' : 'More'}
          </button>
        </div>
    }
    </div>)
  }

  renderTimeLine(){
    let paddingLoaderTop = this.props.sticky ? "37px" : "0px";
    if(this.props.data.length === 0){
      return(
        <div align="center" style={{paddingTop: paddingLoaderTop}}>
          <h4>Fetching latest information</h4>
          <div className="loader"></div> 
        </div>
      )
    }
    else{
      return(
        <Timeline orientation="left" lineColor="#333" lineStyle={{width: "4px"}} >
          {
            this.props.data.slice(0).reverse().map((object, i) =>
              (
                <TimelineEvent title={object.headline} 
                               subtitle={'Date: ' + object.date }
                               container="card"
                               cardHeaderStyle={{background: "orange"}}
                               bubbleStyle={{
                                  background: 'orange',
                                  borderColor: '#333',
                                  borderWidth: '4px'
                                 }} 
                               titleStyle={{
                                  fontSize: '18px',
                                  color: '#333',
                                  fontFamily:'Cabin'
                                 }}
                               subtitleStyle={{
                                  fontSize: '11px',
                                  color: 'white'
                                 }}
                                contentStyle={{
                                fontFamily:'Cabin',
                                fontSize:'14px'
                               }}
                >
                  <CustomMarkdown data={object.news} />
                </TimelineEvent>
              )
            )
          }
        </Timeline>
      )
    }
  }

  render() {
    return(
      <div className="container-fluid">
      <StickyContainer>
        <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 sessionsHeader">
                {this.newsHeaderSticky()}
            </div> 
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 sessionsStyle">
                {this.renderTimeLine()}
            </div>
          </div>
        </StickyContainer>
      </div>
      )
  }

}

class About extends Component{

  componentDidMount(){
    window.scrollTo(0,0);
  }

  render() {
    return(
      <div className='aboutUsStyle'>
        <div className='aboutContainer'>
          <img className='aboutImg' src={this.props.largeScreen ? "/cover_large.jpg" : "/cover_small.jpg"} alt="Hackathon" />
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

const introPage = {
  height: "100vh",
  border: "3px",
  boxSizing: "border-box",
  overflowX: "hidden",
  overflowY: "hidden",
  margin: "0px"
}

const particleStyle = {
  position:"absolute",
  top: "5%"
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
          <div>
            <Particles params={particleParams} style={particleStyle}/>
          </div>
          <div className="logoMobile">
            <img src = "/imgs/logo.png" alt="logo" className="logoSize" />
          </div>
        </div>
        <Element name="news">
          <News data={this.props.newsData} sticky={this.props.sticky} />
        </Element>
        <Element name="sess">
          <Sessions data={this.props.sessionData} sticky={this.props.sticky} />
        </Element>
      </div>
    );
  }
}

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
