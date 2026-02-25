import NewsCard from "@/components/NewsCard";
import { fetchApis } from "@/libs/api-fetch";
import { Api } from "@/types/apis";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

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
  const articles: Api[] | null = await fetchApis(url);
  if(articles == null){
    notFound()
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 px-2 md:px-20 gap-2 md:gap-5">
        {articles.map((article, index) => {
          return <NewsCard key={index} article={article} />;
        })}
      </div>
    </>
  );
}
