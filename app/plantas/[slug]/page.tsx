import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { getAllPlants, getPlantBySlug } from "@/lib/plants"

export async function generateStaticParams() {
  const plants = getAllPlants()

  return plants.map((plant) => ({
    slug: plant.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const plant = getPlantBySlug(params.slug)

  if (!plant) {
    return {
      title: "Planta Não Encontrada",
      description: "A planta solicitada não pôde ser encontrada",
    }
  }

  return {
    title: `${plant.name} | Diretório de Plantas Ornamentais`,
    description: plant.description,
    openGraph: {
      title: `${plant.name} | Diretório de Plantas Ornamentais`,
      description: plant.description,
      images: [plant.imageUrl],
    },
  }
}

export default function PlantPage({ params }: { params: { slug: string } }) {
  const plant = getPlantBySlug(params.slug)

  if (!plant) {
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

      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative aspect-square overflow-hidden rounded-lg">
          <Image
            src={plant.imageUrl || "/placeholder.svg"}
            alt={plant.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{plant.name}</h1>
            <p className="text-xl italic text-gray-500">{plant.scientificName}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {plant.categories.map((category) => (
              <Link href={`/categories/${category.toLowerCase()}`} key={category}>
                <Badge variant="secondary" className="text-sm">
                  {category}
                </Badge>
              </Link>
            ))}
          </div>

          <div className="prose max-w-none dark:prose-invert">
            <p>{plant.description}</p>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <h2 className="text-lg font-semibold flex items-center mb-2">
              <Leaf className="mr-2 h-5 w-5" />
              Dicas de Cuidados
            </h2>
            <ul className="space-y-2">
              <li>
                <strong>Luz:</strong> {plant.care?.light || "Luz indireta brilhante"}
              </li>
              <li>
                <strong>Água:</strong> {plant.care?.water || "Deixe o solo secar entre as regas"}
              </li>
              <li>
                <strong>Temperatura:</strong> {plant.care?.temperature || "18-27°C"}
              </li>
              <li>
                <strong>Umidade:</strong> {plant.care?.humidity || "Média a alta"}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
