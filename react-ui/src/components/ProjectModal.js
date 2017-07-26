import React from 'react';
import PropTypes from 'prop-types';

import { Modal, Button, Col, Row } from 'react-bootstrap';
import { projectURL } from '../data/data';

const ProjectModal = (props) => {
  const modal = (props.data !== undefined) ?
    <Modal show={props.data !== undefined}>
      <Modal.Header>
        <Modal.Title><h3>{props.data.title}</h3></Modal.Title>
      </Modal.Header>

      <Modal.Body className="section-content">
        <Row className="clear-fix">
          <Col sm={6} className="columns">
            <img src={props.data.image} className="project" />
          </Col>
          <Col sm={6} className="columns">
            <h4>About</h4>
            <p>{props.data.info.about}</p>
          </Col>
        </Row>

        <Row>
          <Col sm={12} className="columns">
            <h4>Front-End</h4>
            <p>{props.data.info.front}</p>
          </Col>
          <Col sm={12} className="columns">
            <h4>Back-End</h4>
            <p>{props.data.info.back}</p>
          </Col>
        </Row>

        {Object.keys(props.data.url).map((u, i) =>
          <div className="text-center" key={`${i}url`}>
            <Button bsStyle={(u === "final") ? 'primary' : 'default'} className={`${u} linkButton`} onClick={(e) => {if(e) e.preventDefault(); window.open(props.data.url[u]);}}>
              {projectURL[u]['text']} <i className={projectURL[u]['icon']} aria-hidden="true"></i>
            </Button>
          </div>
        )}

      </Modal.Body>

      <Modal.Footer>
        <Button bsStyle="danger" onClick={ () => props.updateState({project: -1}) }>Close</Button>
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
