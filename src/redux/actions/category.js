const actions = {
	getList: () => ({
		type: "CAT:GET_LIST",
	}),
	addList: (data) => ({
		type: "CAT:ADD",
		payload: data,
	}),
	uppList: (data) => ({
		type: "CAT:UPP",
		payload: data,
	}),
	delList: (id) => ({
		type: "CAT:DEL",
		payload: id,
	}),
}
export default actions
