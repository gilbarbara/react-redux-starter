export const hypeMachineState = {
	artists: {
		items: [],
		count: 0,
		ready: false
	},
	popular: {
		items: [],
		page: 1,
		ready: false
	},
	lastweek: {
		items: [],
		page: 1,
		ready: false
	}
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
	hypeMachine: (state = hypeMachineState, action) => {
		switch (action.type) {
			case 'ARTISTS_REQUEST':
				let artistsState = state;

				if (action.error) {
					artistsState = Object.assign({}, state, {
						artists: {
							...state.artists,
							error: action.error,
							message: printMessage(action.payload)
						}
					});
				}

				return artistsState;
			case 'ARTISTS_SUCCESS':
				return Object.assign({}, state, {
					artists: {
						items: [
							...state.artists.items,
							...action.payload.slice(state.artists.count)
						],
						count: state.artists.count + 10,
						ready: true
					}
				});
			case 'ARTISTS_FAILURE':
				return Object.assign({}, state, {
					artists: {
						...state.artists,
						error: action.error,
						message: action.payload.message
					}
				});
			case 'POPULAR_REQUEST':
				let popularState = state;

				if (action.error) {
					popularState = Object.assign({}, state, {
						popular: {
							...state.popular,
							error: action.error,
							message: printMessage(action.payload)
						}
					});
				}

				return popularState;
			case 'POPULAR_SUCCESS':
				return Object.assign({}, state, {
					popular: {
						items: [
							...state.popular.items,
							...action.payload
						],
						page: state.popular.page + 1,
						ready: true
					}
				});
			case 'POPULAR_FAILURE':
				return Object.assign({}, state, {
					popular: {
						...state.popular,
						error: action.error,
						message: action.payload.message
					}
				});
			case 'LASTWEEK_REQUEST':
				let lrState = state;

				if (action.error) {
					lrState = Object.assign({}, state, {
						lastweek: {
							...state.lastweek,
							error: action.error,
							message: printMessage(action.payload)
						}
					});
				}

				return lrState;
			case 'LASTWEEK_SUCCESS':
				return Object.assign({}, state, {
					lastweek: {
						items: [
							...state.lastweek.items,
							...action.payload
						],
						page: state.lastweek.page + 1,
						ready: true
					}
				});
			case 'LASTWEEK_FAILURE':
				return Object.assign({}, state, {
					lastweek: {
						...state.lastweek,
						error: action.error,
						message: action.payload.message
					}
				});
			default:
				return state;
		}
	}
};
