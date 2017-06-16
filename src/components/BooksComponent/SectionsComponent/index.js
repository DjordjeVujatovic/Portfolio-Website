import React from 'react';
import FavoriteReadsComponent from '../FavoriteReadsComponent';
import FutureReadsComponent from '../FutureReadsComponent';
import PresentReadsComponent from '../PresentReadsComponent';

const SectionsComponent = ({ booksSectionsState,books, showReading, showFavorites, showFutureReads, closeList  }) => {//eslint-disable-line
  return (
    <div className="sectionsComponentContainer">
      <div className="componentsContainer">
        <FavoriteReadsComponent booksSectionsState={booksSectionsState} books={books} />
        <FutureReadsComponent booksSectionsState={booksSectionsState} books={books} />
        <PresentReadsComponent booksSectionsState={booksSectionsState} books={books} />
      </div>
      <div className="buttonsContainer">
        {booksSectionsState.favoritesState.showFavorites ?
          <button className={booksSectionsState.favoritesState.buttonClassFavorites} onClick={() => closeList()}>{booksSectionsState.favoritesState.buttonNameFavorites}</button>
          :
          <button className={booksSectionsState.favoritesState.buttonClassFavorites} onClick={() => showFavorites()}>{booksSectionsState.favoritesState.buttonNameFavorites}</button>
        }
        {booksSectionsState.readingState.showReading ?
          <button className={booksSectionsState.readingState.buttonClassReading} onClick={() => closeList()}>{booksSectionsState.readingState.buttonNameReading}</button>
          :
          <button className={booksSectionsState.readingState.buttonClassReading} onClick={() => showReading()}>{booksSectionsState.readingState.buttonNameReading}</button>
        }
        {booksSectionsState.futureReadsState.showFutureReads ?
          <button className={booksSectionsState.futureReadsState.buttonClassFuture} onClick={() => closeList()}>{booksSectionsState.futureReadsState.buttonNameFuture}</button>
          :
          <button className={booksSectionsState.futureReadsState.buttonClassFuture} onClick={() => showFutureReads()}>{booksSectionsState.futureReadsState.buttonNameFuture}</button>
        }
      </div>
    </div>
  );
};

export default SectionsComponent;
