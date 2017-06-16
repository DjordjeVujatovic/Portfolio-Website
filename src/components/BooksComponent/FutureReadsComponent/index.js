import React from 'react';

const FutureReadsComponent = ({ booksSectionsState, books }) => { //eslint-disable-line
  return (
    <div className={booksSectionsState.futureReadsState.futuresClassName}>
      <div className="futureReadsComponentContainer">
        <div className="componentBanner">
          <div className="bannerContainer">
            <div>
              <p>Looking Forward To Reading</p>
            </div>
          </div>
        </div>
        <div className="booksContainer">
          <div className="booksWrapper">
            <div>
              <p>{books[9].title} - {books[9].author}</p>
              <p>{books[10].title} - {books[10].author}</p>
              <p>{books[11].title} - {books[11].author}</p>
              <p>{books[12].title} - {books[12].author}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureReadsComponent;
