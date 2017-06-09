import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MobileNavBar from '../../components/MobileNavBar';
import MobileNavBarExpanded from '../../components/MobileNavBarExpand';
import { expand, closeExpand } from '../../redux/modules/actions/mobileNavActions';
import { expandSubMenu, closeSubMenu } from '../../redux/modules/actions/mobileSubMenuActions';


class NavBarContainer extends Component {
  render() {
    return (
      <div>
        {this.props.displayState ?
          <MobileNavBarExpanded
            closeExpand={this.props.closeExpand}
            closeSubMenu={this.props.closeSubMenu}
            expandSubMenu={this.props.expandSubMenu}
            subMenuState={this.props.subMenuState}
          />
          :
          <MobileNavBar expand={this.props.expand} />
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  displayState: state.mobileNav.displayExpand,
  subMenuState: state.mobileSubMenu.subMenuExpand,
});

const mapDispatchToProps = dispatch => ({
  expand: () => {
    dispatch(expand());
  },
  closeExpand: () => {
    dispatch(closeExpand());
  },
  expandSubMenu: () => {
    dispatch(expandSubMenu());
  },
  closeSubMenu: () => {
    dispatch(closeSubMenu());
  },
});

NavBarContainer.propTypes = {
  expand: PropTypes.func.isRequired,
  closeExpand: PropTypes.func.isRequired,
  displayState: PropTypes.bool.isRequired,
  expandSubMenu: PropTypes.func.isRequired,
  closeSubMenu: PropTypes.func.isRequired,
  subMenuState: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBarContainer);