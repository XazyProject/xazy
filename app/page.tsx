import Link from "next/link";
import LearnIcon from "../assets/images/learn.png";
import BuildIcon from "../assets/images/build.png";
import foundationsCourse from "../assets/images/foundationsCourse.png";
import sashualoHtmlCss from "../assets/images/intermediateHtmlCss.png";
import underConstruction from "../assets/images/underConstruction.png";
import Image from "next/image";

const homeCourses = [
  {
    img: foundationsCourse,
    name: "ფუნდამენტალები",
    link: "./courses/fundamentalebi",
    done: true,
  },
  {
    img: sashualoHtmlCss,
    name: "საშუალო დონის HTML და CSS",
    link: "./courses/sashualoDonisHtmlCss",
    done: true,
  },
  {
    img: underConstruction,
    name: "რთული HTML და CSS",
    link: "/",
    done: false,
  },
  {
    img: underConstruction,
    name: "შესავალი JavaScript-ში",
    link: "/",
    done: false,
  },
  {
    img: underConstruction,
    name: "საშუალო დონის JavaScript",
    link: "/",
    done: false,
  },
  {
    img: underConstruction,
    name: "რთული JavaScript",
    link: "/",
    done: false,
  },
  {
    img: underConstruction,
    name: "GIT & GitHub",
    link: "/",
    done: false,
  },
  {
    img: underConstruction,
    name: "შესავალი React-ში",
    link: "/",
    done: false,
  },
  {
    img: underConstruction,
    name: "TypeScript React-ში",
    link: "/",
    done: false,
  },
  {
    img: underConstruction,
    name: "რთული React",
    link: "/",
    done: false,
  },
  {
    img: underConstruction,
    name: "ალგორითები",
    link: "/",
    done: false,
  },
  {
    img: underConstruction,
    name: "გასაუბრებისთვის მომზადება",
    link: "/",
    done: false,
  },
];

const Home = () => {
  return (
    <div className="home-layout">
      <div className="home-intro">
        <h1>
          ისწავლეთ <br /> სრულფასოვნად
          <br /> <span> ვებ-დეველოპმენტი</span>
        </h1>
        <p>
          ვებ-დეველოპმენტის სწავლისთვის განკუთვნილი პირველი ქართული open-source
          პროექტი, სადაც ყველას შეუძლია სასწავლო მასალის დამატება და შესწორება.
        </p>
        <Link href="/courses">ნახეთ ყველა კურსი</Link>
      </div>
      <div className="home-about">
        <div className="home-container">
          <div className="home-course-info">
            <h2>როგორ ვისწავლოთ</h2>
            <p>
              ეს პროექტი ყველას დაეხმარება, ვისაც სურს ვებ-დეველოპმენტის სწავლა.
              სასწავლო მასალა დალაგებულია ლოგიკურად და თანმიმდევრულად, რაც
              სწავლას გაგიადვილებთ.
            </p>
            <div>
              <div>
                <Image src={LearnIcon} alt="learn" width={150} height={150} />
                <h4>ისწავლე</h4>
                <p>
                  სასწავლო მასალა ქართულად გადათარგმნილია საუკეთესო ონლაინ
                  გაკვეთილებიდან, ბლოგებიდან, კურსებიდან და ამ პროექტის მსგავსი
                  პროექტებიდან.
                </p>
              </div>
              <div>
                <Image src={BuildIcon} alt="build" width={150} height={150}/>
                <h4>ააწყვე</h4>
                <p>
                  სწავლასთან ერთად ააწყობთ მრავალ პროექტს, რომელიც დაგეხმარებათ
                  ნასწავლის კარგად გააზრებაში და პორტფოლიოს აწყობაში.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-container">
        <h1>აქ ისწავლი ყველაფერს</h1>
        <div className="home-courses">
          {homeCourses.map((item, index) => (
            <Link href={item.link} key={`home-courses-${index}`}>
              <div>
                <Image src={item.img} alt={item.name} width={156} height={156} />
                <h5>{item.name}</h5>
                {!item.done ? <div>მზადებაშია</div> : ""}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
