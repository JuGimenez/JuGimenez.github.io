import Navbar1 from './Navbar1';
import Gallery from './Gallery';
import Texts from './Texts';
import Footer from './Footer';
// import Testudo from './Testudo';
// import PdfViewer from './PdfViewer'
// import './App.css'
// import pdf from './Pdf/LocA4.pdf'
// import {Button} from 'antd';
// import { useState } from 'react';
import Container from './Components/Containers/Container'
import Quebrador from './Components/Containers/Quebrador';
import CGaleria from './Components/Containers/CGaleria';
import ContainerContato from './Components/Containers/ContainerContato';
import Contato from './Components/Containers/Contato';
import FotoContato from './Components/Containers/FotoContato';

function App() {
  // const [showPdf, setShowPdf] = useState(false)

  return (
    <div>
      <Navbar1 />

      <Texts />
      
      {/* <PdfViewer pdf={pdf} */}
                 {/* onCancel={()=>setShowPdf(false)} */}
                 {/* visible={showPdf} */}
      {/* /> */}
      {/* <Button onClick={()=>setShowPdf(!showPdf)}>Show PdfViewer</Button> */}

      <Container>
        <h1>Bom dia Cuca</h1>
        <CGaleria>
          <Gallery />
        </CGaleria>
      </Container>

      <Quebrador>
        <h1>Bom dia Cuca</h1>
      </Quebrador>

      <ContainerContato>
        <Contato>
          <FotoContato />
          <h1>Cuca Sarvaiva</h1>
          <h3>Eu gosto de pamonha</h3>
        </Contato>

        <Contato>
          <FotoContato />
          <h1>Tadala Felas</h1>
        </Contato>
      </ContainerContato>

      <Footer />
    </div>
    );
}

export default App;
