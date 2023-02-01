import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './ModalPDF.css'

import pdf03 from './Pdf/3.0.pdf'
import capa3 from './Capas/Capa 03.png'


function MPdf03() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
      <img alt="Capa 3" src={capa3} max-height="20%" height={300} max-width="80%" />
      </Button>

      <Modal className='modal-foda'
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-foda"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Body>
            <div class="pdf">
            <iframe title="PDF" src={pdf03} width="100%" height="600"></iframe>
            </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default MPdf03