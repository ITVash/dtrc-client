import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { Provider } from "react-redux"

import "./index.scss"
import "antd/dist/antd.css"

import App from "./App"

import store from "./redux/store"
window.store = store

ReactDOM.render(
	<React.Fragment>
		<Provider store={store}>
			<Router>
				<App />
			</Router>
		</Provider>
	</React.Fragment>,
	document.getElementById("root"),
)
