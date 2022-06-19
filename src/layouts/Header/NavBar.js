import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'
// import BackButton from ''

import './index.css'


function NavBar() {
  return (
    <div className="blockquote text-center">
<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home"></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Link className='link' to="/">Home</Link>
        <Link   className='link' to="/Messages">Messages</Link>
        <Link  className='link' to="/Album">Album</Link>
        <Link  className='link' to="/Form">Form</Link>
        <Link  className='link' to="/Lyrics">Lyrics</Link>
      </Nav>
{/* <BackButton/> */}
    </Navbar.Collapse>
  </Container>
</Navbar>

    </div>
  );
}

export default NavBar;