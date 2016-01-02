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
				return Object.assign({}, initialState, {
					visible: true,
					message: action.message,
					status: action.status,
					withTimeout: action.withTimeout !== undefined || true
				});
			}
			default:
			{
				return state;
			}
		}
	}
};
