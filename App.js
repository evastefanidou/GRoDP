import { useState } from 'react';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button'; // Correct import statement
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


function App() {

  const [showModal, setShowModal] = useState(false);
  const [textToCopy, setTextToCopy] = useState('');

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => {
    // Set the text you want to copy when the modal is shown
    var generatedPrompt= 'The dynamically generated prompt will be pasted here';
    setTextToCopy(generatedPrompt);
    setShowModal(true);
  };

  const handleCopiedText= () => { navigator.clipboard.writeText(textToCopy); };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to GRoDP tool</h1>
        <Form.Select aria-label="Default select example" className='dropdown'>
            <option>Select the design issue that you want to detect to your code</option>
            <option value="1">Naming</option>
            <option value="2">Immutability</option>
            <option value="3">Complexity</option>
            <option value="4">Lack of comments</option>
            <option value="5">Maintainability</option>
          </Form.Select>
        <Form.Group controlId="formFileMultiple" className="mb-3">
          <Form.Label>Select the source file(s) from your PC: </Form.Label>
         <Form.Control type="file" multiple  />
      </Form.Group>

      <Button variant="primary" onClick={handleShowModal}>Generate prompt</Button>
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header >
          <Modal.Title>Generated prompt</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Do not even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
          <Button variant="primary"  onClick={handleCopiedText}>Copy Text</Button>
        </Modal.Footer>
        </Modal>
      </header>
    </div>
    
  );
}

export default App;
