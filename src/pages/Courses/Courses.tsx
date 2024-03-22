import { CoursesLayout } from "./styled";
import { courseData } from "./courseData";
import CourseCard from "./CourseCard";
import { FC, useEffect } from "react";

export interface ICourseProps {
  img: string;
  title: string;
  description: string;
  link: string;
  lessons: number;
  projects: number;
}

const Courses: FC<ICourseProps> = () => {
  useEffect(() => {
    document.title = "პროგრამირების უფასო გაკვეთილები | კურსები | XAZY.GE";
  });
  return (
    <CoursesLayout>
      {courseData.map((course, index) => (
        <CourseCard
          key={`course-list-${index}`}
          img={course.img}
          title={course.title}
          description={course.description}
          link={course.link}
          lessons={course.lessons}
          projects={course.projects}
        />
      ))}
    </CoursesLayout>
  );
};

export default Courses;
