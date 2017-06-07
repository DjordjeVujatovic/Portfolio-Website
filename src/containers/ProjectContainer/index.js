import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProjects } from '../../redux/modules/actions/projectActions';

class ProjectContainer extends Component {
  componentWillMount() {
    this.props.fetchProjects(); //eslint-disable-line
  }

  render() {
    return (
      <div>
        <p>Projects Container</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  projects: state.projects.data,
});

const mapDispatchToProps = dispatch => ({
  fetchProjects: () => {
    dispatch(fetchProjects());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectContainer);

