import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAbout } from '../../redux/modules/actions/aboutActions';
import AboutComponent from '../../components/AboutComponent';

class AboutContainer extends Component {
  componentDidMount() {
    this.props.fetchAbout();
  }
  render() {
    const about = this.props.about; //eslint-disable-line
    return (
      <div>
        <AboutComponent />
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
