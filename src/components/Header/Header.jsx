import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Blog UI
            </Link>
          </Navbar.Brand>
          <Nav className="mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link" href="#home">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/create-post" className="nav-link" href="#home">
                Form
              </Link>
            </li>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
