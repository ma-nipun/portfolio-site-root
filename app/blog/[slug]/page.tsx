import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'

const posts = {
  'adding-sane-monitoring': () => import('@/content/posts/adding-sane-monitoring.mdx'),
}

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = posts[slug as keyof typeof posts]
  if (!post) return {}
  const { metadata } = await post()
  return { title: `${metadata.title} — alex.builds`, description: metadata.summary }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = posts[slug as keyof typeof posts]
  if (!post) notFound()
  const { default: Post, metadata } = await post()

  return (
    <main>
      <nav className="nav shell"><a className="brand" href="/"><span className="brand-mark">/</span> alex.builds</a><a className="text-link" href="/blog"><ArrowLeft /> Back to build log</a></nav>
      <article className="post shell">
        <div className="post-meta"><span>{metadata.date}</span><span className="muted">/</span><span>{metadata.tags.join(' / ')}</span></div>
        <Post />
        <a className="button button-primary post-next" href="/">Back to home <ArrowUpRight /></a>
      </article>
    </main>
  )
}
