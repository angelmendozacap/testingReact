import { createStore, combineReducers, applyMiddleware } from "redux"
import { ADD_TO_CART, REMOVE_FROM_CART, GET_COURSES_LIST } from "./action"
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk"

const initialStore = {
  cart: []
}

const initialCourses = {
  courses: []
}

const cartReducer = (state = initialStore, { type, id }) => {
  
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

const coursesReducer = (state = initialCourses, action) => {
  if (action.type === GET_COURSES_LIST) {
    return {
      ...state,
      courses: action.courses
    }
  }

  return state
}

export default createStore(combineReducers({cartReducer, coursesReducer}), composeWithDevTools(applyMiddleware(thunk)))
