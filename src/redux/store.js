import { createStore, combineReducers } from "redux"
import { ADD_TO_CART, REMOVE_FROM_CART } from "./action"
import { composeWithDevTools } from 'redux-devtools-extension'

const initialStore = {
  cart: []
}

const initialCourses = {
  courses: [
    {
      "id": 1,
      "image": "https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2020-01/ui_design.png",
      "title": "Diseño UI",
      "description": "Aprende las técnicas y buenas prácticas para crear diseños de interfaces hermosos, funcionales e impactantes.",
      "price": 10
    }
  ]
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

const coursesReducer = (state = initialCourses, action) => {
  return state
}

export default createStore(combineReducers({rootReducer, coursesReducer}), composeWithDevTools())
