import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import axios from 'axios'



import {Cart, Header} from "./components/index"
import {Home} from './components/index';
import { selectPizzaItems } from './redux/pizzas/pizzasSelector'
import { fetchPizzasThunk } from './redux/pizzas/pizzasActions'
import { useSelector, useDispatch } from 'react-redux'




interface IApp {}


const App: React.FC<IApp> = () => {
const dispatch = useDispatch()
const pizzas = useSelector( selectPizzaItems )


useEffect(() => {
	dispatch(fetchPizzasThunk())
}, [ dispatch ])



	return (
		<div className="wrapper" >
				<Header/>
				<div className="content" >
					<Route path="/" exact render={ ()=> ( <Home pizzas={ pizzas } /> ) } />
					<Route path="/cart" component={ Cart }  />
				</div>
		</div>
	)}



export default App
