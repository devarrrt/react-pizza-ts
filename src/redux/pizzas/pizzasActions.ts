import { Action } from "redux";
import { pizzasState } from "./pizzasState";
import axios from 'axios'


export enum PizzasActionType {
	SET_PIZZAS = 'SET_PIZZAS',
	SET_LOADED = 'SET_LOADED'
}




//@ts-ignore
export const fetchPizzasThunk = () => (dispatch) => {
	dispatch(setLoadedAction(false))
	axios.get(`http://localhost:3001/pizzas`)
		.then(resp => {
			dispatch(setPizzasAction(resp.data))
		})
	dispatch(setLoadedAction(true))
}



export interface SetPizzasInterface extends Action<PizzasActionType> {
	type: PizzasActionType.SET_PIZZAS,
	payload: pizzasState['items']
}
export const setPizzasAction = (payload: pizzasState['items']): SetPizzasInterface => ({
	type: PizzasActionType.SET_PIZZAS,
	payload
})


export interface SetLoadedInterface extends Action<PizzasActionType> {
	type: PizzasActionType.SET_LOADED,
	payload: boolean
}
export const setLoadedAction = (loaded: boolean): SetLoadedInterface => ({
	type: PizzasActionType.SET_LOADED,
	payload: loaded
})


export type PizzasActions =  SetPizzasInterface | SetLoadedInterface
