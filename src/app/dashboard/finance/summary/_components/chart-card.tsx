import { Skeleton } from "@nextui-org/react"
import { useEffect, useState } from "react"
import { twMerge } from "tailwind-merge"

export const ChartCard = (props: {
  action?: React.ReactNode
  children: React.ReactNode
  className?: string
  title: string
  value?: string
}) => {
  const [firstRender, setFirstRender] = useState(true)

  useEffect(() => {
    setFirstRender(false)
  }, [])

  return (
    <div
      className={twMerge(
        "flex flex-col gap-2 rounded-xl bg-background-accent p-2",
        props.className
      )}
    >
      <div className="text-primary flex w-full flex-row items-center justify-between px-2">
        <div className="my-2 flex flex-col gap-2">
          <p className="text-sm font-medium">{props.title}</p>
          {props.value ? (
            <p className="text-2xl font-bold">{props.value}</p>
          ) : null}
        </div>
        {props.action}
      </div>

      {firstRender ? (
        <Skeleton className="h-96 w-full rounded-lg" />
      ) : (
        <div className="border-border/60 bg-background rounded-lg border p-2">
          {props.children}
        </div>
      )}
    </div>
  )
}
