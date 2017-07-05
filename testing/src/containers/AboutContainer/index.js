import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAbout } from '../../redux/modules/actions/FetchActions/aboutActions';
import AboutComponent from '../../components/AboutComponent';
import LoadingComponent from '../../components/LoadingComponent';

class AboutContainer extends Component {
  componentDidMount() {
    this.props.fetchAbout();
  }
  render() {
    const about = this.props.about; //eslint-disable-line
    const { isLoading, componentRef } = this.props; //eslint-disable-line
    return (
      <div ref={componentRef}>
        {
          isLoading ?
            <LoadingComponent />
            :
            <AboutComponent about={about} />
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.about.isLoading,
  about: state.about.data,
});

const mapDispatchToProps = dispatch => ({
  fetchAbout: () => {
    dispatch(fetchAbout());
  },
});

AboutContainer.propTypes = {
  fetchAbout: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutContainer);
