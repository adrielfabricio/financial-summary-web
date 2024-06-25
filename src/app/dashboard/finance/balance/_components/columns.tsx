"use client"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowsDownUp } from "@phosphor-icons/react/dist/ssr"
import { type ColumnDef } from "@tanstack/react-table"

export const columns: ColumnDef<TableSale>[] = [
  {
    cell: ({ row }) => (
      <Checkbox
        aria-label="Select row"
        checked={row.getIsSelected()}
        onCheckedChange={(value: any) => row.toggleSelected(!!value)}
      />
    ),
    enableHiding: false,
    enableSorting: false,
    header: ({ table }) => (
      <Checkbox
        aria-label="Select all"
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value: any) =>
          table.toggleAllPageRowsSelected(!!value)
        }
      />
    ),
    id: "select",
  },
  {
    accessorKey: "id",
    header: ({ column }) => {
      return (
        <Button
          className="px-0"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          variant="ghost"
        >
          ID
          <ArrowsDownUp className="ml-2 size-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "customer",
    header: ({ column }) => {
      return (
        <Button
          className="px-0"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          variant="ghost"
        >
          Cliente
          <ArrowsDownUp className="ml-2 size-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "product",
    header: ({ column }) => {
      return (
        <Button
          className="px-0"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          variant="ghost"
        >
          Produto
          <ArrowsDownUp className="ml-2 size-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "total",
    header: ({ column }) => {
      return (
        <Button
          className="px-0"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          variant="ghost"
        >
          Total
          <ArrowsDownUp className="ml-2 size-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "date",
    header: ({ column }) => {
      return (
        <Button
          className="px-0"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          variant="ghost"
        >
          Data
          <ArrowsDownUp className="ml-2 size-4" />
        </Button>
      )
    },
  },

  {
    accessorKey: "location",
    header: ({ column }) => {
      return (
        <Button
          className="px-0"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          variant="ghost"
        >
          Local
          <ArrowsDownUp className="ml-2 size-4" />
        </Button>
      )
    },
  },
]
