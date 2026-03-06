"use server";

import { auth } from "@/auth";
import { readLikes, writeLikes } from "@/libs/storage";

export async function toggleLike(postId: string) {
  const session = await auth();

  if (!session) throw new Error("Login required");

  const userId = session.user?.email;

  const likes = await readLikes();

  const existing = likes.find(
    (l: any) => l.postId === postId && l.userId === userId,
  );

  let updatedLikes;

  if (existing) {
    updatedLikes = likes.filter(
      (l: any) => !(l.postId === postId && l.userId === userId),
    );
  } else {
    updatedLikes = [
      ...likes,
      {
        id: Date.now().toString(),
        postId,
        userId,
      },
    ];
  }

  await writeLikes(updatedLikes);

  const likeCount = updatedLikes.filter((l: any) => l.postId === postId).length;

  return {
    liked: !existing,
    likeCount,
  };
}
