import React from 'react';
import PropTypes from 'prop-types';

import {Row, Col} from 'react-bootstrap';

var FaCoffee = require('react-icons/lib/fa/coffee');
var FaHeart = require('react-icons/lib/fa/heart');
var FaLinked = require('react-icons/lib/fa/linkedin-square');
var FaFacebook = require('react-icons/lib/fa/facebook-square');

const Footer = (props) => {
  return (
    <div className="foot">
      <Row className="clear-fix text-center">
        <Col sm={6} className="">
          <h3>
            This page was built with
          </h3>
          <h3>
            <FaHeart className="link faheart" /> and <FaCoffee className="link facoffee" />
          </h3>
          <h3>
            by Sarah Heacock
          </h3>
        </Col>
        <Col sm={6} className="text-center">
          <h3>Around the Web</h3>
          <h3>
            <a className="icon" href="#" onClick={(e) => {if(e) e.preventDefault(); window.open("https://www.linkedin.com/in/nancy-darr-968364b");}}>
              <FaLinked className="link falinked" />
            </a>
            <a className="icon" href="#" >
              <FaFacebook className="link fafacebook" onClick={(e) => {if(e) e.preventDefault(); window.open("https://www.facebook.com/groups/PediatricBalanceScale/");}}/>
            </a>
          </h3>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;

Footer.propsTypes = {};
