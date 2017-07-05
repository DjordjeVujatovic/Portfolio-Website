import React from 'react';

const PresentReadsComponent = ({ booksSectionsState, books }) => { //eslint-disable-line
  return (
    <div className={booksSectionsState.readingState.readingClassName}>
      <div className="readingComponentContainer">
        <div className="componentBanner">
          <div className="bannerContainer">
            <div>
              <p>Currently Reading</p>
            </div>
          </div>
        </div>
        <div className="booksContainer">
          <div>
            <p>{books[7].title} - {books[7].author}</p>
            <p>{books[8].title} - {books[8].author}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PresentReadsComponent;
