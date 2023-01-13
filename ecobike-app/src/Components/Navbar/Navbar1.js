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
            <Nav.Link as={Link} to="/sobreAPesquisa">Sobre a Pesquisa</Nav.Link>
            <Nav.Link as={Link} to="/produtoEducacional">Produto Educacional</Nav.Link>
            <Nav.Link as={Link} to="/sequenciaDidatica">Sequência Didática</Nav.Link>
            <Nav.Link as={Link} to="/resultadosEDiscussões">Resultados e Discussão</Nav.Link>
            <Nav.Link as={Link} to="/galeria">Galeria</Nav.Link>
            <Nav.Link as={Link} to="/contato">Contato</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;