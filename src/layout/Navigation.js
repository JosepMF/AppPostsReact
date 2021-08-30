import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown
} from "react-bootstrap";
import { NavLink } from "react-router-dom";

export function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={NavLink} to="/home">
        App Posts React
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav>
          <Nav.Link as={NavLink} to="/about">
            about
          </Nav.Link>
        </Nav>
        <Nav
          className="mr-auto my-2 my-lg-0 ml-2"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <NavDropdown title="filter" id="navbarScrollingDropdown">
            <NavDropdown.Item as={Button}>ID</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav style={{ marginLeft: "auto" }}>
          <Nav.Link as={NavLink} to="/account">
            Account
          </Nav.Link>
          <Nav.Link as={NavLink} to="/login">
            Login
          </Nav.Link>
          <Nav.Link as={NavLink} to="/register">
            register
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
