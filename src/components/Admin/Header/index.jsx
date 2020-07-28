import React from "react"
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
	console.log("history", history)
	return (
		<header>
			<div className='wrap'>
				<div className='brand'>
					<span>
						<ToolOutlined />
					</span>{" "}
					Управление приложением
				</div>
				<nav>
					<ul>
						<li className='active'>
							<span>
								<UserOutlined />
							</span>{" "}
							Пользователи
						</li>
						<li>
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
	)
}

export default Header
