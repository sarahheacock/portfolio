import React from 'react';
import PropTypes from 'prop-types';


const Contact = (props) => {
  return (
    <div>
      <b>{props.data.bold}</b>
      <p>{props.data.text}</p>
    </div>
  );
}

export default Contact;

Contact.propsTypes = {
  data: PropTypes.object.isRequired
}
