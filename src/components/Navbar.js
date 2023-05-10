import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";
import {
    AiOutlineFile,
    AiOutlineFileAdd,
    AiOutlineHome,
    AiOutlineUser,
} from "react-icons/ai";
// import { NavItem } from "react-bootstrap";


const NavBar = () => {

  return (
    <Navbar fixed="top" collapseOnSelect expand="sm">
        <Container>
            <Navbar.Brand href="/" className="d-flex" style={{height:'50px', width:'80px'}}>
                <img src={logo} className="img-fluid logo" alt="brand" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Nav className="ms-auto">
            <Nav.Item>
                <Nav.Link as={Link} to="/" style={{ color: "black" }}>
                    <AiOutlineHome style={{ marginBottom: "2px"}} /> Overview
                </Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link as={Link} to="/account" style={{ color: "black" }}>
                    <AiOutlineUser style={{ marginBottom: "2px"}} /> About
                </Nav.Link>
            </Nav.Item>
                
            <Nav.Item>
                <Nav.Link as={Link} to="/add" style={{ color: "black" }}>
                    <AiOutlineFileAdd style={{ marginBottom: "2px"}} /> Blog
                </Nav.Link>
            </Nav.Item>

            </Nav>
        </Container>
        
    </Navbar>
  );
}

export default NavBar;
