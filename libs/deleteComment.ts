"use server";

import { auth } from "@/auth";
import { readComments, writeComments } from "@/libs/storage";

export async function deleteComment(id: string) {
  const session = await auth();
  if (!session) throw new Error("Unauthorized");

  const comments = await readComments();

  const filtered = comments.filter((c: any) => c.id !== id);

  await writeComments(filtered);
}
