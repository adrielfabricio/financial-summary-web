import { PageWrapper } from "@/components/page-wrapper"

export default function FinanceSummary() {
  return (
    <PageWrapper
      breadCrumbs={[
        { href: "#", label: "Configurações" },
        { href: "#", label: "Informações do Negócio" },
      ]}
      title="Informações do Negócio"
    >
      Finance Summary
    </PageWrapper>
  )
}
