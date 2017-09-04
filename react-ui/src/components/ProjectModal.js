import React from 'react';
import PropTypes from 'prop-types';

import { Modal, Col, Row } from 'react-bootstrap';
import { projectURL } from '../data/data';
import { Image, CloudinaryContext, Transformation } from 'cloudinary-react';
import { cloudName } from '../data/data';


const ProjectModal = (props) => {
  const classList = (u) => {
    if(u === "final") return 'linkButton blueButton';
    if(u === "prototype") return 'linkButton orangeButton';
    else return "linkButton";
  };

  const modal = (props.data !== undefined) ?
    <Modal show={props.data !== undefined}>
      <Modal.Header>
        <Modal.Title><h3>{props.data.title}</h3></Modal.Title>
      </Modal.Header>

      <Modal.Body className="section-content">
        <Row className="clear-fix">
          <Col sm={6} className="columns">
            <h4>About</h4>
            <p>{props.data.info}</p>
          </Col>
          <Col sm={6} className="columns">
            <div>
              <CloudinaryContext cloudName={cloudName}>
                  <Image publicId={props.data.image} className="projectPic" >
                      <Transformation width="250" crop="scale"/>
                  </Image>
              </CloudinaryContext>
            </div>
          </Col>
        </Row>
        <Row>
          <p className="text-center"><i>{props.data.disclaimer}</i></p>
        </Row>
        <hr />

        {Object.keys(props.data.url).map((u, i) =>
          <div className="text-center" key={`${i}url`}>
            <button className={classList(u)} onClick={(e) => {if(e) e.preventDefault(); window.open(props.data.url[u]);}}>
              {projectURL[u]['text']} <i className={projectURL[u]['icon']} aria-hidden="true"></i>
            </button>
          </div>
        )}

      </Modal.Body>

      <Modal.Footer>
        <button className="button" onClick={ () => props.updateState({project: -1}) }>Close</button>
      </Modal.Footer>
    </Modal> :
    <div></div>

  return (
    <div className="flex-container">
      {modal}
    </div>
  );
}

export default ProjectModal;

ProjectModal.propsTypes = {
  data: PropTypes.object.isRequired,
  updateState: PropTypes.func.isRequired
};
