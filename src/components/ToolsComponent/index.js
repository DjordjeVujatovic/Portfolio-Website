import React from 'react';
import DevToolsComponent from '../../components/ToolsComponent/DevToolsComponent';
import ExperienceWithComponent from '../../components/ToolsComponent/ExperienceWithComponent';
import LanguageComponent from '../../components/ToolsComponent/LanguageComponent';
import TechnologiesComponent from '../../components/ToolsComponent/TechnologiesComponent';

const ToolsComponent = () => {
  return (
    <div className="toolsComponentWrapper">
      <LanguageComponent />
      <TechnologiesComponent />
      <DevToolsComponent />
      <ExperienceWithComponent />
    </div>
  );
};

export default ToolsComponent;

