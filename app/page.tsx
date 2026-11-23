'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowUpRight,
  Check,
  ChevronRight,
  GitBranch,
  BriefcaseBusiness,
  Menu,
  Network,
  Radio,
  Server,
  ShieldCheck,
  Terminal,
  X,
} from 'lucide-react'

const projects = [
  { number: '01', eyebrow: 'PRODUCTION / 2+ YEARS', title: 'Keeping a real app boring', description: 'Long-term maintenance, debugging, and incremental improvements for an application that has been serving users for over two years.', icon: Radio, tags: ['production', 'monitoring'], tone: 'peach' },
  { number: '02', eyebrow: 'HOMELAB / ALWAYS ON', title: 'A small cloud at home', description: 'Proxmox hosts a media server, 3×3TB RAID5 storage, and a few useful experiments — exposed through Tailscale and Nginx.', icon: Server, tags: ['proxmox', 'media-server', 'tailscale'], tone: 'mint' },
  { number: '03', eyebrow: 'EXPERIMENT / IN PROGRESS', title: 'Zero-trust, minus the theater', description: 'Trying practical ways to make infrastructure safer: identity-aware access, minimal exposure, and fewer implicit assumptions.', icon: ShieldCheck, tags: ['zero-trust', 'security'], tone: 'lavender' },
]

function Tag({ children }: { children: string }) {
  return <span className="tag">{children}</span>
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main>
      <nav className="nav shell">
        <a className="brand" href="#top" onClick={() => setMenuOpen(false)}><span className="brand-mark">/</span> mahela.builds</a>
        <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {['About', 'Lab', 'Experience'].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>)}
          <Link href="/blog" onClick={() => setMenuOpen(false)}>Build log</Link>
          <a className="nav-button" href="#contact" onClick={() => setMenuOpen(false)}>Let&apos;s talk <ArrowUpRight /></a>
        </div>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <div className="kicker"><span className="status-dot" /> Available for interesting problems</div>
          <h1>Systems that work.<br /><em>Stories worth sharing.</em></h1>
          <p className="hero-lede">I&apos;m Mahela — a hands-on infrastructure person who likes reliable production apps, thoughtful networks, and homelabs that are just a little too ambitious.</p>
          <div className="hero-actions"><a className="button button-primary" href="#lab">Explore the lab <ArrowUpRight /></a><a className="text-link" href="#about">More about me <ChevronRight /></a></div>
        </div>
        <div className="hero-art" aria-label="Abstract infrastructure diagram" role="img">
          <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" /><div className="art-node node-main"><Terminal /></div><div className="art-node node-one"><Server /></div><div className="art-node node-two"><Network /></div><div className="art-line line-one" /><div className="art-line line-two" /><div className="art-caption">systems / curious / always learning</div>
        </div>
        <div className="hero-meta"><span>Currently based in the cloud <span className="muted">/</span> and a spare room</span><span className="scroll-note"><span className="scroll-line" /> Scroll to explore</span></div>
      </section>

      <section className="intro-band">
          <div className="shell intro-grid">
              <p className="section-label">01 / THE SHORT VERSION</p>
              <div><h2>Practical systems thinking,<br /><span>with a human edge.</span></h2>
                  <p className="body-copy">I work best where software meets the messy physical world. Keeping production calm, making infrastructure understandable, and learning by building things from scratch.</p></div>
              <div className="stat-card"><strong>2+</strong><span>years keeping a<br />production app alive</span></div></div></section>

      <section className="section shell" id="about">
          <div className="section-heading">
              <p className="section-label">02 / ABOUT</p><h2>Curious by default.<br /><span>Careful on purpose.</span></h2></div>
          <div className="about-grid"><p className="body-copy">There&apos;s a particular satisfaction in making a system dependable. Not just technically correct, but observable, recoverable, and clear enough that the next person can understand it.</p>
              <p className="body-copy">My playground is a Proxmox homelab with a media server, RAID5 storage, and an ever-changing collection of experiments. My classroom is every incident, deployment, and weird little failure that teaches me something new.</p></div></section>

      <section className="section lab-section" id="lab">
          <div className="shell">
              <div className="section-heading lab-heading"><div><p className="section-label">03 / THE LAB</p><h2>Things I&apos;ve built,<br /><span>broken, then fixed.</span></h2>
              </div><p className="heading-note">A living record of practical experiments,<br />production lessons, and useful rabbit holes.</p></div>
              <div className="project-grid">{projects.map((project) => { const Icon = project.icon; return <article className={`project-card ${project.tone}`} key={project.number}>
                  <div className="project-top"><span className="project-number">{project.number}</span><Icon /></div><p className="project-eyebrow">{project.eyebrow}</p><h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="tag-row">{project.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}</div>
                  {/*<a className="card-link" href="#contact" aria-label={`Learn more about ${project.title}`}>View project <ArrowUpRight /></a>*/}
              </article> })}</div></div></section>

      <section className="experience-band" id="experience"><div className="shell experience-grid"><div><p className="section-label">05 / EXPERIENCE</p><h2>The boring parts<br /><span>are the good parts.</span></h2></div><div className="experience-item"><div className="experience-icon"><Check /></div><div><p className="experience-time">2022 — NOW</p><h3>Production application maintenance</h3><p>Keeping a real application healthy across deployments, debugging sessions, and the occasional “it works on my machine”.</p></div></div><div className="experience-item"><div className="experience-icon"><Check /></div><div><p className="experience-time">ONGOING</p><h3>Home infrastructure & experiments</h3><p>Proxmox, storage, networking, secure remote access, monitoring, and a growing list of things to automate.</p></div></div></div></section>

      <footer className="footer shell" id="contact"><div className="footer-top"><div><p className="section-label">06 / CONTACT</p><h2>Have a good<br /><span>problem?</span></h2></div><div className="contact-copy"><p>Tell me what you&apos;re building, debugging, or trying to understand. I&apos;m always up for a thoughtful conversation.</p><a className="email-link" href="mailto:hello@innatic.com">hello@innatic.com <ArrowUpRight /></a></div></div><div className="footer-bottom"><a className="brand" href="#top"><span className="brand-mark">/</span> mahela.builds</a><div className="socials"><a href="https://github.com/ma-nipun" target="_blank" rel="noopener noreferrer">GitHub <GitBranch /></a><a href="https://www.linkedin.com/in/mahela-nipun-08697a128/" target="_blank" rel="noopener noreferrer">LinkedIn <BriefcaseBusiness /></a><a href="#contact">X / Twitter <ArrowUpRight /></a></div><span className="copyright">© 2025 / built with intent</span></div></footer>
    </main>
  )
}
