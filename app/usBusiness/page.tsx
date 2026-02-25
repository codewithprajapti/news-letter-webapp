import NewsCard from "@/components/NewsCard";
import type { Metadata } from "next";
import { fetchApis } from "@/libs/api-fetch";
import { Api } from "@/types/apis";

export const metadata: Metadata = {
  title: "US Business Headlines & Market News",
  description:
    "Breaking US business headlines covering stock markets, economy, corporate earnings, and financial updates.",
  keywords: [
    "US business news",
    "stock market",
    "economic news",
    "corporate earnings",
  ],
  alternates: {
    canonical: "/us-business-headlines",
  },
};

export default async function page() {
  const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${process.env.NEWS_API_KEY}`;
  const articles: Api[] = await fetchApis(url);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 px-2 md:px-20 gap-2 md:gap-5">
        {articles.map((article, index) => {
          return (
            <NewsCard key={index} article={article} basePath="usBusiness" />
          );
        })}
      </div>
    </>
  );
}
