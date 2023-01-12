import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navbar1() {
  return (
    <Navbar bg="light" expand="lg" sticky='top'>
      <Container>
        <Navbar.Brand href="#home">Produto Educacional</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Sobre a Pesquisa</Nav.Link>
            <Nav.Link href="#link">Produto Educacional</Nav.Link>
            <Nav.Link href="#ancora1">Sequência Didática</Nav.Link>
            <Nav.Link href="#ancora2">Resultados e Discussão</Nav.Link>
            <Nav.Link href="#ancora3">Galeria</Nav.Link>
            <Nav.Link href="#ancora4">Contato</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;