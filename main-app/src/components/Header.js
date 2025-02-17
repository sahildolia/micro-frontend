import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Notification from "./Notification";
const RemoteApp = React.lazy(() => import("app2/App"));
const RemoteApp2 = React.lazy(() => import("app3/EmailApp"));

const Header = () => {
  return (
    <Router>
      <>
        <Navbar expand="lg" bg="dark" className="text-light">
          <Container>
            <Navbar.Brand as={Link} to="/" className="text-light">
              React-Bootstrap
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/chat" className="text-light">
                  Chat
                </Nav.Link>
                <Nav.Link as={Link} to="/email" className="text-light">
                  Email
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Notification />
        <Routes>
          <Route path="/chat" element={<RemoteApp />} />
          <Route path="/email" element={<RemoteApp2 />} />
        </Routes>
      </>
    </Router>
  );
};

export default Header;
