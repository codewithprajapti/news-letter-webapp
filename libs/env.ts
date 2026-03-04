const requiredEnv = ["GOOGLE_CLIENT_ID", "GOOGLE_CLIENT_SECRET", "AUTH_SECRET"];

requiredEnv.forEach((env) => {
  if (!process.env[env]) {
    throw new Error(`Missing required env variable: ${env}`);
  }
});

export const env = {
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID!,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET!,
  AUTH_SECRET: process.env.AUTH_SECRET!,
};
