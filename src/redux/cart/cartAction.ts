
import { Action } from 'redux';
import { IPizza } from '../pizzas/pizzasState';

export enum CartActionType {
	ADD_PIZZA_TO_CART = 'ADD_PIZZA_TO_CART',
	CLEAR_CART = 'CLEAR_CART',
	REMOVE_PIZZA = 'REMOVE_PIZZA',
	ADD_PIZZA = 'ADD_PIZZA',
	MINUS_PIZZA = 'MINUS_PIZZA'
}


export interface AddPizzaInterface extends Action <CartActionType> {
	type: CartActionType.ADD_PIZZA_TO_CART,
	payload: IPizza
}
export const addPizzaAction = ( pizza: IPizza ): AddPizzaInterface => ({
	type: CartActionType.ADD_PIZZA_TO_CART,
	payload: pizza
})


export interface ClearCartInteface extends Action<CartActionType> {
	type: CartActionType.CLEAR_CART
}
export const clearCartAction = (): ClearCartInteface => ({
	type: CartActionType.CLEAR_CART
})


export interface RemovePizzaInterface  extends Action < CartActionType > {
	type: CartActionType.REMOVE_PIZZA,
	payload: any
}
export const removePizzaAction = ( id: any): RemovePizzaInterface => ({
	type: CartActionType.REMOVE_PIZZA,
	payload: id
})


export interface AddOnePizzaInterface extends Action <CartActionType> {
	type: CartActionType.ADD_PIZZA,
	payload: number
}
export const addOnePizzaAction = ( id: number ): AddOnePizzaInterface => ({
	type: CartActionType.ADD_PIZZA,
	payload: id
})


export interface MinusItemCartInterface extends Action <CartActionType> {
	type: CartActionType.MINUS_PIZZA,
	payload: number
}
export const minusItemCartAction = ( id: number ): MinusItemCartInterface => ({
	type: CartActionType.MINUS_PIZZA,
	payload: id
})






export type CartAction = ClearCartInteface | AddPizzaInterface | RemovePizzaInterface | AddOnePizzaInterface | MinusItemCartInterface