import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, Clock, User, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getBlogPostBySlug, getAllBlogPosts } from "@/lib/blog"

export async function generateStaticParams() {
  const posts = getAllBlogPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    return {
      title: "Post Não Encontrado",
      description: "O artigo solicitado não pôde ser encontrado",
    }
  }

  return {
    title: `${post.title} | Diretório de Plantas Ornamentais`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Diretório de Plantas Ornamentais`,
      description: post.excerpt,
      images: [post.image],
    },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Button variant="ghost" asChild className="mb-6">
        <Link href="/blog">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para o Blog
        </Link>
      </Button>

      <article className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("pt-BR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
            <div className="flex items-center">
              <Clock className="mr-2 h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center">
              <User className="mr-2 h-4 w-4" />
              <span>{post.author}</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <div key={tag} className="flex items-center">
                <Tag className="mr-1 h-3 w-3" />
                <span className="text-sm">{tag}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative aspect-video overflow-hidden rounded-lg mb-8">
          <img
            src={post.image || "/placeholder.svg"}
            alt={`${post.title} imagem de capa`}
            className="object-cover w-full h-full"
          />
        </div>

        <div
          className="prose prose-green max-w-none dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-12 pt-8 border-t">
          <h2 className="text-xl font-semibold mb-4">Sobre o Autor</h2>
          <div className="flex items-center">
            <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
              <img
                src={post.authorImage || `/placeholder.svg?height=48&width=48&text=${post.author.charAt(0)}`}
                alt={post.author}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-medium">{post.author}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Especialista em Cuidados com Plantas</p>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
