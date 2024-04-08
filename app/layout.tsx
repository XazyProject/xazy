import type { Metadata } from "next";
import { Noto_Sans_Georgian } from "next/font/google";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import '../styles/index.scss'
import { Analytics } from "@vercel/analytics/react"

const NotoSansGeorgian = Noto_Sans_Georgian({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "პროგრამირების უფასო კურსები & გაკვეთილები",
    template: "%s | XAZY",
  },
  description: "ვებ-დეველოპმენტის გაკვეთილები, პროგრამირების უფასო კურსები, Javascript, HTML, CSS, REACT, GIT, GitHub სწავლა ქართულად. ალგორითმები ქართულად",
  keywords: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "TypeScript",
  ],
  metadataBase: new URL('http://xazy.ge/'),
  openGraph: {
    images: './opengraph-image.png',
  },
  twitter: {
    card: 'summary_large_image',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={NotoSansGeorgian.className}>
        <Header />
        <main>
          {children}
          <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  );
}
