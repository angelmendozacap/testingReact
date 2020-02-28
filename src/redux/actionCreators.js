import { ADD_TO_CART, REMOVE_FROM_CART } from "./action"

const addToCart = id => ({
  type: ADD_TO_CART,
  id
})

const removeFromCart = id => ({
  type: REMOVE_FROM_CART,
  id
})

export { addToCart, removeFromCart }