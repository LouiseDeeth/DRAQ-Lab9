import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

//Nav bar in dark mode
const NavigationBar = () => {
  return (
        <Navbar bg="primary" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
            </Nav>
          </Container>
      </Navbar>
  );
};

export default NavigationBar;