import React from "react"
import{Navbar,Nav,Button, FormControl,Form} from "react-bootstrap"
import{Link} from "react-router-dom"

function NavBar (){
    return(
        <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/backoffice" className = "nav-link">Backoffice</Link>
     
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>

    )
}


export default NavBar