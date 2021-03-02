import { PizzasActions } from "./pizzasActions"
import { pizzasState } from "./pizzasState"
import { PizzasActionType } from './pizzasActions'


const initialState: pizzasState = {
	items: [],
	isLoaded: false
}

export const pizzasReducer = ( state = initialState, action: PizzasActions ) => {
	switch ( action.type ){

		case PizzasActionType.SET_PIZZAS: 
		return {
			...state,
			items: action.payload,
			isLoaded: true
		}

		case PizzasActionType.SET_LOADED: 
		return {
			...state,
			isLoaded: action.payload
		}

		default: return state
	}
}