import { slugify } from "@/libs/slug";
import { fetchApis } from "@/libs/api-fetch";
import { Api } from "@/types/apis";
import NewsDetailComponent from "@/components/NewsDetailComponent";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

interface NewsDetailProps {
  params: Promise<{
    slug: string;
  }>;
}

const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${process.env.NEWS_API_KEY}`;

export async function generateMetadata({
  params,
}: NewsDetailProps): Promise<Metadata> {
  const { slug } = await params;

  const articles: Api[] | null = await fetchApis(url);
  if (articles == null) {
    notFound();
  }
  const article = articles.find((item) => slugify(item.title) === slug);

  if (!article) {
    return { title: "Article Not Found" };
  }

  return {
    title: article.title,
    description: article.description || "Tesla News Article",
  };
}

export default async function NewsDetail({ params }: NewsDetailProps) {
  const { slug } = await params;

  const articles: Api[] | null = await fetchApis(url);
  if (articles == null) {
    notFound();
  }
  const article = articles.find((item) => slugify(item.title) === slug);

  if (!article) {
    throw new Error("Article not found");
  }

  return (
    <article className="px-2 md:px-20">
      <NewsDetailComponent article={article} />
    </article>
  );
}
