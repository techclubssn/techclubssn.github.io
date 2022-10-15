import React, { useState } from "react";
import './Navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/images/logo.png'
import { Link } from "react-router-dom";

const NavBar = () => {

    const [activeRoute, setActiveRoute] = useState('/')
    const [navExpanded, setNavExpanded] = useState(false)

    const onSelect = (route) => {
      window.scrollTo(0,0)
      setActiveRoute(route)
      setNavExpanded(false)
    }

    return(
    <Navbar collapseOnSelect expanded={navExpanded} onToggle={setNavExpanded} fixed='top' expand="md" bg="black" variant="dark">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" style={{ display: "flex", alignItems: "center" }} >
        
            <img
              src={logo}
              alt="logo"
              style={{ height: "45px", width: "45px" }}
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

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">  
          <Nav className="justify-content-end flex-grow-1 pe-3 navbar-link" >
            <Nav.Link as={Link} style={{marginLeft: '15px'}} to="/" onClick={() => {onSelect('/')}} active={activeRoute === '/'} >Home</Nav.Link>
            <Nav.Link as={Link} style={{marginLeft: '15px'}} to="/events" onClick={() => {onSelect('/events')}} active={activeRoute === '/events'} >Events</Nav.Link>
            <Nav.Link as={Link} style={{marginLeft: '15px'}} to="/blogs" onClick={() => {onSelect('/blogs')}} active={activeRoute === '/blogs'} >Blogs</Nav.Link>
            <Nav.Link as={Link} style={{marginLeft: '15px'}} to="/hackinfinity" onClick={() => {onSelect('/hackinfinity')}} active={activeRoute === '/hackinfinity'} >Hackinfinity</Nav.Link>
            <Nav.Link as={Link} style={{marginLeft: '15px'}} to="/team" onClick={() => {onSelect('/team')}} active={activeRoute === '/team'} >Team</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}


export default NavBar