import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[70vh] px-4 py-12 text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Página Não Encontrada</h2>
      <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-md">
        A página que você está procurando não existe ou foi movida.
      </p>
      <Button asChild>
        <Link href="/">Voltar ao Início</Link>
      </Button>
    </div>
  )
}
