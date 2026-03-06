import NewsGrid from "@/components/NewsGrid";
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

  return (
    <>
      <NewsGrid url={url} basePath="wallStreet" />
    </>
  );
}
