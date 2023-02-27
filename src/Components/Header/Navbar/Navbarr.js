import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';
import { Button, Navbar } from 'react-bootstrap'
import {  Container } from "react-bootstrap"
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(
  faUser
  // more icons go here
);
export default function Navbarr(props) {
  const { active } = props;
  return (
    <>
     <Navbar collapseOnSelect expand="lg" className={`navbar ${active ? 'active' : ''}`} style={{marginTop:""}}>  
        <Container>   
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />  
          <Navbar.Collapse id="responsive-navbar-nav">  
            <Nav >  
              <Nav.Link href="/home" className='active'> Home</Nav.Link>  
              <Nav.Link href="/products" > Products</Nav.Link>  
              <Nav.Link href="/contact" > Contact</Nav.Link>  
            </Nav>  
            {/* <Nav>  
              <Nav.Link href="/login">
              <FontAwesomeIcon icon="fa-solid fa-user" /></Nav.Link>  
              <Nav.Link eventKey={2} href="/cart">  
                Cart
              </Nav.Link>  
            </Nav>   */}
          </Navbar.Collapse>  
        </Container>  
      </Navbar>  
    </>
  );
}
Navbar.propTypes = {
  active: PropTypes.bool,
}.isRequired;
