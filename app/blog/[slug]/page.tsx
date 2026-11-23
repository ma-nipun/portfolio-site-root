import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { getPostSlugs, getPostBySlug } from '@/lib/posts'

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post || !post.metadata) return {}
  return { title: `${post.metadata.title} — mahela.builds`, description: post.metadata.summary }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post || !post.metadata || !post.default) notFound()
  const Post = post.default
  const { metadata } = post

  return (
    <main>
      <nav className="nav shell"><Link className="brand" href="/"><span className="brand-mark">/</span> mahela.builds</Link><Link className="text-link" href="/blog"><ArrowLeft /> Back to build log</Link></nav>
      <article className="post shell">
        <div className="post-meta"><span>{metadata.date}</span><span className="muted">/</span><span>{(metadata.tags || []).join(' / ')}</span></div>
        <Post />
        <Link className="button button-primary post-next" href="/">Back to home <ArrowUpRight /></Link>
      </article>
    </main>
  )
}
