import './Logo.css';
import './Navbar.css';
import './TimelineSession.css';
import './TimelineNews.css';
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
    <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12 sessionsHeader"> 
      {/*
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
    */}
              <h1>Sessions</h1>
           </div>
          <div className="sessionsStyle">
          <div className="col-lg-7 col-md-7 col-sm-7 col-xs-12 sessionsStyle"> 
               <div class="timeline">
                <div class="timeline-element right">
                  <div class="content">
                    <h2>2017</h2>
                    <p>Lorem ipsum..</p>
                  </div>
                </div>
                <div class="timeline-element left">
                  <div class="content">
                    <h2>2016</h2>
                    <p>Lorem ipsum..</p>
                  </div>
                </div>
              </div> 
          </div>
          </div>
        </div>
      </div>
      )
  }

}

class News extends Component{

  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col-sm-5 col-sm-push-7 sessionsHeader">
      {/*<div className="newsStyle">
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
      </div>*/}
              <h1>Anouncements</h1>
          </div>
          <div className="col-sm-7 col-sm-pull-5 sessionsStyle">
              <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non mauris ultrices, luctus dolor non, eleifend velit. Vestibulum gravida in enim tincidunt commodo. Ut at ipsum leo. Aliquam in semper sapien. Duis quis vulputate nulla. Phasellus ut arcu vitae ligula lacinia faucibus eget et massa. Donec sodales, nibh sed tristique aliquam, ipsum diam molestie dolor, ut laoreet quam nulla sed magna. Duis tincidunt nunc vel ligula imperdiet, quis gravida nibh ullamcorper. Aenean semper pellentesque neque, congue tristique velit volutpat sed. Maecenas ut molestie mauris, in tincidunt velit. Cras nec ornare erat, nec viverra nulla. Morbi quis feugiat odio, in mattis massa.

Maecenas ut finibus lectus. Etiam consequat, libero nec consequat placerat, erat lacus posuere ipsum, nec malesuada nisl mi sed augue. Pellentesque eu blandit purus. Donec elit nisl, lobortis sit amet vestibulum ut, condimentum non neque. In a ipsum convallis sapien elementum vehicula ut quis tellus. Sed semper eros sed scelerisque commodo. Phasellus dignissim dolor vitae velit laoreet ullamcorper. Vivamus gravida, tellus non congue pulvinar, sapien purus lacinia quam, at pretium orci lorem vitae nibh. Ut in est at nibh scelerisque blandit facilisis eget sem. Praesent eu mollis nulla. Nunc quam libero, dapibus sit amet imperdiet at, tincidunt ut dolor. Sed eget lorem vel ipsum consequat sollicitudin et ac mi. Maecenas a convallis risus. Morbi ut placerat eros. Donec maximus sem eu dui posuere fringilla.

Donec egestas quis urna eu varius. Quisque ex sapien, finibus et tempus eget, fringilla nec lacus. Morbi vitae tellus in massa pretium volutpat eu et ipsum. Donec a ligula nec nunc pellentesque finibus sed a erat. Etiam imperdiet laoreet nulla, iaculis convallis massa vestibulum ut. Proin mattis ultricies ligula ut tincidunt. Morbi mattis massa mi.

Integer commodo purus suscipit, auctor ex a, ornare nisl. Quisque vulputate risus vitae iaculis hendrerit. Vestibulum turpis risus, consequat ultrices velit aliquet, varius aliquet magna. Pellentesque scelerisque sem vestibulum suscipit vestibulum. Fusce condimentum leo non ante sollicitudin, quis ultrices diam elementum. Praesent pulvinar, ex pulvinar feugiat pretium, metus mi consequat mauris, non maximus diam eros nec nisi. Donec vehicula dolor quis fermentum cursus. Nullam varius rutrum erat. Vestibulum tincidunt arcu nec nibh pretium, quis fermentum ante interdum. Mauris in libero est. Cras hendrerit facilisis metus, non ullamcorper odio egestas nec. Sed nec ipsum in sem mattis dictum. Quisque vitae varius sapien. Maecenas sagittis sollicitudin pharetra.

Duis at congue ligula, pellentesque vestibulum nisl. Phasellus sit amet nisl sagittis urna commodo egestas. Mauris blandit, dolor sit amet interdum ornare, urna libero accumsan ex, sed sodales erat libero non leo. Nulla facilisi. Fusce finibus nibh id condimentum laoreet. Aenean turpis tortor, consequat ac accumsan fermentum, iaculis et est. Vestibulum pellentesque commodo purus nec semper. Nulla fermentum ligula non elit sodales, eget tincidunt felis commodo. Pellentesque vel tempus nibh. 
              </p>
          </div>
      </div>
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
