import React, { Component } from 'react'
import defaultImage from '../../default-image.jpg'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class CourseCard extends Component {
  render() {
    return (
      <article className="rounded overflow-hidden shadow-lg bg-white">
        
        <div className="w-full h-0 relative" style={{paddingBottom: `${56.25}%`}}>
          <Link to={`/cursos/${this.props.id}`} >
            <img src={this.props.image} alt={this.props.title} loading="lazy"   className="w-full h-full object-cover absolute top-0 left-0"/>
          </Link>
        </div>

        <div className="py-4 px-6">
          <Link to={`/cursos/${this.props.id}`} className="hover:underline" >
            <h3 className="font-bold text-xl text-blue-900 mb-2">{this.props.title}</h3>
          </Link>

          <p className="text-gray-700 text-base" title={this.props.description}>
            {this.props.description}
          </p>
        </div>
      </article>
    )
  }
}

CourseCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string
}

CourseCard.defaultProps = {
  image: defaultImage,
  title: 'Course Title',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, placeat dolores sit minima totam ipsam reprehenderit nulla dolorem assumenda libero.'
}

export default CourseCard
