import { RootState } from "../store";
import { cartState } from "./cartState";


export const selectCartState = ( state: RootState ): cartState => state.cart


export const selectCartItems= ( state: RootState ) => selectCartState( state ).items

export const selectTotalPrice = ( state: RootState ) => selectCartState( state ).totalPrice

export const selectTotalCount = ( state: RootState ) => selectCartState( state ).totalCount