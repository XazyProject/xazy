import CourseDetailsLayout from "@/components/CourseDetailsPage/CourseDetailsLayout";

const CourseDetailsPage = ({ params }: any) => {
  const { courseName } = params;

  return <CourseDetailsLayout courseName={courseName} />;
};

export default CourseDetailsPage;
