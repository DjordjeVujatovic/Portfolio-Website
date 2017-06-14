import React from 'react';
import PropTypes from 'prop-types';
import DevToolsComponent from '../../components/ToolsComponent/DevToolsComponent';
import ExperienceWithComponent from '../../components/ToolsComponent/ExperienceWithComponent';
import LanguageComponent from '../../components/ToolsComponent/LanguageComponent';
import TechnologiesComponent from '../../components/ToolsComponent/TechnologiesComponent';

const ToolsComponent = ({ tools, devToolsState, experienceState, languagesState,  technologiesState,  expandDevToolsComponent, closeDevToolsComponent, expandExperienceComponent, closeExperienceComponent, expandLanguageComponent, closeLanguageComponent, expandTechnologiesComponent, closeTechnologiesComponent }) => { //eslint-disable-line
  return (
    <div className="toolsComponentWrapper">
      <LanguageComponent
        tools={tools}
        languagesState={languagesState}
        expandLanguageComponent={expandLanguageComponent}
        closeLanguageComponent={closeLanguageComponent}
      />
      <TechnologiesComponent
        tools={tools}
        technologiesState={technologiesState}
        expandTechnologiesComponent={expandTechnologiesComponent}
        closeTechnologiesComponent={closeTechnologiesComponent}
      />
      <DevToolsComponent
        tools={tools}
        devToolsState={devToolsState}
        expandDevToolsComponent={expandDevToolsComponent}
        closeDevToolsComponent={closeDevToolsComponent}
      />
      <ExperienceWithComponent
        tools={tools}
        experienceState={experienceState}
        expandExperienceComponent={expandExperienceComponent}
        closeExperienceComponent={closeExperienceComponent}
      />
    </div>
  );
};
ToolsComponent.propTypes = {
  expandDevToolsComponent: PropTypes.func.isRequired,
  closeDevToolsComponent: PropTypes.func.isRequired,
  expandExperienceComponent: PropTypes.func.isRequired,
  closeExperienceComponent: PropTypes.func.isRequired,
  expandLanguageComponent: PropTypes.func.isRequired,
  closeLanguageComponent: PropTypes.func.isRequired,
  expandTechnologiesComponent: PropTypes.func.isRequired,
  closeTechnologiesComponent: PropTypes.func.isRequired,
};
export default ToolsComponent;

