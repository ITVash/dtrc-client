import React from "react"
import { Helmet } from "react-helmet"
import { Table, Button } from "antd"
//import { EditOutlined, DeleteOutlined } from "@ant-design/icons"
import { useSelector, useDispatch } from "react-redux"

import { newsActions } from "../../../redux/actions"
import Newses from "./Newses"

import "./style.scss"

const News = () => {
	const [open, setOpen] = React.useState(false)
	const dispatch = useDispatch()
	const items = useSelector(({ news }) => news.items)
	const column = [
		{
			title: "№",
			dataIndex: "_id",
			key: "_id",
		},
		{
			title: "Заголовок",
			dataIndex: "title",
			key: "title",
		},
		{
			title: "Текст",
			dataIndex: "text_min",
			key: "text_min",
		},
		{
			title: "Дата публикации",
			dataIndex: "created_at",
			key: "created_at",
		},
		{
			title: "Опубликовано?",
			dataIndex: "publish",
			key: "publish",
		},
		{
			title: "Автор",
			dataIndex: "author",
			key: "author",
		},
	]
	const openWindow = () => {
		setOpen(!open)
	}
	React.useEffect(() => {
		if (items.length < 0) {
			dispatch(newsActions.getNews)
		}
	}, [items, dispatch])
	return (
		<div>
			{!open ? (
				<>
					<Helmet>
						<title>Новости | (ТРЦ Донецк Сити)</title>
					</Helmet>
					<h1>Опубликованные новости</h1>
					<Button type='primary' onClick={openWindow}>
						Добавить новость
					</Button>
					<Table columns={column} />
				</>
			) : (
				<Newses close={openWindow} />
			)}
		</div>
	)
}

export default News
