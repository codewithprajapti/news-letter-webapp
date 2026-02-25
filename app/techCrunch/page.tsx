import NewsCard from "@/components/NewsCard";
import { fetchApis } from "@/libs/api-fetch";
import { Api } from "@/types/apis";
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
  const articles: Api[] = await fetchApis(url);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 px-2 md:px-20 gap-2 md:gap-5">
        {articles.map((article, index) => {
          return (
            <NewsCard key={index} article={article} basePath="techCrunch" />
          );
        })}
      </div>
    </>
  );
}
