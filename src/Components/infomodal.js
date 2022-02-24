import React, {useState} from "react";

import {Modal, Button} from 'react-bootstrap';
import ModalDialog from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap';
import portfolios from '../Components/allportfolios';

function InfoModal() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button className="buttons" variant="primary" onClick={() => setShow(true)}>
        More Details
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Custom Modal Styling
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
                  <img src="" width="180px"></img>
                  <h1>VietnamCovid19 Dataset</h1>
                  <h5><p style="max-width: 600px">A website made to track Covid-19 cases and Vaccine Rollout.
                  </p>

                  <a class="btn btn-primary btn-l text-uppercase" href="https://michellehlcn.github.io/VietnamCovid19Dataset/" target="_blank">link</a></h5>
                  <div style="text-align: left">
                    <h6>Description</h6>
            
                    <p>With all my free time in lockdown, I’ve created website to collate Covid-19 data relevant to Vietnam. You can view it in this link above. This is a beta version which replaces the past tracking projects <code>Covid hotspot</code> and <code>data Studio version</code>. More features will be added in the future.Highlight features such as Dashboard, Timeline Chart of covidcases in 63 states/cities. The webpage also includes additional vaccine tracking on each state and vaccine sources in details.</p>
                    <p>Disclaimer: All data had been fetched from the official Vietnam health ministry website and extracted by me. The project is not affiliated with any association rather than for the main purpose – to help and provide more information about Cases, vaccine rollout trend, which myself thinking there has been inadequate and lack of transparency. The date which information was last updated is noted with the relevant indicators and graphs.</p>

                    <p>The data was retrieved using <code>Python</code>. It requires several
                    <code>HTML widgets, Javascripts</code> to create interactive graphs, and specific packages to interact with the database. Here is a screenshoot of the page:</p>
                    <center><img src="" width="80%"></img></center>
                     <center><img src="https://Michellehlcn.github.io/Homepage/images/cv1.png" width="80%"></img></center>
                     <center><img src="https://Michellehlcn.github.io/Homepage/images/cv2.png" width="80%"></img></center>
                     
                     <center><img src="https://Michellehlcn.github.io/Homepage/images/cv4.png" width="80%"></img></center>
                            
                  
                    <h6>Read more</h6>
                   
                    <span>See the associated <a class="btn btn-secondary btn-l text-uppercase" href="https://github.com/Michellehlcn/VietnamCovid19Dataset" target="_blank">github repository</a> for more information and source code of the project</span>
                </div>
            
          </p>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default InfoModal;

