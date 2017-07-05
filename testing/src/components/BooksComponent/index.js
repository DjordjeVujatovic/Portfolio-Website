import React from 'react';
import PropTypes from 'prop-types';
import SectionsComponent from './SectionsComponent';
import HeroBanner from '../HeroBanner';


const BooksComponent = ({ books, booksComponentState, booksSectionsState, expandBooksComponent, closeBooksComponent, showReading, showFavorites, showFutureReads, closeList }) => { //eslint-disable-line
  return (
    <div className={booksComponentState.classState}>
      {booksComponentState.componentExpand ?
        <div className="booksOpenWrapper">
          <div className="buttonContainer">
            <button className={booksComponentState.buttonClass} onClick={() => closeBooksComponent()}><i className="fa fa-times fa-3x" aria-hidden="true" /></button>
          </div>
          <div className="componentsContainer">
            <div className="componentsWrapper">
              <SectionsComponent
                booksSectionsState={booksSectionsState}
                showFavorites={showFavorites}
                showReading={showReading}
                showFutureReads={showFutureReads}
                closeList={closeList}
                books={books}
              />
            </div>
          </div>
        </div>
        :
        <button className={booksComponentState.buttonClass} onClick={() => expandBooksComponent()}>{booksComponentState.buttonName}</button>
      }
    </div>
  );
};

BooksComponent.prototypes = {
  expandBooksComponent: PropTypes.func.isRequired,
  closeBooksComponent: PropTypes.func.isRequired,
};

export default BooksComponent;
