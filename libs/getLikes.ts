import { auth } from "@/auth";
import { readLikes } from "@/libs/storage";

export async function getLikes(postId: string) {
  const likes = await readLikes();

  const likeCount = likes.filter((l: any) => l.postId === postId).length;

  const session = await auth();

  const liked = likes.some(
    (l: any) => l.postId === postId && l.userId === session?.user?.email,
  );

  return {
    likeCount,
    liked,
  };
}
