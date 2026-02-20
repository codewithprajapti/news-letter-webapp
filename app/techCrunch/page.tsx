import NewsCard from "@/components/NewsCard";
import { fetchApis } from "@/libs/api-fetch";
import { Api } from "@/types/apis";

export default async function page() {
  const url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`;
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
