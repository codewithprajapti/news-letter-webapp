import fs from "fs/promises";
import path from "path";
import { auth } from "@/auth";

export async function getLikes(postId: string) {
  const filePath = path.join(process.cwd(), "libs/likes.json");

  const file = await fs.readFile(filePath, "utf-8");
  const likes = JSON.parse(file);

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
