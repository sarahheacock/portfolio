
import React from 'react';
import PropTypes from 'prop-types';
//import Scrollspy from 'react-scrollspy'
import { Nav, Navbar, NavItem, Image } from 'react-bootstrap';


class Header extends React.Component {
  static propTypes = {
    links: PropTypes.array.isRequired,
    current: PropTypes.string.isRequired,
    sections: PropTypes.object.isRequired,
    handleScroll: PropTypes.func.isRequired,
    handleClick: PropTypes.func.isRequired,
    handleResize: PropTypes.func.isRequired,
  }

  componentDidMount(){
    this.myResizeFunc();
  }

  myScrollFunc = (e) => {
    e.preventDefault();
    this.props.handleScroll();
  }

  myResizeFunc = (e) => {
    this.props.handleResize();
  }

  scroll = (e) => {
    if(e) e.preventDefault();
    window.removeEventListener("scroll", this.myScrollFunc);

    const i = this.props.links.lastIndexOf(e.target.name);
    const length = this.props.links.length - 1;

    const stop = this.props.sections[e.target.name]["min"];
    // const stop = (i === length) ?
    //   Math.floor(document.body.scrollHeight) - Math.floor(window.innerHeight):
    //   temp;
    const start = Math.floor(document.body.scrollTop);
    console.log(start);
    console.log(stop);

    this.props.handleClick({
      "stop": stop,
      "range": Math.abs( Math.ceil((stop - start) / 2) ),
      "current": e.target.name
    });
  }

  render(){
    window.addEventListener("scroll", this.myScrollFunc);
    window.addEventListener("resize", this.myResizeFunc);

    const navItems = this.props.links.map((link, i) => (
      <NavItem
        key={link}
        name={link}
        eventKey={i}
        onClick={this.scroll}
      >
        {`${link.charAt(0).toUpperCase()}${link.slice(1)}`}
      </NavItem>
    ))

    return (
      <div>
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
