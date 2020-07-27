import React from "react"

import "./style.scss"

const Header = () => {
	return (
		<header>
			<div className="wrap">
				<div className="brand">Управление приложением</div>
				<nav>
					<ul>
						<li>Пользователи</li>
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Header
