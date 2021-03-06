import React from 'react';
import FaChevronLeft from 'react-icons/lib/fa/chevron-left';
import FaChevronRight from 'react-icons/lib/fa/chevron-right';
import PropTypes from 'prop-types';
import Project from '../Project';

const ProjectsSliderComponent = ({ projects, projectState, nextSlide, filter, previousSlide, readMore, closeReadMore, changeComponentState }) => { //eslint-disable-line

  return (
    <div className="projectsSliderContainer">
      <div className="projectsSliderWrapper">
        <div className="previousButtonContainer">
          <button className="previousButton" onClick={() => previousSlide(projects.id)}><FaChevronLeft /></button>
        </div>
        {projects
          .map((project, key) => (
            <Project
              key={project.id}
              id={project.id}
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
              snippet={project.snippet}
              githubRepo={project.github}
              backgroundImage={project.image}
            />
          ))}
        <div className="nextButtonContainer">
          <button className="nextButton" onClick={() => nextSlide(projects.id) && changeComponentState(projects.id)}><FaChevronRight /></button>
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
