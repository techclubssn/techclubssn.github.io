import Papa from 'papaparse';
import * as Scroll from 'react-scroll';
import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import Team from './Components/Team/Team.js';
import About from './Components/About/About.js';
import Home from './Components/Home/Landing.js';
import NavbarTC from './Components/Navbar/Navbar.js';
import Hackinfinity from './Components/Events/Hackinfinity/Hackinfinity.js';
// import HackerSpace from './Components/Events/Hackerspace/Hackerspace.js';

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

// To use the old hackerspace page, uncomment import Hackerspace on top and 
// replace the hackerspace route with this:
// <Route path='/hackerspace' render={(props) => <HackerSpace largeScreen={this.props.data.sticky} />} />

// <Route path='/hackerspace' component={() => { 
//   window.location.href = 'https://hackerspacessn.github.io/'; 
//   return null;
// }}/>

// <Route path='/corona' component={() => { 
//   window.location.href = 'https://ece-corona.github.io/'; 
//   return null;
// }}/>

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
        <Route exact path='/hackinfinity' component={Hackinfinity} />
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

    let news_file = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vSO8UIseC06UASzyokx8WyWULhGbQRWmvQTrVvndqfqroIX5MdibaTk5qdfamzREqHU2mQW9PHEkLma/pub?output=csv';
    let sess_file = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQv2tIv-50mvVbCfrlYvjWCXOIVa1GCeBARemqYIii44x_eWfy5hkad_r_K5FRuYhH2IeyWP9vJHZg5/pub?output=csv';
    let team_file = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQjNAApCm2CohJrqbyVWX61DIKzxOM8pyOoA4xxSmkwrMncQN4rbkw40lZ7Fh51BUluQc7hu2nY9BwI/pub?output=csv';
    let alum_file = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vT_pjXGCVgHyEOCBtapFt_sE7XMk6Rj-8qqW91zmdoifdBx8nGARMHgXsgUJqOMNFRUAaXVbzFeq5JJ/pub?output=csv';

    Papa.parse(news_file, {
        download: true,
        header: true,
        complete: (parsed) => {
          this.setState({
          newsData: parsed.data,
        })
      }
    })

    Papa.parse(sess_file, {
        download: true,
        header: true,
        complete: (parsed) => {
          this.setState({
          sessionData: parsed.data,
        })
      }
    })

    Papa.parse(team_file, {
        download: true,
        header: true,
        complete: (parsed) => {
          this.setState({
          teamData: parsed.data,
        })
      }
    })

    Papa.parse(alum_file, {
        download: true,
        header: true,
        complete: (parsed) => {
          this.setState({
          alumniData: parsed.data,
        })
      }
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
