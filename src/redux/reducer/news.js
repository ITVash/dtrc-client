const initialState = {
	items: [],
}
export default (state = initialState, { type, payload }) => {
	switch (type) {
		case "NEWS:GET_LIST":
			return {
				...state,
			}
		case "NEWS:ADD_LIST":
			return {
				...state,
				items: [...state.items, payload],
			}
		case "NEWS:UPP_LIST":
			return {
				...state,
				items: state.items.filter((item) => {
					if (item._id === payload._id) Object.assign(item, payload)
					return item
				}),
			}
		case "NEWS:DEL_LIST":
			return {
				...state,
				items: state.items.filter((item) => item._id !== payload),
			}

		default:
			return state
	}
}
