import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from 'lucide-react'
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
    <div className="container mx-auto px-4 py-6 md:py-12">
      <Button variant="ghost" asChild className="mb-4 md:mb-6">
        <Link href="/plantas">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para Plantas
        </Link>
      </Button>

      <div className="flex flex-col gap-6 md:gap-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">{plant.name}</h1>
            <p className="text-lg md:text-xl italic text-gray-500">{plant.scientificName}</p>
          </div>

        <div className="relative w-full max-w-2xl mx-auto aspect-square overflow-hidden rounded-lg">
          <Image
            src={plant.imageUrl || "/placeholder.svg"}
            alt={plant.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        <div className="space-y-4 md:space-y-6">
          

          <div className="flex flex-wrap gap-2">
            {plant.categories.map((category) => (
              <Link href={`/categorias/${category.toLowerCase()}`} key={category}>
                <Badge variant="secondary" className="text-sm">
                  {category}
                </Badge>
              </Link>
            ))}
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <p className="text-lg font-semibold flex items-center mb-2">
              Detalhes
            </p>
            <ul className="space-y-2">
              <li className="flex flex-col sm:flex-row sm:gap-2">
                <strong className="min-w-24">Nome Comum:</strong> 
                <span>{plant.name}</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:gap-2">
                <strong className="min-w-24">Nome Científico:</strong> 
                <span>{plant.scientificName}</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:gap-2">
                <strong className="min-w-24">Origem:</strong> 
                <span>{plant.origin}</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:gap-2">
                <strong className="min-w-24">Familia:</strong> 
                <span>{plant.family}</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:gap-2">
                <strong className="min-w-24">Categoria:</strong> 
                <span>{plant.categories.join(", ")}</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:gap-2">
                <strong className="min-w-24">Tamanho:</strong> 
                <span>{plant.size}</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:gap-2">
                <strong className="min-w-24">Exposição à Luz:</strong> 
                <span>{plant.light || "Luz indireta brilhante"}</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:gap-2">
                <strong className="min-w-24">Tipo de Solo:</strong> 
                <span>{plant.soilType || "Deixe o solo secar entre as regas"}</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:gap-2">
                <strong className="min-w-24">PH do Solo:</strong> 
                <span>{plant.soilPh || "Neutro"}</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:gap-2">
                <strong className="min-w-24">Toxicidade:</strong> 
                <span>{plant.toxicity || "Neutro"}</span>
              </li>
            </ul>
          </div>
          <div className="dark:prose-invert p-4 ">
            <h2 className="text-2xl md:text-3xl font-bold">{plant.name}: Como Cuidar</h2>
            <p className="mt-4">{plant.description}</p>
            <h3 className="text-xl md:text-2xl font-bold mt-4">Luz</h3>
            <p className="mt-4">{plant.lightDesc}</p>
            <h3 className="text-xl md:text-2xl font-bold mt-4">Solo</h3>
            <p className="mt-4">{plant.soilDesc}</p>
            <h3 className="text-xl md:text-2xl font-bold mt-4">Temperatura e Umidade</h3>
            <p className="mt-4">{plant.temperatureDesc}</p>
            <h3 className="text-xl md:text-2xl font-bold mt-4">Como Fertilizar {plant.name}</h3>
            <p className="mt-4">{plant.fertilizerDesc}</p>
            <h3 className="text-xl md:text-2xl font-bold mt-4">Como Propagar {plant.name}</h3>
            <p className="mt-4">{plant.propagatingDesc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}