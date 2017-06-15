import React from 'react';
import PropTypes from 'prop-types';
import FutureReadsComponent from '../BooksComponent/FutureReadsComponent';
import PresentReadsComponent from '../BooksComponent/PresentReadsComponent';
import FavoriteReadsComponent from '../BooksComponent/FavoriteReadsComponent';


const BooksComponent = ({ books, booksComponentState, expandBooksComponent, closeBooksComponent }) => { //eslint-disable-line
  return (
    <div className={booksComponentState.classState}>
      {booksComponentState.componentExpand ?
        <div>
          <button className={booksComponentState.buttonClass} onClick={() => closeBooksComponent()}>{booksComponentState.buttonName}</button>
          <FutureReadsComponent />
          <PresentReadsComponent />
          <FutureReadsComponent />
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
