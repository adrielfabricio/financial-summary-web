import { PageWrapper } from "@/components/page-wrapper"

export default function FinanceSummary() {
  return (
    <PageWrapper
      breadCrumbs={[
        { href: "#", label: "Pedidos" },
        { href: "#", label: "Relatório" },
      ]}
      title="Relatório"
    >
      Finance Summary
    </PageWrapper>
  )
}
