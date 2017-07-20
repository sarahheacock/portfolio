import React from 'react';
import PropTypes from 'prop-types';


const Projects = (props) => {
  const projects = (props.data.portfolio).map((p) => (
    <a href={p.url} key={p.image}>
      <img className="project" src={p.image} />
    </a>
  ));

  return (
    <div>
      {projects}
    </div>
  );
}

export default Projects;

Projects.propsTypes = {
  data: PropTypes.object.isRequired
};
