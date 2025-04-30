import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Plantas Ornamentais",
  description: "Descubra belas plantas ornamentais para sua casa e jardim",
  openGraph: {
    title: "Diretório de Plantas Ornamentais",
    description: "Descubra belas plantas ornamentais para sua casa e jardim",
    images: ["/images/og-image.jpg"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
