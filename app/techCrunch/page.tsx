import NewsGrid from "@/components/NewsGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TechCrunch Technology & Startup News",
  description:
    "Latest technology news, startup funding updates, AI trends, and innovation insights from TechCrunch coverage.",
  keywords: [
    "TechCrunch news",
    "startup funding",
    "AI news",
    "technology updates",
  ],
  alternates: {
    canonical: "/techcrunch",
  },
};

export default async function page() {
  const url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${process.env.NEWS_API_KEY}`;

  return (
    <>
      <NewsGrid url={url} basePath="techCrunch" />
    </>
  );
}
