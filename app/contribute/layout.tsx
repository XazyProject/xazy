import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "კონტრიბუცია",
  description: "შეიტანე წვლილი პროგრამირების სასწავლო მასალაში და საიტის გაუმჯობესებაში. გახდი კონტრიბუტორი და დაეხმარე ხალხს სწავლაში.",
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
