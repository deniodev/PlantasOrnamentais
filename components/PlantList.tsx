"use client"

import { useState, useMemo } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import PlantCard from "@/components/PlantCard"
import type { Plant } from "@/lib/types"
import { getAllCategories } from "@/lib/plants"

interface PlantListProps {
  plants: Plant[]
}

export default function PlantList({ plants }: PlantListProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = useMemo(() => ["all", ...getAllCategories()], [])

  const filteredPlants = useMemo(() => {
    return plants.filter((plant) => {
      const matchesSearch =
        plant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        plant.scientificName.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesCategory =
        selectedCategory === "all" ||
        plant.categories.some((category) => category.toLowerCase() === selectedCategory.toLowerCase())

      return matchesSearch && matchesCategory
    })
  }, [plants, searchQuery, selectedCategory])

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
          <Input
            type="search"
            placeholder="Buscar plantas..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-full sm:w-[180px]">
            <SelectValue placeholder="Categoria" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category === "all" ? "Todas" : category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {filteredPlants.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPlants.map((plant) => (
            <PlantCard key={plant.slug} plant={plant} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium">Nenhuma planta encontrada</h3>
          <p className="text-gray-500 mt-2">Tente ajustar sua busca ou critérios de filtro</p>
        </div>
      )}
    </div>
  )
}
