import { CartAction, CartActionType } from './cartAction'
import { cartState } from './cartState'



const initialState: cartState = {
  items: {},
  totalCount: 0,
  totalPrice: 0,
}

//@ts-ignore
const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);

//@ts-ignore
const _get = (obj, path) => {
  const [firstKey, ...keys] = path.split('.');
	//@ts-ignore
  return keys.reduce((val, key) => {
    return val[key];
  }, obj[firstKey]);
};

//@ts-ignore
const getTotalSum = (obj, path) => {
  return Object.values(obj).reduce((sum, obj) => {
    const value = _get(obj, path);
    return sum + value;
  }, 0); 
};

export const cartReducer = ( state = initialState, action: CartAction  ) => {
	switch( action.type ){

		case CartActionType.ADD_PIZZA_TO_CART: {
      const currentPizzaItems = !state.items[action.payload.id]
        ? [action.payload] 
        : [...state.items[action.payload.id].items, action.payload];

      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentPizzaItems,
          totalPrice: getTotalPrice(currentPizzaItems),
        },
      };

      const totalCount = getTotalSum(newItems, 'items.length');
      const totalPrice = getTotalSum(newItems, 'totalPrice');

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
		}

		case CartActionType.CLEAR_CART: {
			return {
        totalCount: 0,
        totalPrice: 0,
        items: {}
      }
		}


    case CartActionType.REMOVE_PIZZA:
      const newItems = {
        ...state.items,
      };
      const currentTotalPrice = newItems[action.payload].totalPrice;
      const currentTotalCount = newItems[action.payload].items.length;
      delete newItems[action.payload];
      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - currentTotalPrice,
        totalCount: state.totalCount - currentTotalCount,
      };


		case CartActionType.ADD_PIZZA: {
      const newObjectItems = [
        ...state.items[action.payload].items,
        state.items[action.payload].items[0]
      ]

      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjectItems,
          totalPrice: getTotalPrice(newObjectItems)
        }
      }

      const totalCount = getTotalSum(newItems, 'items.length')
      const totalPrice = getTotalSum(newItems, 'totalPrice')
      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      }
		}


		case CartActionType.MINUS_PIZZA: {
      const oldItems = state.items[action.payload].items;
      const newObjItems =
        oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems;
      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getTotalPrice(newObjItems),
        },
      };

      const totalCount = getTotalSum(newItems, 'items.length');
      const totalPrice = getTotalSum(newItems, 'totalPrice');

      return {
        ...state,
        items: newItems,
        totalCount,
        totalPrice,
      };
		}



		default: return state
	}
}