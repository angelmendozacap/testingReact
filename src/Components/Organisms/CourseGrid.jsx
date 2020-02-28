import React, { Component } from 'react'
import CourseCard from '../Molecules/CourseCard.jsx'

export default class CourseGrid extends Component {
  render() {
    return (
      <section className="py-8 grid gap-8 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {
          this.props.courses.map(course => (
            <CourseCard
              price={course.price}
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
