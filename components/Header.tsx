"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

const navigation = [
  { name: "Início", href: "/" },
  { name: "Plantas", href: "/plantas" },
  { name: "Blog", href: "/blog" },
  { name: "Sobre", href: "/sobre" },
  { name: "Contato", href: "/contato" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="bg-white dark:bg-gray-950 sticky top-0 z-50 w-full border-b">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 font-bold text-2xl flex items-center">
            <span className="text-primary">Plantas</span>Ornamentais
          </Link>
        </div>
        <div className="flex lg:hidden items-center gap-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Abrir menu principal</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </Button>
        </div>
        <ThemeToggle/>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-semibold leading-6 ${
                pathname === item.href ? "text-primary" : "text-gray-900 dark:text-gray-100 hover:text-primary"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Menu mobile */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50 bg-gray-900/80" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white dark:bg-gray-950 px-6 py-6 sm:max-w-sm">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5 font-bold text-2xl" onClick={() => setMobileMenuOpen(false)}>
                <span className="text-primary">Plantas</span>Ornamentais
              </Link>
              <Button variant="ghost" className="-m-2.5 rounded-md p-2.5" onClick={() => setMobileMenuOpen(false)}>
                <span className="sr-only">Fechar menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </Button>
            </div>
            <div className="mt-6 flow-root">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 ${
                      pathname === item.href ? "text-primary" : "text-gray-900 dark:text-gray-100 hover:text-primary"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Button className="w-full" asChild>
                  <Link href="/plantas" onClick={() => setMobileMenuOpen(false)}>
                    Explorar Plantas
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
