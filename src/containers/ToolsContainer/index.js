import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchTools } from '../../redux/modules/actions/FetchActions/toolsActions';
import { expandDevToolsComponent, closeDevToolsComponent } from '../../redux/modules/actions/ToolsComponentActions/devToolsComponentActions';
import { expandExperienceComponent, closeExperienceComponent } from '../../redux/modules/actions/ToolsComponentActions/experienceComponentActions';
import { expandLanguageComponent, closeLanguageComponent } from '../../redux/modules/actions/ToolsComponentActions/languageComponentActions';
import { expandTechnologiesComponent, closeTechnologiesComponent } from '../../redux/modules/actions/ToolsComponentActions/technologiesComponentAction';
import ToolsComponent from '../../components/ToolsComponent';
import LoadingComponent from '../../components/LoadingComponent';
import HeroBanner from '../../components/HeroBanner';

class ToolsContainer extends Component {
  componentDidMount() {
    this.props.fetchTools();
  }
  render() {
    const { isLoading,
      tools, //eslint-disable-line
      devToolsState, //eslint-disable-line
      experienceState, //eslint-disable-line
      languagesState, //eslint-disable-line
      technologiesState, //eslint-disable-line
      expandDevToolsComponent,
      closeDevToolsComponent,
      expandExperienceComponent,
      closeExperienceComponent,
      expandLanguagesComponent,
      closeLanguagesComponent,
      expandTechnologiesComponent,
      closeTechnologiesComponent,
      componentRef, //eslint-disable-line

          } = this.props;
    return (
      <div ref={componentRef}>
        {isLoading ?
          <LoadingComponent />
          :
          <div>
            <HeroBanner bannerContainer="toolsHeroBanner" textWrapper="toolsTextWrapper" bannerTitle="Tool Box" />
            <ToolsComponent
              tools={tools}
              devToolsState={devToolsState}
              experienceState={experienceState}
              languagesState={languagesState}
              technologiesState={technologiesState}
              expandDevToolsComponent={expandDevToolsComponent}
              closeDevToolsComponent={closeDevToolsComponent}
              expandExperienceComponent={expandExperienceComponent}
              closeExperienceComponent={closeExperienceComponent}
              expandLanguageComponent={expandLanguagesComponent}
              closeLanguageComponent={closeLanguagesComponent}
              expandTechnologiesComponent={expandTechnologiesComponent}
              closeTechnologiesComponent={closeTechnologiesComponent}
            />
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.tools.isLoading,
  tools: state.tools.data,
  devToolsState: state.devToolsComponentState,
  experienceState: state.experienceComponentState,
  languagesState: state.languagesComponentState,
  technologiesState: state.technologiesComponentState,
});

const mapDispatchToProps = dispatch => ({
  fetchTools: () => {
    dispatch(fetchTools());
  },
  expandDevToolsComponent: () => {
    dispatch(expandDevToolsComponent());
  },
  closeDevToolsComponent: () => {
    dispatch(closeDevToolsComponent());
  },
  expandExperienceComponent: () => {
    dispatch(expandExperienceComponent());
  },
  closeExperienceComponent: () => {
    dispatch(closeExperienceComponent());
  },
  expandLanguagesComponent: () => {
    dispatch(expandLanguageComponent());
  },
  closeLanguagesComponent: () => {
    dispatch(closeLanguageComponent());
  },
  expandTechnologiesComponent: () => {
    dispatch(expandTechnologiesComponent());
  },
  closeTechnologiesComponent: () => {
    dispatch(closeTechnologiesComponent());
  },
});

ToolsContainer.propTypes = {
  fetchTools: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  expandDevToolsComponent: PropTypes.func.isRequired,
  closeDevToolsComponent: PropTypes.func.isRequired,
  expandExperienceComponent: PropTypes.func.isRequired,
  closeExperienceComponent: PropTypes.func.isRequired,
  expandLanguagesComponent: PropTypes.func.isRequired,
  closeLanguagesComponent: PropTypes.func.isRequired,
  expandTechnologiesComponent: PropTypes.func.isRequired,
  closeTechnologiesComponent: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ToolsContainer);

