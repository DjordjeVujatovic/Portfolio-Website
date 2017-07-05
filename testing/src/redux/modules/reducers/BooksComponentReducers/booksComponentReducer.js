import {
  EXPAND_BOOKS_COMPONENT,
  CLOSE_BOOKS_COMPONENT,
} from '../../actions/BooksComponentActions/booksComponentActions';

const initialState = {
  componentExpand: false,
  classState: 'booksClose',
  buttonName: 'Open Book',
  buttonClass: 'booksButtonClose',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case EXPAND_BOOKS_COMPONENT:
      return {
        ...state,
        componentExpand: true,
        classState: 'booksOpen',
        buttonClass: 'booksButtonOpen',
        buttonName: 'Close Book',
      };
    case CLOSE_BOOKS_COMPONENT:
      return {
        ...state,
        componentExpand: false,
        classState: 'booksClose',
        buttonName: 'Open Book',
        buttonClass: 'booksButtonClose',
      };
    default:
      return state;
  }
};
