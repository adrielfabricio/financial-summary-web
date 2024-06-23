import { PageWrapper } from "@/components/page-wrapper"

export default function FinanceSummary() {
  return (
    <PageWrapper
      breadCrumbs={[
        { href: "#", label: "Cardápio" },
        { href: "#", label: "Promoções & Ofertas" },
      ]}
      title="Promoções & Ofertas"
    >
      Finance Summary
    </PageWrapper>
  )
}
