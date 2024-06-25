"use client"

import { CalendarDate, parseDate } from "@internationalized/date"
import { DateRangePicker } from "@nextui-org/react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

export const Actions = (props: {
  period: {
    end: string
    start: string
  }
}) => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  const onSelect = (period: { end: CalendarDate; start: CalendarDate }) => {
    router.replace(
      `${pathname}?periodStart=${period.start}&periodEnd=${period.end}`
    )
  }

  return (
    <div className="flex flex-row items-center gap-2">
      <DateRangePicker
        className="w-xs"
        errorMessage=""
        onChange={onSelect}
        size="sm"
        value={{
          end: parseDate(searchParams.get("periodEnd") || props.period.end),
          start: parseDate(
            searchParams.get("periodStart") || props.period.start
          ),
        }}
        variant="bordered"
      />
    </div>
  )
}
