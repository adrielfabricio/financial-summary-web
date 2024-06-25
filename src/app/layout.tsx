import type { Metadata } from "next"

import { Toaster } from "@/components/ui/sonner"
import { NextUIProvider } from "@nextui-org/react"
import { GeistSans } from "geist/font/sans"

import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Inicio - FinancialSummary",
    template: "%s - FinancialSummary",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className={GeistSans.className} lang="pt-br">
      <body>
        <main>
          <NextUIProvider>
            {children}
            <Toaster />
          </NextUIProvider>
        </main>
      </body>
    </html>
  )
}
