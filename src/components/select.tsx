import { Select as NUISelect, type SelectProps } from "@nextui-org/react"
import { twMerge } from "tailwind-merge"

export const Select = (props: SelectProps) => {
  return (
    <NUISelect
      {...props}
      className="placeholder:text-muted-foreground h-9 w-full"
      classNames={{
        base: "w-full min-h-9",
        innerWrapper: twMerge("w-full min-h-9 !text-muted-foreground ml-1"),
        popoverContent: "p-0",
        trigger:
          "w-full bg-background h-9 !text-muted-foreground ground data-[open=true]:border-primary data-[focus=true]:border-primary",
        value: "text-black",
      }}
    />
  )
}
