"use server";

import fs from "fs/promises";
import path from "path";
import { auth } from "@/auth";

export async function addComment(formData: FormData) {
  const session = await auth();

  if (!session) throw new Error("Login required");

  const text = formData.get("text");
  const postId = formData.get("postId");

  const filePath = path.join(process.cwd(), "libs/comments.json");

  const file = await fs.readFile(filePath, "utf-8");
  const comments = JSON.parse(file);

  const newComment = {
    id: Date.now().toString(),
    postId,
    text,
    user: {
      name: session.user?.name,
      image: session.user?.image || "/Avatar.png",
      email: session.user?.email,
    },
    createdAt: new Date().toISOString(),
  };

  comments.push(newComment);

  await fs.writeFile(filePath, JSON.stringify(comments, null, 2));
}
