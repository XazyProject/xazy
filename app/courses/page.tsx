'use client'
import { courseData } from "./courseData";
import CourseCard from "./CourseCard";
import { FC } from "react";
import { StaticImageData } from "next/image";

export interface ICourseProps {
  img: StaticImageData;
  title: string;
  description: string;
  link: string;
  lessons: number;
  projects: number;
}

const Courses: FC = () => {
  return (
    <div className="courses-layout">
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
    </div>
  );
};

export default Courses;
