import { ICourseProps } from './Courses'
import foundationsCourse from '../../assets/images/foundationsCourse.png'
import intermediateHtmlCss from '../../assets/images/intermediateHtmlCss.jpg'

export const courseData: ICourseProps[] = [
  {
    img: `${foundationsCourse}`,
    title: 'საფუძვლები',
    description: `ისწავლით როგორ შექმნათ უბრალო ვებ-გვერდები. გაიგებთ რას აკეთებენ ვებ-დეველოპერები და გაივლით საფუძვლებს, რაც მომდევნო კურსების სწავლაში გამოგადგებათ.`,
    link: './fundamentalebi',
    lessons: 22,
    projects: 2,
  },
  {
    img: `${intermediateHtmlCss}`,
    title: 'საშუალო დონის HTML & CSS',
    description: "ჩახვალთ HTML და CSS-ს სიღრმეებში და ისწავლით ბევრ გამოსადეგ ხელსაწყოს. სწავლის შემდეგ შეძლებთ საშუალო სირთულის ვებ-გვერდების აწყობას.",
    link: './sashualo-html-css',
    lessons: 22,
    projects: 2,
  },
]