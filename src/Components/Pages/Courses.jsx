import React from 'react'
import CoursesGrid from '../Organisms/CoursesGrid'
import { connect } from 'react-redux'

const Courses = ({ courses }) => {
  return (
    <>
      <h1 className="text-2xl font-bold text-gray-700">Courses</h1>
      <CoursesGrid courses={courses} />
    </>
  )
}

const mapStateToProps = state => ({
  courses: state.coursesReducer.courses
})

export default connect(mapStateToProps, {})(Courses)
