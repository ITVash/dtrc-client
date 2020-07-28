import React from "react"
import { Helmet } from "react-helmet"
import classNames from "classnames"
/* import { Route, Switch } from "react-router-dom" */

import { Header, Footer, Category } from "../components/Admin"

const Admin = () => {
	const [type, setType] = React.useState("news")
	return (
		<>
			<Helmet>
				<title>Панель Администратора | (ТРЦ Донецк Сити)</title>
				<meta name='description' content='Панель администратора Донецк Сити' />
			</Helmet>
			<Header />
			<section>
				<div className='sidebar'>
					<ul>
						<li
							className={classNames({ active: type === "news" })}
							onClick={() => {
								setType("news")
							}}
						>
							Новости
						</li>
						<li
							className={classNames({ active: type === "vote" })}
							onClick={() => {
								setType("vote")
							}}
						>
							Голосование
						</li>
						<li
							className={classNames({ active: type === "gallery" })}
							onClick={() => {
								setType("gallery")
							}}
						>
							Галерея
						</li>
						<li
							className={classNames({ active: type === "category" })}
							onClick={() => {
								setType("category")
							}}
						>
							Категории
						</li>
						<li
							className={classNames({ active: type === "func" })}
							onClick={() => {
								setType("func")
							}}
						>
							Доп. Функции
						</li>
					</ul>
				</div>
				<div className='content'>
					<div className='wrap'>
						{type === "news" && <h1>Новости</h1>}
						{type === "vote" && <h1>Голосование</h1>}
						{type === "category" && <Category />}
						{type === "gallery" && <h1>Галерея</h1>}
						{type === "func" && <h1>Дополнительный функционал</h1>}
					</div>
				</div>
			</section>
			{/* <Section></Section> */}
			<Footer />
		</>
	)
}

export default Admin
