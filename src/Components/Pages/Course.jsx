import React, { Component } from 'react'

export default class Course extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      course: {}
    }
  }

  async componentDidMount() {
    const courseId = this.props.match.params.id

    const res = await fetch(`http://localhost:3030/courses/${courseId}`)
    const course = await res.json()

    this.setState({ course })
  }

  render() {
    const { course } = this.state

    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="max-w-md rounded shadow-md transform hover:-translate-y-2 duration-200 transition-transform bg-white">
          <h1 className="text-blue-600 text-2xl p-4">{course.title}</h1>

          <img className="w-full" src={course.image} alt={course.title} />

          <p className="text-gray-700 p-4">{course.description}</p>
        </div>
      </div>
    )
  }
}
