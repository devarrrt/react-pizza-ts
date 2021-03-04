import { RootState } from "../store";
import { filterState } from './filterState';

 


 export const selectFilterState = ( state: RootState ): filterState => state.filter

 export const selectFilterCategory = ( state: RootState ) =>  selectFilterState( state ).category

 export const selectFilterSort = ( state: RootState ) => selectFilterState( state ).sortBy