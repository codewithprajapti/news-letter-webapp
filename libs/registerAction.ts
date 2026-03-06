"use server";

import bcrypt from "bcryptjs";
import { readUsers, writeUsers } from "@/libs/storage";
import { redirect } from "next/navigation";

export async function registerAction(formData: FormData) {
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    throw new Error("Invalid input");
  }

  const users = await readUsers();

  const userExists = users.find((u: any) => u.email === email);

  if (userExists) {
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = {
    id: Date.now().toString(),
    name: `${firstName} ${lastName}`,
    email,
    password: hashedPassword,
  };

  users.push(newUser);

  await writeUsers(users);

  redirect("/login");
}
