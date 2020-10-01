import React from "react";
import "./style.css";
import { Navbar, Nav } from "react-bootstrap";

const pStyle = {
  textAlign: "center",
  color: "white",
  display: "inline-block",
  backgroundColor: "navy",
  fontFamily: "Century Gothic",
};

export default function index() {
  return (
    <div>
      <Navbar bg="black" fixed="top" style={pStyle}>
        <Navbar.Brand style={pStyle}>Employee Directory</Navbar.Brand>
        <Nav className="mr-auto"></Nav>
      </Navbar>
    </div>
  );
}
