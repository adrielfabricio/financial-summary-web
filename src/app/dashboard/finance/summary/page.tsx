import { PageWrapper } from "@/components/page-wrapper"

export default function FinanceSummary() {
  return (
    <PageWrapper
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
