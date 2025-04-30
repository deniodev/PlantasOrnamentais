import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import type { Plant } from "@/lib/types"

interface PlantCardProps {
  plant: Plant
}

export default function PlantCard({ plant }: PlantCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="aspect-square relative overflow-hidden">
        <Image
          src={plant.imageUrl || "/placeholder.svg"}
          alt={plant.name}
          fill
          className="object-cover transition-transform hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardHeader className="p-4">
        <div className="space-y-1">
          <h3 className="font-semibold text-lg">{plant.name}</h3>
          <p className="text-sm text-gray-500 italic">{plant.scientificName}</p>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="flex flex-wrap gap-2 mb-2">
          {plant.categories.slice(0, 3).map((category) => (
            <Badge variant="outline" key={category}>
              {category}
            </Badge>
          ))}
        </div>
        <p className="text-sm text-gray-500 line-clamp-2">{plant.description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link
          href={`/plantas/${plant.slug}`}
          className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        >
          Ver Detalhes
        </Link>
      </CardFooter>
    </Card>
  )
}
