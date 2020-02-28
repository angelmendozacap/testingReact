import React, { useState } from 'react'
import useCourse from '../CustomHooks/useCourse'

const Course = ({ match }) => {

  const courseId = match.params.id

  const course = useCourse(courseId)
  const [comment, setComment] = useState('Sin comentar')

  function setMyComment(text) {
    setComment(text)
  }

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div>
        <article className="max-w-md rounded shadow-md bg-white border-b border-gray-300 mb-2">
          <h1 className="text-blue-600 text-2xl p-4">{course.title}</h1>

          <img className="w-full" src={course.image} alt={course.title} />

          <p className="text-gray-700 p-4">{course.description}</p>
        </article>

        <div>
          <p className="mb-1">Escribe un comentario:</p>
          <input
            type="text" 
            className="outline-none focus:shadow-outline block bg-gray-400 px-3 py-1 text-gray-900 rounded-full w-full"
            onChange={(e) => { setMyComment(e.target.value) }}
            placeholder="Comentario..."
          />
          <p>{comment}</p>
        </div>
      </div>
    </div>
  )
}

/* class CourseClass extends Component {

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
} */

export default Course
