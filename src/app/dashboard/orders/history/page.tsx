import { PageWrapper } from "@/components/page-wrapper"

export default function FinanceSummary() {
  return (
    <PageWrapper
      breadCrumbs={[
        { href: "#", label: "Pedidos" },
        { href: "#", label: "Histórico" },
      ]}
      title="Histórico"
    >
      Finance Summary
    </PageWrapper>
  )
}
