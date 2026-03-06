import NewsGrid from "@/components/NewsGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tesla News & EV Industry Updates",
  description:
    "Latest Tesla news, electric vehicle updates, Elon Musk announcements, stock performance and EV market trends.",
  keywords: [
    "Tesla news",
    "Elon Musk",
    "EV industry",
    "Tesla stock",
    "electric vehicles",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Tesla News & EV Industry Updates",
    description:
      "Stay updated with Tesla developments, EV technology, and market insights.",
    url: "/",
  },
};

export default async function page() {
  const url = `https://newsapi.org/v2/everything?q=tesla&sortBy=publishedAt&apiKey=
${process.env.NEWS_API_KEY}`;

  return (
    <>
      <NewsGrid url={url} basePath="" />
    </>
  );
}
