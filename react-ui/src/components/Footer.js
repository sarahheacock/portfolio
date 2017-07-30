import React from 'react';
import PropTypes from 'prop-types';

import {Row, Col} from 'react-bootstrap';
import { links } from '../data/data';

var FaCoffee = require('react-icons/lib/fa/coffee');
var FaHeart = require('react-icons/lib/fa/heart');
var FaLinked = require('react-icons/lib/fa/linkedin');
var FaGit = require('react-icons/lib/fa/github');

const Footer = (props) => {
  return (
    <div className="foot">
      <Row className="clear-fix text-center">
        <Col sm={6} className="">
          <h3>
            <hr />
            This page was built with
          </h3>
          <h3>
            <FaHeart className="faheart" /> and <FaCoffee className="facoffee" />
          </h3>
          <h3>
            by Sarah Heacock
            <hr />
          </h3>
        </Col>
        <Col sm={6} className="text-center">

          <h3>
            <hr />
            Around the Web
          </h3>

          <h3>
            <a className="icon" href="#" onClick={(e) => {if(e) e.preventDefault(); window.open(links.linkedin);}}>
              <i className="fa fa-linkedin link falinked" aria-hidden="true"></i>
            </a>
            <a className="icon" href="#" onClick={(e) => {if(e) e.preventDefault(); window.open(links.fcc);}}>
              <i className="fa fa-free-code-camp link fcc" aria-hidden="true"></i>
            </a>
            <a className="icon" href="#" onClick={(e) => {if(e) e.preventDefault(); window.open(links.github);}}>
              <i className="fa fa-github fa-lg link git" aria-hidden="true"></i>
            </a>
            <br />
            <br />
            <hr />
          </h3>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;

Footer.propsTypes = {};
