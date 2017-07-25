import React from 'react';
import PropTypes from 'prop-types';

import { Row, Col, Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

const Contact = (props) => {
  return (
    <Row className="clear-fix">
      <Col sm={6}>
        <b>{props.data.bold}</b>
        <p>{props.data.text}</p>
      </Col>
      <Col sm={6}>
        <Form onSubmit={() => console.log("submit")}>
          <FormGroup>
            <ControlLabel>Name</ControlLabel>
            <FormControl type="email" placeholder="Your Name" />
          </FormGroup>
          <FormGroup required>
            <ControlLabel>Email</ControlLabel>
            <FormControl type="email" placeholder="Email Address" />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Phone Number</ControlLabel>
            <FormControl type="text" placeholder="Phone Number" />
          </FormGroup>
          <FormGroup controlId="formControlsTextarea">
            <ControlLabel>Message</ControlLabel>
            <FormControl componentClass="textarea" placeholder="Your Message" />
          </FormGroup>
          <div className="text-center">
            <Button bsStyle="info" type="submit">Send</Button>
          </div>
        </Form>
      </Col>
    </Row>
  );
}

export default Contact;

Contact.propsTypes = {
  data: PropTypes.object.isRequired
}
