import { InConstruction } from "@/components/in-construction"
import { PageWrapper } from "@/components/page-wrapper"

export default function FinanceSummary() {
  return (
    <PageWrapper
      breadCrumbs={[
        { href: "#", label: "Configurações" },
        { href: "#", label: "Configurações de Conta" },
      ]}
      title="Configurações de Conta"
    >
      <InConstruction />
    </PageWrapper>
  )
}
