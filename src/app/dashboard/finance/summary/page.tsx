import { ErrorPage } from "@/components/error-page"
import { PageWrapper } from "@/components/page-wrapper"
import { isValidDate } from "@/lib/utils"

import { Actions } from "./_components/actions"

export default async function FinanceSummary({
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

  console.log(salesByPeriod)

  return (
    <PageWrapper
      actions={<Actions period={period} />}
      breadCrumbs={[
        { href: "#", label: "Finanças" },
        { href: "#", label: "Resumo" },
      ]}
      title="Resumo Financeiro"
    >
      Finance Summary
    </PageWrapper>
  )
}
