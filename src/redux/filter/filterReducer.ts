 import {FilterActionType, FilterAction} from './fiterAction'
import { filterState } from './filterState';


const initialState: filterState = {
	category: null,
	sortBy: 'popular'
}


export const filterReducer = ( state = initialState, action: FilterAction ) => {
		switch ( action.type ){
			case FilterActionType.SET_SORT_BY:
			return {
				...state,
				sortBy: action.payload
			}
			case FilterActionType.SET_CATEGORY:
				return {	
			...state,
			category: action.payload
				}

				default: return state
		}
}