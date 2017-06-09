import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchBooks } from '../../redux/modules/actions/booksActions';
import BooksComponent from '../../components/AboutComponent';

class BooksContainer extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }
  render() {
    return (
      <div>
        <BooksComponent />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  books: state.books.data,
});

const mapDispatchToProps = dispatch => ({
  fetchBooks: () => {
    dispatch(fetchBooks());
  },
});

BooksContainer.propTypes = {
  fetchBooks: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksContainer);
