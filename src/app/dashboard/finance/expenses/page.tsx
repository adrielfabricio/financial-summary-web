import { InConstruction } from "@/components/in-construction"
import { PageWrapper } from "@/components/page-wrapper"

export default function FinanceSummary() {
  return (
    <PageWrapper
      breadCrumbs={[
        { href: "#", label: "Finanças" },
        { href: "#", label: "Despesas" },
      ]}
      title="Despesas"
    >
      <InConstruction />
    </PageWrapper>
  )
}
