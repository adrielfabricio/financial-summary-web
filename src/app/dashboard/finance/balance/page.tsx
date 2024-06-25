import type { Metadata } from "next"

import { ErrorPage } from "@/components/error-page"
import { PageWrapper } from "@/components/page-wrapper"
import { getPeriodValue } from "@/lib/utils"

import { Actions } from "./_components/actions"
import { columns } from "./_components/columns"
import { DataTable } from "./_components/data-table"
import { transformSalesToTableSales } from "./lib/transform-sales-data"

export const metadata: Metadata = {
  title: "Extratos",
}

async function getSalesByPeriod(period: { end: string; start: string }) {
  const salesByPeriodRes = await fetch(
    `${process.env["NEXT_PUBLIC_API_URL"]}/sales/period?startDate=${period.start}&endDate=${period.end}`
  )

  return await salesByPeriodRes.json()
}

export default async function FinanceBalance({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  try {
    const period = {
      end: getPeriodValue("periodEnd", searchParams),
      start: getPeriodValue("periodStart", searchParams),
    }
    const salesByPeriod: Sale[] = await getSalesByPeriod(period)
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
  } catch (err) {
    console.log("Could not fetch sales by period")
    console.log(err)

    return <ErrorPage />
  }
}
