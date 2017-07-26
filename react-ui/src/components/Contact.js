import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

import ContactForm from './ContactForm';

const Contact = (props) => {
  return (
    <Row className="clear-fix">
      <Col sm={6} className="columns">
        <b>{props.data.bold}</b>
        {props.data.text.map((d, i) => <p key={`contact${i}`}>{d}</p>)}
      </Col>
      <Col sm={6} className="columns">
        <ContactForm
          message={props.message}
          updateState={props.updateState}
          sayHello={props.sayHello}
        />
      </Col>
    </Row>
  );
}

export default Contact;

Contact.propsTypes = {
  data: PropTypes.object.isRequired,
  message: PropTypes.object.isRequired,
  updateState: PropTypes.func.isRequired,
  sayHello: PropTypes.func.isRequired
}
