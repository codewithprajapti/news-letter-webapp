import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { env } from "./libs/env";

import { signInSchema } from "./libs/zod";
import { getUserFromJson } from "./libs/getUser";
import { verifyPassword } from "./libs/password";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: env.GOOGLE_CLIENT_ID!,
      clientSecret: env.GOOGLE_CLIENT_SECRET!,
    }),

    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        try {
          const { email, password } =
            await signInSchema.parseAsync(credentials);

          const user = await getUserFromJson(email);

          if (!user) return null;

          const valid = await verifyPassword(password, user.password);

          if (!valid) return null;

          return {
            id: user.id,
            name: user.name,
            email: user.email,
          };
        } catch {
          return null;
        }
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  secret: env.AUTH_SECRET,
});
