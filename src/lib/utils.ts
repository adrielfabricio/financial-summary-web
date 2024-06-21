import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getServerComponentBaseUrl() {
  const { headers } = require("next/headers")

  const host = headers().get("host")
  const protocol = process.env["NODE_ENV"] === "development" ? "http" : "https"

  return `${protocol}://${host}/api/`
}
