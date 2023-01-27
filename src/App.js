//CSS
import './Components/CContainer.css'

//Acordeões
import AccordionEnglish from './Components/Texts/Accordions/AccordionEnglish';
import AccordionSpanish from './Components/Texts/Accordions/AccordionSpanish';

//Modal do PDF e PDFs
import ContainerModalPdf from "./Components/Modal/ContainerModalPdf";
import ContainerModalPdf2 from './Components/Modal/ContainerModalPdf2';
import ContainerModalOrganizer from './Components/Modal/ContainerModalOrganizer';
import MPdf01 from './Components/Modal/MPdf01';
import MPdf02 from './Components/Modal/MPdf02';
import MPdf03 from './Components/Modal/MPdf03';
import MPdf04 from './Components/Modal/MPdf04';
import Class1 from './Components/Modal/Class1';
import Class2 from './Components/Modal/Class2';
import Class3 from './Components/Modal/Class3';

//Textos
import ContainerTexts from "./Components/Texts/ContainerTexts";
import ContainerInterTexts from "./Components/Texts/InterTexts";
import ContainerTexts2 from './Components/Texts/ContainerTexts2';

//Breakers
import ContainerOrganizer from "./Components/DidactSequencePlan/ContainerOrganizer";
import Breaker from "./Components/Breaker";
import PseudoBreaker from "./Components/PseudoBreaker";

//Navbar
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

//Header
import ContainerHeader from "./Components/Header/ContainerHeader";
import ContainerHeaderDescription from "./Components/Header/ContainerHeaderDescription";

//Apresentação
import ContainerPresentation from "./Components/Presentation/ContainerPresentation";

//Sobre a Pesquisa
import ContainerAboutResearch from "./Components/AboutResearch/ContainerAboutResearch";

//Sequência didática
import ContainerDidactSequence from "./Components/DidactSequencePlan/ContainerDIdactSequencePlan";

//Steps
import Steps from "./Components/Steps/Steps";

//Galeria
import ContainerGallery from "./Components/Gallery/ContainerGallery";
import ContainerGalleryShowcase from "./Components/Gallery/ContainerGalleryShowcase";
import Gallery from "./Components/Gallery/Gallery";

//Contato
import ContainerContactInfo from "./Components/ContactInfo/ContainerContactInfo";
import ContactInfo from "./Components/ContactInfo/ContainerInfo";
import PhotoContactInfo from "./Components/ContactInfo/ContainerPhotoContactInfo";

//Footer
import Footer from "./Components/Footer/Footer";

// Photos
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
              <a href="#steps" className="navis">Etapas</a>
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
        <p>Este Produto Educacional produzido como Sequência Didática Interdisciplinar
        (SDI) intitulada: “Cerrado: Trilha Ecológica conhecer para conservar” está
        vinculada à pesquisa: Trilha Ecológica com o uso da Bicicleta como Prática Pedagógica
        Interdisciplinar para o Ensino Médio Integrado”, sendo produto de pesquisa do
        Programa de Mestrado em Educação Profissional e Tecnológica (ProfEPT) sob a
        orientação do professor doutor Cristiano Rocha da Cunha.</p>

        <p>Com o objetivo de apresentar uma proposta de ensino de sequência didática,
        aborda a importância do papel educativo das aulas de campo, com a utilização da
        bicicleta, com vistas à reflexão de alunos do Ensino Médio Integrado (EMI) para o
        desenvolvimento de um comportamento em educação ambiental crítica consciente e
        ética. A EAC defende, dentre outros pontos, a reflexão sobre a sociedade do consumo,
        o modo de produção capitalista e os aspectos políticos e econômicos que influenciam a
        questão ambiental.</p>
        
        <p>Na concepção de Zabala (1998) uma SD consiste em “um conjunto de atividades
        ordenadas, estruturadas, articuladas para a realização de certos objetivos educacionais e
        que tem um princípio e um fim conhecidos tanto pelo professor como pelos alunos.”</p>
        
        <p>As atividades de campo constituem uma estratégia para relacionar a teoria com a
        prática, servindo de apoio ao trabalho docente, e ajudando os alunos a perceberem de
        forma concreta os espaços não formais de ensino. Na observação de Krasilchik (2016,
        p. 134), “visitas a mercados, fazendas, estações de tratamentos fábricas podem ensinar
        aos alunos coisas que seriam muito difíceis de ser aprendidas por eles quando
        confinados ao ambiente escolar”.</p>
        
        <p>Esta sequência didática interdisciplinar (SDI), compreende o curso de ensino
        médio integrado em Edificações nas disciplinas do núcleo comum de: Química,
        Geografia e Biologia no IFMT campus Várzea Grande, e foi elaborada com a finalidade
        de contribuir para a sua integração, possibilitando uma leitura ampla da realidade e o
        desenvolvimento de atitudes de respeito ao meio ambiente relacionado ao bioma
        Cerrado e dentro do contexto do crescimento urbano, como o complexo tecnológico na
        cidade de Várzea Grande e diversos empreendimentos imobiliários na região do Chapéu
        do Sol e suas mazelas, como poluição provocada pela rede de esgoto, destruição da
        mata ciliar do rio Pari e os impactos ambientais causados pelos resíduos da construção
        civil, descartados no meio ambiente inadequadamente.</p>

        <p>Portanto, a educação ambiental é uma dimensão da educação, a qual tratou na
        SDI, em uma perspectiva histórica, articulando-a com as dimensões trabalho, ciência,
        tecnologia e cultura, eixos norteadores do ensino médio integrado. Espera-se que esta
        SDI contribua para a prática educativa de docentes que lecionam no ensino básico, e
        para aqueles que desejem adaptá-la para aplicar em outras modalidades de ensino.</p>
        </ContainerTexts>

        <ContainerInterTexts />

        <AccordionEnglish />

        <ContainerInterTexts />

        <AccordionSpanish />
        <div id="aboutResearch" className="mini-breaker">
          _
        </div>
      </ContainerPresentation>



      <Breaker>
        <h1>Sobre a Pesquisa</h1>
      </Breaker>



      <ContainerAboutResearch>
        <ContainerModalOrganizer>
          <ContainerModalPdf>
            <MPdf01 />
          </ContainerModalPdf>

          <ContainerModalPdf>
            <MPdf02 />
          </ContainerModalPdf>

          <ContainerModalPdf>
            <MPdf03 />
          </ContainerModalPdf>

          <ContainerModalPdf>
            <MPdf04 />
          </ContainerModalPdf>
        </ContainerModalOrganizer>

        <div id="didactSequence" className="mini-breaker">
          _
        </div>
      </ContainerAboutResearch>



      <Breaker>
        <h1>Plano de Sequência Didática Interdisciplinar</h1>
      </Breaker>



      <ContainerDidactSequence>
        <ContainerOrganizer>
          <ContainerTexts2>
            <p style={{textAlign:"justify"}}>
            Para a realização desta aula de campo, bem como para atingirmos os objetivos educacionais 
            propostos, esta SDI denominada de “Cerrado: Trilha Ecológica conhecer para conservar”, será 
            organizada em três etapas, cada etapa com 03 aulas totalizando 09 aulas conforme descritos abaixo.</p> 

            <b>ETAPA 1. Planejamento;</b>
            <b>ETAPA 2. Execução;</b>
            <b>ETAPA 3. Compartilhamentos das aprendizagens e Avaliação.</b>
          </ContainerTexts2>
        </ContainerOrganizer>

        <PseudoBreaker>
          <h2>Objetivos</h2>
        </PseudoBreaker>

        <ContainerOrganizer>
          <ContainerTexts2>
            <p style={{textAlign:"justify"}}><b>Objetivo Geral:</b> Compreender a importância de conservar o bioma Cerrado, sua 
            fauna e flora. Na realização da trilha, fatores como: identificação de espécies nativas 
            desse bioma; degradação do solo e possíveis mudanças de variáveis micrometeorológicas 
            poderão ser contempladas. O conhecimento desses aspectos faz parte das matérias 
            de Biologia, Geografia e Química.</p>

            <p><b>Objetivos do conteúdo de Biologia:</b></p>
            <h>● Entender de que forma o Cerrado é impactado no seu Bioma;</h> 
            <h>● Reconhecer que somos responsáveis pela ação antrópica no Cerrado;</h>
            <p>● Conhecer por intermédio da interdisciplinaridade, o respeito e pertencimento ao bioma Cerrado.</p>

            <p><b>Objetivos do conteúdo de Química:</b></p>
            <h>● Entender como é a constituição do solo do Cerrado;</h>
            <h>● Reconhecer como ocorrem as reações bioquímicas essenciais para a vida das plantas;</h>
            <p>● Conhecer de que forma o pH ácido gera um acréscimo na capacidade de troca catiônica.</p>

            <p><b>Objetivos do conteúdo de Geografia:</b></p>
            <h>● Conhecer o espaço geográfico como uma construção histórica e seu uso nos diferentes tempos e espaços;</h>
            <h>● Compreender a natureza como conceitos fundamentais para a construção do espaço geográfico;</h>
            <p>● Tomar consciência do uso racional dos recursos naturais em compatibilidade, com as necessidades 
            aproveitando também as fontes alternativas de energia.</p>

            
          </ContainerTexts2>
        </ContainerOrganizer>
        <div id="steps" className="mini-breaker"></div>
      </ContainerDidactSequence>




      <Breaker>
        <h1>Etapas</h1>
      </Breaker>

      

      <Steps>
        <PseudoBreaker>
          <h2><b>Etapa 1 - Planejamento</b></h2>
        </PseudoBreaker>

        <ContainerOrganizer>
          <ContainerModalPdf2>
            <Class1 />
          </ContainerModalPdf2>

          <ContainerTexts2>
            <p style={{textAlign:'justify'}}>Prezado(a) professor(a), ao  elaborar um planejamento de aula, defina os métodos e materiais 
            que serão utilizados para melhor apreensão do conteúdo e estabeleça os objetivos da aula.</p>

            <h><b>TIPOLOGIAS DE CONTEÚDOS TRABALHADOS COMO CONCEBIDO POR ZABALA.</b></h>
	          <p style={{textAlign:'justify'}}>Esta SDI contempla diferentes formas de experiências de aprendizagem, demonstrando ser adequada 
            para o progresso integral dos estudantes do IFMT campus VGD. As diferentes atividades de aprendizagem 
            vivenciadas propiciaram o desenvolvimento de um processo de ensino e aprendizagem nos princípios 
            conceitual, procedimental e atitudinal dos conteúdos.</p>
          </ContainerTexts2>
        </ContainerOrganizer>

        <PseudoBreaker>
          <h2><b>Etapa 2 - Execução</b></h2>
        </PseudoBreaker>

        <ContainerOrganizer>
          <ContainerModalPdf2>
            <Class2 />
          </ContainerModalPdf2>

          <ContainerTexts2>
            <h><b>Convite para a aula de campo</b></h>
	          <p>Os(as) professores(as) responsáveis, convidam àqueles estudantes que têm uma 
            bicicleta ou que podem emprestar para a aula de campo na trilha ecológica. Depois 
            de verificado quantos irão, entregar aos participantes a autorização para que os responsáveis 
            assinem e traga no dia da aula. Solicitar também que imprimam e tragam preenchidos a ficha de 
            informação de saúde e a carteira de emergência de campo que estão disponíveis no site do campus.</p>
          </ContainerTexts2>        
        </ContainerOrganizer>

        <PseudoBreaker>
          <h2><b>Etapa 3 - Compartilhamento</b></h2>
        </PseudoBreaker>

        <ContainerOrganizer>
          <ContainerModalPdf2>
            <Class3 />
          </ContainerModalPdf2>

          <ContainerTexts2>
            <p>No pós-campo, serão compartilhadas em sala de aula as percepções de 
            cada aluno. Primeiramente, o(a) professor(a) orienta que os alunos que participaram da aula de campo 
            na trilha ecológica, compartilhe suas experiências com os colegas em grupo. Distribua nos grupos os 
            alunos de maneira que fique equilibrado a participação dos que foram na trilha.</p>
          </ContainerTexts2>
        </ContainerOrganizer>
        <div id="gallery" className="mini-breaker">
          _
        </div>

      </Steps>
      


      <Breaker>
        <h1>Galeria</h1>
      </Breaker>



      <ContainerGallery>
        <ContainerGalleryShowcase>
          <Gallery />
        </ContainerGalleryShowcase>

        <ContainerInterTexts />

        <ContainerTexts>
          <p>Mais fotos disponíveis em: <a href="#presentation">Fotos</a></p>
        </ContainerTexts>

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