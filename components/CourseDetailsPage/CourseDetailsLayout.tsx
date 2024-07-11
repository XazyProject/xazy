"use client";
import { useState } from "react";
import {
  fundamentalebi,
  sashualoDonisHtmlCss,
  rtuliHtmlCss,
} from "@/app/courses/[courseName]/courseDetailsData";
import Progress from "@/components/CourseDetailsPage/Progress";
import CourseCard from "@/components/CourseDetailsPage/CourseCard";

interface ContentItem {
  id?: string;
  title: string;
  link: string;
  project?: boolean;
}

export interface CourseItem {
  id?: string;
  title: string;
  content: ContentItem[];
}

const CourseDetailsLayout = ({ courseName }: any) => {
  const courseData: CourseItem[] =
    courseName === "fundamentalebi"
      ? fundamentalebi
      : courseName === "sashualoDonisHtmlCss"
      ? sashualoDonisHtmlCss
      : courseName === "rtuliHtmlCss"
      ? rtuliHtmlCss
      : [];

  const courseNameGeo: string =
    courseName === "fundamentalebi"
      ? "საფუძველები"
      : courseName === "sashualoDonisHtmlCss"
      ? "საშუალო დონის HTML და CSS კურსი"
      : courseName === "rtuliHtmlCss"
      ? "რთული HTML & CSS"
      : "";

  const [completedLessons, setCompletedLessons] = useState<string[]>([]);

  const handleLessonClick = (lessonLink: string) => {
    const lastSlashIndex = lessonLink.lastIndexOf("/");
    const extractedLink = lessonLink.substring(lastSlashIndex + 1);
    let updatedCompletedLessons: string[];
    if (!completedLessons.includes(extractedLink)) {
      updatedCompletedLessons = [...completedLessons, extractedLink];
    } else {
      updatedCompletedLessons = completedLessons.filter(
        (link) => link !== extractedLink
      );
    }
    setCompletedLessons(updatedCompletedLessons);
    localStorage.setItem(
      `${courseName}-completed`,
      JSON.stringify(updatedCompletedLessons)
    );
  };

  const getLastPartOfLink = (link: string) => {
    const parts = link.split("/");
    return parts[parts.length - 1];
  };

  return (
    <>
      <div className="course-details-layout">
        <Progress
          courseName={courseName}
          courseNameGeo={courseNameGeo}
          courseData={courseData}
          completedLessons={completedLessons}
          setCompletedLessons={setCompletedLessons}
        />
        {courseData.map((item, index) => (
          <CourseCard
            key={`course-details-card-${index}`}
            title={item.title}
            content={item.content}
            completedLessons={completedLessons}
            handleLessonClick={handleLessonClick}
            getLastPartOfLink={getLastPartOfLink}
          />
        ))}
      </div>
    </>
  );
};

export default CourseDetailsLayout;
