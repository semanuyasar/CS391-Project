import React from 'react';
import { Navbar, Nav, Button, Form, FormControl, Container } from 'react-bootstrap';

function CustomNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Everything Here!</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/categories">Categories</Nav.Link>
            <Nav.Link href="/deals">Deals</Nav.Link>
            <Form inline className="ml-auto d-lg-block d-none">
              <FormControl type="text" placeholder="Search" className="mr-sm-2 custom-search-bar" />
            </Form></Nav>
            <Nav className="ml-auto">
            <Nav.Link href="/cart">Cart</Nav.Link>
            <Nav.Link href="/account">Account</Nav.Link>
            <Button variant="outline-light" href="/sign-up">Sign up</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default CustomNavbar;
