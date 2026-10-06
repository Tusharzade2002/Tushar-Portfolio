import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FaReact, FaLinkedin, FaGithub, FaEnvelope, FaHtml5, FaCss3Alt, FaJs, FaBootstrap,
  FaAws, FaArrowRight, FaDownload, FaPhone, FaMapMarkerAlt, FaBars, FaTimes,
  FaBriefcase, FaServer, FaTerminal, FaCode, FaGitAlt,
} from 'react-icons/fa'
import {
  SiNodedotjs, SiMongodb, SiPostgresql, SiTailwindcss, SiRedux, SiExpress, SiTypescript,
  SiDocker, SiNginx, SiPostman,
} from 'react-icons/si'
import { HiAcademicCap } from 'react-icons/hi2'

const PROFILE = {
  name: 'Tushar Zade',
  title: 'Full Stack Developer',
  email: 'tusharzade29@gmail.com',
  phone: '+91 81779 76733',
  location: 'Butibori, Nagpur, India',
  linkedin: 'https://www.linkedin.com/in/tushar-zade-b491a022b/',
  github: 'https://github.com/Tusharzade2002',
  resume: '/Tushar-Zade-Resume.pdf',
}

const SUMMARY =
  'Full Stack Developer with 1+ year of professional experience building and deploying web applications using React.js, Node.js, Express.js, MongoDB, and PostgreSQL. Experienced in developing REST APIs, integrating frontend and backend systems, managing production databases, and deploying applications using Docker and Nginx.'

const STATS = [
  { value: '1+', label: 'Years experience' },
  { value: '2', label: 'Companies' },
  { value: '15+', label: 'Technologies' },
]

const EXPERIENCE = [
  {
    role: 'Full Stack Developer',
    company: 'Allynerds',
    period: 'July 2025 – Present',
    current: true,
    points: [
      'Developed and integrated REST APIs using Node.js and Express.js for scalable web application workflows.',
      'Built responsive React.js components and integrated them with backend APIs to deliver seamless user experiences.',
      'Managed and optimized PostgreSQL databases in production environments, improving query efficiency and application reliability.',
      'Containerized backend services using Docker and managed application deployments across server environments.',
      'Configured Nginx as a reverse proxy for production applications, improving routing, security, and reliability.',
      'Deployed and maintained frontend and backend services on production servers and resolved issues across the full stack.',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Docker', 'Nginx'],
  },
  {
    role: 'MERN Stack Intern',
    company: 'Betasys.ai',
    period: 'March 2025 – June 2025',
    points: [
      'Developed reusable UI components using React.js, Redux Toolkit, and Tailwind CSS to enhance user experience.',
      'Designed and optimized RESTful APIs using Node.js and Express to improve application performance and scalability.',
      'Integrated front-end applications with backend APIs to ensure efficient communication and data exchange.',
    ],
    tech: ['React.js', 'Redux Toolkit', 'Tailwind CSS', 'Node.js', 'Express.js'],
  },
]

const SKILLS = [
  {
    title: 'Frontend',
    icon: FaCode,
    items: [
      ['HTML', FaHtml5], ['CSS', FaCss3Alt], ['JavaScript', FaJs], ['TypeScript', SiTypescript],
      ['React.js', FaReact], ['Redux Toolkit', SiRedux], ['Tailwind CSS', SiTailwindcss], ['Bootstrap', FaBootstrap],
    ],
  },
  {
    title: 'Backend & Databases',
    icon: FaServer,
    items: [
      ['Node.js', SiNodedotjs], ['Express.js', SiExpress], ['REST APIs', FaServer],
      ['MongoDB', SiMongodb], ['PostgreSQL', SiPostgresql],
    ],
  },
  {
    title: 'DevOps & Tools',
    icon: FaTerminal,
    items: [
      ['Docker', SiDocker], ['Nginx', SiNginx], ['AWS (Basic)', FaAws], ['Git & GitHub', FaGitAlt],
      ['Postman', SiPostman], ['WinSCP', FaTerminal], ['PuTTY', FaTerminal],
    ],
  },
]

const PROJECTS = [
  {
    title: 'Allynerds Production Platform',
    summary: 'Client web applications built and run in production at Allynerds.',
    detail: 'Built React.js interfaces backed by Node.js/Express REST APIs and PostgreSQL. Containerized services with Docker and served them behind an Nginx reverse proxy on production servers.',
    tech: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Docker', 'Nginx'],
    badge: 'Professional',
  },
  {
    title: 'E-commerce Application',
    summary: 'Full-stack platform with login, product browsing, cart, and order placement.',
    detail: 'Built the frontend with React.js and Tailwind CSS and implemented the backend with Express.js and MongoDB.',
    tech: ['React.js', 'Tailwind CSS', 'Express.js', 'MongoDB'],
  },
  {
    title: 'Quick Notes App',
    summary: 'Notes application with add, edit, and delete features.',
    detail: 'Persists notes in LocalStorage so data survives reloads. Built with React.js and CSS.',
    tech: ['React.js', 'CSS', 'LocalStorage'],
  },
  {
    title: 'Portfolio Website',
    summary: 'Personal portfolio built using React.js and Framer Motion animations.',
    detail: 'Presents skills, projects, and professional experience in a clean, responsive format.',
    tech: ['React.js', 'Tailwind CSS', 'Framer Motion'],
  },
]

const EDUCATION = [
  { course: 'Master of Computer Application (MCA)', institute: 'Tulsiramji Gaikwad Patil College', period: '2023 – 2025', score: '61%' },
  { course: 'Bachelor of Computer Application (BCA)', institute: 'City Premier College', period: '2020 – 2023', score: '74%' },
  { course: 'Higher Secondary Certificate (HSC)', institute: 'Balaji Junior College', period: '2018 – 2020', score: '64%' },
]

const LANGUAGES = ['English', 'Hindi', 'Marathi']

const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, ease: 'easeOut' },
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const goTo = (id) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-600">
      {/* Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'border-b border-slate-200/80 bg-white/80 backdrop-blur-md'
            : 'border-b border-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 font-heading text-sm font-bold text-white">
              TZ
            </span>
            <span className="font-heading font-semibold text-slate-900">{PROFILE.name}</span>
          </button>

          <div className="hidden items-center gap-1 md:flex">
            {SECTIONS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => goTo(id)}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  active === id
                    ? 'text-blue-600'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href={PROFILE.resume}
              download
              className="hidden items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-700 sm:flex"
            >
              <FaDownload className="text-xs" /> Resume
            </a>
            <button
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Menu"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 md:hidden"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t border-slate-200 bg-white md:hidden"
            >
              <div className="flex flex-col px-5 py-3">
                {SECTIONS.map(({ id, label }) => (
                  <button
                    key={id}
                    onClick={() => goTo(id)}
                    className="py-2.5 text-left text-sm font-medium text-slate-700"
                  >
                    {label}
                  </button>
                ))}
                <a href={PROFILE.resume} download className="mt-2 flex items-center gap-2 py-2.5 text-sm font-medium text-blue-600">
                  <FaDownload className="text-xs" /> Download Resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="relative mx-auto max-w-6xl px-5">
        {/* Hero */}
        <section className="grid items-center gap-12 py-16 md:grid-cols-[1.5fr,1fr] md:py-24">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-700"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Open to new opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 }}
              className="mt-6 font-heading text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl"
            >
              Hi, I&apos;m Tushar.
              <span className="mt-2 block text-blue-600">
                Full Stack Developer.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16 }}
              className="mt-6 max-w-xl text-base leading-relaxed md:text-lg"
            >
              I build and deploy production web applications end to end — React frontends, Node.js &amp; Express
              APIs, PostgreSQL and MongoDB databases, shipped with Docker and Nginx.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.24 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <button
                onClick={() => goTo('contact')}
                className="group flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700"
              >
                Get in touch
                <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
              </button>
              <a
                href={PROFILE.resume}
                download
                className="flex items-center gap-2 rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-slate-400 hover:bg-slate-50"
              >
                <FaDownload className="text-xs" /> Download CV
              </a>
              <div className="flex items-center gap-1 pl-1">
                <IconLink href={PROFILE.github} label="GitHub" icon={FaGithub} />
                <IconLink href={PROFILE.linkedin} label="LinkedIn" icon={FaLinkedin} />
                <IconLink href={`mailto:${PROFILE.email}`} label="Email" icon={FaEnvelope} />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="w-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">At a glance</p>
            <dl className="mt-5 space-y-5 text-sm">
              <GlanceRow icon={FaBriefcase} label="Current role" value="Full Stack Developer" sub="Allynerds · July 2025 – Present" />
              <GlanceRow icon={FaServer} label="Core stack" value="React · Node.js · Express" sub="PostgreSQL · MongoDB" />
              <GlanceRow icon={FaTerminal} label="Deployment" value="Docker · Nginx" sub="AWS (Basic)" />
              <GlanceRow icon={FaMapMarkerAlt} label="Location" value={PROFILE.location} />
            </dl>
          </motion.div>
        </section>

        {/* Stats */}
        <motion.section {...fadeUp} className="grid grid-cols-3 divide-x divide-slate-200 rounded-2xl border border-slate-200 bg-white">
          {STATS.map((s) => (
            <div key={s.label} className="px-4 py-6 text-center">
              <p className="font-heading text-2xl font-bold text-slate-900 md:text-3xl">{s.value}</p>
              <p className="mt-1 text-xs text-slate-500 md:text-sm">{s.label}</p>
            </div>
          ))}
        </motion.section>

        {/* About */}
        <Section id="about" eyebrow="About" title="A bit about me">
          <div className="grid gap-10 md:grid-cols-[1.5fr,1fr]">
            <motion.div {...fadeUp} className="space-y-4 text-base leading-relaxed">
              <p>{SUMMARY}</p>
              <p>
                I enjoy owning features across the whole stack — from designing an API and tuning a query to polishing
                the UI and getting it running reliably in production.
              </p>
            </motion.div>
            <motion.dl {...fadeUp} className="space-y-4 rounded-2xl border border-slate-200 p-6 text-sm">
              <InfoRow icon={FaMapMarkerAlt} label="Location" value={PROFILE.location} />
              <InfoRow icon={FaEnvelope} label="Email" value={PROFILE.email} href={`mailto:${PROFILE.email}`} />
              <InfoRow icon={FaPhone} label="Phone" value={PROFILE.phone} href={`tel:${PROFILE.phone.replace(/\s/g, '')}`} />
              <InfoRow icon={FaCode} label="Languages" value={LANGUAGES.join(', ')} />
            </motion.dl>
          </div>
        </Section>

        {/* Experience */}
        <Section id="experience" eyebrow="Experience" title="Where I've worked">
          <div className="relative space-y-8 border-l border-slate-200 pl-8">
            {EXPERIENCE.map((job) => (
              <motion.article key={job.company} {...fadeUp} className="relative">
                <span
                  className={`absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border-4 border-slate-50 ${
                    job.current ? 'bg-blue-500' : 'bg-slate-400'
                  }`}
                />
                <div className="rounded-2xl border border-slate-200 bg-white p-6 transition-colors hover:border-blue-500/40">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-slate-900">{job.role}</h3>
                      <p className="text-sm font-medium text-blue-600">{job.company}</p>
                    </div>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                      {job.period}
                    </span>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed">
                    {job.points.map((p) => (
                      <li key={p} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                  <TagList items={job.tech} />
                </div>
              </motion.article>
            ))}
          </div>
        </Section>

        {/* Skills */}
        <Section id="skills" eyebrow="Skills" title="Tech I work with">
          <div className="grid gap-5 md:grid-cols-3">
            {SKILLS.map(({ title, icon: Icon, items }, i) => (
              <motion.div
                key={title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600">
                    <Icon />
                  </span>
                  <h3 className="font-heading font-semibold text-slate-900">{title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map(([name, SkillIcon]) => (
                    <span
                      key={name}
                      className="flex items-center gap-1.5 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:border-blue-500/50"
                    >
                      <SkillIcon className="text-sm text-slate-500" />
                      {name}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Projects */}
        <Section id="projects" eyebrow="Projects" title="Things I've built">
          <div className="grid gap-5 md:grid-cols-2">
            {PROJECTS.map((p, i) => (
              <motion.article
                key={p.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/5"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 text-white">
                    {p.badge ? <FaBriefcase /> : <FaCode />}
                  </span>
                  {p.badge && (
                    <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-700">
                      {p.badge}
                    </span>
                  )}
                </div>
                <h3 className="mt-5 font-heading text-lg font-semibold text-slate-900">{p.title}</h3>
                <p className="mt-2 text-sm font-medium text-slate-800">{p.summary}</p>
                <p className="mt-2 flex-1 text-sm leading-relaxed">{p.detail}</p>
                <TagList items={p.tech} />
              </motion.article>
            ))}
          </div>
          <motion.div {...fadeUp} className="mt-8 text-center">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:underline"
            >
              <FaGithub /> More on GitHub <FaArrowRight className="text-xs" />
            </a>
          </motion.div>
        </Section>

        {/* Education */}
        <Section id="education" eyebrow="Education" title="Academic background">
          <div className="grid gap-4">
            {EDUCATION.map((e) => (
              <motion.div
                key={e.course}
                {...fadeUp}
                className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-lg text-blue-600">
                    <HiAcademicCap />
                  </span>
                  <div>
                    <h3 className="font-semibold text-slate-900">{e.course}</h3>
                    <p className="text-sm">{e.institute}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-slate-900">{e.period}</p>
                  <p className="text-xs">Score: {e.score}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" eyebrow="Contact" title="Let's work together">
          <div className="grid gap-10 md:grid-cols-2">
            <motion.div {...fadeUp} className="space-y-6">
              <p className="text-base leading-relaxed">
                I&apos;m open to full-time roles and freelance work in full stack development. Have a project or an
                opening in mind? Drop me a message — I usually reply within a day.
              </p>
              <div className="space-y-3">
                <ContactCard icon={FaEnvelope} label="Email" value={PROFILE.email} href={`mailto:${PROFILE.email}`} />
                <ContactCard icon={FaLinkedin} label="LinkedIn" value="tushar-zade" href={PROFILE.linkedin} />
                <ContactCard icon={FaGithub} label="GitHub" value="Tusharzade2002" href={PROFILE.github} />
              </div>
            </motion.div>
            <ContactForm />
          </div>
        </Section>
      </main>

      <footer className="relative mt-12 border-t border-slate-200">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-8 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} {PROFILE.name}. Built with React &amp; Tailwind CSS.</p>
          <div className="flex items-center gap-1">
            <IconLink href={PROFILE.github} label="GitHub" icon={FaGithub} />
            <IconLink href={PROFILE.linkedin} label="LinkedIn" icon={FaLinkedin} />
            <IconLink href={`mailto:${PROFILE.email}`} label="Email" icon={FaEnvelope} />
          </div>
        </div>
      </footer>
    </div>
  )
}

function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="scroll-mt-20 py-20">
      <motion.div {...fadeUp} className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">{eyebrow}</p>
        <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          {title}
        </h2>
      </motion.div>
      {children}
    </section>
  )
}

function GlanceRow({ icon: Icon, label, value, sub }) {
  return (
    <div className="flex items-start gap-3">
      <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
        <Icon />
      </span>
      <div>
        <dt className="text-xs text-slate-500">{label}</dt>
        <dd className="font-semibold text-slate-900">{value}</dd>
        {sub && <dd className="text-xs text-slate-500">{sub}</dd>}
      </div>
    </div>
  )
}

function TagList({ items }) {
  return (
    <div className="mt-5 flex flex-wrap gap-2">
      {items.map((t) => (
        <span key={t} className="rounded-md bg-blue-500/10 px-2.5 py-1 text-xs font-medium text-blue-700">
          {t}
        </span>
      ))}
    </div>
  )
}

function IconLink({ href, label, icon: Icon }) {
  const external = href.startsWith('http')
  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className="flex h-10 w-10 items-center justify-center rounded-lg text-lg text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900"
    >
      <Icon />
    </a>
  )
}

function InfoRow({ icon: Icon, label, value, href }) {
  return (
    <div className="flex items-start gap-3">
      <Icon className="mt-0.5 flex-shrink-0 text-blue-600" />
      <div className="min-w-0">
        <dt className="text-xs text-slate-500">{label}</dt>
        <dd className="break-words font-medium text-slate-900">
          {href ? <a href={href} className="hover:underline">{value}</a> : value}
        </dd>
      </div>
    </div>
  )
}

function ContactCard({ icon: Icon, label, value, href }) {
  const external = href.startsWith('http')
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className="group flex items-center gap-4 rounded-xl border border-slate-200 p-4 transition-colors hover:border-blue-500/50"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600">
        <Icon />
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-xs text-slate-500">{label}</p>
        <p className="truncate font-medium text-slate-900">{value}</p>
      </div>
      <FaArrowRight className="text-xs text-slate-400 transition-transform group-hover:translate-x-1" />
    </a>
  )
}

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`
    setSent(true)
    setForm({ name: '', email: '', message: '' })
  }

  const field =
    'w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'

  return (
    <motion.form
      {...fadeUp}
      onSubmit={onSubmit}
      className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-slate-900">Name</span>
          <input required name="name" value={form.name} onChange={onChange} placeholder="Your name" className={field} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-slate-900">Email</span>
          <input required type="email" name="email" value={form.email} onChange={onChange} placeholder="you@company.com" className={field} />
        </label>
      </div>
      <label className="block">
        <span className="mb-1.5 block text-sm font-medium text-slate-900">Message</span>
        <textarea required name="message" rows={5} value={form.message} onChange={onChange} placeholder="Tell me about your project or role…" className={`${field} resize-none`} />
      </label>
      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
      >
        Send message <FaArrowRight className="text-xs" />
      </button>
      {sent && (
        <p className="text-center text-sm text-emerald-600">
          Your email app should open with the message ready to send.
        </p>
      )}
    </motion.form>
  )
}

export default App
