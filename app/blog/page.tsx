import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Blog | Diretório de Plantas Ornamentais",
  description: "Leia nossos artigos mais recentes sobre cuidados com plantas, dicas de jardinagem e muito mais",
  openGraph: {
    title: "Blog | Diretório de Plantas Ornamentais",
    description: "Leia nossos artigos mais recentes sobre cuidados com plantas, dicas de jardinagem e muito mais",
    images: ["/images/og-image.jpg"],
  },
}

// Dados de demonstração dos posts do blog
const blogPosts = [
  {
    id: "1",
    title: "Dicas Essenciais de Rega para Plantas de Interior",
    slug: "dicas-essenciais-rega-plantas-interior",
    excerpt: "Aprenda as melhores práticas para regar suas plantas de interior e mantê-las saudáveis e prósperas.",
    date: "2023-04-01",
    readTime: "5 min de leitura",
    image: "/rega-para-plantas-de-interior.jpg?height=300&width=500",
    author: "Ana Silva",
    tags: ["Plantas de Interior", "Cuidados com Plantas", "Rega"],
  },
  {
    id: "2",
    title: "As Melhores Plantas para Ambientes com Pouca Luz",
    slug: "melhores-plantas-ambientes-pouca-luz",
    excerpt:
      "Descubra plantas bonitas que prosperam em condições de pouca luz, perfeitas para cantos mais escuros da sua casa.",
    date: "2023-03-15",
    readTime: "7 min de leitura",
    image: "/plantas-para-ambiente-com-pouca-luz.jpg?height=300&width=500",
    author: "João Santos",
    tags: ["Pouca Luz", "Plantas de Interior", "Seleção de Plantas"],
  },
  {
    id: "3",
    title: "Como Replantar Suas Plantas: Um Guia Passo a Passo",
    slug: "como-replantar-plantas-guia-passo-a-passo",
    excerpt: "Siga nosso guia abrangente para replantar suas plantas com segurança e dar a elas espaço para crescer.",
    date: "2023-02-28",
    readTime: "4 min de leitura",
    image: "/como-replantar-plantas.webp?height=300&width=500",
    author: "Mariana Costa",
    tags: ["Replantio", "Cuidados com Plantas", "Solo"],
  },
  {
    id: "4",
    title: "Entendendo Fertilizantes para Plantas: Um Guia para Iniciantes",
    slug: "entendendo-fertilizantes-plantas-guia-iniciantes",
    excerpt: "Aprenda sobre diferentes tipos de fertilizantes e como usá-los efetivamente para plantas mais saudáveis.",
    date: "2023-02-15",
    readTime: "6 min de leitura",
    image: "/placeholder.svg?height=300&width=500",
    author: "Rafael Oliveira",
    tags: ["Fertilizante", "Cuidados com Plantas", "Nutrientes"],
  },
  {
    id: "5",
    title: "10 Plantas Purificadoras de Ar para uma Casa Mais Saudável",
    slug: "10-plantas-purificadoras-ar-casa-saudavel",
    excerpt: "Melhore a qualidade do ar interno com estas belas plantas que filtram naturalmente as toxinas.",
    date: "2023-01-20",
    readTime: "8 min de leitura",
    image: "/placeholder.svg?height=300&width=500",
    author: "Camila Ferreira",
    tags: ["Purificação do Ar", "Plantas de Interior", "Saúde"],
  },
  {
    id: "6",
    title: "Guia de Cuidados Sazonais: Preparando Suas Plantas para o Inverno",
    slug: "guia-cuidados-sazonais-preparando-plantas-inverno",
    excerpt:
      "Dicas essenciais para ajudar suas plantas de interior e exterior a sobreviverem e prosperarem durante os meses frios de inverno.",
    date: "2023-01-05",
    readTime: "9 min de leitura",
    image: "/placeholder.svg?height=300&width=500",
    author: "Lucas Mendes",
    tags: ["Cuidados Sazonais", "Inverno", "Proteção de Plantas"],
  },
]

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Blog de Cuidados com Plantas</h1>
        <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 max-w-[700px]">
          Conselhos especializados e dicas para ajudar suas plantas a prosperarem
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Link
            href={`/blog/${post.slug}`}
            key={post.id}
            className="group rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950 overflow-hidden flex flex-col h-full"
          >
            <div className="relative aspect-video overflow-hidden">
              <img
                src={post.image || "/placeholder.svg"}
                alt={`${post.title} thumbnail`}
                className="object-cover w-full h-full transition-all group-hover:scale-105"
              />
            </div>
            <div className="p-4 md:p-6 flex-1 flex flex-col">
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("pt-BR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="mt-2 text-xl font-semibold group-hover:text-primary transition-colors">{post.title}</h2>
              <p className="mt-2 text-gray-500 dark:text-gray-400 flex-1">{post.excerpt}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-gray-700 dark:text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex items-center">
                <div className="relative h-8 w-8 rounded-full bg-muted overflow-hidden">
                  <img
                    src={`/placeholder.svg?height=32&width=32&text=${post.author.charAt(0)}`}
                    alt={post.author}
                    className="h-full w-full object-cover"
                  />
                </div>
                <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">{post.author}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
