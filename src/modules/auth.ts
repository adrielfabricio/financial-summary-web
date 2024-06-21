"use server"

import type { User } from "@/types/user"

export const getUser = async () => {
  await new Promise((resolve) => setTimeout(resolve, 500))

  const user: User = {
    createdAt: "2021-09-01T00:00:00.000Z",
    email: "alicegarcia@gmail.com",
    id: "1",
    name: "Alice Garcia",
    role: "user",
    updatedAt: "2021-09-01T00:00:00.000Z",
  }

  return {
    data: user,
  }
}
