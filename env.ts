import { z } from "zod"

const envSchema = z.object({
  API_URL: z.string(),
  NODE_ENV: z.enum(["development", "production"]),
})

export const env = envSchema.parse(process.env)
