import React from "react"
import { Helmet } from "react-helmet"

import { Header } from "../components/Admin"

const Admin = () => {
	return (
		<>
			<Helmet>
				<title>Панель Администратора | (ТРЦ Донецк Сити)</title>
				<meta name="description" content="Панель администратора Донецк Сити" />
			</Helmet>
			<Header />
		</>
	)
}

export default Admin
