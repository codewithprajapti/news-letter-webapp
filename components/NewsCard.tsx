import { Api } from "@/types/apis";
import Image from "next/image";
import { Clock, Calendar } from "lucide-react";
import Link from "next/link";
import { slugify } from "@/libs/slug";
import { formatDate, formatTime } from "@/libs/formateDateAndTime";

interface NewsCardProps {
  article: Api;
  basePath?: string;
}

export default function NewsCard({ article, basePath }: NewsCardProps) {
  const slug = slugify(article.title);
  const href = basePath ? `/${basePath}/${slug}` : `/${slug}`;
  const fallback =
    "https://cdndark.darkhorizons.com/wp-content/uploads/2026/02/sony-considers-a-ps6-delay-to-2028-2029.jpg";
  return (
    <>
      <Link className="flex flex-col bg-white gap-3 " href={href}>
        <div className="relative w-full aspect-video">
          <Image
            src={article.urlToImage || fallback}
            alt={article.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
            placeholder="blur"
            blurDataURL="/image-placeholder.png"
            quality={65}
          />
        </div>
        <div className="px-2 flex flex-col gap-3 pb-4">
          <h1 className="text-lg font-black"> {article.title} </h1>
          <div className="flex gap-5 items-center">
            <div className="flex items-center gap-2">
              <Calendar />
              <p className="text-sm"> {formatDate(article.publishedAt)} </p>
            </div>
            <div className="flex items-center gap-2">
              <Clock />
              <p className="text-sm"> {formatTime(article.publishedAt)} </p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
