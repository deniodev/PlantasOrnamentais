import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import type { BlogPost } from "@/lib/types"

interface BlogPostCardProps {
  post: BlogPost
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="block h-full">
      <Card className="overflow-hidden transition-all hover:shadow-md h-full flex flex-col">
        <div className="aspect-video relative overflow-hidden">
          <img
            src={post.image || "/placeholder.svg"}
            alt={`${post.title} thumbnail`}
            className="object-cover w-full h-full transition-all group-hover:scale-105"
          />
        </div>
        <CardContent className="p-4 flex-1">
          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-2">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("pt-BR", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </time>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          <h3 className="text-lg font-semibold line-clamp-2 mb-2">{post.title}</h3>
          <p className="text-gray-500 dark:text-gray-400 line-clamp-2">{post.excerpt}</p>
        </CardContent>
        <CardFooter className="p-4 pt-0 mt-auto">
          <div className="flex flex-wrap gap-2">
            {post.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-gray-700 dark:text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}
