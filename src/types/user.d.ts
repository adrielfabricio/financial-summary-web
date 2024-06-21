import { AccountStatus } from "@/config/account-status"
import { Role } from "@/config/roles"
import { z } from "zod"

export const UserSchema = z.object({
  createdAt: z.string(),
  email: z.string(),
  id: z.string(),
  name: z.string(),
  role: z.nativeEnum(Role),
  updatedAt: z.string(),
})

export type User = z.infer<typeof UserSchema>
