import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import PlantCard from "@/components/PlantCard"
import BlogPostCard from "@/components/BlogPostCard"
import { getAllPlants } from "@/lib/plants"
import { getRecentBlogPosts } from "@/lib/blog"

export default function Home() {
  const featuredPlants = getAllPlants().slice(0, 3)
  const recentPosts = getRecentBlogPosts(3)

  return (
    <div className="container mx-auto px-4 py-12">
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Descubra Belas Plantas Ornamentais
              </h1>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Explore nossa coleção selecionada de plantas ornamentais para trazer beleza natural à sua casa e jardim.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild>
                  <Link href="/plantas">
                    Explorar Plantas <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/blog">Ler Nosso Blog</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/plantas-ornamentais.jpg?height=400&width=600"
                alt="Plantas Ornamentais em Destaque"
                className="rounded-lg object-cover w-full aspect-video"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Plantas em Destaque</h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Confira algumas de nossas plantas ornamentais mais populares
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {featuredPlants.map((plant) => (
              <PlantCard key={plant.slug} plant={plant} />
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Button variant="outline" asChild>
              <Link href="/plantas">Ver Todas as Plantas</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Últimos Artigos do Blog</h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Leia nossos artigos mais recentes sobre cuidados com plantas e dicas de jardinagem
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {recentPosts.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Button variant="outline" asChild>
              <Link href="/blog">Ver Todos os Artigos</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted rounded-lg">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Dicas de Cuidados com Plantas
              </h2>
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Aprenda como manter suas plantas saudáveis e prósperas
              </p>
            </div>
            <div className="mx-auto max-w-[700px] space-y-4">
              <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Visite nosso blog para conselhos especializados sobre rega, iluminação, solo e muito mais. Nossos guias
                abrangentes ajudarão você a se tornar um especialista em cuidados com plantas.
              </p>
              <Button asChild>
                <Link href="/blog">Ler Nosso Blog</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
