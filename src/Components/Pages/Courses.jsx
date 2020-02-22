import React, { Component } from 'react'
import CourseGrid from '../Organisms/CoursesGrid'

export default class Courses extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      courses: []
    }
  }

  async componentDidMount() {
    const res = await fetch('http://localhost:3030/courses')
    const courses = await res.json()

    this.setState({ courses })
  }
  
  render() {
    const { courses } = this.state
    return (
      <>
        <h1 className="text-2xl font-bold text-gray-700">Courses</h1>
        <CourseGrid courses={courses} />
      </>
    )
  }
}
