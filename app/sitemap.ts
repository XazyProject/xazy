import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/courses`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/contribute`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/courses/fundamentalebi`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/courses/sashualoDonisHtmlCss`,
    },
  ]
}