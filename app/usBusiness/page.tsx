import type { Metadata } from "next";
import NewsGrid from "@/components/NewsGrid";

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

  return (
    <>
      <NewsGrid url={url} basePath="usBusiness" />
    </>
  );
}
