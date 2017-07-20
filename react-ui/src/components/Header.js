
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
    // if(window.location.hash.slice(1) !== this.props.current){
    //   //everytime current is updated, so is the url
    //   const domain = `${window.location.origin}#${this.props.current}`;
    //   window.location.href = domain;
    //   //this.props.updateState({current: window.location.hash.slice(1)});
    // }
    this.handleScroll();
  }

  componentDidUpdate(){

    // content.style["margin-top"] = `0px`;
    // content.style.transition = 'all 1000ms ease-in-out';
    window.onscroll = (e) => {
      e.preventDefault();
      this.handleScroll();
    }
  }

  handleScroll = (e) => {

    const element = document.getElementById(this.props.links[0]);
    if(element){
      const buffer = element.offsetTop;
      const currentOffset = window.pageYOffset;
      //get current from offset
      this.props.updateState({"yPos": (buffer + currentOffset)});


    }
  }

  scroll = (e) => {
    if(e.target) e.preventDefault();
    const targName = (e.target) ?
      e.target.name :
      e;
    console.log("targName", targName);

    if(this.props.current !== targName){
      const element = document.getElementById(targName);
      if(element){
        //move up
        const oldOffset = window.pageYOffset;
        const newOffset = element.offsetTop;
        const buffer = document.getElementById(this.props.links[0]).offsetTop;
        const change = buffer - newOffset;
        //const another = (change > 0) ? buffer : buffer * -1;
        console.log("oldOffset", oldOffset);
        console.log("newOffset", newOffset);
        console.log("buffer", buffer);
        console.log("change", change);

        const content = document.getElementById("main");
        //content.style.transform = `translateY(${change}px)`;
        //console.log("transform", content.style.transform);
        content.style["margin-top"] = `${change}px`;
        content.style.transition = 'all 1000ms ease-in-out';


        //change
        setTimeout(() => {
          console.log(content.style);
          this.props.updateState({"current": targName});
        }, 1100);

        //setTimeout(() => { this.props.updateState({"current": targName}); }, 1100);

        //move back down


      }
    }
  }

  render(){
    
    //
    // if(window.location.hash.slice(1) === this.props.current){
    //
    // }


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
            <Nav className="ml-auto" activeKey={this.props.links.lastIndexOf(window.location.hash.slice(1))} navbar>
              {navItems}
            </Nav>

          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
