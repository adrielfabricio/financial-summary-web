import type { Metadata } from "next"

import { ErrorPage } from "@/components/error-page"
import { PageWrapper } from "@/components/page-wrapper"
import { isValidDate } from "@/lib/utils"

import { Actions } from "./_components/actions"
import { columns } from "./_components/columns"
import { DataTable } from "./_components/data-table"
export const metadata: Metadata = {
  title: "Extratos",
}

const transformSalesToTableSales = (sales: Sale[]): TableSale[] => {
  return sales.map((sale) => ({
    customer: sale.customer.name,
    date: new Date(sale.saleDate).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }),
    id: sale.id.toString(),
    location: sale.locality.description,
    product: sale.product.description,
    total: sale.totalValue,
  }))
}

export default async function FinanceBalance({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const today = new Date()
  let sixMonthsAgo = new Date()
  sixMonthsAgo.setMonth(today.getMonth() - 6)

  const period = {
    end:
      searchParams["periodEnd"] &&
      isValidDate(searchParams["periodEnd"] as string)
        ? (searchParams["periodEnd"] as string)
        : today.toISOString().split("T")[0],
    start:
      searchParams["periodStart"] &&
      isValidDate(searchParams["periodStart"] as string)
        ? (searchParams["periodStart"] as string)
        : sixMonthsAgo.toISOString().split("T")[0],
  }

  let salesByPeriod: Sale[]

  try {
    const salesByPeriodRes = await fetch(
      `${process.env["NEXT_PUBLIC_API_URL"]}/sales/period?startDate=${period.start}&endDate=${period.end}`
    )

    salesByPeriod = await salesByPeriodRes.json()
  } catch (err) {
    console.log("Could not fetch sales by period")
    console.log(err)

    return <ErrorPage />
  }

  console.log(`${salesByPeriod.length} sales fetched.`)

  const tableSales: TableSale[] = transformSalesToTableSales(salesByPeriod)

  return (
    <PageWrapper
      actions={<Actions period={period} />}
      breadCrumbs={[
        { href: "#", label: "Finanças" },
        { href: "#", label: "Extratos" },
      ]}
      title="Extratos"
    >
      <DataTable columns={columns} data={tableSales} />
    </PageWrapper>
  )
}
