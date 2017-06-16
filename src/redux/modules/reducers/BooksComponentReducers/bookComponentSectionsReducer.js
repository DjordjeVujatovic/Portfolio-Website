import {
  SHOW_FAVORITES,
  SHOW_FUTURE_READS,
  SHOW_READING,
  CLOSE_LIST,
} from '../../actions/BooksComponentActions/bookComponentSectionsActions';

const initialState = {
  favoritesState: {
    showFavorites: false,
    buttonNameFavorites: 'Open',
    buttonClassFavorites: 'buttonClose',
    favoritesClassName: 'favoritesClose',
  },
  readingState: {
    showReading: false,
    buttonNameReading: 'Open',
    buttonClassReading: 'buttonClose',
    readingClassName: 'readingClose',
  },
  futureReadsState: {
    showFutureReads: false,
    buttonNameFuture: 'Open',
    buttonClassFuture: 'buttonClose',
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
          buttonClassFavorites: 'buttonOpen',
          favoritesClassName: 'favoritesOpen',
        },
        readingState: {
          showReading: false,
          buttonNameReading: 'Open',
          buttonClassReading: 'buttonClose',
          readingClassName: 'readingClose',
        },
        futureReadsState: {
          showFutureReads: false,
          buttonNameFuture: 'Open',
          buttonClassFuture: 'buttonClose',
          futuresClassName: 'futuresClose',
        },
      };
    case SHOW_FUTURE_READS:
      return {
        ...state,
        favoritesState: {
          showFavorites: false,
          buttonNameFavorites: 'Open',
          buttonClassFavorites: 'buttonClose',
          favoritesClassName: 'favoritesClose',
        },
        readingState: {
          showReading: false,
          buttonNameReading: 'Open',
          buttonClassReading: 'buttonClose',
          readingClassName: 'readingClose',
        },
        futureReadsState: {
          showFutureReads: true,
          buttonNameFuture: 'Close',
          buttonClassFuture: 'buttonOpen',
          futuresClassName: 'futuresOpen',
        },
      };
    case SHOW_READING:
      return {
        ...state,
        favoritesState: {
          showFavorites: false,
          buttonNameFavorites: 'Open',
          buttonClassFavorites: 'buttonClose',
          favoritesClassName: 'favoritesClose',
        },
        readingState: {
          showReading: true,
          buttonNameReading: 'Close',
          buttonClassReading: 'buttonOpen',
          readingClassName: 'readingOpen',
        },
        futureReadsState: {
          showFutureReads: false,
          buttonNameFuture: 'Open',
          buttonClassFuture: 'buttonClose',
          futuresClassName: 'futuresClose',
        },
      };
    case CLOSE_LIST: {
      return {
        ...state,
        favoritesState: {
          showFavorites: false,
          buttonNameFavorites: 'Open',
          buttonClassFavorites: 'buttonClose',
          favoritesClassName: 'favoritesClose',
        },
        readingState: {
          showReading: false,
          buttonNameReading: 'Open',
          buttonClassReading: 'buttonClose',
          readingClassName: 'readingClose',
        },
        futureReadsState: {
          showFutureReads: false,
          buttonNameFuture: 'Open',
          buttonClassFuture: 'buttonClose',
          futuresClassName: 'futuresClose',
        },
      };
    }
    default:
      return state;
  }
};
