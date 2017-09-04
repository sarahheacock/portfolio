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
    <footer>
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
      <div className="text-center">Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
    </div>
    </footer>
  );
}

export default Footer;

Footer.propsTypes = {};
