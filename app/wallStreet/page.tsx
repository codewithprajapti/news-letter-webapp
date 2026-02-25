import NewsCard from "@/components/NewsCard";
import { fetchApis } from "@/libs/api-fetch";
import { Api } from "@/types/apis";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wall Street Journal Market & Finance News",
  description:
    "Wall Street Journal coverage on global markets, finance, stocks, and economic analysis.",
  keywords: [
    "Wall Street Journal",
    "market news",
    "finance news",
    "global economy",
  ],
  alternates: {
    canonical: "/wall-street-journal",
  },
};

export default async function page() {
  const url = `https://newsapi.org/v2/everything?domains=wsj.com&apiKey=${process.env.NEWS_API_KEY}`;
  const articles: Api[] = await fetchApis(url);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 px-2 md:px-20 gap-2 md:gap-5">
        {articles.map((article, index) => {
          return (
            <NewsCard key={index} article={article} basePath="wallStreet" />
          );
        })}
      </div>
    </>
  );
}
