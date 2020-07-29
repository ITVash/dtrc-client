import React from "react"
import { Switch, Route } from "react-router-dom"

import { Admin } from "./pages"

function App() {
	return (
		<Switch>
			<Route exact path='/' component={Admin} />
			<Route
				exact
				path='/pr'
				render={() => <div className='App'>Начало положено</div>}
			/>
		</Switch>
	)
}

export default App
