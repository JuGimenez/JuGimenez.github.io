// import { BrowserRouter, Router, Route, Link } from "react-router-dom";
import Accordion1 from "./Components/Texts/Accordion";
import ModalPdf from "./Components/Modal/ModalPDF";
import ContainerModalPdf from "./Components/Modal/ContainerModalPdf";
import ContainerHeader from "./Components/Header/ContainerHeader";
import ContainerHeaderDescription from "./Components/Header/ContainerHeaderDescription";
import Breaker from "./Components/Breaker";
import PseudoBreaker from "./Components/PseudoBreaker";
import ContainerTexts from "./Components/Texts/ContainerTexts";
import ContainerTextsEnglish from "./Components/Texts/ContainerTextsEnglish";
import ContainerTextsSpanish from "./Components/Texts/ContainerTextsSpanish";
import ContainerInterTexts from "./Components/Texts/InterTexts";
import ContainerPresentation from "./Components/Presentation/ContainerPresentation";
import ContainerAboutResearch from "./Components/AboutResearch/ContainerAboutResearch";
// import ContainerEducationalProduct from './Components/EducationalProduct/ContainerEducationalProduct'
import ContainerDidactSequence from "./Components/DidactSequencePlan/ContainerDIdactSequencePlan";
import ContainerOrganizer from "./Components/DidactSequencePlan/ContainerOrganizer";
import ContainerResultsAndDiscussion from "./Components/ResultsAndDiscussion/ContainerResultsAndDiscussion";
import ContainerFinalConsiderations from "./Components/FinalConsiderations/ContainerFinalConsiderations";
import ContainerGallery from "./Components/Gallery/ContainerGallery";
import ContainerGalleryShowcase from "./Components/Gallery/ContainerGalleryShowcase";
import Gallery from "./Components/Gallery/Gallery";
import ContainerContactInfo from "./Components/ContactInfo/ContainerContactInfo";
import ContactInfo from "./Components/ContactInfo/ContainerInfo";
import PhotoContactInfo from "./Components/ContactInfo/ContainerPhotoContactInfo";
import Footer from "./Components/Footer/Footer";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import './Components/CContainer.css'

// Photos e PDFS
import IFMT from "./Components/Header/Icons/IFMT.png";
import PROFEPT from "./Components/Header/Icons/PROFEPT Quadrado.png";

function App() {
  return (
    <div>
      <Navbar bg="light" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand href="#home">Produto Educacional</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navi">
              <a href="#" className="navis">Início</a>
              <a href="#presentation" className="navis">Apresentação</a>
              <a href="#aboutResearch" className="navis">Sobre a Pesquisa</a>
              <a href="#didactSequence" className="navis">Plano de Sequência Didática Interdisciplinar</a>
              <a href="#resultsAndDiscussion" className="navis">Resultados e Discussão</a>
              <a href="#finalConsiderations" className="navis">Considerações Finais</a>
              <a href="#gallery" className="navis">Galeria</a>
              <a href="#contact" className="navis">Contato</a>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <ContainerHeader>
        <img src={IFMT} alt="IFMT" height={75} width="auto" />
        <ContainerHeaderDescription>
          <h1
            style={{
              fontSize: "40px",
              fontFamily: "arial,sans-serif",
              fontWeight: "bolder",
            }}
          >
            {" "}
            PRODUTO EDUCACIONAL:{" "}
          </h1>
          <h2
            style={{
              fontSize: "30px",
              fontFamily: "arial,sans-serif",
              fontWeight: "bolder",
            }}
          >
            {" "}
            CERRADO: TRILHA ECOLÓGICA - CONHECER PARA CONSERVAR{" "}
          </h2>
        </ContainerHeaderDescription>
        <img src={PROFEPT} alt="PROFEPT" height={90} width="auto" />
        <div id="presentation" className="mini-breaker">
          _
        </div>
      </ContainerHeader>

      <Breaker>
        <h1>Apresentação</h1>
      </Breaker>

      <ContainerPresentation>
        <ContainerTexts>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ContainerTexts>

        <ContainerInterTexts />

        <ContainerTextsEnglish>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ContainerTextsEnglish>

        <ContainerInterTexts />

        <ContainerTextsSpanish>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ContainerTextsSpanish>
        <div id="aboutResearch" className="mini-breaker">
          _
        </div>
      </ContainerPresentation>

      <Breaker>
        <h1>Sobre a Pesquisa</h1>
      </Breaker>

      <ContainerAboutResearch>
        <Accordion1 />
        <ContainerModalPdf>
          <ModalPdf />
          <ModalPdf />
        </ContainerModalPdf>
        <div id="didactSequence" className="mini-breaker">
          _
        </div>
      </ContainerAboutResearch>

      <Breaker>
        <h1>Plano de Sequência Didática Interdisciplinar</h1>
      </Breaker>

      <ContainerDidactSequence>
        <PseudoBreaker>
          <h2>Etapa 1 - Planejamento</h2>
        </PseudoBreaker>
        <ContainerOrganizer>
          <Accordion1 />
        </ContainerOrganizer>
        <PseudoBreaker>
          <h2>Etapa 2 - Execução</h2>
        </PseudoBreaker>
        <ContainerOrganizer>
          <ContainerTexts>
            <h style={{ marginBottom: 30 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </h>

            <h>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </h>
          </ContainerTexts>
        </ContainerOrganizer>

        <PseudoBreaker>
          <h2>Etapa 3 - Compartilhamento das Aprendizagens</h2>
        </PseudoBreaker>
        <ContainerOrganizer>
          <Accordion1 />
        </ContainerOrganizer>

        <PseudoBreaker>
          <h2>Etapa 4 - Avaliação da Sequência Didática Interdisciplinar</h2>
        </PseudoBreaker>
        <ContainerOrganizer>
          <Accordion1 />
        </ContainerOrganizer>
        <div id="resultsAndDiscussion" className="mini-breaker">
          _
        </div>
      </ContainerDidactSequence>

      <Breaker>
        <h1>Resultados e Discussões</h1>
      </Breaker>

      <ContainerResultsAndDiscussion>
        <Accordion1 />
        <div id="finalConsiderations" className="mini-breaker">
          _
        </div>
      </ContainerResultsAndDiscussion>

      <Breaker>
        <h1>Considerações Finais</h1>
      </Breaker>

      <ContainerFinalConsiderations>
        <Accordion1 />
        <div id="gallery" className="mini-breaker">
          _
        </div>
      </ContainerFinalConsiderations>

      <Breaker>
        <h1>Galeria</h1>
      </Breaker>

      <ContainerGallery>
        <ContainerGalleryShowcase>
          <Gallery />
        </ContainerGalleryShowcase>
        <div id="contact" className="mini-breaker">
          _
        </div>
      </ContainerGallery>

      <Breaker>
        <h1>Contato</h1>
      </Breaker>

      <ContainerContactInfo>
        <ContactInfo>
          <PhotoContactInfo />
          <p style={{ fontSize: "25px" }}>Nome</p>

          <p style={{ fontSize: "20px" }}>Email</p>

          <p style={{ fontSize: "20px" }}>Lattes</p>
        </ContactInfo>

        <ContactInfo>
          <PhotoContactInfo />
          <p style={{ fontSize: "25px" }}>Nome</p>

          <p style={{ fontSize: "20px" }}>Email</p>

          <p style={{ fontSize: "20px" }}>Lattes</p>
        </ContactInfo>
      </ContainerContactInfo>

      <Footer />
    </div>
  );
}

export default App;
