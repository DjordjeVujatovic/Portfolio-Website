import React from 'react';
import PropTypes from 'prop-types';
import Project from '../Project';

const ProjectsSliderComponent = ({ projects, projectState, nextSlide, previousSlide, readMore, closeReadMore }) => { //eslint-disable-line

  return (
    <div className="projectsSliderContainer">
      {projects.map(project => (
        <Project
          key={project.id}
          id={project.id}
          description={project.description}
          name={project.name}
          toolsUsed={project.toolsUsed}
          slideCount={projectState.slideCount}
          componentClass={projectState.componentClass}
          readMoreState={projectState.readMore}
          projectState={projectState}
          readMore={readMore}
          closeReadMore={closeReadMore}
        />
      ))}
      <button onClick={() => previousSlide(projects.id)}>Previous</button>
      <button onClick={() => nextSlide(projects.id)}>Next</button>
    </div>
  );
};

ProjectsSliderComponent.PropTypes = {
  nextSlide: PropTypes.func.isRequired,
  previousDlide: PropTypes.func.isRequired,
};

export default ProjectsSliderComponent;
