import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import PlantCard from "@/components/PlantCard"
import { getAllCategories, getPlantsByCategory } from "@/lib/plants"

export async function generateStaticParams() {
  const categories = getAllCategories()

  return categories.map((category) => ({
    category: category.toLowerCase(),
  }))
}

export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
  const category = params.category.charAt(0).toUpperCase() + params.category.slice(1)
  const plants = getPlantsByCategory(params.category)

  if (!plants.length) {
    return {
      title: "Categoria Não Encontrada",
      description: "A categoria solicitada não pôde ser encontrada",
    }
  }

  return {
    title: `Plantas ${category} | Diretório de Plantas Ornamentais`,
    description: `Explore nossa coleção de plantas ${category.toLowerCase()} para sua casa e jardim`,
    openGraph: {
      title: `Plantas ${category} | Diretório de Plantas Ornamentais`,
      description: `Explore nossa coleção de plantas ${category.toLowerCase()} para sua casa e jardim`,
      images: ["/images/og-image.jpg"],
    },
  }
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = params.category.charAt(0).toUpperCase() + params.category.slice(1)
  const plants = getPlantsByCategory(params.category)

  if (!plants.length) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Button variant="ghost" asChild className="mb-6">
        <Link href="/plantas">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para Plantas
        </Link>
      </Button>

      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Plantas {category}</h1>
        <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 max-w-[700px]">
          Explore nossa coleção de plantas {category.toLowerCase()} para sua casa e jardim
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plants.map((plant) => (
          <PlantCard key={plant.slug} plant={plant} />
        ))}
      </div>
    </div>
  )
}
