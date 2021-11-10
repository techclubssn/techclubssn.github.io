import './Navbar.css';
import {Link} from 'react-router-dom';
import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';


// <NavItem eventKey={6} href="#">
//   <Link to="/hackerspace" onClick={this.closeNav} className='navbar-link-style'>HackerSpace</Link>
// </NavItem>
// <NavItem eventKey={7} href="#">
//   <Link to="/corona" onClick={this.closeNav} className='navbar-link-style'>Corona</Link>
// </NavItem>

class NavbarTC extends Component {

  constructor(props) {
    super(props);
    this.state = {
      navExpanded:false,
      activeState: 1 
    }
    this.setNavExpanded = this.setNavExpanded.bind(this)
    this.closeNav = this.closeNav.bind(this)
  }

  setNavExpanded(value) {
    this.setState({
      navExpanded: value
    });
  }

  closeNav(eventKey) {
    this.setState({
      navExpanded: false,
      activeState: eventKey
    });
  }

  // render() {
  //   return(
  //     <Navbar inverse
  //             fixedTop 
  //             onToggle={this.setNavExpanded} 
  //             expanded={this.state.navExpanded}>
  //       <Navbar.Header>
  //         <Navbar.Brand>
  //           <Link to="/" onClick={this.closeNav}>
  //             <button style={{background: 'transparent', borderColor:'transparent'}}>
  //               TechClubSSN
  //             </button>
  //           </Link>
  //         </Navbar.Brand>
  //         <Navbar.Toggle style={{marginRight: '27px'}} />
  //       </Navbar.Header>
  //       <Navbar.Collapse>
  //         <Nav pullRight>
  //           <NavItem eventKey={1} href="#">
  //             <Link to="/news" onClick={this.closeNav} className='navbar-link-style'>News</Link>
  //           </NavItem>
  //           <NavItem eventKey={2} href="#">
  //             <Link to="/sessions" onClick={this.closeNav} className='navbar-link-style'>
  //               Sessions
  //             </Link>
  //           </NavItem>
  //           <NavItem eventKey={3} href="#">
  //             <Link to="/about" onClick={this.closeNav} className='navbar-link-style'>About Us</Link>
  //           </NavItem>
  //           <NavItem eventKey={4} href="#">
  //             <Link to="/team" onClick={this.closeNav} className='navbar-link-style'>Team</Link>
  //           </NavItem>
  //           <NavItem eventKey={6} href="#">
  //             <Link to="/hackinfinity" onClick={this.closeNav} className='navbar-link-style'>HackInfinity</Link>
  //           </NavItem>
  //           <NavItem style={{paddingRight: '10px'}} 
  //                    className='navbar-link-style' 
  //                    eventKey={5} 
  //                    href="https://github.com/techclubssn" 
  //                    target="_blank" 
  //                    rel="noopener noreferrer">
  //             GitHub
  //           </NavItem>
  //         </Nav>
  //       </Navbar.Collapse>
  //     </Navbar>
  //   )
  // }

  render() {
    return(
      <Navbar inverse
              fixedTop 
              onToggle={this.setNavExpanded} 
              expanded={this.state.navExpanded}
              style={{backgroundColor:'black', padding:'1vh 2vw', border: '0'}}>
        <Navbar.Header>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <img src = "/imgs/logo.png" alt="logo" style={{height: '54px', width: '54px'}} />
            <h1 style={{ fontSize: '20px', color: 'white', fontWeight: 'bolder', margin: '0 0 0 10px'}}>
              TechClubSSN
            </h1>
          </div>
          <Navbar.Toggle style={{marginRight: '27px'}} />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">
              <Link to="/" onClick={() => this.closeNav(1)} className={1 === this.state.activeState? 'navbar-link-style-active': 'navbar-link-style'}>Home</Link>
            </NavItem>
            <NavItem eventKey={2} href="#">
              <Link to="/team" onClick={() => this.closeNav(2)} className={2 === this.state.activeState? 'navbar-link-style-active': 'navbar-link-style'}>
                Team
              </Link>
            </NavItem>
            <NavItem eventKey={3} href="#">
              <Link to="/" onClick={() => this.closeNav(3)} className={3 === this.state.activeState? 'navbar-link-style-active': 'navbar-link-style'}>Events</Link>
            </NavItem>
            <NavItem eventKey={4} href="#">
              <Link to="/" onClick={() => this.closeNav(4)} className={4 === this.state.activeState? 'navbar-link-style-active': 'navbar-link-style'}>Blogs</Link>
            </NavItem>
            <NavItem eventKey={5} href="#">
              <Link to="/" onClick={() => this.closeNav(5)} className={5 === this.state.activeState? 'navbar-link-style-active': 'navbar-link-style'}>Opportunities</Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavbarTC;