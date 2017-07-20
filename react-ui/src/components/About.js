import React from 'react';
import PropTypes from 'prop-types';


const About = (props) => {
  return (
    <div>
      <b>{props.data.bold}</b>
      <p>{props.data.text}</p>
    </div>
  );
}

export default About;

About.propsTypes = {
  data: PropTypes.object.isRequired
};
