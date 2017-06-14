import React from 'react';
import PropTypes from 'prop-types';
import UniversityComponent from '../EducationComponent/UniversityComponent';
import CollegeComponent from '../EducationComponent/CollegeComponent';
import RedComponent from '../EducationComponent/RedComponent';

const EducationComponent = ({ education, redState, universityState, collegeState, expandRedComponent, closeRedComponent, expandCollegeComponent, closeCollegeComponent, expandUniversityComponent, closeUniversityComponent  }) => { //eslint-disable-line
  return (
    <div className="educationComponentWrapper">
      <RedComponent
        education={education}
        redState={redState}
        expandRedComponent={expandRedComponent}
        closeRedComponent={closeRedComponent}
      />
      <UniversityComponent
        education={education}
        universityState={universityState}
        expandUniversityComponent={expandUniversityComponent}
        closeUniversityComponent={closeUniversityComponent}
      />
      <CollegeComponent
        education={education}
        collegeState={collegeState}
        expandCollegeComponent={expandCollegeComponent}
        closeCollegeComponent={closeCollegeComponent}
      />
    </div>
  );
};

EducationComponent.propTypes = {
  expandRedComponent: PropTypes.func.isRequired,
  closeRedComponent: PropTypes.func.isRequired,
  expandCollegeComponent: PropTypes.func.isRequired,
  closeCollegeComponent: PropTypes.func.isRequired,
  expandUniversityComponent: PropTypes.func.isRequired,
  closeUniversityComponent: PropTypes.func.isRequired,
};

export default EducationComponent;
