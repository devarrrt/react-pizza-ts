import { Action } from 'redux';


export enum FilterActionType {
	SET_SORT_BY = 'SET_SORT_BY',
	SET_CATEGORY = 'SET_CATEGORY'
}


export interface SetSortByInterface extends Action < FilterActionType >{
	type: FilterActionType.SET_SORT_BY,
	payload: string
}
export const setSortByAction = ( name: string ): SetSortByInterface => ({
	type: FilterActionType.SET_SORT_BY,
	payload: name
}) 



export interface SetCategoryInterface extends Action <FilterActionType> {
	type: FilterActionType.SET_CATEGORY,
	payload: string
}
export const setCategoryAction = ( catIndex: string ): SetCategoryInterface => ({
	type: FilterActionType.SET_CATEGORY,
	payload: catIndex 
}) 


export type FilterAction = SetSortByInterface | SetCategoryInterface
