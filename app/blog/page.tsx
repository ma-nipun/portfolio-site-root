import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { getAllPosts } from '@/lib/posts'

export default async function BlogIndex() {
  const posts = await getAllPosts()

  return (
    <main>
      <nav className="nav shell">
        <Link className="brand" href="/"><span className="brand-mark">/</span> mahela.builds</Link>
        <div className="nav-links open"><Link href="/">Home</Link><Link href="/#about">About</Link><Link href="/#lab">Lab</Link><Link className="nav-button" href="/#contact">Let&apos;s talk <ArrowUpRight /></Link></div>
      </nav>
      <section className="section shell blog-index">
        <p className="section-label">04 / BUILD LOG</p>
        <h1>Still figuring<br /><em>things out.</em></h1>
        <p className="body-copy blog-intro">A living record of practical experiments, production lessons, and useful rabbit holes.</p>
        <div className="log-list">
          {posts.map((post) => (
            <article className="log-entry" key={post.slug}>
              <div className="log-date">{post.date}</div>
              <div className="log-main"><h2>{post.title}</h2><p>{post.summary}</p><div className="tag-row">{post.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div></div>
              <Link className="log-arrow" href={`/blog/${post.slug}`} aria-label={`Read ${post.title}`}><ArrowUpRight /></Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
