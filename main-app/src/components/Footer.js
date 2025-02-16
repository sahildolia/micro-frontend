import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Footer = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="justify-content-center">
        <Container>
          <Navbar.Text>
            © {new Date().getFullYear()} React-Bootstrap. All Rights Reserved.
          </Navbar.Text>
        </Container>
      </Navbar>
    </>
  );
};

export default Footer;
