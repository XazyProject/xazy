import {
  fundamentalebi,
  rtuliHtmlCss,
  sashualoDonisHtmlCss,
} from "@/app/sitemap";
import LessonLayout from "@/components/Lesson/LessonPageLayout";

export function generateStaticParams() {
  const mapPathsToParams = (paths: any[]) => {
    return paths.map((path) => {
      const [courseName, chapter, lesson] = path.split("/").slice(1);
      return { courseName, chapter, lesson };
    });
  };

  return [
    ...mapPathsToParams(rtuliHtmlCss),
    ...mapPathsToParams(sashualoDonisHtmlCss),
    ...mapPathsToParams(fundamentalebi),
  ];
}

const Lesson: React.FC<any> = (props) => {
  const urlData = props.params;

  return <LessonLayout urlData={urlData} />;
};

export default Lesson;
