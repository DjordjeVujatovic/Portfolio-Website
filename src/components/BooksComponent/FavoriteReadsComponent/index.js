import React from 'react';

const FavoriteReadsComponent = ({ booksSectionsState, books }) => { //eslint-disable-line
  return (
    <div className={booksSectionsState.favoritesState.favoritesClassName}>
      <div className="favoritesComponentContainer">
        <div className="componentBanner">
          <div className="bannerContainer">
            <div>
              <p>Favorite Books</p>
            </div>
          </div>
        </div>
        <div className="booksContainer">
          <div>
            <p>{books[3].title} - {books[3].author}</p>
            <p>{books[4].title} - {books[4].author}</p>
            <p>{books[2].title} - {books[2].author}</p>
            <p>{books[5].title} - {books[5].author}</p>
            <p>{books[6].title} - {books[6].author}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoriteReadsComponent;
