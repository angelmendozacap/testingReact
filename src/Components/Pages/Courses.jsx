import React from 'react'
import CourseGrid from '../Organisms/CourseGrid'
import { connect } from 'react-redux'

const Courses = ({ courses }) => {
  return (
    <>
      <h1 className="text-2xl font-bold text-gray-700">Cursos</h1>
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

const mapStateToProps = state => ({
  courses: state.coursesReducer.courses
})

export default connect(mapStateToProps, {})(Courses)
