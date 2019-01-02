import './App.css';
import './Logo.css';
import './Navbar.css';
import Tabletop from 'tabletop';
import React, { Component } from 'react';
import Particles from 'react-particles-js';
import particlesJSON from './particles.json';
import {Route, Link, Switch} from 'react-router-dom';

const particleParams = particlesJSON

class Navbar extends Component {

  constructor(props) {
    super(props);
    this.navbarRef = React.createRef();
  }

  render() {
    return(

       <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to="/">TechClubSSN</Link>
          </div>
            <div className="collapse navbar-collapse" id="myNavbar" ref={this.navbarRef}>
              <ul className="nav navbar-nav navbar-right">
                <li><Link to="/sessions">Sessions</Link></li>
                <li><Link to="/news">News</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/team">Team</Link></li>
                <li><a href="https://github.com/Tech-Club-SSN" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              </ul>
            </div>
        </div>
      </nav> 

      )
  }
}

const LinkNavbar = React.forwardRef((props, ref)=>{
    return (
      <section ref={ref} className='section'>
      </section>
    );
  });


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
              <a href={fragments.content.link[i]} target="_blank" rel="noopener noreferrer">{fragments.content.data[i]}</a>}
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

  render() {
    return(
      <div className="sessionsStyle">
        <LinkNavbar ref={this.props.myRef} />
        <h1>Session Details</h1>
        {this.props.data.length === 0 ? <p>Loading Session Information...</p> : 
          <table className="session">
            <thead>
              <tr>
                <th>Date</th>
                <th>Session</th>
                <th>Details</th>
              </tr>
            </thead>
          {this.props.data.slice(0).reverse().map((object, i) => (
            <tr key={i}>
              <td>{object.date}</td> 
              <td>{object.sessionName}</td>
              <td><CustomMarkdown data={object.details} /></td>
            </tr>))}
          </table>
        }
      </div>
      )
  }

}

class News extends Component{

  render() {
    return(
      <div className="newsStyle">
        <LinkNavbar ref={this.props.myRef} />
        <h1>News Details</h1>
        {this.props.data.length === 0 ? <p>Loading News...</p> : 
          <table className="news">
            <thead>
              <tr>
                <th>Date</th>
                <th>News</th>
              </tr>
            </thead>
          {this.props.data.slice(0).reverse().map((object, i) => (
            <tr key={i}>
              <td>{object.date}</td>
              <td><CustomMarkdown data={object.news} /></td>
            </tr>))}
          </table>
        }
      </div>
      )
  }

}

class About extends Component{

  render() {
    return(
      <div className='aboutUsStyle'>
        <h1>
          About Us
        </h1>
        <p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at rhoncus eros. Cras dignissim, nibh sed lacinia pretium, risus lectus malesuada leo, vel vestibulum lorem nisi at ipsum. Aliquam consectetur vel erat in facilisis. Integer varius erat sed orci dapibus, at hendrerit leo mattis. Fusce facilisis purus orci, pellentesque pharetra turpis laoreet sit amet. Aenean est urna, commodo id pellentesque sed, tincidunt non erat. Nulla id mauris vitae lectus scelerisque laoreet.

Sed pulvinar rutrum eros ac blandit. Cras id enim at lacus finibus lacinia quis eu lectus. Curabitur ut magna orci. Sed lobortis a justo in viverra. Donec eleifend in est posuere semper. In varius auctor urna non condimentum. Proin ipsum mi, malesuada venenatis lacus nec, luctus faucibus risus. Sed sed turpis enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam pulvinar, felis ut dictum tristique, dolor ex pharetra felis, vel euismod magna metus consectetur urna. Duis consequat in ligula sed auctor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque eget mattis nunc. Mauris in neque ante. Pellentesque rhoncus vitae sapien nec auctor. 
        </p>
      </div>
      );
  }
}

/*
class Team extends Component{

  render() {
    return(
      <div classname="aboutUsStyle">
        <h1>Meet the Team</h1>
        {this.props.data.length === 0 ? <p>Fetching details...</p> : 
          <table className="session">
            <thead>
              <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Webpage</th>
                <th>Picture</th>
              </tr>
            </thead>
          {this.props.data.slice(0).reverse().map((object, i) => (
            <tr key={i}>
              <td>{object.name}</td> 
              <td>{object.role}</td>
              <td>{object.web}</td>
              <td>{object.dp}</td>
            </tr>))}
          </table>
        }
      </div>
      )
  }

}

*/

class Team extends Component{

  noUrlHandler(url, name) {
    if(url === '')
      return <h4>{name}</h4>
    else
      return <h4><a href={url} target="_blank" rel="noopener noreferrer">{name}</a></h4>
  }

  noImgHandler(name, src) {
    if(src === '')
      return <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" alt={name} className='teamImg' />
    else
      return <img src={src} alt={name} className='teamImg' />
  }

  render() {
    return(
      <div className="teamStyle">
        <h1>Meet the Team</h1>
        {this.props.data.length === 0 ? <p>Fetching details...</p> :
        <div> 
          {this.props.data.map((object, i) => (
            <div key={i}>
              {this.noImgHandler(object.name, object.dp)}
              {this.noUrlHandler(object.web, object.name)}
              <h5>{object.role}</h5>
            </div>))}
        </div>
        }
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

    componentDidMount() {
      //Handles scroll from other pages
      this.handleScroll();
    }

    componentDidUpdate(){
      //Handles scroll within the same page
      this.handleScroll();
    }

    handleScroll(){
      if(this.props.dest === 'news')
        this.scrollToMyRef(this.props.myRef.news);
      else if(this.props.dest === 'sessions')
        this.scrollToMyRef(this.props.myRef.sessions);
      else if(this.props.dest === 'home')
        this.scrollToMyRef(this.props.myRef.home);
    }

    scrollToMyRef(ref){
      ref.current.scrollIntoView({behavior: 'smooth'});
    }

  render() {
    return (
      <div>
        <LinkNavbar ref={this.props.myRef.home} /> 
        <div style={introPage}>
          <div>
            <Particles params={particleParams} style={particleStyle}/>
          </div>
          <div className="logoMobile">
            <img src = "/imgs/logo.png" alt="logo" className="logoSize" />
          </div>
        </div>
        <Sessions data={this.props.sessionData} myRef={this.props.myRef.sessions} />
        <News data={this.props.newsData} myRef={this.props.myRef.news} />
      </div>
    );
  }
}


class Pages extends Component{
  render() {
    return(
      <Switch>
        <Route exact path='/' render={
          (props) => <Home myRef={this.props.allRef} newsData={this.props.data.newsData} sessionData={this.props.data.sessionData} dest="home" />}/>
        
        <Route path='/news' render={
          (props) => <Home myRef={this.props.allRef} newsData={this.props.data.newsData} sessionData={this.props.data.sessionData} dest="news" />}/>
        
        <Route path='/sessions' render={
          (props) => <Home myRef={this.props.allRef} newsData={this.props.data.newsData} sessionData={this.props.data.sessionData} dest="sessions" />}/>
        
        <Route path='/about' component={About}/>

        <Route path='/team' render={(props) => <Team data={this.props.data.teamData} dest="team" />} />

      </Switch>
    )
  }
}

class App extends Component {

  constructor(props) {
        super(props)
        this.sessionRef = React.createRef();
        this.newsRef = React.createRef();
        this.homeRef = React.createRef();
        this.allRef = {
          'sessions': this.sessionRef,
          'news': this.newsRef,
          'home': this.homeRef
        };
        this.state = {
          sessionData: [],
          newsData: [],
          teamData: [],
        };
    }

  componentDidMount() {

      Tabletop.init({
      key: '1nWsyn1isF7gl2A1dMLiIpp0mAR6QVvIuNfg2nEn54rc',
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

  render() {
    return (
      <div>
        <div>
          <Navbar myRef={this.allRef} />
        </div>
        <Pages allRef={this.allRef} data={this.state}/>
      </div>
    );
  }
}

export default App;
