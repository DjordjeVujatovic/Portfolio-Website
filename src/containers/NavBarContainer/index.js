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
        <MobileNavBar expand={this.props.expand} />
        <MobileNavBarExpanded closeExpand={this.props.closeExpand} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  mobileNav: state.mobileNav.displayExpand,
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
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBarContainer);
