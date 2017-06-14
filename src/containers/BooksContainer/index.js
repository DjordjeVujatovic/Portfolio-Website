import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchBooks } from '../../redux/modules/actions/FetchActions/booksActions';
import BooksComponent from '../../components/BooksComponent';
import LoadingComponent from '../../components/LoadingComponent';

class BooksContainer extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { isLoading, books } = this.props; // eslint-disable-line
    return (
      <div>
        {
          isLoading ?
            <LoadingComponent />
            :
            <BooksComponent books={books} />
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.books.isLoading,
  books: state.books.data,
});

const mapDispatchToProps = dispatch => ({
  fetchBooks: () => {
    dispatch(fetchBooks());
  },
});

BooksContainer.propTypes = {
  fetchBooks: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksContainer);
