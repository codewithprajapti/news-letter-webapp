"use server";

import fs from "fs/promises";
import path from "path";
import { auth } from "@/auth";

export async function deleteComment(id: string) {
  const session = await auth();
  if (!session) throw new Error("Unauthorized");

  const filePath = path.join(process.cwd(), "libs/comments.json");

  const file = await fs.readFile(filePath, "utf-8");
  const comments = JSON.parse(file);

  const filtered = comments.filter((c: any) => c.id !== id);

  await fs.writeFile(filePath, JSON.stringify(filtered, null, 2));
}
