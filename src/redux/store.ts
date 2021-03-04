import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { pizzasReducer } from './pizzas/pizzasReducer'
import { pizzasState } from './pizzas/pizzasState';
import thunk from 'redux-thunk'
import { filterReducer } from './filter/filterReducer';
import { filterState } from './filter/filterState';
import { cartReducer } from './cart/cartReducer';
import { cartState } from './cart/cartState';



declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
	}
}

const composeEnhancers =
	(typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose




	const rootReducers = combineReducers({
		pizzas: pizzasReducer,
		filter: filterReducer,
		cart: cartReducer
	})


	
export const store = createStore(rootReducers, composeEnhancers ( applyMiddleware( thunk )))

export interface RootState {
	pizzas: pizzasState,
	filter: filterState,
	cart: cartState
}


export default store