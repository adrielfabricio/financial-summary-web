import { PageWrapper } from "@/components/page-wrapper"

export default function FinanceSummary() {
  return (
    <PageWrapper
      breadCrumbs={[
        { href: "#", label: "Finanças" },
        { href: "#", label: "Extratos" },
      ]}
      title="Extratos"
    >
      Finance Summary
    </PageWrapper>
  )
}
