export const hypeMachineState = {
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

export default {
	hypeMachine: (state = hypeMachineState, action) => {
		switch (action.type) {
			case 'POPULAR_REQUEST':
			{
				let newState = state;
				if (action.error) {
					newState = Object.assign({}, state, {
						popular: {
							...state.popular,
							error: action.error,
							message: action.payload.message
						}
					});
				}

				return newState;
			}
			case 'POPULAR_SUCCESS':
			{
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
			}
			case 'POPULAR_FAILURE':
			{
				return Object.assign({}, state, {
					popular: {
						...state.popular,
						error: action.error,
						message: action.payload.message
					}
				});
			}
			case 'LASTWEEK_REQUEST':
			{
				let newState = state;

				if (action.error) {
					newState = Object.assign({}, state, {
						lastweek: {
							...state.lastweek,
							error: action.error,
							message: action.payload.message
						}
					});
				}

				return newState;
			}
			case 'LASTWEEK_SUCCESS':
			{
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
			}
			case 'LASTWEEK_FAILURE':
			{
				return Object.assign({}, state, {
					lastweek: {
						...state.lastweek,
						error: action.error,
						message: action.payload.message
					}
				});
			}
			default:
			{
				return state;
			}
		}
	}
};
