import { PageWrapper } from "@/components/page-wrapper"

export default function FinanceSummary() {
  return (
    <PageWrapper
      breadCrumbs={[
        { href: "#", label: "Pedidos" },
        { href: "#", label: "Em aberto" },
      ]}
      title="Em aberto"
    >
      Finance Summary
    </PageWrapper>
  )
}
