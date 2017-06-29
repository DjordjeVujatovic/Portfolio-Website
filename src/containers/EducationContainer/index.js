import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchEducation } from '../../redux/modules/actions/FetchActions/educationActions';
import { expandRedComponent, closeRedComponent } from '../../redux/modules/actions/EducationComponentActions/redComponentActions';
import { expandCollegeComponent, closeCollegeComponent } from '../../redux/modules/actions/EducationComponentActions/collegeComponentActions';
import { expandUniversityComponent, closeUniversityComponent } from '../../redux/modules/actions/EducationComponentActions/universityComponentAction';
import EducationComponent from '../../components/EducationComponent';
import LoadingComponent from '../../components/LoadingComponent';
import HeroBanner from '../../components/HeroBanner';


class EducationContainer extends Component {
  componentDidMount() {
    this.props.fetchEducation();
  }
  render() {
    const { isLoading,
      education, //eslint-disable-line
      redState, //eslint-disable-line
      universityState, //eslint-disable-line
      collegeState, //eslint-disable-line
      expandRedComponent,
      closeRedComponent,
      expandCollegeComponent,
      closeCollegeComponent,
      expandUniversityComponent,
      closeUniversityComponent,
      componentRef } = this.props; //eslint-disable-line
    return (
      <div>
        {isLoading ?
          <LoadingComponent />
          :
          <div ref={componentRef}>
            <HeroBanner bannerContainer="educationHeroBanner" textWrapper="" bannerTitle="" />
            <div>
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
            </div>
          </div>
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
  expandRedComponent: PropTypes.func.isRequired,
  closeRedComponent: PropTypes.func.isRequired,
  expandCollegeComponent: PropTypes.func.isRequired,
  closeCollegeComponent: PropTypes.func.isRequired,
  expandUniversityComponent: PropTypes.func.isRequired,
  closeUniversityComponent: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(EducationContainer);
