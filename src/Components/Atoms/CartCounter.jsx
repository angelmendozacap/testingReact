import React from 'react'
import { connect } from 'react-redux'

const CartCounter = ({ cart }) => {
  return (
    <div>
      <button className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
        Carrito: {cart.length}
      </button>
    </div>
  )
}

const mapStateToProps = state => (
  {
    cart: state.rootReducer.cart
  }
)

const mapDispatchToProps = () => ({
  
})

export default connect(mapStateToProps, mapDispatchToProps)(CartCounter)
