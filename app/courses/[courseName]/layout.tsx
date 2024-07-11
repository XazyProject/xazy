export async function generateMetadata({
  params,
}: {
  params: { courseName: string };
}) {
  const { courseName } = params;

  const title =
    courseName === "fundamentalebi"
      ? "საფუძველები"
      : courseName === "sashualoDonisHtmlCss"
      ? "საშუალო დონის HTML და CSS კურსი"
      : courseName === "rtuliHtmlCss"
      ? "რთული HTML & CSS"
      : "";

  const description =
    courseName === "fundamentalebi"
      ? "ისწავლით როგორ შექმნათ უბრალო ვებ-გვერდები. გაიგებთ რას აკეთებენ ვებ-დეველოპერები და გაივლით საფუძვლებს, რაც მომდევნო კურსების სწავლაში გამოგადგებათ."
      : courseName === "sashualoDonisHtmlCss"
      ? "ჩახვალთ HTML და CSS-ს სიღრმეებში და ისწავლით ბევრ გამოსადეგ ხელსაწყოს. სწავლის შემდეგ შეძლებთ საშუალო სირთულის ვებ-გვერდების აწყობას."
      : courseName === "rtuliHtmlCss"
      ? "დროა უფრო ღრმად ჩახვიდეთ და გახდეთ CSS ექსპერტი. ამდენი კურსის შემდეგ ისწავლით, როგორ მოარგოთ საიტი ყველა მოწყობილობას და გახადოთ გვერდი ხელმისაწვდომი შეზღუდული შესაძლებლობის მქონე მომხმარებლებისთვის"
      : "";

  return {
    title,
    description,
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}
