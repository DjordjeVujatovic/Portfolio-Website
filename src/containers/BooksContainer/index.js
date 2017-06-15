import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchBooks } from '../../redux/modules/actions/FetchActions/booksActions';
import BooksComponent from '../../components/BooksComponent';
import LoadingComponent from '../../components/LoadingComponent';
import { expandBooksComponent, closeBooksComponent } from '../../redux/modules/actions/BooksComponentActions/booksComponentActions';

class BooksContainer extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { isLoading, books, booksComponentState, expandBooksComponent, closeBooksComponent } = this.props; // eslint-disable-line
    return (
      <div>
        {
          isLoading ?
            <LoadingComponent />
            :
            <BooksComponent
              books={books}
              booksComponentState={booksComponentState}
              expandBooksComponent={expandBooksComponent}
              closeBooksComponent={closeBooksComponent}
            />
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.books.isLoading,
  books: state.books.data,
  booksComponentState: state.booksComponentState,
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
});

BooksContainer.propTypes = {
  fetchBooks: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  expandBooksComponent: PropTypes.func.isRequired,
  closeBooksComponent: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksContainer);
