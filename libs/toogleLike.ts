"use server";

import fs from "fs/promises";
import path from "path";
import { auth } from "@/auth";

export async function toggleLike(postId: string) {
  const session = await auth();
  if (!session) throw new Error("Login required");

  const userId = session.user?.email;

  const filePath = path.join(process.cwd(), "libs/likes.json");

  const file = await fs.readFile(filePath, "utf-8");
  const likes = JSON.parse(file);

  const existing = likes.find(
    (l: any) => l.postId === postId && l.userId === userId,
  );

  let updatedLikes;

  if (existing) {
    updatedLikes = likes.filter(
      (l: any) => !(l.postId === postId && l.userId === userId),
    );
  } else {
    likes.push({
      id: Date.now().toString(),
      postId,
      userId,
    });

    updatedLikes = likes;
  }

  await fs.writeFile(filePath, JSON.stringify(updatedLikes, null, 2));

  const likeCount = updatedLikes.filter((l: any) => l.postId === postId).length;

  return {
    liked: !existing,
    likeCount,
  };
}
