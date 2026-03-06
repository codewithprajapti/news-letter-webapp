"use server";

import { auth } from "@/auth";
import { readComments, writeComments } from "@/libs/storage";

export async function addComment(formData: FormData) {
  const session = await auth();
  if (!session) throw new Error("Login required");

  const text = formData.get("text");
  const postId = formData.get("postId");

  const comments = await readComments();

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

  await writeComments(comments);
}
