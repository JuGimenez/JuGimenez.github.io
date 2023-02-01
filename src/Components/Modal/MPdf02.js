import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './ModalPDF.css'

import pdf02 from './Pdf/2.0.pdf'
import capa2 from './Capas/Capa 02.png'


function MPdf02() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
      <img alt="Capa 2" src={capa2} max-height="20%" height={300} max-width="80%" />
      </Button>

      <Modal className='modal-foda'
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-foda"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Body>
            <div class="pdf">
            <iframe title="PDF" src={pdf02} width="100%" height="600"></iframe>
            </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default MPdf02