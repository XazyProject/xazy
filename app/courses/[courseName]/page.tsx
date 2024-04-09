'use client'
import { useEffect, useState } from 'react';
import { fundamentalebi, sashualoDonisHtmlCss, rtuliHtmlCss } from './courseDetailsData';
import Progress from '@/components/CourseDetailsPage/Progress';
import CourseCard from '@/components/CourseDetailsPage/CourseCard';

interface ContentItem {
  id?: string;
  title: string;
  link: string;
  project?: boolean;
}

interface CourseItem {
  id?: string;
  title: string;
  content: ContentItem[];
}

const CourseDetailsPage = ({ params }: any) => {
  const { courseName } = params;
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [progress, setProgress] = useState<number>(0);

  const courseData: CourseItem[] =
    courseName === 'fundamentalebi'
      ? fundamentalebi
      : courseName === 'sashualoDonisHtmlCss'
      ? sashualoDonisHtmlCss
      : courseName === 'rtuliHtmlCss'
      ? rtuliHtmlCss
      : [];
  
  const courseNameGeo: string =
    courseName === 'fundamentalebi'
      ? 'საფუძველები'
      : courseName === 'sashualoDonisHtmlCss'
      ? 'საშუალო დონის HTML და CSS კურსი'
      : courseName === 'rtuliHtmlCss'
      ? 'რთული HTML & CSS'
      : '';

  useEffect(() => {
    document.title = `${courseNameGeo} | XAZY`;
  }, [courseNameGeo]);

  useEffect(() => {
    const savedCompletedLessons = localStorage.getItem(`${courseName}-completed`);
    if (savedCompletedLessons) {
      setCompletedLessons(JSON.parse(savedCompletedLessons));
    }
  }, [courseName]);

  useEffect(() => {
    let totalLessons = 0;
    courseData.forEach((item) => {
      totalLessons += item.content.length;
    });
    const completedCount = completedLessons.length;
    const completionPercentage = (completedCount / totalLessons) * 100;
    setProgress(completionPercentage);
  }, [completedLessons, courseData]);

  const handleLessonClick = (lessonLink: string) => {
    const lastSlashIndex = lessonLink.lastIndexOf('/');
    const extractedLink = lessonLink.substring(lastSlashIndex + 1);
    let updatedCompletedLessons: string[];
    if (!completedLessons.includes(extractedLink)) {
      updatedCompletedLessons = [...completedLessons, extractedLink];
    } else {
      updatedCompletedLessons = completedLessons.filter((link) => link !== extractedLink);
    }
    setCompletedLessons(updatedCompletedLessons);
    localStorage.setItem(`${courseName}-completed`, JSON.stringify(updatedCompletedLessons));
  };

  const getLastPartOfLink = (link: string) => {
    const parts = link.split('/');
    return parts[parts.length - 1];
  };

  return (
    <>
      <div className='course-details-layout'>
        <Progress courseNameGeo={courseNameGeo} progress={progress} />
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

export default CourseDetailsPage;
