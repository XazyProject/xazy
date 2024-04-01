import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Layout from "../components/layout";
import Lesson from "../pages/Lesson";
import Courses from "../pages/Courses/Courses";
import CourseDetails from "../pages/CourseDetails/CourseDetails";
import Home from "pages/Home";
import { useEffect } from "react";
import Contribute from "pages/Contribute";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contribute" element={<Contribute />} />
          <Route
            path="/courses"
            element={
              <Courses
                img={""}
                title={""}
                description={""}
                link={""}
                lessons={0}
                projects={0}
              />
            }
          />
          <Route path="/courses/:courseName" element={<CourseDetails />} />
          <Route
            path="/courses/:courseName/:chapter/:link"
            element={<Lesson />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AllRoutes;
