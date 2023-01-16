import { Link } from 'react-router-dom'
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
            <Nav.Link as={Link} to="/inicio">Início</Nav.Link>
            <Nav.Link as={Link} to="/presentation">Apresentação</Nav.Link>
            <Nav.Link as={Link} to="/aboutResearch">Sobre a Pesquisa</Nav.Link>
            <Nav.Link as={Link} to="/didactSequence">Plano de Sequência Didática Interdisciplinar</Nav.Link>
            <Nav.Link as={Link} to="/resultsAndDiscussion">Resultados e Discussão</Nav.Link>
            <Nav.Link as={Link} to="/finalConsiderations">Considerações Finais</Nav.Link>
            <Nav.Link as={Link} to="/gallery">Galeria</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contato</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;