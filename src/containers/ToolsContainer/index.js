import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchTools } from '../../redux/modules/actions/toolsActions';
import ToolsComponent from '../../components/ToolsComponent';

class ToolsContainer extends Component {
  componentDidMount() {
    this.props.fetchTools();
  }
  render() {
    return (
      <div>
        <ToolsComponent />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tools: state.tools.data,
});

const mapDispatchToProps = dispatch => ({
  fetchTools: () => {
    dispatch(fetchTools());
  },
});

ToolsContainer.propTypes = {
  fetchTools: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ToolsContainer);

