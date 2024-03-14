import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../components/layout'
import Lesson from '../pages/Lesson'
import Courses from '../pages/Courses/Courses'
import CourseDetails from '../pages/CourseDetails/CourseDetails'

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/courses' element={<Courses img={''} title={''} description={''} link={''} lessons={0} projects={0} />} />
          <Route path='/courses/:courseName' element={<CourseDetails />} />
          <Route path='/courses/:courseName/:chapter/:link' element={<Lesson />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
} 

export default AllRoutes