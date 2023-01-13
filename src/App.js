// import { BrowserRouter, Router, Route, Link } from "react-router-dom";
import Navbar1 from './Components/Navbar/Navbar1';
import Accordion1 from './Components/Accordion';
// LUGAR RESERVADO PARA O PDFVIWER
import ContainerHeader from './Components/Header/ContainerHeader'
import ContainerHeaderDescription from './Components/Header/ContainerHeaderDescription';
import Breaker from './Components/Breaker';
import ContainerTexts from './Components/ContainerTexts';
import ContainerTextsEnglish from './Components/ContainerTextsEnglish';
import ContainerAboutResearch from './Components/AboutResearch/ContainerAboutResearch'
import ContainerEducationalProduct from './Components/EducationalProduct/ContainerEducationalProduct'
import ContainerDidactSequence from './Components/DidactSequence/ContainerDIdactSequence'
import ContainerResultsAndDiscussion from './Components/ResultsAndDiscussion/ContainerResultsAndDiscussion'
import ContainerGallery from './Components/Gallery/ContainerGallery'
import ContainerGalleryShowcase from './Components/Gallery/ContainerGalleryShowcase';
import Gallery from './Components/Gallery/Gallery';
import ContainerContactInfo from './Components/ContactInfo/ContainerContactInfo';
import ContactInfo from './Components/ContactInfo/ContainerInfo';
import PhotoContactInfo from './Components/ContactInfo/ContainerPhotoContactInfo';
import Footer from './Components/Footer/Footer';

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

      <Breaker id="aboutResearch">
        <h1>Sobre a Pesquisa</h1>
      </Breaker>

      <ContainerAboutResearch>
        <ContainerTexts> 
          
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. 
          
        </ContainerTexts>
      </ContainerAboutResearch>

      <Breaker id="educationalProduct">
        <h1>Produto Educacional</h1>
      </Breaker>

      <ContainerEducationalProduct>
        <ContainerTexts> 
          
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. 
          
        </ContainerTexts>

        <ContainerTextsEnglish> 
          
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. 
          
        </ContainerTextsEnglish>
      </ContainerEducationalProduct>

      <Breaker id="didactSequence">
        <h1>Sequência Didática</h1>
      </Breaker>

      <ContainerDidactSequence>
        <Accordion1 />
      </ContainerDidactSequence>

      <Breaker id="resultsAndDiscussion">
        <h1>Resultados e Discussões</h1>
      </Breaker>

      <ContainerResultsAndDiscussion>
        <Accordion1 />
      </ContainerResultsAndDiscussion>

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
