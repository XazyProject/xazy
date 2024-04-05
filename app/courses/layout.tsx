import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "გაკვეთილები | უფასო პროგრამირების კურსები და ლექციები",
  description: "ისწავლე უფასოდ ჯავასკრიპტი, HTML, CSS, GIT, GitHub, React, ალგორითმები, TypeScript. გახდი ვებ დეველოპერი და ისწავლე როგორ დასაქმდე.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      {children}
    </main>
  );
}
