import plantsData from "@/data/plants.json"
import type { Plant } from "./types"

export function getAllPlants(): Plant[] {
  return plantsData
}

export function getPlantBySlug(slug: string): Plant | undefined {
  return plantsData.find((plant) => plant.slug === slug)
}

export function getAllCategories(): string[] {
  const categoriesSet = new Set<string>()

  plantsData.forEach((plant) => {
    plant.categories.forEach((category) => {
      categoriesSet.add(category)
    })
  })

  return Array.from(categoriesSet)
}

export function getPlantsByCategory(category: string): Plant[] {
  return plantsData.filter((plant) => plant.categories.some((cat) => cat.toLowerCase() === category.toLowerCase()))
}
