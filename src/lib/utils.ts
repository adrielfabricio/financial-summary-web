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

export const isValidDate = (date: string) => {
  return date.match(/^\d{4}-\d{2}-\d{2}$/)
}

export const getPeriodValue = (
  field: "periodEnd" | "periodStart",
  searchParams: SearchParams
) => {
  const previousMonth = new Date()
  previousMonth.setMonth(previousMonth.getMonth() - 1)

  return searchParams[field] && isValidDate(searchParams[field] as string)
    ? (searchParams[field] as string)
    : field === "periodEnd"
      ? new Date().toISOString().split("T")[0]
      : previousMonth.toISOString().split("T")[0]
}
