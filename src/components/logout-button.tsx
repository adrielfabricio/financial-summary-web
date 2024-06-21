"use client"

import { useRouter } from "next/navigation"

import { Button } from "./ui/button"

export const LogoutButton = () => {
  const router = useRouter()

  return (
    <Button onClick={() => router.push("/auth/logout")} variant="secondary">
      Sair
    </Button>
  )
}
