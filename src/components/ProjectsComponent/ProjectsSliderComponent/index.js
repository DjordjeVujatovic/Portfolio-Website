import React from 'react';
import PropTypes from 'prop-types';
import Project from '../Project';

const ProjectsSliderComponent = ({ projects, slideCount, readMoreState, nextSlide, previousSlide, readMore, closeReadMore }) => { //eslint-disable-line
  console.log(slideCount);
  return (
    <div className="projectsSliderContainer">
      <div className="sliderInnerContainer">
        {projects.map(project => (
          <Project
            id={project.id}
            description={project.description}
            name={project.name}
            toolsUsed={project.toolsUsed}
            slideCount={slideCount}
            readMore={readMore}
            readMoreState={readMoreState}
            closeReadMore={closeReadMore}
          />
        ))}
        <button onClick={() => nextSlide(projects.id)}>Next</button>
        <button onClick={() => previousSlide(projects.id)}>Previous</button>
      </div>
    </div>
  );
};

ProjectsSliderComponent.PropTypes = {
  nextSlide: PropTypes.func.isRequired,
  previousDlide: PropTypes.func.isRequired,
};

export default ProjectsSliderComponent;
