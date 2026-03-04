"use server";

import bcrypt from "bcryptjs";
import fs from "fs/promises";
import path from "path";

export async function registerAction(formData: FormData) {
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const hashedPassword = await bcrypt.hash(password, 10);

  const filePath = path.join(process.cwd(), "libs/users.json");

  const file = await fs.readFile(filePath, "utf-8");

  const users = JSON.parse(file);

  const userExists = users.find((u: any) => u.email === email);

  if (userExists) {
    throw new Error("User already exists");
  }

  const newUser = {
    id: Date.now().toString(),
    name: `${firstName} ${lastName}`,
    email,
    password: hashedPassword,
  };

  users.push(newUser);

  await fs.writeFile(filePath, JSON.stringify(users, null, 2));

  return { success: true };
}
