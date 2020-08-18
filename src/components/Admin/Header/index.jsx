import React from "react"
import classNames from "classnames"
import {
	UserOutlined,
	TeamOutlined,
	SettingOutlined,
	TagsOutlined,
	ToolOutlined,
	HeatMapOutlined,
} from "@ant-design/icons"
import { useHistory } from "react-router-dom"

import "./style.scss"

const Header = () => {
	const history = useHistory()
	const [type, setType] = React.useState(null)
	const [toogle, setToogle] = React.useState(false)
	const toogleRef = React.useRef(null)
	const butToogle = React.useRef(null)
	const toogleMenu = React.useCallback((e) => {
		if (
			!e.path.includes(toogleRef.current) &&
			!e.path.includes(butToogle.current)
		) {
			console.log("Меня тут нету!!!")
			setToogle(false)
		} /* else {
			console.log("А тут я есть!")
			setToogle(true)
		} */
	}, [])
	React.useEffect(() => {
		document.querySelector("body").addEventListener("mouseover", toogleMenu)
		console.log("Смонтировал компонент")
		return () => {
			document
				.querySelector("body")
				.removeEventListener("mouseover", toogleMenu)
			console.log("Размантировал компонет!")
		}
	}, [toogleMenu])
	return (
		<>
			<header>
				<div className="wrap">
					<div className="brand">
						<span>
							<ToolOutlined />
						</span>{" "}
						Управление приложением
					</div>
					<nav>
						<ul ref={butToogle}>
							<li
								className={classNames({ active: type === "users" })}
								onMouseEnter={() => {
									console.log("Ты навел на меня!", toogle)
									setToogle(true)
								}}
								onClick={() => {
									setType("users")
									history.push("users")
								}}
							>
								<span>
									<UserOutlined />
								</span>{" "}
								Пользователи
							</li>
							<li
								className={classNames({ active: type === "arendator" })}
								onClick={() => {
									setType("arendator")
								}}
							>
								<span>
									<TeamOutlined />
								</span>{" "}
								Арендаторы
							</li>
							<li>
								<span>
									<TagsOutlined />
								</span>{" "}
								Реклама
							</li>
							<li>
								<span>
									<HeatMapOutlined />
								</span>{" "}
								Карта
							</li>
							<li>
								<span>
									<SettingOutlined />
								</span>{" "}
								Настройки
							</li>
						</ul>
					</nav>
				</div>
			</header>
			{toogle && <div className="toogleMenu" ref={toogleRef}></div>}
		</>
	)
}

export default Header
