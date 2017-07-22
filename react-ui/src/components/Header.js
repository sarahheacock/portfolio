
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
    if(!window.location.hash.includes(this.props.current)){
      window.location.hash = this.props.current;
    }
    window.onscroll = (e) => {
      e.preventDefault();
      //console.log("hi");
      this.props.handleScroll();
      //also updates url when current changes

    }
  }

  // componentDidUpdate(){
  //   if(!window.location.hash.includes(this.props.current)){
  //     window.location.hash = `${this.props.current}`;
  //     window.stop();
  //   }
  // }


  scroll = (e) => {
    if(e) e.preventDefault();
    const stop = document.getElementById(e.target.name).offsetTop;
    const start = document.body.scrollTop;
    this.props.handleClick({"current": e.target.name, "range": (stop - start)});
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
