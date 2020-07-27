const initialState = {
	items: [],
	isLoading: false,
}

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case "USER:GET_USER":
			return {
				...state,
				items: payload,
			}
		default:
			return state
	}
}
