import React from 'react';
import PropTypes from 'prop-types';

const HeroBanner = ({ bannerContainer, textWrapper, bannerTitle }) => {
  return (
    <div className={bannerContainer}>
      <div className={textWrapper}>
        <p>{bannerTitle}</p>
      </div>
    </div>
  );
};

HeroBanner.propTypes = {
  bannerContainer: PropTypes.string.isRequired,
  textWrapper: PropTypes.string.isRequired,
  bannerTitle: PropTypes.string.isRequired,
};

export default HeroBanner;
