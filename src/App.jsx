import { useState, useCallback, useRef } from 'react'
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import './App.css'

const PROJECTS = [
  {
    period: '2025 — PRESENT',
    role: 'ResQ — National Disaster Platform',
    company: '1st Runners Up · SLIIT Codefest 2025 Revivenation',
    description:
      'Full-stack MERN application with React Native mobile app enabling disaster alerts, SOS requests, and real-time resource allocation. Integrated early-access APIs (SLUDI, Commercial Bank PayDPI) and built analytics dashboards with geospatial tracking.',
    tags: ['Node.js', 'React', 'MongoDB', 'TypeScript', 'REST API'],
    link: 'https://github.com/disaster-response-sl/national-disaster-platform',
  },
  {
    period: 'JUL — OCT 2025',
    role: 'ZFit — Gym Management System',
    company: 'Full-Stack Project',
    description:
      'Comprehensive gym management platform with payment processing, invoice generation, and refund handling. Built responsive member dashboards with attendance tracking and integrated PayHere payment gateway for secure subscription management.',
    tags: ['Next.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'JWT'],
    link: 'https://github.com/kbpkavisika/ZFit',
  },
  {
    period: '2025',
    role: 'Ceylon Smart Citizen',
    company: 'Tech-Triathlon by Rootcode',
    description:
      'Digital governance solution serving 20+ citizen services including document requests, multilingual support, and queue reservations. Built JWT-authenticated microservices with NIC verification and real-time queue management.',
    tags: ['Node.js', 'PostgreSQL', 'Redis', 'Docker', 'Next.js'],
    link: 'https://github.com/CeylonSmartCitizen',
  },
  {
    period: '2025 — ONGOING',
    role: 'ZerraLabs — AI Product Photography',
    company: 'SaaS Startup',
    description:
      'AI-powered SaaS platform transforming product photos into professional marketing images. Building proprietary AI models for automated background enhancement, lighting correction, and styling.',
    tags: ['AI/ML', 'SaaS', 'Computer Vision', 'Deep Learning'],
    link: 'https://zerralabs.com',
  },
  {
    period: 'MAR — APR 2025',
    role: 'PlayNova — Online Game Store',
    company: 'Academic Project',
    description:
      'Java-based e-commerce platform for gaming products. Implemented MVC architecture with Singleton design pattern for secure JDBC connections. Full CRUD announcement management system.',
    tags: ['Java', 'JSP', 'Servlets', 'MySQL', 'Apache Tomcat'],
    link: 'https://github.com/gaindunuhansith/playnova',
  },
  {
    period: '2025',
    role: 'Datathon — Public Service Optimization',
    company: 'Machine Learning Project',
    description:
      'Predictive ML models for public service resource optimization. Service time prediction achieving R² ~0.85 using HistGradientBoostingRegressor and workforce forecasting with RandomForestRegressor.',
    tags: ['Python', 'scikit-learn', 'pandas', 'NumPy'],
    link: 'https://github.com/CeylonSmartCitizen',
  },
]

const SKILLS = [
  {
    label: 'LANGUAGES',
    title: 'Full-Stack Developer',
    text: 'Fluent in Java, Python, JavaScript, TypeScript, C, C++, PHP, SQL, and R — writing clean, maintainable code across the entire stack.',
  },
  {
    label: 'FRAMEWORKS',
    title: 'Modern Frameworks',
    text: 'Building with React.js, Node.js, Express.js, Next.js, React Native, and Tailwind CSS to ship fast, scalable, user-focused products.',
  },
  {
    label: 'TOOLS & INFRA',
    title: 'DevOps Ready',
    text: 'Proficient with Git, Docker, PostgreSQL, MongoDB, MySQL, Redis, Figma, Postman, and cloud-ready deployment pipelines.',
  },
]

const NAV_ITEMS = ['home', 'about', 'skills', 'work', 'contact']
const EMAIL = 'kbpkavisika@gmail.com'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [projectIndex, setProjectIndex] = useState(0)
  const [copied, setCopied] = useState(false)

  // Hero parallax / 3-D tilt on mouse move
  const heroRef = useRef(null)
  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)
  const springCfg = { stiffness: 120, damping: 22 }
  const springX = useSpring(rawX, springCfg)
  const springY = useSpring(rawY, springCfg)

  // Text: gentle counter-parallax
  const textTranslateX = useTransform(springX, [-0.5, 0.5], [10, -10])
  const textTranslateY = useTransform(springY, [-0.5, 0.5], [6, -6])

  const handleHeroMouseMove = useCallback((e) => {
    const rect = heroRef.current?.getBoundingClientRect()
    if (!rect) return
    rawX.set((e.clientX - rect.left) / rect.width - 0.5)
    rawY.set((e.clientY - rect.top) / rect.height - 0.5)
  }, [rawX, rawY])

  const handleHeroMouseLeave = useCallback(() => {
    rawX.set(0)
    rawY.set(0)
  }, [rawX, rawY])

  const copyEmail = useCallback(() => {
    navigator.clipboard.writeText(EMAIL).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }, [])

  const prevProject = () =>
    setProjectIndex((i) => (i - 1 + PROJECTS.length) % PROJECTS.length)
  const nextProject = () =>
    setProjectIndex((i) => (i + 1) % PROJECTS.length)

  const scrollTo = (id) => {
    setMenuOpen(false)
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }, 300)
  }

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="navbar">
        <button className="menu-btn" onClick={() => setMenuOpen(true)} aria-label="Open menu">
          <span className="menu-icon">&#8801;</span> MENU
        </button>
        <span className="nav-logo">K B P KAVISIKA</span>
        <div className="nav-right">
          <a
            href="https://github.com/kbpkavisika"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-icon-link"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/pavith-kavisika"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-icon-link"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </nav>

      {/* Overlay Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <button
              className="menu-close"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              ✕
            </button>
            <nav className="overlay-nav">
              {NAV_ITEMS.map((id, i) => (
                <motion.button
                  key={id}
                  className="overlay-link"
                  onClick={() => scrollTo(id)}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.35 }}
                >
                  {id.toUpperCase()}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero */}
      <section
        id="home"
        className="hero"
        ref={heroRef}
        onMouseMove={handleHeroMouseMove}
        onMouseLeave={handleHeroMouseLeave}
      >
        <div className="hero-content-row">
          <motion.div
            className="hero-inner"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ x: textTranslateX, y: textTranslateY }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <p className="hero-label">SOFTWARE ENGINEER · SRI LANKA</p>
            <h1 className="hero-display">
              K B P<br />KAVISIKA
            </h1>
            <p className="hero-sub">
              Building scalable web applications &amp; AI-powered systems.<br />
              SLIIT · Full-Stack · Open Source
            </p>
          </motion.div>
        </div>
        <motion.div
          className="hero-scroll"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <span>SCROLL</span>
          <div className="scroll-line" />
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="about-section">
        <motion.div
          className="section-inner"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">ABOUT</p>
          <h2 className="section-heading">
            Software Engineering<br />Undergraduate at SLIIT
          </h2>
          <div className="about-body">
            <p>
              I build scalable, real-world software solutions with a focus on user-centered design.
              Through hackathons, academic projects, and startup experience, I have shipped full-stack
              web apps, REST APIs, mobile apps, and AI-powered tools.
            </p>
            <p>
              Currently strengthening skills in full-stack development, system design, and
              AI-powered applications while preparing for industry internships and entry-level roles.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Skills */}
      <section id="skills" className="skills-section">
        <div className="section-inner">
          <motion.p
            className="section-label"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            SKILLS
          </motion.p>
          <motion.h2
            className="section-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            What I Work With
          </motion.h2>
          <div className="skills-grid">
            {SKILLS.map((s, i) => (
              <motion.div
                key={s.label}
                className="skill-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                <span className="card-label">{s.label}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Slider */}
      <section id="work" className="work-section">
        <div className="section-inner">
          <motion.p
            className="section-label"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            PROJECTS
          </motion.p>
          <div className="slider-layout">
            <AnimatePresence mode="wait">
              <motion.div
                key={projectIndex}
                className="slide-content"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
              >
                <p className="slide-period">{PROJECTS[projectIndex].period}</p>
                <h2 className="slide-title">{PROJECTS[projectIndex].role}</h2>
                <p className="slide-company">{PROJECTS[projectIndex].company}</p>
                <p className="slide-desc">{PROJECTS[projectIndex].description}</p>
                <div className="slide-tags">
                  {PROJECTS[projectIndex].tags.map((t) => (
                    <span key={t} className="slide-tag">{t}</span>
                  ))}
                </div>
                <a
                  href={PROJECTS[projectIndex].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="slide-link"
                >
                  View Project <BsArrowRight />
                </a>
              </motion.div>
            </AnimatePresence>

            <div className="slider-controls">
              <button className="slider-btn" onClick={prevProject} aria-label="Previous project">
                <BsArrowLeft />
              </button>
              <span className="slider-indicator">
                {String(projectIndex + 1).padStart(2, '0')} / {String(PROJECTS.length).padStart(2, '0')}
              </span>
              <button className="slider-btn" onClick={nextProject} aria-label="Next project">
                <BsArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact-section">
        <motion.div
          className="contact-inner"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label">MESSAGE ME</p>
          <button
            className="email-display"
            onClick={copyEmail}
            aria-label="Copy email address"
          >
            {EMAIL.toUpperCase()}
          </button>
          <p className={`copy-hint${copied ? ' active' : ''}`}>
            {copied ? 'COPIED!' : 'CLICK TO COPY'}
          </p>
          <div className="contact-alt">
            <a href={`mailto:${EMAIL}`} className="contact-alt-link">
              Or send an email directly
            </a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-socials">
          <a
            href="https://www.linkedin.com/in/pavith-kavisika"
            target="_blank"
            rel="noopener noreferrer"
          >
            LINKEDIN
          </a>
          <a
            href="https://github.com/kbpkavisika"
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB
          </a>
          <a href={`mailto:${EMAIL}`}>EMAIL</a>
        </div>
        <p className="footer-copy">&copy; 2026 K B P Kavisika. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
