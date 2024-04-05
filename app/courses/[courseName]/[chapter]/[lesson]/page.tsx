'use client'
import { useState, useEffect } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
import Navigation from "@/components/Lesson/Navigation";
import Socials from "@/components/Lesson/Socials";
import MarkdownRenderer from "@/components/Lesson/MarkdownRenderer";
import SaveButton from "@/components/Lesson/SaveButton";

const Lesson: React.FC<any> = (props) => {
  const urlData = props.params

  // სთეით ცვლადები
  const [post, setPost] = useState<string>("");
  const [h2Array, setH2Array] = useState<string[]>([]);
  const [selectedH2Index, setSelectedH2Index] = useState<number | null>(null);
  const [lessonId, setLessonId] = useState<string | undefined>(undefined);
  const [isSaved, setIsSaved] = useState<boolean>(false);
  const [coursePath, setCoursePath] = useState<string>(''); // Initialize coursePath as null

  // წამოიღოს გაკვეთილის კონტენტი და გახადოს 'post' სთეითი.
  useEffect(() => {
    const fetchMarkdownContent = async () => {
      try {
        const response = await fetch(`/masala/${urlData.courseName}/${urlData.chapter}/${urlData.lesson}.md`);
        const content = await response.text();
        setPost(content);
        const metadataContent = content.substring(0, 160);
      } catch (error) {
        console.error('Error fetching Markdown content:', error);
      }
    };

    fetchMarkdownContent();
  }, [urlData.chapter, urlData.courseName, urlData.lesson]);
  

  // ფუნქცია, რომელიც კლიკლზე ინახავს ან შლის გაკვეთილის ID-ს ლოკალ სთორიჯიდან
  const handleSaveOrRemove = () => {
    if (lessonId) {
      const existingData =
        localStorage.getItem(`${urlData.courseName}-completed`) || "[]";
      const lessonIds = JSON.parse(existingData);
      if (isSaved) {
        const updatedLessonIds = lessonIds.filter(
          (id: string) => id !== lessonId,
        );
        localStorage.setItem(
          `${urlData.courseName}-completed`,
          JSON.stringify(updatedLessonIds),
        );
      } else {
        localStorage.setItem(
          `${urlData.courseName}-completed`,
          JSON.stringify([...lessonIds, lessonId]),
        );
      }
      setIsSaved(!isSaved);
    }
  };

  // იღებს ID-ს URL-დან
  useEffect(() => {
    if (urlData.lesson) {
      setLessonId(urlData.lesson);
      const existingData =
        localStorage.getItem(`${urlData.courseName}-completed`) || "[]";
      const lessonIds = JSON.parse(existingData);
      setIsSaved(lessonIds.includes(urlData.lesson));
    }
  }, [urlData.courseName, urlData.lesson, urlData.courseData]);

  // ფუნქცია, რომელიც აფერადებს code ელემენტებს.
  const highlightCode = () => {
    const codeBlocks = document.querySelectorAll("pre code");
    codeBlocks.forEach((codeBlock) => {
      hljs.highlightElement(codeBlock as HTMLElement);
    });
  };

  // გააფერადოს კოდი markdown კონტენტის ჩატვირთვის შემდეგ
  useEffect(() => {
    highlightCode();
  }, [post]);

  // ამოიღოს ყველა h2 ელემენტი markdown-ის კონტენტიდან
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const resultArray = extractH2Elements();
      setH2Array(resultArray);
      checkHashAndScroll();
    }, 1000);

    return () => clearTimeout(timeoutId);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [post]);

  // ამოიღოს ყველა h2 ელემენტი markdown-ის კონტენტიდან და შეფუშოს ერეიში.
  const extractH2Elements = () => {
    const h2Elements = document.querySelectorAll("h2");
    const h2Array: string[] = [];

    h2Elements.forEach((h2Element) => {
      if (h2Element.textContent !== null) {
        h2Array.push(h2Element.textContent);
      }
    });

    return h2Array;
  };


  // ნავიგაციის წევრზე handleClick
  const handleNavigationClick = (index: number) => {
    setSelectedH2Index(index);
    updateUrlHash(index);
    scrollIntoView(index);
  };

  // ჩამოსქროლოს არჩეულ h2 ელემენტზე.
  const scrollIntoView = (index: number) => {
    const h2Elements = document.querySelectorAll("h2");
    if (index >= 0 && index < h2Elements.length) {
      h2Elements[index].scrollIntoView({ behavior: "smooth" });
    }
  };

  // განაახლოს URL ჰეში არჩეული H2 ელემენტით.
  const updateUrlHash = (index: number) => {
    const selectedH2 = h2Array[index];
    const newHash = selectedH2
      ? `#${selectedH2.toLowerCase().replace(/\s+/g, "-")}`
      : "";
    window.history.replaceState(null, "", newHash);
  };

  // შეამოწმოს URL-ს ჰეში და ჩამოსქროლოს შესაბამის H2 ელემენტთან.
  const checkHashAndScroll = () => {
    const hash = window.location.hash.substring(1);
    const index = h2Array.findIndex(
      (item) => item.toLowerCase().replace(/\s+/g, "-") === hash,
    );
    if (index !== -1) {
      setSelectedH2Index(index);
      scrollIntoView(index);
    }
  };

  // ეძებს h1 ელემენტს და სვავს ამ ელემენტში არსებულ კონტენტს title-ში.
  useEffect(() => {
    const h1Element = document.querySelector("h1");
    if (h1Element) {
      const pageTitle = `${h1Element.textContent || h1Element.innerText} | პროგრამირების უფასო კურსი | XAZY`;
      document.title = pageTitle;
    }
  }, [post]);

  // იღებს კურსის სახელს URL დან.
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentPath = window.location.pathname;
      const parts = currentPath.split("/");
      parts.splice(-2);
      const newPath = parts.join("/");
      setCoursePath(newPath);
    }
  }, []);


  return (
    <div className="lesson-layout">
      <Navigation
        h2Array={h2Array}
        selectedH2Index={selectedH2Index}
        handleNavigationClick={handleNavigationClick}
      />
      <Socials />
      <div className="lesson-div">
        <MarkdownRenderer post={post} />
        {post && (
          <SaveButton
            isSaved={isSaved}
            handleSaveOrRemove={handleSaveOrRemove}
            coursePath={coursePath}
          />
        )}
      </div>
    </div>
  );
};

export default Lesson;
