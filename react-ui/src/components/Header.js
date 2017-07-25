
import React from 'react';
import PropTypes from 'prop-types';
import { windowOffset } from '../data/data';
import { Nav, Navbar, NavItem, Image } from 'react-bootstrap';

var FaCircle = require('react-icons/lib/fa/circle-o');


class Header extends React.Component {
  static propTypes = {
    links: PropTypes.array.isRequired,
    current: PropTypes.string.isRequired,
    sections: PropTypes.object.isRequired,
    handleScroll: PropTypes.func.isRequired,
    handleResize: PropTypes.func.isRequired,
    handleClick: PropTypes.func.isRequired,
  }

  componentDidMount(){
    window.addEventListener("load", this.props.handleResize);
    window.addEventListener("resize", this.props.handleResize);

    window.addEventListener("scroll", this.props.handleScroll);
  }

  componentWillUnmount(){
    window.removeEventListener("load", this.props.handleResize);
    window.removeEventListener("resize", this.props.handleResize);

    window.removeEventListener("scroll", this.props.handleScroll);
  }


  scroll = (e) => {
    if(e) e.preventDefault();

    const stop = this.props.sections[e.target.name]["min"];
    const start = windowOffset();
    console.log(start);
    console.log(stop);

    this.props.handleClick({
      "stop": stop,
      "range": Math.abs( Math.ceil((stop - start) / 2) ),
      "current": e.target.name
    });
  }

  render(){

    const navItems = this.props.links.map((link, i) => (
      <NavItem
        key={link}
        name={link}
        eventKey={i}
        onClick={this.scroll}
      >
        {`${link.toUpperCase()}`}
      </NavItem>
    ))

    return (
      <div>
        <header>
          <h1 className="text-center headerText">{("Sarah Heacock").toUpperCase()}
            <hr />
            <FaCircle />
            <br /><br />
            Aspiring Software Developer
          </h1>
        </header>

        <Navbar className="navigation" fixedTop>
          <Navbar.Header>
            <Navbar.Brand >

            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>

          <Navbar.Collapse>
            <Nav className="ml-auto" activeKey={this.props.links.lastIndexOf(this.props.current)} navbar>
              {navItems}
            </Nav>

          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
