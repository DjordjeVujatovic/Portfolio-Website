import React from 'react';
import PropTypes from 'prop-types';
import UniversityComponent from '../EducationComponent/UniversityComponent';
import CollegeComponent from '../EducationComponent/CollegeComponent';
import RedComponent from '../EducationComponent/RedComponent';

const EducationComponent = ({ education }) => { //eslint-disable-line
  return (
    <div className="educationComponentWrapper">
      <RedComponent education={education} />
      <UniversityComponent education={education} />
      <CollegeComponent education={education} />
    </div>
  );
};


export default EducationComponent;
