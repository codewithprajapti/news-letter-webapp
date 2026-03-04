import fs from "fs/promises";
import path from "path";

export async function getUserFromJson(email: string) {
  const filePath = path.join(process.cwd(), "libs/users.json");

  const file = await fs.readFile(filePath, "utf-8");

  const users = JSON.parse(file);

  return users.find((u: any) => u.email === email) || null;
}
