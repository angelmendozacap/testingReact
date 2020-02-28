import { createStore } from "redux"
import { ADD_TO_CART, REMOVE_FROM_CART } from "./action"
import { composeWithDevTools } from 'redux-devtools-extension'

const initialStore = {
  cart: []
}

const rootReducer = (state = initialStore, { type, id }) => {
  
  if (type === ADD_TO_CART) {

    if (state.cart.find(a => a === id)) return state

    return {
      ...state,
      cart: state.cart.concat(id)
    }
  }

  if (type === REMOVE_FROM_CART) {
    return {
      ...state,
      cart: state.cart.filter(a => a !== id)
    }
  }

  return state
}

export default createStore(rootReducer, composeWithDevTools())
