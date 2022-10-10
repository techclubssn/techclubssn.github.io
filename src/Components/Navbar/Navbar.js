import "./Navbar.css";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import * as Scroll from "react-scroll";

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
      navExpanded: false,
      activeState: window.location.pathname,
    };
    this.setNavExpanded = this.setNavExpanded.bind(this);
    this.closeNav = this.closeNav.bind(this);
  }

  setNavExpanded(value) {
    this.setState({
      navExpanded: value,
    });
  }
  closeNav(eventKey) {
    this.setState({
      navExpanded: false,
      activeState: eventKey,
    });
    Scroll.animateScroll.scrollToTop();
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
    return (
      <Navbar
        inverse
        fixedTop
        onToggle={this.setNavExpanded}
        expanded={this.state.navExpanded}
        style={{ backgroundColor: "black", padding: "1vh 2vw", border: "0" }}
      >
        <Navbar.Header style={{ display: "flex", alignItems: "center" }}>
          <Link style={{ display: "flex", alignItems: "center" }} to="/" onClick={() => this.closeNav('/')}>
            <img
              src="/imgs/logo.png"
              alt="logo"
              style={{ height: "54px", width: "54px" }}
            />
            <h1
              style={{
                fontSize: "20px",
                color: "white",
                fontWeight: "bolder",
                margin: "0 0 0 10px",
              }}
            >
              Tech Club
            </h1>
          </Link>
          <Navbar.Toggle style={{ position: "absolute", right: "0" }} />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">
              <Link
                to="/"
                onClick={() => this.closeNav('/')}
                className={
                  '/' === this.state.activeState
                    ? "navbar-link-style-active"
                    : "navbar-link-style"
                }
              >
                Home
              </Link>
            </NavItem>
            <NavItem eventKey={2} href="#">
              <Link
                to="/events"
                onClick={() => this.closeNav("/events")}
                className={
                  "/events" === this.state.activeState
                    ? "navbar-link-style-active"
                    : "navbar-link-style"
                }
              >
                Events
              </Link>
            </NavItem>
            <NavItem eventKey={3} href="#">
              <Link
                to="/blogs"
                onClick={() => this.closeNav("/blogs")}
                className={
                  "/blogs" === this.state.activeState
                    ? "navbar-link-style-active"
                    : "navbar-link-style"
                }
              >
                Blogs
              </Link>
            </NavItem>
            {/* <NavItem eventKey={4} href="#">
              <Link
                to="/opportunities"
                onClick={() => this.closeNav("/opportunities")}
                className={
                  "/opportunities" === this.state.activeState
                    ? "navbar-link-style-active"
                    : "navbar-link-style"
                }
              >
                Opportunities
              </Link>
            </NavItem> */}
            <NavItem eventKey={4} href="#">
              <Link
                to="/hackinfinity"
                onClick={() => this.closeNav("/hackinfinity")}
                className={
                  "/hackinfinity" === this.state.activeState
                    ? "navbar-link-style-active"
                    : "navbar-link-style"
                }
              >
                Hackinfinity
              </Link>
            </NavItem>
            <NavItem eventKey={5} href="#">
              <Link
                to="/team"
                onClick={() => this.closeNav("/team")}
                className={
                  '/team' === this.state.activeState
                    ? "navbar-link-style-active"
                    : "navbar-link-style"
                }
              >
                Team
              </Link>
            </NavItem>
            {/*<NavItem eventKey={6} href="#">
              <Link
                to="/kryptos"
                onClick={() => this.closeNav("/kryptos")}
                className={
                  "/kryptos" === this.state.activeState
                    ? "navbar-link-style-active"
                    : "navbar-link-style"
                }
              >
                Kryptos
              </Link>
              </NavItem>*/}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavbarTC;
