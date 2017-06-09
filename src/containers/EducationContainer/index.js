import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchEducation } from '../../redux/modules/actions/educationActions';
import EducationComponent from '../../components/EducationComponent';

class EducationContainer extends Component {
  componentDidMount() {
    this.props.fetchEducation();
  }
  render() {
    return (
      <div>
        <EducationComponent />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  education: state.education.data,
});

const mapDispatchToProps = dispatch => ({
  fetchEducation: () => {
    dispatch(fetchEducation());
  },
});

EducationContainer.propTypes = {
  fetchEducation: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(EducationContainer);
