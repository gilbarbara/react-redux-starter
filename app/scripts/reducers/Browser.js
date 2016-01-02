const initialState = {
	visible: false,
	message: '',
	status: '',
	withTimeout: true
};

export default {
	Browser: (state = initialState, action) => {

		switch (action.type) {
			case 'SHOW_ALERT':
			{
				return Object.assign({}, state, {
					visible: true,
					message: action.message,
					status: action.status,
					withTimeout: action.withTimeout !== undefined || true
				});
			}
			case 'HIDE_ALERT':
			{
				return Object.assign({}, initialState, {
					status: action.status
				});
			}
			default:
			{
				return state;
			}
		}
	}
};
