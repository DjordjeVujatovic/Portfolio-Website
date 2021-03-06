import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MobileNavBar from '../../components/NavBarComponent/MobileNavBar';
import MobileNavBarExpanded from '../../components/NavBarComponent/MobileNavBarExpand';
import { expand, closeExpand } from '../../redux/modules/actions/NavigationActions/mobileNavActions';
import HeaderComponent from '../../components/HeaderComponent';


class NavBarContainer extends Component {
  render() {
    const { componentRef } = this.props; //eslint-disable-line
    return (
      <div ref={componentRef}>
        {this.props.displayState ?
          <MobileNavBarExpanded
            closeExpand={this.props.closeExpand}
          />
          :
          <MobileNavBar expand={this.props.expand} />
        }
        <HeaderComponent />
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
