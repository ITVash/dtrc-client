const initialState = {
	items: [],
}

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case "CAT:GET_LIST":
			return state
		case "CAT:ADD":
			return {
				...state,
				items: [...state.items, payload],
			}
		case "CAT:UPP":
			return {
				...state,
				items: state.items.filter((item) => {
					if (item._id === payload._id) return Object.assign(item, payload)
					return item
				}),
			}
		case "CAT:DEL":
			return {
				...state,
				items: state.items.filter((item) => item._id !== payload),
			}
		default:
			return state
	}
}
