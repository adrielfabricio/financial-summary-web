import type { Metadata } from "next"

import { ErrorPage } from "@/components/error-page"
import { PageWrapper } from "@/components/page-wrapper"
import { getPeriodValue } from "@/lib/utils"

import { Actions } from "./_components/actions"
import { Charts } from "./_components/charts"

export const metadata: Metadata = {
  title: "Resumo Financeiro",
}

export default async function FinanceSummary({
  searchParams,
}: {
  searchParams: SearchParams
}) {
  try {
    const period = {
      end: getPeriodValue("periodEnd", searchParams),
      start: getPeriodValue("periodStart", searchParams),
    }
    const salesByPeriod = await getSalesByPeriod(period)

    return (
      <PageWrapper
        actions={<Actions period={period} />}
        breadCrumbs={[
          { href: "#", label: "Finanças" },
          { href: "#", label: "Resumo" },
        ]}
        title="Resumo Financeiro"
      >
        <Charts sales={salesByPeriod} />
      </PageWrapper>
    )
  } catch (err) {
    console.log("Could not fetch sales by period")
    console.log(err)

    return <ErrorPage />
  }
}

async function getSalesByPeriod(period: { end: string; start: string }) {
  const salesByPeriodRes = await fetch(
    `${process.env["NEXT_PUBLIC_API_URL"]}/sales/period?startDate=${period.start}&endDate=${period.end}`
  )

  return await salesByPeriodRes.json()
}
