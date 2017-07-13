import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchBooks } from '../../redux/modules/actions/FetchActions/booksActions';
import BooksComponent from '../../components/BooksComponent';
import LoadingComponent from '../../components/LoadingComponent';
import { expandBooksComponent, closeBooksComponent } from '../../redux/modules/actions/BooksComponentActions/booksComponentActions';
import { showReading, showFavorites, showFutureReads, closeList } from '../../redux/modules/actions/BooksComponentActions/bookComponentSectionsActions';
import HeroBanner from '../../components/HeroBanner';

class BooksContainer extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { isLoading, books, booksComponentState, booksSectionsState, expandBooksComponent, closeBooksComponent, showReading, showFavorites, showFutureReads, closeList, componentRef } = this.props; // eslint-disable-line
    return (
      <div className="books-container">
        {
          isLoading ?
            <LoadingComponent />
            :
            <div ref={componentRef}>
              <BooksComponent
                books={books}
                booksComponentState={booksComponentState}
                expandBooksComponent={expandBooksComponent}
                closeBooksComponent={closeBooksComponent}
                booksSectionsState={booksSectionsState}
                showReading={showReading}
                showFavorites={showFavorites}
                showFutureReads={showFutureReads}
                closeList={closeList}
              />
            </div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.books.isLoading,
  books: state.books.data,
  booksComponentState: state.booksComponentState,
  booksSectionsState: state.bookSectionsState,
});

const mapDispatchToProps = dispatch => ({
  fetchBooks: () => {
    dispatch(fetchBooks());
  },
  expandBooksComponent: () => {
    dispatch(expandBooksComponent());
  },
  closeBooksComponent: () => {
    dispatch(closeBooksComponent());
  },
  showReading: () => {
    dispatch(showReading());
  },
  showFavorites: () => {
    dispatch(showFavorites());
  },
  showFutureReads: () => {
    dispatch(showFutureReads());
  },
  closeList: () => {
    dispatch(closeList());
  },
});

BooksContainer.propTypes = {
  fetchBooks: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  expandBooksComponent: PropTypes.func.isRequired,
  closeBooksComponent: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksContainer);
