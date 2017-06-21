import React from 'react';
import PropTypes from 'prop-types';
import Project from '../Project';

const ProjectsSliderComponent = ({ projects, projectState, nextSlide, filter, previousSlide, readMore, closeReadMore, changeComponentState }) => { //eslint-disable-line

  return (
    <div className="projectsSliderContainer">
      <div className="projectsSliderWrapper">
        <div className="previousButtonContainer">
          <button onClick={() => previousSlide(projects.id)}>Previous</button>
        </div>
        {projects
          .map((project, key) => (
            <Project
              key={project.id}
              id={key}
              description={project.description}
              name={project.name}
              toolsUsed={project.toolsUsed}
              slideCount={projectState.slideCount}
              readMoreState={projectState.readMore}
              projectState={projectState}
              readMore={readMore}
              closeReadMore={closeReadMore}
              projects={projects}
              changeComponentState={changeComponentState}
              filter={filter}
            />
          ))}
        <div className="nextButtonContainer">
          <button onClick={() => nextSlide(projects.id) && changeComponentState(projects.id)}>Next</button>
        </div>
      </div>
    </div>
  );
};

ProjectsSliderComponent.PropTypes = {
  nextSlide: PropTypes.func.isRequired,
  previousDlide: PropTypes.func.isRequired,
};

export default ProjectsSliderComponent;
