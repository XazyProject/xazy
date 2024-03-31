import React, { useState, useEffect } from "react";
import Markdown from "markdown-to-jsx";
import {
  LessonDiv,
  LessonLayout,
  LessonSaveDiv,
  Socials,
} from "./lessons.styled";
import GITHUB from "../../assets/images/GITHUB.svg";
import INSTAGRAM from "../../assets/images/INSTAGRAM.svg";
import { Link, useParams } from "react-router-dom";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";

const Lesson: React.FC = () => {
  const { courseName, chapter, link } = useParams<{
    courseName: string;
    chapter: string;
    link: string;
  }>();
  const file_name = `${link}`;
  console.log(courseName);

  // სთეით ცვლადები
  const [post, setPost] = useState<string>("");
  const [h2Array, setH2Array] = useState<string[]>([]);
  const [selectedH2Index, setSelectedH2Index] = useState<number | null>(null);
  const [lessonId, setLessonId] = useState<string | undefined>(undefined);
  const [isSaved, setIsSaved] = useState<boolean>(false);

  // ფუნქცია, რომელიც კლიკლზე ინახავს ან შლის გაკვეთილის ID-ს ლოკალ სთორიჯიდან
  const handleSaveOrRemove = () => {
    if (lessonId) {
      const existingData =
        localStorage.getItem(`${courseName}-completed`) || "[]";
      const lessonIds = JSON.parse(existingData);
      if (isSaved) {
        const updatedLessonIds = lessonIds.filter(
          (id: string) => id !== lessonId,
        );
        localStorage.setItem(
          `${courseName}-completed`,
          JSON.stringify(updatedLessonIds),
        );
      } else {
        localStorage.setItem(
          `${courseName}-completed`,
          JSON.stringify([...lessonIds, lessonId]),
        );
      }
      setIsSaved(!isSaved);
    }
  };

  // იღებს ID-ს URL-დან
  useEffect(() => {
    if (link) {
      setLessonId(link);
      const existingData =
        localStorage.getItem(`${courseName}-completed`) || "[]";
      const lessonIds = JSON.parse(existingData);
      setIsSaved(lessonIds.includes(link));
    }
  }, [link]);

  // ფუნქცია, რომელიც აფერადებს code ელემენტებს.
  const highlightCode = () => {
    const codeBlocks = document.querySelectorAll("pre code");
    codeBlocks.forEach((codeBlock) => {
      hljs.highlightBlock(codeBlock as HTMLElement);
    });
  };

  // წამოიღოს გაკვეთილის კონტენტი და გახადოს 'post' სთეითი.
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await import(
          `../../masala/${courseName}/${chapter}/${file_name}.md`
        );
        console.log("res", res);
        const markdownContent = await fetch(res.default).then((res) =>
          res.text(),
        );
        setPost(markdownContent);
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
  }, [chapter, courseName, file_name]);

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
  const currentPath = window.location.pathname;
  const parts = currentPath.split("/");
  parts.splice(-2);
  const coursePath = parts.join("/");

  return (
    <LessonLayout>
      <div className="navigation">
        <ul>
          <h4>სარჩევი</h4>
          {h2Array.map((item, index) => (
            <li
              key={`category-left-${index}`}
              onClick={() => handleNavigationClick(index)}
              className={index === selectedH2Index ? "selected" : ""}
            >
              {item}
            </li>
          ))}
        </ul>
        <Socials>
          <h4 className="follow">გამოგვყევით</h4>
          <a
            href="https://github.com/xazyProject"
            target="_blank"
            rel="noreferrer"
          >
            <img src={GITHUB} className="github" alt="github" />
            <span className="github-text">
              ჩვენი <br /> გითჰაბი
            </span>
          </a>
          <a
            href="https://instagram.com/xazy.ge"
            target="_blank"
            rel="noreferrer"
          >
            <img src={INSTAGRAM} className="instagram" alt="instagram" />
            <span className="instagram-text">
              ჩვენი <br /> ინსტაგრამი
            </span>
          </a>
        </Socials>
      </div>
      <LessonDiv>
        <Markdown>{post}</Markdown>
        {post ? (
          <LessonSaveDiv>
            <Link to={coursePath}>📖 კურსზე დაბრუნება</Link>
            <button
              onClick={handleSaveOrRemove}
              style={{
                backgroundColor: `${isSaved ? "#ff2768" : "#4ade80"}`,
                color: `${isSaved ? "#fff" : "#000"}`,
              }}
            >
              {isSaved ? "✘ მონიშნე დაუსრულებლად" : "✔️ მონიშნე დასრულებულად"}
            </button>
          </LessonSaveDiv>
        ) : (
          ""
        )}
      </LessonDiv>
    </LessonLayout>
  );
};

export default Lesson;
