import React, { Component } from 'react'
import CourseCard from '../Molecules/CourseCard.jsx'
import withLoader from '../HOC/withLoader.js'

class CourseGrid extends Component {
  render() {
    const { courses } = this.props

    return (
      
      <section className="py-8 grid gap-8 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {
          courses.map(course => (
            <CourseCard
              image={course.image}
              title={course.title}
              description={course.description}
              id={course.id}
              key={course.id}
            />
          ))
        }
      </section>
    )
  }
}

export default withLoader('courses', CourseGrid)
