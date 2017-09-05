
import React from 'react';
import PropTypes from 'prop-types';
// import { windowOffset } from '../data/data';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { Image, CloudinaryContext, Transformation } from 'cloudinary-react';
import { cloudName } from '../data/data';
import $ from 'jquery';

var FaCircle = require('react-icons/lib/fa/circle-o');
const coffee = require('./hot-coffee-rounded-cup-on-a-plate-from-side-view.svg');

class Header extends React.Component {
  static propTypes = {
    links: PropTypes.array.isRequired,
    current: PropTypes.string.isRequired,
    last: PropTypes.number.isRequired,
    sections: PropTypes.object.isRequired,
    handleScroll: PropTypes.func.isRequired,
    handleResize: PropTypes.func.isRequired,
    handleClick: PropTypes.func.isRequired,
  }

  // componentWillMount(){
  //   window.addEventListener("resize", this.onResize);
  // }

  // componentDidMount(){
  //   $('body').scrollspy({target: ".navigation"})
  //   // $(window).on('load', this.onResize);
  // }

  componentDidUpdate(){
    // $(window).on('resize', this.onResize);
    // $('body').scrollspy({target: ".navigation"});
    $(window).on('scroll', this.onScroll);
  }

  // componentWillUnmount(){
  //   window.removeEventListener("scroll", this.onScroll);
  // }

  onResize = (e) => {
    // if(e) e.preventDefault();
    this.props.handleResize();
  }

  onScroll = (e) => {
    const currentOffset = $(window).scrollTop();
    const diff = Math.abs(currentOffset - this.props.last);

    if(diff > 15) this.props.handleScroll(); //'if' is just to reduce function calls
  }


  scroll = (e) => {
    // if(e) e.preventDefault();
    // window.removeEventListener("scroll", this.onScroll);
    $(window).off('scroll', this.onScroll);
    const hash = e.target.name;

    $('html, body').animate({
        scrollTop: $(`#${hash}`).offset().top
    }, 1000, () => {
      console.log('done');
      // if(window.location.hash !== hash){
      //   history.pushState(null, null, `#${hash}`);
      //   // window.location.hash = k;
      //   // window.stop();
      // }
      return this.props.handleScroll();
    });

    // const stop = this.props.sections[e.target.name]["min"];
    // const start = $(window).scrollTop();
    //
    // this.props.handleClick({
    //   "stop": stop,
    //   "range": Math.abs( Math.ceil((stop - start) / 2) ),
    //   "current": e.target.name
    // });
    // window.addEventListener("scroll", this.onScroll);
  }

  render(){
    // window.addEventListener("scroll", this.onScroll);

    const navItems = this.props.links.map((link, i) => (
      <NavItem
        className="navButton"
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
          <CloudinaryContext cloudName={cloudName} className="carousel-content">
              <Image publicId="pexels-photo_1_swor1e" className="carImg">
                  <Transformation height="1000" width="2000" crop="fill"/>
              </Image>
          </CloudinaryContext>
        </header>
        <h1 className="headerText">{("Sarah Heacock").toUpperCase()}
          <hr />
          <FaCircle />
          <br /><br />
          Full Stack Web Developer
        </h1>


        <Navbar className="navigation" fixedTop>
          <Navbar.Header>
            <Navbar.Brand >
              <div><img className="pull-left coffee" width={35} src={coffee}/><span className="brand">{"Sarah's Portfolio"}</span></div>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>

          <Navbar.Collapse>
            <Nav className="ml-auto" activeKey={this.props.links.lastIndexOf(this.props.current)} navbar pullRight>
              {navItems}
            </Nav>

          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
