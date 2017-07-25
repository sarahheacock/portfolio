import React from 'react';
import PropTypes from 'prop-types';
import { PageHeader } from 'react-bootstrap';

//components
import About from './About';
import Contact from './Contact';
import Projects from './Projects';

const Section = (props) => {
  const Title = `${props.link.charAt(0).toUpperCase()}${props.link.slice(1)}`;
  const content = (Title === "About") ?
    <About data={props.data}/> :
    ((Title === "Projects") ?
      <Projects data={props.data} />:
      <Contact data={props.data} />
    );
  const cl = (Title === "Projects") ? "main-content" : "main-content every-other";

  return (
    <section id={props.link}>
      <div className={cl}>
        <PageHeader>{Title}</PageHeader>
        <div className="section-content">{content}</div>
      </div>
    </section>
  );
}

export default Section;

Section.propsTypes = {
  link: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired
}
