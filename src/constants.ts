import * as z from "zod";
const envSchema = z.object({
  VITE_PORT: z.number({ coerce: true }),
  VITE_WS: z.string().url(),
});

// Validate and parse env variables
const parsedEnv = envSchema.safeParse(import.meta.env);

if (!parsedEnv.success) {
  console.error("❌ Invalid environment variables:", parsedEnv.error.format());
  throw new Error("Invalid environment variables");
}

export const env = parsedEnv.data;
