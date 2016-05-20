export const artistsState = {
  items: [],
  count: 0,
  ready: false,
  running: false
};

export const popularState = {
  items: [],
  page: 1,
  ready: false,
  running: false
};

export const lastweekState = {
  items: [],
  page: 1,
  ready: false,
  running: false
};

/**
 * Change request message.
 *
 * @param {Object} payload
 * @returns {string}
 */
function printMessage(payload) {
  return payload.name === 'RequestError' ? "That's all Folks!" : payload.message;
}

export default {
  artists: (state = artistsState, action) => {
    if (action.type === 'ARTISTS_REQUEST') {
      const thisState = { running: true };

      if (action.error) {
        thisState.error = action.error;
        thisState.message = printMessage(action.payload);
      }

      return Object.assign({}, state, thisState);
    }
    else if (action.type === 'ARTISTS_SUCCESS') {
      return Object.assign({}, state, {
        items: [
          ...state.items,
          ...action.payload.slice(state.count)
        ],
        count: state.count + 10,
        running: false,
        ready: true
      });
    }
    else if (action.type === 'ARTISTS_FAILURE') {
      return Object.assign({}, state, {
        items: state.items,
        error: action.error,
        message: action.payload.message,
        running: false
      });
    }

    return state;
  },
  popular: (state = popularState, action) => {
    if (action.type === 'POPULAR_REQUEST') {
      const thisState = { running: true };

      if (action.error) {
        thisState.error = action.error;
        thisState.message = printMessage(action.payload);
      }

      return Object.assign({}, state, thisState);
    }
    else if (action.type === 'POPULAR_SUCCESS') {
      return Object.assign({}, state, {
        items: [
          ...state.items,
          ...action.payload
        ],
        page: state.page + 1,
        ready: true,
        running: false
      });
    }
    else if (action.type === 'POPULAR_FAILURE') {
      return Object.assign({}, state, {
        items: state.items,
        error: action.error,
        message: action.payload.message,
        running: false
      });
    }

    return state;
  },
  lastweek: (state = lastweekState, action) => {
    if (action.type === 'LASTWEEK_REQUEST') {
      const thisState = { running: true };

      if (action.error) {
        thisState.error = action.error;
        thisState.message = printMessage(action.payload);
      }

      return Object.assign({}, state, thisState);
    }
    else if (action.type === 'LASTWEEK_SUCCESS') {
      return Object.assign({}, state, {
        items: [
          ...state.items,
          ...action.payload
        ],
        page: state.page + 1,
        ready: true,
        running: false
      });
    }
    else if (action.type === 'LASTWEEK_FAILURE') {
      return Object.assign({}, state, {
        items: state.items,
        error: action.error,
        message: action.payload.message,
        running: false
      });
    }

    return state;
  }
};
