import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAbout } from '../../redux/modules/actions/aboutActions';

class AboutContainer extends Component {
  componentWillMount() {
    this.props.fetchAbout(); //eslint-disable-line
  }
  render() {
    return (
      <div>
        <p>About Container</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(AboutContainer);
