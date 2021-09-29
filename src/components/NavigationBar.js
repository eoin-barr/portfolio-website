import { Navbar, Container, Nav } from 'react-bootstrap'

function NavigationBar() {
  return (
    <Navbar bg="black" variant="black">
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
      </Container>
      <Container className="right">
        <Nav className="me">
          <Nav.Link href="#home">Projects</Nav.Link>
          <Nav.Link href="#features">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavigationBar