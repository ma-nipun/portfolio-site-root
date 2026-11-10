import { ArrowUpRight } from 'lucide-react'

const posts = [
  {
    date: 'FEB 18, 2025',
    title: 'Adding sane monitoring to the homelab',
    summary: 'A small stack for seeing what is healthy before something becomes a late-night mystery.',
    tags: ['monitoring', 'homelab'],
    slug: 'adding-sane-monitoring',
  },
  {
    date: 'JAN 29, 2025',
    title: 'Tailscale ACLs: less network, more intent',
    summary: 'Reworking access rules so services are reachable by the right people, not just the right IPs.',
    tags: ['security', 'networking'],
    slug: '#',
  },
  {
    date: 'DEC 12, 2024',
    title: 'Oracle Always Free: the useful bits',
    summary: 'Notes from putting a tiny VM to work without turning free cloud into production infrastructure.',
    tags: ['learning', 'security'],
    slug: '#',
  },
  {
    date: 'OCT 05, 2024',
    title: 'What two years of production teaches you',
    summary: 'The boring, repeatable habits that keep a real application running and users unbothered.',
    tags: ['production', 'learning'],
    slug: '#',
  },
]

export default function BlogIndex() {
  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="/"><span className="brand-mark">/</span> alex.builds</a>
        <div className="nav-links open"><a href="/">Home</a><a href="/#about">About</a><a href="/#lab">Lab</a><a className="nav-button" href="/#contact">Let&apos;s talk <ArrowUpRight /></a></div>
      </nav>
      <section className="section shell blog-index">
        <p className="section-label">04 / BUILD LOG</p>
        <h1>Still figuring<br /><em>things out.</em></h1>
        <p className="body-copy blog-intro">A living record of practical experiments, production lessons, and useful rabbit holes.</p>
        <div className="log-list">
          {posts.map((post) => (
            <article className="log-entry" key={post.title}>
              <div className="log-date">{post.date}</div>
              <div className="log-main"><h2>{post.title}</h2><p>{post.summary}</p><div className="tag-row">{post.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div></div>
              <a className="log-arrow" href={post.slug === '#' ? '/#contact' : `/blog/${post.slug}`} aria-label={`Read ${post.title}`}><ArrowUpRight /></a>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
