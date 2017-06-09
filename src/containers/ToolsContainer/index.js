import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchTools } from '../../redux/modules/actions/toolsActions';
import ToolsComponent from '../../components/ToolsComponent';
import LoadingComponent from '../../components/LoadingComponent';

class ToolsContainer extends Component {
  componentDidMount() {
    this.props.fetchTools();
  }
  render() {
    const { isLoading } = this.props;
    return (
      <div>
        {isLoading ?
          <LoadingComponent />
          :
          <ToolsComponent />
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.tools.isLoading,
  tools: state.tools.data,
});

const mapDispatchToProps = dispatch => ({
  fetchTools: () => {
    dispatch(fetchTools());
  },
});

ToolsContainer.propTypes = {
  fetchTools: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ToolsContainer);

