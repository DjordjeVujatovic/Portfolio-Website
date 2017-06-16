import React from 'react';
import FutureReadsComponent from '../FutureReadsComponent';
import PresentReadsComponent from '../PresentReadsComponent';
import FavoriteReadsComponent from '../FavoriteReadsComponent';

const SectionsComponent = ({ booksSectionsState, showReading, showFavorites, showFutureReads, closeList }) => {//eslint-disable-line
  return (
    <div>
      {booksSectionsState.favoritesState.showFavorites ?
        <div className={booksSectionsState.favoritesState.favoritesClassName}>
          <FavoriteReadsComponent />
          <button className={booksSectionsState.favoritesState.buttonClassFavorites} onClick={() => closeList()}>{booksSectionsState.favoritesState.buttonNameFavorites}</button>
        </div>
        :
        <button className={booksSectionsState.favoritesState.buttonClassFavorites} onClick={() => showFavorites()}>{booksSectionsState.favoritesState.buttonNameFavorites}</button>
      }
      {booksSectionsState.readingState.showReading ?
        <div className={booksSectionsState.readingState.readingClassName}>
          <PresentReadsComponent />
          <button className={booksSectionsState.readingState.buttonClassReading} onClick={() => showFavorites()}>{booksSectionsState.readingState.buttonNameReading}</button>
        </div>
        :
        <button className={booksSectionsState.readingState.buttonClassReading} onClick={() => showReading()}>{booksSectionsState.readingState.buttonNameReading}</button>
      }
      {booksSectionsState.futureReadsState.showFutureReads ?
        <div className={booksSectionsState.futureReadsState.futuresClassName}>
          <FutureReadsComponent />
          <button className={booksSectionsState.futureReadsState.buttonClassButtonClassFuture} onClick={() => showFavorites()}>{booksSectionsState.futureReadsState.buttonNameFuture}</button>
        </div>
        :
        <button className={booksSectionsState.futureReadsState.buttonClassFuture} onClick={() => showFutureReads()}>{booksSectionsState.futureReadsState.buttonNameFuture}</button>
      }
    </div>
  );
};

export default SectionsComponent;
