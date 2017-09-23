import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

import ContactForm from './ContactForm';

const Contact = (props) => {
  return (
    <Row className="clear-fix">
      <Col sm={6} className="columns">
        <h3>{props.data.bold}</h3>
        <hr />
        {props.data.text.map((d, i) => <h4 key={`contact${i}`}>{d}</h4>)}
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
