import type { Metadata } from "next"

import { Toaster } from "@/components/ui/sonner"
import { NextUIProvider } from "@nextui-org/react"
import { Inter } from "next/font/google"

import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

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
    <html lang="pt-br">
      <body className={inter.className}>
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
