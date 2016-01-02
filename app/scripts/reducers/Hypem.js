const initialState = {
	featured: [],
	page: 1,
	ready: false
};

export default {
	HM: (state = initialState, action) => {

		switch (action.type) {
			case 'FEATURED_REQUEST':
			{
				let newState = Object.assign({}, state, {
					error: action.error
				});

				if (action.error) {
					newState.message = action.payload.message;
				}

				return newState;
			}
			case 'FEATURED_SUCCESS':
			{
				return Object.assign({}, state, {
					featured: [
						...state.featured,
						...action.payload
					],
					page: state.page + 1,
					ready: true
				});
			}
			case 'FEATURED_FAILURE':
			{
				return Object.assign({}, state, {
					error: 'FAIL'
				});
			}
			default:
			{
				return state;
			}
		}
	}
};
