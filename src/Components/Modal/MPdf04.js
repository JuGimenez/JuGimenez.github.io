import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './ModalPDF.css'

import pdf04 from './Pdf/4.0.pdf'
import capa4 from './Capas/Capa 04.png'


function MPdf04() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
      <img alt="Capa 4" src={capa4} max-height="20%" height={300} max-width="80%" />
      </Button>

      <Modal className='modal-foda'
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-foda"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Body>
            <div class="pdf">
            <iframe title="PDF" src={pdf04} width="100%" height="600"></iframe>
            </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default MPdf04