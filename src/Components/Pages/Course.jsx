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
    const currentCourse = this.state.course

    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="max-w-md rounded shadow-md transform hover:-translate-y-2 duration-200 transition-transform bg-white">
          <h1 className="text-blue-600 text-2xl p-4">{currentCourse.title}</h1>

          <img className="w-full" src={currentCourse.image} alt={currentCourse.title} />

          <p className="text-gray-700 p-4">{currentCourse.description}</p>
        </div>
      </div>
    )
  }
}
