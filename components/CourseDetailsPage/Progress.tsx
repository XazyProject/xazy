"use client";
import { useEffect, useState, FC } from "react";
import { CourseItem } from "./CourseDetailsLayout";

interface ProgressProps {
  courseName: string;
  courseNameGeo: string;
  courseData: CourseItem[];
  completedLessons: string[];
  setCompletedLessons: (lessons: string[]) => void;
}

const Progress: FC<ProgressProps> = ({
  courseName,
  courseNameGeo,
  courseData,
  completedLessons,
  setCompletedLessons,
}) => {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const savedCompletedLessons = localStorage.getItem(
      `${courseName}-completed`
    );
    if (savedCompletedLessons) {
      setCompletedLessons(JSON.parse(savedCompletedLessons));
    }
  }, [courseName, setCompletedLessons]);

  useEffect(() => {
    let totalLessons = 0;
    courseData.forEach((item) => {
      totalLessons += item.content.length;
    });
    const completedCount = completedLessons.length;
    const completionPercentage = (completedCount / totalLessons) * 100;
    setProgress(completionPercentage);
  }, [completedLessons, courseData]);

  return (
    <div className="course-details-progress">
      <h1>{courseNameGeo}</h1>
      <div>
        <p>თქვენი პროგრესი: {Math.round(progress)}%</p>
        <div className="progress">
          <div
            style={{
              width: `${progress}%`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
