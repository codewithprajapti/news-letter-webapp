import Image from "next/image";
import CommentContent from "./CommentContent";

export default function CommentItem({ comment, currentUserEmail }: any) {
  return (
    <div className="flex gap-3 border border-gray-200 p-4 rounded-xl bg-white">
      <div className="relative w-8 h-8 shrink-0">
        <Image
          src={comment.user.image || "/Avatar.png"}
          alt={comment.user.name}
          fill
          sizes="(max-width:48em) 6vw, 2rem"
          className="rounded-full object-cover"
        />
      </div>

      <div className="flex flex-col gap-1 w-full">
        <div className="flex items-center gap-2">
          <p className="font-medium">{comment.user.name}</p>

          <span className="text-[0.75rem] text-gray-500">
            {new Date(comment.createdAt).toLocaleString()}
          </span>
        </div>

        <CommentContent
          comment={comment}
          isAuthor={comment.user.email === currentUserEmail}
        />
      </div>
    </div>
  );
}
