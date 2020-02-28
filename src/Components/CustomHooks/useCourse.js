import { useState, useEffect } from "react"

const useCourse = courseId => {

  const [course, setCourse] = useState({})

  useEffect(() => {
    async function fetchCourse() {
      const res = await fetch(`http://localhost:3030/courses/${courseId}`)
      const course = await res.json()

      setCourse(course)
    }

    fetchCourse()
  }, [courseId])

  return course
}

export default useCourse
