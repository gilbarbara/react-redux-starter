export const browserState = {
  visible: false,
  message: '',
  status: 'info',
  withTimeout: true
};

export default {
  browser: (state = browserState, action) => {
    switch (action.type) {
      case 'SHOW_ALERT':
        return Object.assign({}, state, {
          visible: true,
          message: action.message,
          status: action.status,
          withTimeout: action.withTimeout !== undefined || true
        });
      case 'HIDE_ALERT':
        return Object.assign({}, browserState, {
          status: state.status
        });
      default:
        return state;
    }
  }
};
