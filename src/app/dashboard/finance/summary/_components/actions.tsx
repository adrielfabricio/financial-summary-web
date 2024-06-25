"use client"

import { Button } from "@/components/ui/button"
import { CalendarDate, parseDate } from "@internationalized/date"
import { DateRangePicker } from "@nextui-org/react"
import { CircleNotch, Export } from "@phosphor-icons/react/dist/ssr"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"
import { toast } from "sonner"

export const Actions = (props: {
  period: {
    end: string
    start: string
  }
}) => {
  const [isLoading, setIsLoading] = useState(false)

  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  const onSelect = (period: { end: CalendarDate; start: CalendarDate }) => {
    router.replace(
      `${pathname}?periodStart=${period.start}&periodEnd=${period.end}`
    )
  }

  const handleReportDownload = async () => {
    try {
      setIsLoading(true)
      await new Promise((resolve) => setTimeout(resolve, 1500))

      const res = await fetch(
        `${process.env["NEXT_PUBLIC_API_URL"]}/transactions/export`
      )

      if (!res.ok) {
        throw new Error("Could not export report")
      }

      res.blob().then((blob) => {
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement("a")
        a.href = url
        a.download = `Resumo Financeiro_${Math.random()
          .toString(36)
          .substring(7)}.xlsx`
        a.click()
      })

      toast.success("Relatório exportado com sucesso")
    } catch (err) {
      toast.error("Não foi possível exportar o relatório")
      console.log(err)
    } finally {
      setIsLoading(false)
    }
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
      <Button
        className="bg-brand hover:bg-brand/80 flex flex-row items-center gap-2"
        disabled={isLoading}
        onClick={handleReportDownload}
      >
        {isLoading ? (
          <CircleNotch className="size-4 animate-spin" weight="bold" />
        ) : (
          <Export className="size-4" weight="bold" />
        )}
        Exportar relatório
      </Button>
    </div>
  )
}
