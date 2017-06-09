import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAbout } from '../../redux/modules/actions/aboutActions';

class AboutContainer extends Component {
  componentWillMount() {
    this.props.fetchAbout(); //eslint-disable-line
  }
  render() {
    return (
      <div>
        About Container
      </div>
    );
  }
}

const mapStateToProps = state => ({
  about: state.about.data,
});

const mapDispatchToProps = dispatch => ({
  fetchAbout: () => {
    dispatch(fetchAbout());
  },
});

AboutContainer.propTypes = {
  fetchAbout: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutContainer);
