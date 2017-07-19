
import React from 'react';
import PropTypes from 'prop-types';
//import Scrollspy from 'react-scrollspy'
import { Nav, Navbar, NavItem, Image } from 'react-bootstrap';


class Header extends React.Component {
  static propTypes = {
    links: PropTypes.array.isRequired,
    current: PropTypes.string.isRequired,
    updateState: PropTypes.func.isRequired
  }

  componentDidMount(){
    this.props.updateState({"yPos": window.pageYOffset});
  }

  componentDidUpdate(){
    window.onscroll = (e) => {
      this.props.updateState({"yPos": window.pageYOffset});
    }
  }

  scroll = (e) => {
    console.log(e.target.name);
    e.preventDefault();
    const element = document.getElementById(e.target.name);
    if(element){
      const newOffset = element.offsetTop;
      while(window.pageYOffset !== newOffset){
        const currentOffset = window.pageYOffset;
        if(newOffset < currentOffset) window.pageYOffset = currentOffset - 1;
        else if(newOffset > currentOffset) window.pageYOffset = currentOffset + 1;
      }
    }
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
