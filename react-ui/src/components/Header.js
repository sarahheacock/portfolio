
import React from 'react';
import PropTypes from 'prop-types';
//import Scrollspy from 'react-scrollspy'
import { Nav, Navbar, NavItem, Image } from 'react-bootstrap';


class Header extends React.Component {
  static propTypes = {
    links: PropTypes.array.isRequired,
    current: PropTypes.string.isRequired,
    handleScroll: PropTypes.func.isRequired,
    handleClick: PropTypes.func.isRequired
  }

  componentDidMount(){
    this.props.handleScroll();
  }

  componentDidUpdate(){
    window.onscroll = (e) => {
      e.preventDefault();
      this.props.handleScroll();
    }
  }

  // handleScroll = (e) => {
  //   const element = document.getElementById(this.props.links[0]);
  //   if(element){
  //     const buffer = element.offsetTop;
  //     const currentOffset = window.pageYOffset;
  //     //get current from offset
  //     this.props.updateState({"yPos": (buffer + currentOffset)});
  //   }
  // }

  scroll = (e) => {
    if(e) e.preventDefault();
    this.props.handleClick({"current": e.target.name})
  }

  render(){

    const navItems = this.props.links.map((link, i) => (
      <NavItem
        key={link}
        name={link}
        eventKey={i}
        href={`#${link}`}
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
