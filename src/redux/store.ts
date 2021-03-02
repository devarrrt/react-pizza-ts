import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { pizzasReducer } from './pizzas/pizzasReducer'
import { pizzasState } from './pizzas/pizzasState';
import thunk from 'redux-thunk'



declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
	}
}

const composeEnhancers =
	(typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose




	const rootReducers = combineReducers({
		pizzas: pizzasReducer
	})


	
export const store = createStore(rootReducers, composeEnhancers ( applyMiddleware( thunk )))

export interface RootState {
	pizzas: pizzasState
}


export default store