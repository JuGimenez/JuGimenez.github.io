// import { BrowserRouter, Router, Route, Link } from "react-router-dom";
import Navbar1 from './Components/Navbar/Navbar1';
import Accordion1 from './Components/Texts/Accordion';
// LUGAR RESERVADO PARA O PDFVIWER
import ContainerHeader from './Components/Header/ContainerHeader'
import ContainerHeaderDescription from './Components/Header/ContainerHeaderDescription';
import Breaker from './Components/Breaker';
import PseudoBreaker from './Components/PseudoBreaker';
import ContainerTexts from './Components/Texts/ContainerTexts';
import ContainerTextsEnglish from './Components/Texts/ContainerTextsEnglish';
import ContainerTextsSpanish from './Components/Texts/ContainerTextsSpanish';
import ContainerInterTexts from './Components/Texts/InterTexts';
import ContainerPresentation from './Components/Presentation/ContainerPresentation';
import ContainerAboutResearch from './Components/AboutResearch/ContainerAboutResearch'
// import ContainerEducationalProduct from './Components/EducationalProduct/ContainerEducationalProduct'
import ContainerDidactSequence from './Components/DidactSequencePlan/ContainerDIdactSequencePlan'
import ContainerResultsAndDiscussion from './Components/ResultsAndDiscussion/ContainerResultsAndDiscussion'
import ContainerFinalConsiderations from './Components/FinalConsiderations/ContainerFinalConsiderations';
import ContainerGallery from './Components/Gallery/ContainerGallery'
import ContainerGalleryShowcase from './Components/Gallery/ContainerGalleryShowcase';
import Gallery from './Components/Gallery/Gallery';
import ContainerContactInfo from './Components/ContactInfo/ContainerContactInfo';
import ContactInfo from './Components/ContactInfo/ContainerInfo';
import PhotoContactInfo from './Components/ContactInfo/ContainerPhotoContactInfo';
import Footer from './Components/Footer/Footer';

// Photos
import IFMT from './Components/Header/Icons/IFMT.png'
import PROFEPT from './Components/Header/Icons/PROFEPT Quadrado.png'



function App() {
  return (
    <div>
      <Navbar1 />

      <ContainerHeader id="header">
        <img src={IFMT} alt='IFMT' height={75} width="auto" />
        <ContainerHeaderDescription>
          <h1 style={{fontSize:"40px", fontFamily:"arial,sans-serif", fontWeight:"bolder"}}> PRODUTO EDUCACIONAL: </h1>
          <h2 style={{fontSize:"30px", fontFamily:"arial,sans-serif", fontWeight:"bolder"}}> CERRADO: TRILHA ECOLÓGICA - CONHECER PARA CONSERVAR </h2>
        </ContainerHeaderDescription>
        <img src={PROFEPT} alt='PROFEPT' height={90} width="auto" />

      </ContainerHeader>


      <Breaker id="presentation">
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
      </ContainerPresentation>


      <Breaker id="aboutResearch">
        <h1>Sobre a Pesquisa</h1>
      </Breaker>


      <ContainerAboutResearch>
        <Accordion1 />
      </ContainerAboutResearch>


      <Breaker id="didactSequence">
        <h1>Plano de Sequência Didática Interdisciplinar</h1>
      </Breaker>


      <ContainerDidactSequence>
        <PseudoBreaker>
          <h2>Etapa 1 - Planejamento</h2>
        </PseudoBreaker>
        <Accordion1 />
        <PseudoBreaker>
          <h2>Etapa 2 - Execução</h2>
        </PseudoBreaker>
        <ContainerTexts> 
            
            <h style={{marginBottom:30}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.</h>

            <h>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.</h>
            
          </ContainerTexts>
        <PseudoBreaker>
          <h2>Etapa 3 - Compartilhamento das Aprendizagens</h2>
        </PseudoBreaker>
        <Accordion1 />
        <PseudoBreaker>
          <h2>Etapa 4 - Avaliação da Sequência Didática Interdisciplinar</h2>
        </PseudoBreaker>
        <Accordion1 />
      </ContainerDidactSequence>


      <Breaker id="resultsAndDiscussion">
        <h1>Resultados e Discussões</h1>
      </Breaker>


      <ContainerResultsAndDiscussion>
        <Accordion1 />
      </ContainerResultsAndDiscussion>


      <Breaker id="finalConsiderations">
        <h1>Considerações Finais</h1>
      </Breaker>


      <ContainerFinalConsiderations>
        <Accordion1 />
      </ContainerFinalConsiderations>


      <Breaker id="gallery">
        <h1>Galeria</h1>
      </Breaker>


      <ContainerGallery>
        <ContainerGalleryShowcase>
          <Gallery />
        </ContainerGalleryShowcase>
      </ContainerGallery>


      <Breaker id="contact">
        <h1>Contato</h1>
      </Breaker>


      <ContainerContactInfo>
        <ContactInfo>
          <PhotoContactInfo />
          <p style={{fontSize:"25px"}}>Nome</p>

          <p style={{fontSize:"20px"}}>Email</p>

          <p style={{fontSize:"20px"}}>Lattes</p>
        </ContactInfo>

        <ContactInfo>
          <PhotoContactInfo />
          <p style={{fontSize:"25px"}}>Nome</p>

          <p style={{fontSize:"20px"}}>Email</p>

          <p style={{fontSize:"20px"}}>Lattes</p>
        </ContactInfo>
      </ContainerContactInfo>


      <Footer />
    </div>
    );
}

export default App;
