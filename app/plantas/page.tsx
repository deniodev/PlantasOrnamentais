import type { Metadata } from "next"
import PlantList from "@/components/PlantList"
import { getAllPlants } from "@/lib/plants"

export const metadata: Metadata = {
  title: "Explorar Plantas | Diretório de Plantas Ornamentais",
  description: "Explore nossa coleção de belas plantas ornamentais para sua casa e jardim",
  openGraph: {
    title: "Explorar Plantas | Diretório de Plantas Ornamentais",
    description: "Explore nossa coleção de belas plantas ornamentais para sua casa e jardim",
    images: ["/images/og-image.jpg"],
  },
}

export default function PlantsPage() {
  const plants = getAllPlants()

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Coleção de Plantas</h1>
        <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 max-w-[700px]">
          Explore nossa diversa coleção de plantas ornamentais para encontrar a adição perfeita para seu espaço
        </p>
      </div>

      <PlantList plants={plants} />
    </div>
  )
}
