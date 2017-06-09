import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchEducation } from '../../redux/modules/actions/educationActions';
import EducationComponent from '../../components/EducationComponent';
import LoadingComponent from '../../components/LoadingComponent';

class EducationContainer extends Component {
  componentDidMount() {
    this.props.fetchEducation();
  }
  render() {
    const { isLoading } = this.props;
    return (
      <div>
        {isLoading ?
          <LoadingComponent />
          :
          <EducationComponent />
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.education.isLoading,
  education: state.education.data,
});

const mapDispatchToProps = dispatch => ({
  fetchEducation: () => {
    dispatch(fetchEducation());
  },
});

EducationContainer.propTypes = {
  fetchEducation: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(EducationContainer);
