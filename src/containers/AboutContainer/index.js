import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAbout } from '../../redux/modules/actions/aboutActions';
import AboutComponent from '../../components/AboutComponent';
import LoadingComponent from '../../components/LoadingComponent';

class AboutContainer extends Component {
  componentDidMount() {
    this.props.fetchAbout();
  }
  render() {
    const about = this.props.about; //eslint-disable-line
    const { isLoading } = this.props;
    return (
      <div>
        {
          isLoading ?
            <LoadingComponent />
            :
            <AboutComponent />
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
