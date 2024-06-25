"use client"

import { AreaChart, BarChart } from "@tremor/react"

import { aggregateSalesByCustomer } from "../lib/aggregate-sales-by-costumer"
import { aggregateSalesByDate } from "../lib/aggregate-sales-by-date"
import { aggregateSalesByLocality } from "../lib/aggregate-sales-by-locality"
import { aggregateSalesByProductType } from "../lib/aggregate-sales-by-product-type"
import { ChartCard } from "./chart-card"

export const Charts = (props: { sales: Sale[] }) => {
  const salesByProduct = aggregateSalesByProductType(props.sales)
  const salesByLocality = aggregateSalesByLocality(props.sales)
  const salesByCustomer = aggregateSalesByCustomer(props.sales)
  const salesByDate = aggregateSalesByDate(props.sales)

  return (
    <div className="grid w-full grid-cols-12 gap-4">
      <ChartCard className="col-span-full" title="Valor de vendas por Data">
        <AreaChart
          categories={["Valor"]}
          className="mt-6"
          colors={["#f96a2e"]}
          data={salesByDate}
          index="date"
          noDataText="Nenhuma venda registrada"
          showAnimation
          showLegend={false}
          showYAxis={false}
          valueFormatter={(value) =>
            Intl.NumberFormat("pt-BR", {
              compactDisplay: "short",
              currency: "BRL",

              style: "currency",
            }).format(value as number)
          }
          yAxisWidth={96}
        />
      </ChartCard>

      <ChartCard
        className="col-span-full lg:col-span-6"
        title="Quantidade de vendas por Produto"
      >
        <BarChart
          categories={["Quantidade"]}
          className="mt-6"
          colors={["#f96a2e"]}
          data={salesByProduct}
          index="name"
          noDataText="Nenhuma venda registrada"
          showAnimation
          showLegend={false}
          yAxisWidth={48}
        />
      </ChartCard>
      <ChartCard
        className="col-span-full lg:col-span-6"
        title="Valor gasto por Cliente"
      >
        <BarChart
          categories={["Valor"]}
          className="mt-6"
          colors={["#f96a2e"]}
          data={salesByCustomer}
          index="name"
          noDataText="Nenhum gasto registrado"
          showAnimation
          showLegend={false}
          valueFormatter={(value) =>
            Intl.NumberFormat("pt-BR", {
              compactDisplay: "short",
              currency: "BRL",

              style: "currency",
            }).format(value as number)
          }
          yAxisWidth={96}
        />
      </ChartCard>
      <ChartCard
        className="col-span-full"
        title="Quantidade de vendas por Localidade"
      >
        <BarChart
          categories={["Quantidade"]}
          className="mt-6"
          colors={["#f96a2e"]}
          data={salesByLocality}
          index="name"
          noDataText="Nenhuma venda registrada"
          showAnimation
          showLegend={false}
          yAxisWidth={48}
        />
      </ChartCard>
    </div>
  )
}
