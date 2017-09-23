import React from 'react';
import PropTypes from 'prop-types';

import {Row, Col} from 'react-bootstrap';
import { Image, CloudinaryContext, Transformation } from 'cloudinary-react';
import { cloudName } from '../data/data';

const About = (props) => {
  return (
    <div>
      <Row className="clear-fix">
        <Col sm={5} className="columns">
          <div className="text-center">
            <CloudinaryContext cloudName={cloudName}>
                <Image publicId={props.data.image} className="white-border" >
                    <Transformation width="200" crop="scale"/>
                </Image>
            </CloudinaryContext>
          </div>
        </Col>
        <Col sm={7} className="columns">
          <h3>{props.data.bold}</h3>
          <hr />
          <h4>{props.data.text}</h4>
        </Col>
      </Row>
    </div>
  );
}

export default About;

About.propsTypes = {
  data: PropTypes.object.isRequired
};
