/* react-hooks/exhaustive-deps */
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Input, Button, Tooltip } from "antd"
import { Helmet } from "react-helmet"
import {
	DeleteOutlined,
	EditOutlined,
	InfoCircleOutlined,
} from "@ant-design/icons"

import { categoryActions } from "../../../redux/actions"

import "./style.scss"

let idEdit = null
const Category = () => {
	const [categorys, setCategorys] = React.useState("")
	const [editor, setEditor] = React.useState(false)
	const items = useSelector(({ category }) => category.items)
	const dispatch = useDispatch()
	const edit = (id, e) => {
		idEdit = id
		setCategorys(e)
		setEditor(true)
		console.log("idEdit", idEdit)
	}
	const editObj = () => {
		const obj = {
			_id: idEdit,
			title: categorys,
		}
		dispatch(categoryActions.uppList(obj))
		setCategorys("")
		idEdit = null
		setEditor(false)
	}
	const addNew = () => {
		const rand = Math.round(Math.random() * 1000)
		const obj = {
			_id: rand,
			title: categorys,
		}
		dispatch(categoryActions.addList(obj))
		setCategorys("")
	}
	const text = <span>Категории магазинов</span>
	React.useEffect(() => {
		dispatch(categoryActions.getList())
	}, [items, dispatch])
	return (
		<div className='categoryBox'>
			<Helmet>
				<title>Категории | (ТРЦ Донецк Сити)</title>
			</Helmet>
			<h1>
				Ктегории{" "}
				<Tooltip placement='right' title={text}>
					<InfoCircleOutlined />
				</Tooltip>
			</h1>
			<div className='category'>
				<h4>Текущие категории:</h4>
				<ul>
					{items.length > 0 ? (
						items.map((item, index) => (
							<li key={index}>
								{item.title}
								<span>
									<Button
										type='default'
										onClick={() => {
											edit(item._id, item.title)
										}}
									>
										<EditOutlined />
									</Button>
									<Button
										type='default'
										onClick={() => {
											if (
												window.confirm(
													"Вы действительно хотите удалить категорию?",
												)
											) {
												dispatch(categoryActions.delList(item._id))
											}
										}}
									>
										<DeleteOutlined />
									</Button>
								</span>
							</li>
						))
					) : (
						<li>
							<span>Список пуст!</span>
						</li>
					)}
				</ul>
			</div>
			<div className='new_category'>
				<h4>Добавить новую категорию:</h4>
				<Input
					value={categorys}
					onChange={(e) => setCategorys(e.target.value)}
					onPressEnter={() => (editor ? editObj() : addNew())}
				/>{" "}
				{editor ? (
					<Button type='ghost' onClick={editObj}>
						Редактировать
					</Button>
				) : (
					<Button type='ghost' onClick={addNew}>
						Добавить
					</Button>
				)}
			</div>
		</div>
	)
}

export default Category
