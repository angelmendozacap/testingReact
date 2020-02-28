import React, { Component } from 'react'
import defaultImage from '../../default-image.jpg'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { addToCart, removeFromCart } from '../../redux/actionCreators'
import { connect } from 'react-redux'

class CourseCard extends Component {
  render() {
    return (
      <article className="rounded overflow-hidden shadow-lg bg-white flex flex-col">

        <div className="w-full h-0 relative" style={{ paddingBottom: `${56.25}%` }}>
          <Link to={`/cursos/${this.props.id}`} >
            <img src={this.props.image} alt={this.props.title} loading="lazy" className="w-full h-full object-cover absolute top-0 left-0" />
          </Link>
        </div>

        <div className="py-4 px-6 flex flex-col h-full">

          <div className="flex-1 mb-3">
            <Link to={`/cursos/${this.props.id}`} className="hover:underline" >
              <h3 className="font-bold text-xl text-blue-900 mb-2">{this.props.title}</h3>
            </Link>

            <p className="text-gray-700 text-base" title={this.props.description}>
              {this.props.description}
            </p>
          </div>

          <div className="text-center mt-auto">
            {
              this.props.cart.find(a => a === this.props.id) ?
                (
                  <button
                    className="inline-block px-4 leading-none py-2 text-sm rounded outline-none border border-teal-500 hover:border-red-500 text-teal-500 hover:text-white hover:bg-red-500"
                    onClick={() => this.props.removeCourseFromCart(this.props.id)}
                  >Remover del Carrito</button>
                ) : (
                  <button
                    className="inline-block px-4 leading-none py-2 text-sm rounded outline-none border border-teal-500 text-teal-500 hover:text-white hover:bg-teal-500"
                    onClick={() => this.props.addCourseToCart(this.props.id)}
                  >$ {this.props.price} USD</button>
                )
            }
          </div>
        </div>
      </article>
    )
  }
}

CourseCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number
}

CourseCard.defaultProps = {
  image: defaultImage,
  title: 'Course Title',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, placeat dolores sit minima totam ipsam reprehenderit nulla dolorem assumenda libero.',
  price: 9.99
}


const mapStateToProps = state => ({
  cart: state.rootReducer.cart
})

const mapDispatchToProps = dispatch => ({
  addCourseToCart(id) {
    dispatch(addToCart(id))
  },
  removeCourseFromCart(id) {
    dispatch(removeFromCart(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(CourseCard)
