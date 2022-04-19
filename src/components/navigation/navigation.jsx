import { Navbar, Container, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navigation = (props) => {
    return (
        <Navbar bg="dark" variant="dark">
    <Container class="bg-black">
    <Navbar.Brand href="#home">James Burgess</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#aboutMe">About Me</Nav.Link>
      <Nav.Link href="#projects">Projects</Nav.Link>
      <Nav.Link href="#contact">Contact</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
    );
}

export default Navigation;