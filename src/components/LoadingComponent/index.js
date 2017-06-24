import React from 'react';

const LoadingComponent = () => {
  return (
    <div className="loadingContainer">
      <div className="lds-css ng-scope">
        <div className="lds-ripple">
          <div />
          <div />
        </div>
      </div>
    </div>
  );
};

export default LoadingComponent;
