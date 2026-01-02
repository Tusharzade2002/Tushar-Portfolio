import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import image from './image.jpg'
import './colorAnimation.css'
import { FaReact, FaGitAlt, FaLinkedin, FaGithub, FaEnvelope, FaCode, FaHtml5, FaCss3Alt, FaJs, FaBootstrap } from 'react-icons/fa'
import { SiNodedotjs, SiMongodb, SiPostgresql, SiTailwindcss, SiRedux, SiExpress } from 'react-icons/si'
import { HiSparkles, HiAcademicCap } from 'react-icons/hi2'

// Skill icon mapping
const skillIcons = {
  'HTML': FaHtml5,
  'CSS': FaCss3Alt,
  'JavaScript': FaJs,
  'React.js': FaReact,
  'Redux Toolkit': SiRedux,
  'Tailwind CSS': SiTailwindcss,
  'Bootstrap': FaBootstrap,
  'Node.js': SiNodedotjs,
  'Express.js': SiExpress,
  'MongoDB': SiMongodb,
  'PostgreSQL': SiPostgresql,
  'Git & GitHub': FaGitAlt,
  'Postman': FaCode,
  'Responsive Design': FaCode,
}

const TypewriterText = ({ text, speed = 100, startDelay = 0, pauseTime = 3000 }) => {
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)

  useEffect(() => {
    let timer

    const handleTyping = () => {
      const currentText = text
      const currentLength = displayedText.length

      if (!isDeleting) {
        // Typing forward
        if (currentLength < currentText.length) {
          timer = setTimeout(() => {
            setDisplayedText(currentText.slice(0, currentLength + 1))
          }, speed)
        } else {
          // Finished typing, start pause
          timer = setTimeout(() => {
            setIsDeleting(true)
          }, pauseTime)
        }
      } else {
        // Deleting backward
        if (currentLength > 0) {
          timer = setTimeout(() => {
            setDisplayedText(currentText.slice(0, currentLength - 1))
          }, speed)
        } else {
          // Finished deleting, restart typing
          setIsDeleting(false)
          setLoopNum(loopNum + 1)
        }
      }
    }

    const initialDelay = loopNum === 0 ? startDelay : 0
    const delayTimer = setTimeout(handleTyping, initialDelay)

    return () => {
      clearTimeout(timer)
      clearTimeout(delayTimer)
    }
  }, [displayedText, isDeleting, text, speed, startDelay, pauseTime, loopNum])

  return (
    <span>
      {displayedText}
      <span className="animate-pulse ml-0.5">|</span>
    </span>
  )
}

const ContactForm = ({ accent }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      alert('Please fill in all fields')
      return
    }

    setLoading(true)
    try {
      // Simulate form submission (replace with actual API call)
      await new Promise(resolve => setTimeout(resolve, 1000))

      // Create mailto link as fallback
      const mailtoLink = `mailto:tusharzade29@gmail.com?subject=Message from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`
      window.location.href = mailtoLink

      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setSubmitted(false), 3000)
    } catch (error) {
      alert('Error sending message. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-gradient-to-br from-slate-100/60 to-slate-50/40 dark:from-slate-900/60 dark:to-slate-950/40 p-6 md:p-8 max-w-2xl space-y-5 shadow-lg backdrop-blur"
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        viewport={{ once: true }}
      >
        <label className="block text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          className="w-full px-4 py-3 rounded-lg border-2 border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-950/50 text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:border-transparent transition-all focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-slate-950"
          style={{ focusRingColor: accent, focusRingWidth: '2px' }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        viewport={{ once: true }}
      >
        <label className="block text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
          className="w-full px-4 py-3 rounded-lg border-2 border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-950/50 text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:border-transparent transition-all focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-slate-950"
          style={{ focusRingColor: accent }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        <label className="block text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2">
          Message
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your message here..."
          rows="5"
          className="w-full px-4 py-3 rounded-lg border-2 border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-950/50 text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:border-transparent resize-none transition-all focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-slate-950"
          style={{ focusRingColor: accent }}
        />
      </motion.div>

      <motion.button
        whileHover={{ scale: 1.02, boxShadow: `0 20px 40px ${accent}40` }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={loading}
        className="w-full px-6 py-3 rounded-lg font-semibold text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-xl"
        style={{ backgroundColor: accent }}
      >
        {loading ? (
          <motion.span animate={{ opacity: [0.6, 1, 0.6] }} transition={{ duration: 1.5, repeat: Infinity }}>
            Sending...
          </motion.span>
        ) : submitted ? (
          '✓ Message Sent!'
        ) : (
          'Send Message'
        )}
      </motion.button>

      {submitted && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-center font-medium transition-colors"
          style={{ color: accent }}
        >
          Thank you! Your message will be sent via email.
        </motion.p>
      )}
    </motion.form>
  )
}

const ACCENT_COLORS = [
  { name: 'Sky', value: '#38bdf8' },
  { name: 'Violet', value: '#a855f7' },
  { name: 'Emerald', value: '#22c55e' },
  { name: 'Amber', value: '#f59e0b' },
  { name: 'Rose', value: '#f43f5e' },
  { name: 'Cyan', value: '#06b6d4' },
  { name: 'Pink', value: '#ec4899' },
]

const sections = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [accent, setAccent] = useState('#38bdf8')
  const [colorMenuOpen, setColorMenuOpen] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  useEffect(() => {
    document.documentElement.style.setProperty('--accent', accent)
  }, [accent])

  const accentStyle = { color: accent }
  const accentBgStyle = { backgroundColor: accent }
  const accentBorderStyle = { borderColor: accent }

  const [animationKey, setAnimationKey] = useState(0)

  useEffect(() => {
    setAnimationKey(prev => prev + 1)
  }, [accent])

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300 relative overflow-hidden">
      {animationKey > 0 && (
        <div
          className="color-transition-overlay"
          style={{ backgroundColor: accent }}
          key={animationKey}
        />
      )}
      <header className="sticky top-0 z-40 backdrop-blur border-b border-slate-200/60 dark:border-slate-800/60 bg-slate-50/70 dark:bg-slate-950/70">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div
              className="h-9 w-9 rounded-full border border-slate-300 dark:border-slate-700 overflow-hidden flex items-center justify-center text-xs font-semibold"
              style={accentBorderStyle}
            >
              TZ
            </div>
            <div>
              <p className="font-semibold leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>Tushar Zade</p>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Full Stack Developer
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-3">
            {/* Accent colors - Desktop */}
            <div className="hidden md:flex items-center gap-1">
              {ACCENT_COLORS.map((color) => (
                <button
                  key={color.name}
                  aria-label={color.name}
                  onClick={() => setAccent(color.value)}
                  className="h-4 w-4 rounded-full border border-slate-300 dark:border-slate-700 hover:scale-110 transition-transform"
                  style={{ backgroundColor: color.value }}
                />
              ))}
            </div>

            {/* Dark / light toggle */}
            <button
              onClick={() => setDarkMode((prev) => !prev)}
              className="relative inline-flex h-7 w-12 items-center rounded-full border border-slate-300 dark:border-slate-700 px-1 text-xs bg-slate-100 dark:bg-slate-900"
            >
              <motion.div
                layout
                className="h-5 w-5 rounded-full bg-white dark:bg-slate-700 shadow"
                animate={{ x: darkMode ? 20 : 0 }}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                style={accentBorderStyle}
              />
              <span className="absolute left-2 text-[10px] text-slate-400 dark:text-slate-600 select-none">
                ☀
              </span>
              <span className="absolute right-2 text-[10px] text-slate-600 dark:text-slate-400 select-none">
                ☾
              </span>
            </button>

            {/* Accent colors - Mobile Dropdown */}
            <div className="relative md:hidden">
              <button
                onClick={() => setColorMenuOpen(!colorMenuOpen)}
                className="h-7 px-4 rounded-full border border-slate-300 dark:border-slate-700 flex items-center justify-center gap-2 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                aria-label="Color theme"
              >
                <span className="h-3 w-3 rounded-full" style={{ backgroundColor: accent }}></span>
                <span className="text-xs font-medium text-slate-700 dark:text-slate-300">Theme</span>
              </button>

              {colorMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 top-full mt-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg p-3 shadow-lg z-50"
                >
                  <div className="flex gap-3">
                    {ACCENT_COLORS.slice(0, 4).map((color) => (
                      <button
                        key={color.name}
                        aria-label={color.name}
                        onClick={() => {
                          setAccent(color.value)
                          setColorMenuOpen(false)
                        }}
                        className="h-9 w-9 rounded-full border-2 border-slate-300 dark:border-slate-700 hover:scale-110 transition-transform"
                        style={{ backgroundColor: color.value }}
                        title={color.name}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 pb-16 pt-8 space-y-16">
        {/* Hero */}
        <section className="grid md:grid-cols-[minmax(0,1.6fr),minmax(0,1.1fr)] gap-10 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-sm font-medium tracking-wide uppercase text-slate-600 dark:text-slate-400"
            >
              Hi, I&apos;m
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="mt-2 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              <span className="block">
                <TypewriterText text="Tushar" speed={50} startDelay={300} pauseTime={3500} />
              </span>
              <span className="block" style={accentStyle}>
                <TypewriterText text="MERN Stack Developer" speed={50} startDelay={800} pauseTime={3500} />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-sm md:text-base text-slate-700 dark:text-slate-300 max-w-xl leading-relaxed"
            >
              I craft beautiful, high-performance web applications using modern technologies. With expertise in React, Node.js,express , MongoDB and PostgresSQL , I build scalable solutions that solve real problems and deliver exceptional user experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="mt-6 flex flex-wrap gap-3"
            >
              <a
                href="mailto:tusharzade29@gmail.com"
                className="px-4 py-2 rounded-full text-sm font-medium shadow-sm border border-slate-300 dark:border-slate-700/80 hover:-translate-y-0.5 transition-transform"
                style={accentBgStyle}
              >
                Contact Me
              </a>
              <a
                href="https://www.linkedin.com/in/tushar-zade-b491a022b/"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-full text-sm font-medium border border-slate-300 dark:border-slate-700 hover:border-slate-500 dark:hover:border-slate-500 text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white flex items-center gap-2"
              >
                <FaLinkedin className="text-base" />
                Linked In
              </a>
              <a
                href="https://github.com/Tusharzade2002"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-full text-sm font-medium border border-slate-300 dark:border-slate-700 hover:border-slate-500 dark:hover:border-slate-500 text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white flex items-center gap-2"
              >
                <FaGithub className="text-base" />
                GitHub
              </a>
            </motion.div>
          </div>

          {/* Avatar card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-sky-500/50 via-violet-500/30 to-emerald-400/50 blur-3xl opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="rounded-3xl border-2 border-slate-200 dark:border-slate-700 bg-gradient-to-br from-slate-100/80 to-slate-50/60 dark:from-slate-900/80 dark:to-slate-950/60 p-6 shadow-2xl backdrop-blur hover:shadow-2xl transition-shadow duration-300 group">
                <div className="aspect-square rounded-2xl bg-slate-200 dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-700 overflow-hidden flex items-center justify-center">
                  <motion.img
                    src={image}
                    alt="Tushar avatar"
                    className="h-40 w-40 md:h-48 md:w-48 rounded-full border-4 border-white dark:border-slate-800 object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="mt-4 space-y-1 text-sm">
                  <p className="font-medium">Full Stack Developer @ AllyNerds</p>
                  <p className="text-slate-600 dark:text-slate-400 text-xs">
                    August 2025 &mdash; Present
                  </p>
                  <p className="text-slate-700 dark:text-slate-300 text-xs">
                    Building scalable full-stack applications with React, Node.js, and MongoDB. Developing both frontend and backend solutions.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Navigation pills */}
        <section className="flex flex-wrap gap-2 text-xs md:text-sm text-slate-700 dark:text-slate-300">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() =>
                document
                  .getElementById(section.id)
                  ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }
              className="px-3 py-1.5 rounded-full border border-slate-300 dark:border-slate-800/80 bg-slate-100/60 dark:bg-slate-900/60 hover:bg-slate-200/80 dark:hover:bg-slate-800/80 hover:border-slate-400 dark:hover:border-slate-600 transition-colors"
            >
              {section.label}
            </button>
          ))}
        </section>

        {/* About */}
        <section id="about" className="space-y-4">
          <motion.h2
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="section-title"
            style={accentStyle}
          >
            About
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed"
          >
            I&apos;m a Full-Stack JavaScript developer passionate about building web applications that users love. I combine strong frontend design principles with solid backend architecture to create seamless, performant applications. What drives me is solving complex problems with clean code and creating experiences that make a real impact.
          </motion.p>
        </section>

        {/* Skills */}
        <section id="skills" className="space-y-6">
          <motion.h2
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="section-title"
            style={accentStyle}
          >
            Skills
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <SkillCard
              title="Frontend"
              items={['HTML', 'CSS', 'JavaScript', 'React.js', 'Redux Toolkit', 'Tailwind CSS', 'Bootstrap']}
              icon={FaReact}
            />
            <SkillCard
              title="Backend & Databases"
              items={['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL']}
              icon={SiNodedotjs}
            />
            <SkillCard
              title="Tools & Others"
              items={['Git & GitHub', 'Postman', 'Responsive Design']}
              icon={FaGitAlt}
            />
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="space-y-6">
          <motion.h2
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="section-title"
            style={accentStyle}
          >
            Experience
          </motion.h2>
          <TimelineItem
            role="Full Stack Developer"
            company="AllyNerds"
            period="August 2025 - Present"
            points={[
              'Architected and shipped full-stack features from concept to production for thousands of users.',
              'Optimized frontend performance and implemented responsive UI components achieving 95+ Lighthouse scores.',
              'Designed RESTful APIs and database schemas ensuring scalability, security, and optimal query performance.',
            ]}
            accent={accent}
          />
          <TimelineItem
            role="MERN Stack Intern"
            company="Betasys.ai"
            period="March 2025 - July 2025"
            points={[
              'Engineered 10+ reusable, high-performance React components improving development velocity by 40%.',
              'Debugged and resolved critical UI/UX issues, reducing bounce rate and improving user satisfaction.',
              'Mastered modern state management with Redux Toolkit and styling with Tailwind CSS under expert guidance.',
            ]}
            accent={accent}
          />
        </section>

        {/* Projects */}
        <section id="projects" className="space-y-6">
          <motion.h2
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="section-title"
            style={accentStyle}
          >
            Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-4">
            <ProjectCard
              title="E-commerce Application"
              subtitle="MERN Stack"
              description="Full-stack e-commerce platform where users can register, login, browse products, search items, manage their cart, and place orders."
              tech={['React.js', 'Tailwind CSS', 'Express.js', 'MongoDB']}
              accent={accent}
            />
            <ProjectCard
              title="Quick Notes Application"
              subtitle="React Notes App"
              description="Responsive notes app that allows users to add, edit, and delete notes with data stored in localStorage for persistence."
              tech={['React.js', 'CSS', 'LocalStorage']}
              accent={accent}
            />
            <ProjectCard
              title="Portfolio Website"
              subtitle="Personal Portfolio"
              description="Modern portfolio website built using React and Framer Motion with interactive UI and smooth animations."
              tech={['React.js', 'Tailwind CSS', 'Framer Motion']}
              accent={accent}
            />
          </div>
        </section>

        {/* Education */}
        <section id="education" className="space-y-6">
          <motion.h2
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="section-title"
            style={accentStyle}
          >
            Education
          </motion.h2>
          <div className="space-y-4 text-sm md:text-base">
            <EduItem
              course="Masters of Computer Application (MCA)"
              institute="Tulsiramji Gailwad Patil College"
              period="2023 - 2025"
              detail="Percentage: 71%"
            />
            <EduItem
              course="Bachelor of Computer Application (BCA)"
              institute="City Premier College"
              period="2020 - 2023"
              detail="Percentage: 72%"
            />
            <EduItem
              course="Higher Secondary Certificate (HSC)"
              institute="Balaji Junior College"
              period="2018 - 2020"
              detail="Percentage: 62%"
            />
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="space-y-6">
          <motion.h2
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="section-title"
            style={accentStyle}
          >
            Contact
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-slate-700 dark:text-slate-300">
                  I&apos;m open to internships, full-time roles, and freelance opportunities in
                  frontend or MERN stack development.
                </p>
                <p className="text-slate-600 dark:text-slate-400">
                  Based in <span className="font-medium">ButiBori, Nagpur</span>
                </p>
              </div>
              <div className="space-y-3 pt-4 border-t border-slate-300 dark:border-slate-800">
                <ContactItem label="Email" value="tusharzade29@gmail.com" href="mailto:tusharzade29@gmail.com" icon={FaEnvelope} />
                <ContactItem label="LinkedIn" value="tushar-zade-b491a022b" href="https://www.linkedin.com/in/tushar-zade-b491a022b/" icon={FaLinkedin} />
                <ContactItem label="GitHub" value="Tusharzade2002" href="https://github.com/Tusharzade2002" icon={FaGithub} />
              </div>
            </div>
            <ContactForm accent={accent} />
          </div>
        </section>

        <footer className="pt-8 border-t border-slate-300 dark:border-slate-800 mt-10 text-xs text-slate-600 dark:text-slate-500 flex flex-wrap items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Tushar Zade. All rights reserved.</p>
        
        </footer>
      </main>
    </div>
  )
}

function SkillCard({ title, items, icon: Icon }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, x: 50 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      whileHover={{ y: -8, scale: 1.05 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-slate-100/80 to-slate-50/60 dark:from-slate-900/80 dark:to-slate-950/60 p-6 text-sm shadow-lg hover:shadow-xl overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-slate-400/5 dark:to-slate-400/10 group-hover:to-slate-400/20 transition-all duration-300" />
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-3">
          {Icon && <Icon className="text-lg" style={{ color: 'var(--accent)' }} />}
          <h3 className="font-semibold text-slate-900 dark:text-slate-100 text-base">{title}</h3>
        </div>
        <ul className="space-y-2 text-slate-700 dark:text-slate-300 text-xs">
          {items.map((item, index) => {
            const SkillIcon = skillIcons[item]
            return (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + index * 0.05, duration: 0.4 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 group/item hover:text-slate-900 dark:hover:text-slate-100 transition-colors cursor-pointer"
              >
                {SkillIcon ? (
                  <motion.div
                    whileHover={{ scale: 1.4, rotate: 10 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <SkillIcon className="text-sm flex-shrink-0" style={{ color: 'var(--accent)' }} />
                  </motion.div>
                ) : (
                  <motion.span
                    whileHover={{ scale: 1.5 }}
                    className="h-2 w-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: 'var(--accent)' }}
                  />
                )}
                <span className="group-hover/item:translate-x-1 transition-transform duration-200">{item}</span>
              </motion.li>
            )
          })}
        </ul>
      </div>
    </motion.div>
  )
}

function TimelineItem({ role, company, period, points, accent }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="relative pl-8 border-l-2 border-slate-300 dark:border-slate-800 group hover:border-slate-400 dark:hover:border-slate-600 transition-all duration-300"
    >
      <motion.div
        whileHover={{ scale: 1.4, boxShadow: `0 0 20px ${accent}` }}
        className="absolute -left-4 top-0 h-8 w-8 rounded-full border-3 border-white dark:border-slate-950 cursor-pointer flex items-center justify-center"
        style={{ backgroundColor: accent }}
      >
        <HiSparkles className="text-white text-sm" />
      </motion.div>
      <div className="space-y-2 rounded-lg bg-white/5 dark:bg-slate-800/10 p-4">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          viewport={{ once: true }}
          className="font-semibold text-sm md:text-base"
        >
          {role} <span className="text-slate-600 dark:text-slate-400 text-xs">@ {company}</span>
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-xs text-slate-600 dark:text-slate-400"
        >
          {period}
        </motion.p>
        <ul className="space-y-1.5 text-xs md:text-sm text-slate-700 dark:text-slate-300">
          {points.map((point, index) => (
            <motion.li
              key={point}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.05, duration: 0.4 }}
              viewport={{ once: true }}
              className="flex items-start gap-2 group/point hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
            >
              <span className="mt-1.5 flex-shrink-0" style={{ color: accent }}>●</span>
              <span>{point}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

function ProjectCard({ title, subtitle, description, tech, accent }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30, x: 50 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      whileHover={{ y: -12, scale: 1.05 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="relative rounded-2xl border-l-4 border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-slate-100/80 to-slate-50/60 dark:from-slate-900/80 dark:to-slate-950/60 p-6 flex flex-col justify-between text-sm shadow-lg hover:shadow-2xl overflow-hidden group transition-all duration-300"
      style={{ borderLeftColor: accent }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-slate-400/5 dark:to-slate-400/10 group-hover:to-slate-400/20 transition-all duration-300" />
      <div className="relative z-10 space-y-3">
        <motion.h3
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          viewport={{ once: true }}
          className="font-semibold text-base group-hover:translate-x-1 transition-transform duration-300 flex items-center gap-2"
          style={{ color: accent }}
        >
          <FaCode className="text-lg" />
          {title}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-xs text-slate-600 dark:text-slate-400"
        >
          {subtitle}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed"
        >
          {description}
        </motion.p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2 relative z-10">
        {tech.map((item, index) => (
          <motion.span
            key={item}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25 + index * 0.05, duration: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.15, y: -3 }}
            className="px-3 py-1.5 rounded-full border text-[11px] font-medium transition-all duration-200"
            style={{
              borderColor: accent,
              color: accent,
              backgroundColor: `${accent}15`,
            }}
          >
            {item}
          </motion.span>
        ))}
      </div>
    </motion.article>
  )
}

function EduItem({ course, institute, period, detail }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, x: 50 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-gradient-to-br from-slate-100/80 to-slate-50/60 dark:from-slate-900/80 dark:to-slate-950/60 p-5 shadow-lg hover:shadow-xl overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-slate-400/5 dark:to-slate-400/10 group-hover:to-slate-400/20 transition-all duration-300" />
      <div className="relative z-10 space-y-2">
        <div className="flex items-start gap-2">
          <HiAcademicCap className="text-lg flex-shrink-0 mt-0.5" style={{ color: 'var(--accent)' }} />
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="font-semibold text-sm md:text-base text-slate-900 dark:text-slate-100 group-hover:translate-x-1 transition-transform duration-300"
          >
            {course}
          </motion.p>
        </div>
        <motion.p
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-xs md:text-sm text-slate-600 dark:text-slate-400"
        >
          {institute}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-xs text-slate-500 dark:text-slate-500"
        >
          {period}
        </motion.p>
        {detail && (
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            viewport={{ once: true }}
            className="text-xs text-slate-700 dark:text-slate-300"
          >
            {detail}
          </motion.p>
        )}
      </div>
    </motion.div>
  )
}

function ContactItem({ label, value, href, icon: Icon }) {
  return (
    <div className="flex items-start gap-3 group">
      {Icon && <Icon className="text-lg flex-shrink-0 mt-1" style={{ color: 'var(--accent)' }} />}
      <div className="flex flex-col">
        <span className="text-xs text-slate-600 dark:text-slate-500">{label}</span>
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="text-sm md:text-base text-slate-800 dark:text-slate-200 hover:underline group-hover:translate-x-1 transition-transform"
          >
            {value}
          </a>
        ) : (
          <span className="text-sm md:text-base text-slate-800 dark:text-slate-200">{value}</span>
        )}
      </div>
    </div>
  )
}

export default App
