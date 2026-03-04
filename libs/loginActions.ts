"use server";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export async function loginAction(prevState: any, formData: FormData) {
  try {
    await signIn("credentials", {
      email: String(formData.get("email")),
      password: String(formData.get("password")),
      redirectTo: "/",
    });

    return { error: null };
  } catch (error) {
    if (error instanceof AuthError) {
      if (error.type === "CredentialsSignin") {
        return { error: "Invalid email or password" };
      }
    }

    throw error;
  }
}
