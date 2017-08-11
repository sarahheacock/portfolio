import React from 'react';
import PropTypes from 'prop-types';

import { Form, FormGroup, ControlLabel, FormControl, Button, Alert } from 'react-bootstrap';
var FaCircle = require('react-icons/lib/fa/circle-o');

//content
import { messageData, messageStatus } from '../data/data';


class ContactForm extends React.Component {
  static propTypes = {
    message: PropTypes.object.isRequired,
    updateState: PropTypes.func.isRequired
  }

  onFormChange = (e) => {
    let dataObj = {...this.props.message}; //copy message prop
    dataObj[e.target.name] = e.target.value; //change key

    this.props.updateState({ message: dataObj }); //send off as new state
  }

  onFormSubmit = (e) => {
    if(e) e.preventDefault();
    console.log("hello");
    this.props.sayHello(this.props.message);
  }

  render(){

    const formGroups = Object.keys(messageData).map(k => {
      if(k !== "error"){
        return(
          <FormGroup
            key={k}
            validationState={(this.props.message.error === messageStatus.formError && (this.props.message[k] === '' || this.props.message[k] === undefined)) ? 'warning': null}
          >
            <ControlLabel>{`${k.charAt(0).toUpperCase()}${k.slice(1)}*`}</ControlLabel>
            <FormControl
              name={k}
              type={messageData[k]["type"]}
              placeholder={messageData[k]["placeholder"]}
              componentClass={messageData[k]["componentClass"]}
              value={this.props.message[k]}
              onChange={this.onFormChange}
            />
          </FormGroup>
        );
      }
    });

    // const alert = <Alert bsStyle={(this.props.message.error === messageStatus.success) ? 'info' : 'warning'}>
    //   {messageStatus.success}
    // </Alert>;

    const alert = (!(!this.props.message.error)) ?
      <Alert bsStyle={(this.props.message.error === messageStatus.success) ? 'info' : 'warning'}>
        {this.props.message.error}
      </Alert> :
      <div></div>

    return(
      <Form onSubmit={this.onFormSubmit}>
        {formGroups}
        <div className="text-center">
          {alert}
          <button className="button orangeButton" type="submit">Send  <i className="fa fa-paper-plane fa-lg" aria-hidden="true"></i></button>
        </div>
      </Form>
    );
  }
}

export default ContactForm;
