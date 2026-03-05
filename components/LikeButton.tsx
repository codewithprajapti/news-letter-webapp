"use client";

import { toggleLike } from "@/libs/toogleLike";
import { Heart } from "lucide-react";
import { useState, useTransition } from "react";


export default function LikeButton({
  postId,
  initialLikes,
  initiallyLiked,
}: {
  postId: string;
  initialLikes: number;
  initiallyLiked: boolean;
}) {
  const [liked, setLiked] = useState(initiallyLiked);
  const [likes, setLikes] = useState(initialLikes);

  const [isPending, startTransition] = useTransition();

  const handleLike = () => {
    const optimisticLiked = !liked;

    setLiked(optimisticLiked);
    setLikes((prev) => (optimisticLiked ? prev + 1 : prev - 1));

    startTransition(async () => {
      const res = await toggleLike(postId);

      setLiked(res.liked);
      setLikes(res.likeCount);
    });
  };

  return (
    <button
      onClick={handleLike}
      className="flex items-center gap-2 group active:scale-125 transition"
    >
      <Heart
        className={`w-6 h-6 transition-all duration-300 cursor-pointer
        ${
          liked
            ? "fill-red-500 text-red-500 scale-110"
            : "text-gray-500 group-hover:text-red-400"
        }
        `}
      />

      <span className="text-sm text-gray-600">{likes}</span>
    </button>
  );
}
