import { readUsers } from "@/libs/storage";

export async function getUserFromJson(email: string) {
  const users = await readUsers();

  return users.find((u: any) => u.email === email) || null;
}
