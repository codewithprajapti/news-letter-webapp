import { formatRelativeTime } from "@/libs/formateDateAndTime";
import { Api } from "@/types/apis";
import Image from "next/image";

interface NewsDetailProps {
  article: Api;
}

export default function NewsDetailComponent({ article }: NewsDetailProps) {
  const fallback =
    "https://cdndark.darkhorizons.com/wp-content/uploads/2026/02/sony-considers-a-ps6-delay-to-2028-2029.jpg";
  return (
    <>
      <div className="flex flex-col gap-5 ">
        <div className="relative w-full aspect-21/9 overflow-hidden rounded-2xl">
          <Image
            src={article.urlToImage ?? fallback}
            alt={article.title}
            fill
            priority
            quality={75}
            sizes="100vw"
            className="object-cover"
            placeholder="blur"
            blurDataURL="/image-placeholder.png"
          />
        </div>
        <h1 className="text-lg md:text-2xl font-black md:font-bold text-blue-900">
          {article.title}
        </h1>
        <div className="flex flex-wrap gap-5">
          <p className="text-text">
            {formatRelativeTime(article.publishedAt)}{" "}
          </p>
          <p className="text-secondary"> Source : {article.source.name} </p>
          <p className="text-secondary"> Author : {article.author} </p>
        </div>
        <p>
          {" "}
          {article.description}{" "}
          <a href={article.url} target="_blank">
            {" "}
            Read More{" "}
          </a>{" "}
        </p>
      </div>
    </>
  );
}
