import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './ModalPDF.css'

import Mapa from '../Pdf/LocA4.pdf'
import img18 from '../Gallery/Photos/1ArvoreCerrado.jpg'


function ModalPdf() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
      <img alt="18BicicletaSaida" src={img18} height={350} width="auto" />
      </Button>

      <Modal className='modal-foda'
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-foda"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Body>
            <div class="pdf">
            <iframe title="PDF" src={Mapa} width="100%" height="600"></iframe>
            </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalPdf