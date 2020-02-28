import { ADD_TO_CART, REMOVE_FROM_CART, GET_COURSES_LIST } from "./action"

const addToCart = id => ({
  type: ADD_TO_CART,
  id
})

const removeFromCart = id => ({
  type: REMOVE_FROM_CART,
  id
})

const getCoursesList = () => async dispatch => {
  const res = await fetch('http://localhost:3030/courses')
  const courses = await res.json()
  return dispatch({
    type: GET_COURSES_LIST,
    courses
  })
}

export { addToCart, removeFromCart, getCoursesList }
