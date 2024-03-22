import { Link } from "react-router-dom";
import {
  HomeAbout,
  HomeContainer,
  HomeCourseInfo,
  HomeCourses,
  HomeIntro,
  HomeLayout,
} from "./styled";
import LearnIcon from "../../assets/images/learn.png";
import BuildIcon from "../../assets/images/build.png";
import foundationsCourse from "../../assets/images/foundationsCourse.png";
import sashualoHtmlCss from "../../assets/images/intermediateHtmlCss.jpg";
import underConstruction from "../../assets/images/underConstruction.png";
import { useEffect } from "react";

const homeCourses = [
  {
    img: `${foundationsCourse}`,
    name: "ფუნდამენტალები",
    link: "./courses/fundamentalebi",
    done: true,
  },
  {
    img: `${sashualoHtmlCss}`,
    name: "საშუალო დონის HTML და CSS",
    link: "./courses/sashualoDonisHtmlCss",
    done: true,
  },
  {
    img: `${underConstruction}`,
    name: "რთული HTML და CSS",
    link: "/",
    done: false,
  },
  {
    img: `${underConstruction}`,
    name: "შესავალი JavaScript-ში",
    link: "/",
    done: false,
  },
  {
    img: `${underConstruction}`,
    name: "საშუალო დონის JavaScript",
    link: "/",
    done: false,
  },
  {
    img: `${underConstruction}`,
    name: "რთული JavaScript",
    link: "/",
    done: false,
  },
  {
    img: `${underConstruction}`,
    name: "GIT & GitHub",
    link: "/",
    done: false,
  },
  {
    img: `${underConstruction}`,
    name: "შესავალი React-ში",
    link: "/",
    done: false,
  },
  {
    img: `${underConstruction}`,
    name: "TypeScript React-ში",
    link: "/",
    done: false,
  },
  {
    img: `${underConstruction}`,
    name: "რთული React",
    link: "/",
    done: false,
  },
  {
    img: `${underConstruction}`,
    name: "ალგორითმები",
    link: "/",
    done: false,
  },
  {
    img: `${underConstruction}`,
    name: "გასაუბრებისთვის მომზადება",
    link: "/",
    done: false,
  },
];

const Home = () => {
  useEffect(() => {
    document.title = "პროგრამირების უფასო გაკვეთილები | XAZY.GE";
  });
  return (
    <HomeLayout>
      <HomeIntro>
        <h1>
          ისწავლეთ <br /> სრულფასოვნად
          <br /> <span> ვებ-დეველოპმენტი</span>
        </h1>
        <p>
          ვებ-დეველოპმენტის სწავლისთვის განკუთვნილი პირველი ქართული open-source
          პროექტი, სადაც ყველას შეუძლია სასწავლო მასალის დამატება და შესწორება.
        </p>
        <Link to="/courses">ნახეთ ყველა კურსი</Link>
      </HomeIntro>
      <HomeAbout>
        <HomeContainer>
          <HomeCourseInfo>
            <h2>როგორ ვისწავლოთ</h2>
            <p>
              ეს პროექტი ყველას დაეხმარება, ვისაც სურს ვებ-დეველოპმენტის სწავლა.
              სასწავლო მასალა დალაგებულია ლოგიკურად და თანმიმდევრულად, რაც
              სწავლას გაგიადვილებთ.
            </p>
            <div>
              <div>
                <img src={LearnIcon} alt="learn" />
                <h4>ისწავლე</h4>
                <p>
                  სასწავლო მასალა ქართულად გადათარგმნილია საუკეთესო ონლაინ
                  გაკვეთილებიდან, ბლოგებიდან, კურსებიდან და ამ პროექტის მსგავსი
                  პროექტებიდან.
                </p>
              </div>
              <div>
                <img src={BuildIcon} alt="build" />
                <h4>ააწყვე</h4>
                <p>
                  სწავლასთან ერთად ააწყობთ მრავალ პროექტს, რომელიც დაგეხმარებათ
                  ნასწავლის კარგად გააზრებაში და პორტფოლიოს აწყობაში.
                </p>
              </div>
            </div>
          </HomeCourseInfo>
        </HomeContainer>
      </HomeAbout>
      <HomeContainer>
        <h1>აქ ისწავლი ყველაფერს</h1>
        <HomeCourses>
          {homeCourses.map((item, index) => (
            <Link to={item.link} key={`home-courses-${index}`}>
              <div>
                <img src={item.img} alt={item.name} />
                <h5>{item.name}</h5>
                {!item.done ? <div>მზადებაშია</div> : ""}
              </div>
            </Link>
          ))}
        </HomeCourses>
      </HomeContainer>
    </HomeLayout>
  );
};

export default Home;
