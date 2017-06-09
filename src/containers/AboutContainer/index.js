import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchAbout } from '../../redux/modules/actions/aboutActions';
import AboutComponent from '../../components/AboutComponent';
// import ToolsComponent from '../../components/ToolsComponent';
// import BooksComponent from '../../components/BooksComponent';
// import EducationComponent from '../../components/EducationComponent';

class AboutContainer extends Component {
  componentDidMount() {
    this.props.fetchAbout();
  }
  /*
    renderAboutComponent() {
      const about = this.props.about; //eslint-disable-line
      console.log(about);
      return about.map(text => (
        <AboutComponent
          paragraph={text.data.aboutme[0].aboutme}
        />
      ));
    }*/
  render() {
    const about = this.props.about; //eslint-disable-line
    return (
      <div>
        hello
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
