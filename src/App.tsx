import React from 'react'
import { Route } from 'react-router-dom'

import {Cart, Header, Home} from "./components/index"



interface IApp {}
const App: React.FC<IApp> = () => {

	return (
		<div className="wrapper" >
				<Header/>
				<div className="content" >
					<Route path="/" exact component={ Home } />
					<Route path="/cart" component={ Cart }  />
				</div>
		</div>
	)}



export default App
