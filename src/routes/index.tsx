import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../components/layout'
import Lessons from '../pages/Lessons'

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/lesson/:id' element={<Lessons />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AllRoutes