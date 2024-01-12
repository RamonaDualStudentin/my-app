import React from "react";
import { Navbar, Nav } from "react-bootstrap";

import "./styling for the components/navbar.css";

function MenuBar() {
  return (
    <div className="MenuBar">
      <Navbar bg="light" expand="lg">
        <div className="navbar-brand">
          <Navbar.Brand href="#home">Balancebuilder</Navbar.Brand>
        </div>
        <div className="navbar-toggle">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#settings">Settings</Nav.Link>
            <Nav.Link href="#reports">Reports</Nav.Link>
            <Nav.Link href="#grid">Grid</Nav.Link>
            <Nav.Link href="UserLoggedin">Bianka (admin)</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
export default MenuBar;
