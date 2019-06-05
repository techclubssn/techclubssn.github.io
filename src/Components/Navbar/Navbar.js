import './Navbar.css';
import {Link} from 'react-router-dom';
import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';


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
            <NavItem eventKey={6} href="#">
              <Link to="/hackerspace" onClick={this.closeNav} className='navbar-link-style'>HackerSpace</Link>
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

export default NavbarTC;