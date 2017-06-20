import React from 'react';
import PropTypes from 'prop-types';
import ProjectsSliderComponent from './ProjectsSliderComponent';

const ProjectsComponent = ({ projects, projectsComponentState, projectState, readMoreState, expandProjectsComponent, closeProjectsComponent, nextSlide, previousSlide, readMore, closeReadMore }) => { // eslint-disable-line
  return (
    <div className={projectsComponentState.classState}>
      {projectsComponentState.componentExpand ?
        <div className="projectsOpenWrapper">
          <div className="buttonContainer">
            <button className={projectsComponentState.buttonClass} onClick={() => closeProjectsComponent()}>{projectsComponentState.buttonName}</button>
          </div>
          <div className="componentsContainer">
            <div className="componentsWrapper">
              <ProjectsSliderComponent
                projects={projects}
                projectState={projectState}
                nextSlide={nextSlide}
                previousSlide={previousSlide}
                closeReadMore={closeReadMore}
                readMore={readMore}
              />
            </div>
          </div>
        </div>
        :
        <button className={projectsComponentState.buttonClass} onClick={() => expandProjectsComponent()}>{projectsComponentState.buttonName}</button>
      }
    </div>
  );
};

ProjectsComponent.propTypes = {
  expandProjectsComponent: PropTypes.func.isRequired,
  closeProjectsComponent: PropTypes.func.isRequired,
  nextSlide: PropTypes.func.isRequired,
  previousSlide: PropTypes.func.isRequired,
};

export default ProjectsComponent;
