import {
  SHOW_FAVORITES,
  SHOW_FUTURE_READS,
  SHOW_READING,
  CLOSE_LIST,
} from '../../actions/BooksComponentActions/bookComponentSectionsActions';

const initialState = {
  favoritesState: {
    showFavorites: false,
    buttonNameFavorites: 'Favorites',
    buttonClassFavorites: 'buttonCloseFavorites',
    favoritesClassName: 'favoritesClose',
  },
  readingState: {
    showReading: false,
    buttonNameReading: 'Reading Now',
    buttonClassReading: 'buttonCloseReading',
    readingClassName: 'readingClose',
  },
  futureReadsState: {
    showFutureReads: false,
    buttonNameFuture: 'Future Reads',
    buttonClassFuture: 'buttonCloseFuture',
    futuresClassName: 'futuresClose',
  },
};


export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_FAVORITES:
      return {
        ...state,
        favoritesState: {
          showFavorites: true,
          buttonNameFavorites: 'Close',
          buttonClassFavorites: 'buttonOpenFavorites',
          favoritesClassName: 'favoritesOpen',
        },
        readingState: {
          showReading: false,
          buttonNameReading: 'Reading Now',
          buttonClassReading: 'buttonCloseReading',
          readingClassName: 'readingClose',
        },
        futureReadsState: {
          showFutureReads: false,
          buttonNameFuture: 'Future Reads',
          buttonClassFuture: 'buttonCloseFuture',
          futuresClassName: 'futuresClose',
        },
      };
    case SHOW_FUTURE_READS:
      return {
        ...state,
        favoritesState: {
          showFavorites: false,
          buttonNameFavorites: 'Favorites',
          buttonClassFavorites: 'buttonCloseFavorites',
          favoritesClassName: 'favoritesClose',
        },
        readingState: {
          showReading: false,
          buttonNameReading: 'Reading Now',
          buttonClassReading: 'buttonCloseReading',
          readingClassName: 'readingClose',
        },
        futureReadsState: {
          showFutureReads: true,
          buttonNameFuture: 'Close',
          buttonClassFuture: 'buttonOpenFuture',
          futuresClassName: 'futuresOpen',
        },
      };
    case SHOW_READING:
      return {
        ...state,
        favoritesState: {
          showFavorites: false,
          buttonNameFavorites: 'Favorites',
          buttonClassFavorites: 'buttonCloseFavorites',
          favoritesClassName: 'favoritesClose',
        },
        readingState: {
          showReading: true,
          buttonNameReading: 'Close',
          buttonClassReading: 'buttonOpenReading',
          readingClassName: 'readingOpen',
        },
        futureReadsState: {
          showFutureReads: false,
          buttonNameFuture: 'Future Reads',
          buttonClassFuture: 'buttonCloseFuture',
          futuresClassName: 'futuresClose',
        },
      };
    case CLOSE_LIST: {
      return {
        ...state,
        favoritesState: {
          showFavorites: false,
          buttonNameFavorites: 'Favorites',
          buttonClassFavorites: 'buttonCloseFavorites',
          favoritesClassName: 'favoritesClose',
        },
        readingState: {
          showReading: false,
          buttonNameReading: 'Reading Now',
          buttonClassReading: 'buttonCloseReading',
          readingClassName: 'readingClose',
        },
        futureReadsState: {
          showFutureReads: false,
          buttonNameFuture: 'Future Reads',
          buttonClassFuture: 'buttonCloseFuture',
          futuresClassName: 'futuresClose',
        },
      };
    }
    default:
      return state;
  }
};
