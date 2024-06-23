import { PageWrapper } from "@/components/page-wrapper"

export default function FinanceSummary() {
  return (
    <PageWrapper
      breadCrumbs={[
        { href: "#", label: "Cardápio" },
        { href: "#", label: "Itens" },
      ]}
      title="Itens"
    >
      Finance Summary
    </PageWrapper>
  )
}
