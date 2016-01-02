const initialState = {
	featured: []
};

export default {
	HM: (state = initialState, action) => {

		switch (action.type) {
			case 'FEATURED_SUCCESS':
			{
				return Object.assign({}, initialState, {
					featured: [
						...state,
						...action.data
					]
				});
			}
			case 'FEATURED_FAIL':
			{
				return Object.assign({}, initialState, {
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
