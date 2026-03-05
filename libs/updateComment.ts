"use server";

import fs from "fs/promises";
import path from "path";
import { auth } from "@/auth";

export async function updateComment(id: string, text: string) {
  const session = await auth();
  if (!session) throw new Error("Unauthorized");

  const filePath = path.join(process.cwd(), "libs/comments.json");

  const file = await fs.readFile(filePath, "utf-8");
  const comments = JSON.parse(file);

  const updated = comments.map((c: any) => {
    if (c.id === id) {
      return { ...c, text };
    }
    return c;
  });

  await fs.writeFile(filePath, JSON.stringify(updated, null, 2));
}
