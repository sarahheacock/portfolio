import React from 'react';
import PropTypes from 'prop-types';


const Projects = (props) => {
  const projects = (props.data.portfolio).map((p, i) => (
    <div className="access" key={`project${i}`}>
      <a href={p.url}>
        <img className="project" src={p.image} />
      </a>
    </div>
  ));

  return (
    <div className="flex-container">
      {projects}
    </div>
  );
}

export default Projects;

Projects.propsTypes = {
  data: PropTypes.object.isRequired
};
