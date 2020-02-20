import React, { Component } from 'react'
import CourseGrid from '../Organisms/CourseGrid'

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
        {
          !courses.length ? (
              <div className="flex justify-center">
                <p className="shadow-md px-4 py-2 rounded-full text-xl bg-white max-w-sm text-orange-500">Cargando...</p>
              </div>
            ) : (
              <CourseGrid courses={courses} />
            )
        }
      </>
    )
  }
}
