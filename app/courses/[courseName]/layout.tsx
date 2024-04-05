import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "კურსი | უფასო პროგრამირების კურსები და ლექციები",
  description: 'როგორ შევქმნათ საიტი, ვებ-გვერდი, გავხდეთ რეაქთ და ჯავასკრიპტ დეველოპერი, ვისწავლოთ პროგრამირება, HTML, CSS, Javascript, React.'
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
