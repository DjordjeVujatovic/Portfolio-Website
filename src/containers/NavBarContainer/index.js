import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MobileNavBar from '../../components/MobileNavBar';
import MobileNavBarExpanded from '../../components/MobileNavBarExpand';
import { expand, closeExpand } from '../../redux/modules/actions/mobileNavActions';


class NavBarContainer extends Component {
  render() {
    return (
      <div>
        {this.props.displayState ?
          <MobileNavBarExpanded closeExpand={this.props.closeExpand} />
          :
          <MobileNavBar expand={this.props.expand} />
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  displayState: state.mobileNav.displayExpand,
});

const mapDispatchToProps = dispatch => ({
  expand: () => {
    dispatch(expand());
  },
  closeExpand: () => {
    dispatch(closeExpand());
  },
});

NavBarContainer.propTypes = {
  expand: PropTypes.func.isRequired,
  closeExpand: PropTypes.func.isRequired,
  displayState: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBarContainer);
