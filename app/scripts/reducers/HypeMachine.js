const initialState = {
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
	HypeMachine: (state = initialState, action) => {
		switch (action.type) {
			case 'POPULAR_REQUEST':
			{
				let newState = Object.assign({}, state);

				if (action.error) {
					newState.popular.error = action.error;
					newState.popular.message = action.payload.message;
				}

				return newState;
			}
			case 'POPULAR_SUCCESS':
			{
				let newState = Object.assign({}, state);

				newState.popular.items = [
					...state.popular.items,
					...action.payload
				];
				newState.popular.page = state.popular.page + 1;
				newState.popular.ready = true;

				return newState;
			}
			case 'POPULAR_FAILURE':
			{
				let newState = Object.assign({}, state);

				if (action.error) {
					newState.popular.error = action.error;
					newState.popular.message = action.payload.message;
				}

				return newState;
			}
			case 'LASTWEEK_REQUEST':
			{
				let newState = Object.assign({}, state);

				if (action.error) {
					newState.lastweek.error = action.error;
					newState.lastweek.message = action.payload.message;
				}

				return newState;
			}
			case 'LASTWEEK_SUCCESS':
			{
				let newState = Object.assign({}, state);

				newState.lastweek.items = [
					...state.lastweek.items,
					...action.payload
				];
				newState.lastweek.page = state.lastweek.page + 1;
				newState.lastweek.ready = true;

				return newState;
			}
			case 'LASTWEEK_FAILURE':
			{
				let newState = Object.assign({}, state);

				if (action.error) {
					newState.lastweek.error = action.error;
					newState.lastweek.message = action.payload.message;
				}

				return newState;
			}
			default:
			{
				return state;
			}
		}
	}
};
