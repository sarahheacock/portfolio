import React from 'react';
import PropTypes from 'prop-types';

import ProjectModal from './ProjectModal';
import { Image, CloudinaryContext, Transformation } from 'cloudinary-react';
import { cloudName } from '../data/data';

const Projects = (props) => {
  const projects = (props.data.portfolio).map((p, i) => (
    <div className="access" key={`project${i}`}>
      <a href="#" value={i} onClick={(e) => {
        if(e) e.preventDefault();
        props.updateState({project: i});
      }}>
        <div>
          <CloudinaryContext cloudName={cloudName}>
              <Image publicId={p.image} className="project" >
                  <Transformation width="350" crop="scale"/>
              </Image>
          </CloudinaryContext>
        </div>
        <h3>{p.title}</h3>
      </a>
    </div>
  ));

  return (
    <div>
      <h3 className="text-center">Click on the projects below to get a closer look.</h3><br />
      <div className="flex-container">
        {projects}
        <ProjectModal
          updateState={props.updateState}
          data={props.data.portfolio[props.project]}
        />
    </div>
    </div>
  );
}

export default Projects;

Projects.propsTypes = {
  project: PropTypes.number.isRequired,
  data: PropTypes.object.isRequired,
  updateState: PropTypes.func.isRequired
};
