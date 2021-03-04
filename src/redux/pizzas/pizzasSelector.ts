import { RootState } from '../store'
import { pizzasState } from './pizzasState'




export const selectPizzaState = ( state: RootState ): pizzasState => state.pizzas 

export const selectPizzaItems = ( state: RootState ) => selectPizzaState( state ).items 
export const selectLoaded = ( state: RootState ) => selectPizzaState( state ).isLoaded