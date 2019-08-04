import Tabletop from 'tabletop';
import * as Scroll from 'react-scroll';
import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import Team from './Components/Team/Team.js';
import About from './Components/About/About.js';
import Home from './Components/Home/Landing.js';
import NavbarTC from './Components/Navbar/Navbar.js';
import HackerSpace from './Components/Events/Hackerspace/Hackerspace.js';

let scroll = Scroll.animateScroll;

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

        <Route path='/team' render={
          (props) => <Team teamData={this.props.data.teamData}
                           alumniData={this.props.data.alumniData}
                           dest="team" />} />

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
          alumniData: [],
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
          teamData: googleData.Team.elements,
          alumniData: googleData.Alumni.elements
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
