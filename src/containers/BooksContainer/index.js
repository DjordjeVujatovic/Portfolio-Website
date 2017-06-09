import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchBooks } from '../../redux/modules/actions/booksActions';
import BooksComponent from '../../components/AboutComponent';
import LoadingComponent from '../../components/LoadingComponent';

class BooksContainer extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }
  render() {
    const { isLoading } = this.props;
    return (
      <div>
        {
          isLoading ?
            <LoadingComponent />
            :
            <BooksComponent />
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
