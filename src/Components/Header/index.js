import React from "react";
import "./style.css";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

const pStyle = { textAlign: "center", color: "red", display: "inline-block" };

export default function index() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" fixed="top" style={pStyle}>
        <Navbar.Brand>Employee Directory</Navbar.Brand>
        <Nav className="mr-auto"></Nav>
      </Navbar>
    </div>
  );
}

// return (

//     <div>
//       <h1
//         style={{
//           textAlign: "center",
//           color: "white",
//           backgroundColor: "black",
//           width: "100vw",
//           textAlign: "center",
//           borderBottom: "#e36414 4px solid",
//           zIndex: 1,
//           transform: "translate(-5-%, -50%)",
//         }}
//       >
//         Employee Directory
//       </h1>
//     </div>
//   );
// }
