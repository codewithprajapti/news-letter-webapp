import users from "./users.json";

export async function getUserFromJson(email: string) {
  const user = users.find((u) => u.email === email);
  return user || null;
}
