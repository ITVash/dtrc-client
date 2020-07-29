const actions = {
	getNews: () => ({
		type: "NEWS:GET_LIST",
	}),
	addNews: (obj) => ({
		type: "NEWS:ADD_LIST",
		payload: obj,
	}),
	uppNews: (obj) => ({
		type: "NEWS:UPP_LIST",
		payload: obj,
	}),
	delNews: (id) => ({
		type: "NEWS:DEL_LIST",
		payload: id,
	}),
}

export default actions
