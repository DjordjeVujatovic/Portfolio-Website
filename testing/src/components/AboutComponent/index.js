import React from 'react';
import PropTypes from 'prop-types';

const AboutComponent = ({ about }) => {
  return (
    <div className="aboutComponent">
      <div className="aboutWrapper">
        <h1>{about.name}</h1>
        <h2>{about.role}</h2>
        <h3>{about.summary}</h3>
        <p>{about.aboutMe}</p>
      </div>
    </div>
  );
};

AboutComponent.propTypes = {
  about: PropTypes.string.isRequired,
};
export default AboutComponent;
