import { getComments } from "@/libs/getComments";
import { Api } from "@/types/apis";
import { auth } from "@/auth";
import CommentItem from "./CommentItem";

interface NewsDetailProps {
  article: Api;
}

export default async function DisplayComments({ article }: NewsDetailProps) {
  const session = await auth();
  const currentUserEmail = session?.user?.email;

  const comments = await getComments(article.url);

  return (
    <div className="flex flex-col gap-4 mt-6">
      {comments.map((comment: any) => (
        <CommentItem
          key={comment.id}
          comment={comment}
          currentUserEmail={currentUserEmail}
        />
      ))}
    </div>
  );
}
