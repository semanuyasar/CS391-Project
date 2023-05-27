import React from 'react';
import { Navbar, Nav, Button, Form, FormControl, Container } from 'react-bootstrap';
import './Navbar.css';


function CustomNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Everything Here!</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="container-fluid">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/categories">Categories</Nav.Link>
            <Nav.Link href="/deals">Deals</Nav.Link>
            <Form inline="true" className="ml-auto d-lg-block d-none">
              <FormControl type="text" placeholder="Search" className="mr-sm-2 custom-search-bar" />
            </Form>

          </Nav>
          <Nav className="ml-auto">
            <Nav className="custom-right">
              <Nav.Link href="/cart">Cart</Nav.Link>
              <Nav.Link href="/account">Account</Nav.Link>
            </Nav>
            <Button variant="outline-light" size='sm' href="/sign-up" className="custom-button">Sign Up</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default CustomNavbar;