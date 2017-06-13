import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchEducation } from '../../redux/modules/actions/educationActions';
import {
  expandRedComponent,
  closeRedComponent,
  expandCollegeComponent,
  closeCollegeComponent,
  expandUniversityComponent,
  closeUniversityComponent,
} from '../../redux/modules/actions/educationExpandActions';
import EducationComponent from '../../components/EducationComponent';
import LoadingComponent from '../../components/LoadingComponent';

class EducationContainer extends Component {
  componentDidMount() {
    this.props.fetchEducation();
  }
  render() {
    const { isLoading, education, redState, universityState, collegeState, expandRedComponent, closeRedComponent, expandCollegeComponent, closeCollegeComponent, expandUniversityComponent, closeUniversityComponent } = this.props; //eslint-disable-line
    console.log(redState);
    return (
      <div>
        {isLoading ?
          <LoadingComponent />
          :
          <EducationComponent
            education={education}
            redState={redState}
            collegeState={collegeState}
            universityState={universityState}
            expandCollegeComponent={expandCollegeComponent}
            expandRedComponent={expandRedComponent}
            expandUniversityComponent={expandUniversityComponent}
            closeCollegeComponent={closeCollegeComponent}
            closeUniversityComponent={closeUniversityComponent}
            closeRedComponent={closeRedComponent}
          />
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.education.isLoading,
  education: state.education.data,
  redState: state.redState,
  collegeState: state.collegeState,
  universityState: state.universityState,
});

const mapDispatchToProps = dispatch => ({
  fetchEducation: () => {
    dispatch(fetchEducation());
  },
  expandRedComponent: () => {
    dispatch(expandRedComponent());
  },
  closeRedComponent: () => {
    dispatch(closeRedComponent());
  },
  expandCollegeComponent: () => {
    dispatch(expandCollegeComponent());
  },
  closeCollegeComponent: () => {
    dispatch(closeCollegeComponent());
  },
  expandUniversityComponent: () => {
    dispatch(expandUniversityComponent());
  },
  closeUniversityComponent: () => {
    dispatch(closeUniversityComponent());
  },
});

EducationContainer.propTypes = {
  fetchEducation: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(EducationContainer);
