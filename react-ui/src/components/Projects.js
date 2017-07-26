import React from 'react';
import PropTypes from 'prop-types';

import ProjectModal from './ProjectModal';

const Projects = (props) => {
  const projects = (props.data.portfolio).map((p, i) => (
    <div className="access" key={`project${i}`}>
      <a href="#" value={i} onClick={(e) => {
        if(e) e.preventDefault();
        props.updateState({project: i});
      }}>
        <img className="project" src={p.image} />
        <h3>{p.title}</h3>
      </a>
    </div>
  ));

  return (
    <div className="flex-container">
      {projects}
      <ProjectModal
        updateState={props.updateState}
        data={props.data.portfolio[props.project]}
      />
    </div>
  );
}

export default Projects;

Projects.propsTypes = {
  project: PropTypes.number.isRequired,
  data: PropTypes.object.isRequired,
  updateState: PropTypes.func.isRequired
};
