import CourseContentItem, { ContentItem } from "./CourseContentItem";

interface CourseCardProps {
  title: string;
  content: ContentItem[];
  completedLessons: string[];
  handleLessonClick: (lessonLink: string) => void;
  getLastPartOfLink: (link: string) => string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  content,
  completedLessons,
  handleLessonClick,
  getLastPartOfLink,
}) => {
  return (
    <div className="course-details-card">
      <h2>{title}</h2>
      {content.map((contentItem, index) => (
        <CourseContentItem
          key={`course-details-list-${index}`}
          contentItem={contentItem}
          completedLessons={completedLessons}
          handleLessonClick={handleLessonClick}
          getLastPartOfLink={getLastPartOfLink}
        />
      ))}
    </div>
  );
};

export default CourseCard;
