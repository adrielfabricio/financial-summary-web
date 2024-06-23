import { PageWrapper } from "@/components/page-wrapper"

export default function FinanceSummary() {
  return (
    <PageWrapper
      breadCrumbs={[
        { href: "#", label: "Finanças" },
        { href: "#", label: "Receitas" },
      ]}
      title="Receitas"
    >
      Finance Summary
    </PageWrapper>
  )
}
