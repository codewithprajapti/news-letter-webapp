import { fetchApis } from "@/libs/api-fetch";
import { Api } from "@/types/apis";
import NewsCard from "./NewsCard";
import { notFound } from "next/navigation";

interface NewsGridProps {
  url: string;
  basePath: string;
}

export default async function NewsGrid({ url, basePath }: NewsGridProps) {
  const articles: Api[] = await fetchApis(url);
  if (articles == null) {
    notFound();
  }
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 px-2 md:px-20 gap-2 md:gap-5">
        {articles.map((article, index) => {
          return <NewsCard key={index} article={article} basePath={basePath} />;
        })}
      </div>
    </>
  );
}
