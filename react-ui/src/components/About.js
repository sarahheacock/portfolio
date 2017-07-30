import React from 'react';
import PropTypes from 'prop-types';

import {Row, Col} from 'react-bootstrap';

const About = (props) => {
  return (
    <div>
      <Row className="clear-fix">
        <Col sm={5} className="columns">
          <img src={props.data.image} alt="me" className="white-border" />
        </Col>
        <Col sm={7} className="columns">
          <h3>{props.data.bold}</h3>
          <hr />
          <p>{props.data.text}</p>
        </Col>
      </Row>
    </div>
  );
}

export default About;

About.propsTypes = {
  data: PropTypes.object.isRequired
};
