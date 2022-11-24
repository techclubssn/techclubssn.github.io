import React, { useState, useContext } from "react";
import './Navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/images/logo.png'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


import { AuthContext } from "../../context/authProvider";

const NavBar = () => {

    const [activeRoute, setActiveRoute] = useState('/')
    const [navExpanded, setNavExpanded] = useState(false)
    const [showAlert, setShowAlert] = useState(false)

    const {googleSignIn} = useContext(AuthContext);
    const navigate = useNavigate()

    const onSelect = (route) => {
      window.scrollTo(0,0)
      setActiveRoute(route)
      setNavExpanded(false)
    }

    const handleGoogleSignIn = async () => {
      try {
        setNavExpanded(false)
        const user = await googleSignIn()
        if(user) {
          console.log(user)
          navigate('/dashboard')
        } else {
          setShowAlert(true)
        }
        
      } catch(error) {
        console.log(error)
      }
    }

    return(
      <>
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
            <button onClick={handleGoogleSignIn} >Sign In</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {/* <AlertPopup def={showAlert} title={'Use SSN Email ID'} text={'Try again'} /> */}
    {showAlert && <div className='alert-box' >
                    Use SSN Email ID
                  </div>}
    </>
    )
}


export default NavBar