import { useParams } from "react-router-dom";
import { fundamentalebi, sashualoDonisHtmlCss } from "./courseDetailsData";
import { CourseDetailsCard, CourseDetailsLayout } from "./styled";
import { useEffect } from "react";

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

const CourseDetails = () => {
  const { courseName } = useParams<{ courseName: string }>();

  const courseData: CourseItem[] =
    courseName === "fundamentalebi"
      ? fundamentalebi
      : courseName === "sashualoDonisHtmlCss"
        ? sashualoDonisHtmlCss
        : [];

  const courseNameGeo =
    courseName === "fundamentalebi"
      ? "პროგრამირების საფუძვლები"
      : courseName === "sashualoDonisHtmlCss"
        ? "საშუალო დონის HTML და CSS კურსი"
        : "";

  useEffect(() => {
    document.title = `${courseNameGeo} | XAZY`;
  });

  return (
    <CourseDetailsLayout>
      {courseData.map((item, index) => (
        <CourseDetailsCard key={`course-details-card-${index}`}>
          <h2>{item.title}</h2>
          {item.content.map((content, index) => (
            <div key={`course-details-list-${index}`}>
              <a href={content.link}>
                {!content.project ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinejoin="round"
                      d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinejoin="round"
                      d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                    ></path>
                  </svg>
                )}
                {content.title}
              </a>
            </div>
          ))}
        </CourseDetailsCard>
      ))}
    </CourseDetailsLayout>
  );
};

export default CourseDetails;
