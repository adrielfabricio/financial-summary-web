import { PageWrapper } from "@/components/page-wrapper"

export default function FinanceSummary() {
  return (
    <PageWrapper
      breadCrumbs={[
        { href: "#", label: "Cardápio" },
        { href: "#", label: "Categorias" },
      ]}
      title="Categorias"
    >
      Finance Summary
    </PageWrapper>
  )
}
