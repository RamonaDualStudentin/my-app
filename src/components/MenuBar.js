import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./styling for the components/MenuBar.css";

function MenuBar() {
  return (
    <div className="MenuBar">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">{Balancebuilder}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#settings">Settings</Nav.Link>
            <Nav.Link href="#reports">Reports</Nav.Link>
            <Nav.Link href="#grid">Grid</Nav.Link>
            <Nav.Link href="UserLoggedin">Bianka</Nav.Link>
          </Nav>
          <Navbar.Text>{Balancebuilder}</Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default MenuBar;
