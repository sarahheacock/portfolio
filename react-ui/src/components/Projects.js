import React from 'react';
import PropTypes from 'prop-types';

import ProjectModal from './ProjectModal';
import { Image } from 'cloudinary-react';
import { cloudName } from '../data/data';

const Projects = (props) => {
  const projects = (props.data.portfolio).map((p, i) => (
    <div className="access" key={`project${i}`}>
      <a href="#" value={i} onClick={(e) => {
        if(e) e.preventDefault();
        props.updateState({project: i});
      }}>
        <div>
          {(p.image.includes('http'))?
            <img className="project" src={p.image} /> :
            <Image
              className="project"
              cloudName={cloudName}
              publicId={p.image}
              width="350"
              crop="scale"/>
          }
        </div>
        <h3>{p.title}</h3>
      </a>
      <h4 className="text-center">{p.title2}</h4>
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
