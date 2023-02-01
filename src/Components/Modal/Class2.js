import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './ModalPDF.css'

import aula2 from './Pdf/Aula 2.pdf'
import capa2 from './Capas/AulaCapa2.png'


function Class2() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
      <img alt="Capa 2" src={capa2} height={350} width="auto" />
      </Button>

      <Modal className='modal-foda'
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-foda"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Body>
            <div class="pdf">
            <iframe title="PDF" src={aula2} width="100%" height="600"></iframe>
            </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Class2