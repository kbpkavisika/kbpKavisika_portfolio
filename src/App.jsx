import { useState, useCallback, useRef, useEffect, useSyncExternalStore } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaLinkedin, FaJava, FaPython, FaReact, FaNodeJs, FaGit, FaDocker, FaDatabase } from 'react-icons/fa'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { SiJavascript, SiTypescript, SiExpress, SiNextdotjs, SiMysql, SiMongodb, SiPostgresql, SiPostman, SiApachetomcat, SiFigma, SiAndroidstudio, SiGnubash, SiSpringboot, SiTailwindcss, SiSqlite, SiKubernetes, SiElectron, SiExpo } from 'react-icons/si'
import { FiSun, FiMoon, FiDownload } from 'react-icons/fi'
import codefest1 from './img/codefest-1.jpg'
import codefest2 from './img/codefest-2.jpg'
import codefest3 from './img/codefest-3.jpeg'
import hackX1 from './img/hackX-1.jpg'
import hackX2 from './img/hackX-2.jpg'
import hackX3 from './img/hackX-3.jpg'
import zfitLogo from './img/Zfit-logo.png'
import resqLogo from './img/resq-logo.png'
import ceylonLogo from './img/CeylonSC-logo.png'
import './App.css'

const PROJECTS = [
  {
    period: 'JUL — OCT 2025',
    role: 'ZFit — Gym Management System',
    company: 'Full-Stack Project',
    logo: zfitLogo,
    description:
      'Architected a full-stack gym management platform with dedicated modules for payments, invoicing, and refunds, streamlining end-to-end financial operations. Built responsive, role-based member dashboards displaying attendance logs, payment history, and personal profile data. Integrated the PayHere payment gateway with JWT-secured REST APIs to enable secure, automated subscription billing and renewals.',
    tags: ['Next.js', 'React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'JWT', 'PayHere', 'REST API', 'TypeScript'],
    link: 'https://github.com/kbpkavisika/ZFit',
  },
  {
    period: 'JUL — AUG 2025',
    role: 'ResQ — National Disaster Platform',
    company: '1st Runners Up · SLIIT Codefest 2025 Revivenation',
    logo: resqLogo,
    description:
      'Designed and developed a full-stack MERN web application and companion React Native mobile app for real-time disaster tracking, alerts, SOS signals, responder assignment, and resource coordination. A lightweight prototype was tested during cyclone emergency-response simulations. Collaborated with the Ministry of Digital Economy and ICTA to integrate government APIs (SLUDI, Commercial Bank PayDPI, mock NDX) for disaster data, payments, and inter-agency coordination.',
    tags: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'React', 'React Native', 'TypeScript', 'Recharts', 'Tailwind CSS', 'JWT'],
    link: 'https://github.com/disaster-response-sl/national-disaster-platform',
  },
  {
    period: 'FEB — APR 2026',
    role: 'eDoc — Smart Healthcare Platform',
    company: 'Microservices Architecture',
    description:
      'Cloud-native telemedicine platform for patient management and healthcare services. Designed and implemented the Patient Management Service handling profile management and medical report storage, alongside a Notification Service delivering real-time email and SMS alerts. Built RESTful APIs with Spring Boot following microservices architecture principles.',
    tags: ['Spring Boot', 'Java', 'Docker', 'Kubernetes', 'REST API', 'Microservices'],
    link: 'https://github.com/kbpkavisika/eDoc',
  },
  {
    period: 'JUL — AUG 2025',
    role: 'Ceylon Smart Citizen',
    company: 'Tech-Triathlon by Rootcode',
    logo: ceylonLogo,
    description:
      'Engineered a full-stack digital governance platform featuring a secure microservices backend and an ML-powered resource optimization pipeline, consolidating 20+ services. Developed two machine learning models: Service Time Prediction (HistGradientBoostingRegressor, R² ≈ 0.85) and Staffing Forecast (RandomForestRegressor) with ~1–2 staff variance.',
    tags: ['Node.js', 'Express', 'PostgreSQL', 'Next.js', 'Docker', 'Python', 'scikit-learn', 'pandas', 'NumPy', 'joblib'],
    link: 'https://github.com/CeylonSmartCitizen',
  },
  {
    period: 'APR 2026',
    role: 'StockUp — Cross-Platform Inventory System',
    company: 'Desktop & Mobile Application',
    description:
      'Architected a cross-platform inventory management system with dedicated desktop (Electron) and mobile (React Native / Expo) clients sharing a common offline-first data layer. Built an embedded SQLite data layer (better-sqlite3 / expo-sqlite) enabling full inventory tracking, search, and validation without any dependency on a remote backend. Designed responsive, platform-specific UIs with Tailwind CSS, optimizing layouts and interactions separately for desktop and mobile form factors.',
    tags: ['React', 'TypeScript', 'Electron', 'React Native', 'Expo', 'SQLite', 'Tailwind CSS', 'Vite'],
    link: 'https://github.com/kbpkavisika/StockUp',
  },
  {
    period: 'MAR — APR 2025',
    role: 'PlayNova — Online Game Store',
    company: 'Academic Project',
    description:
      'Java-based e-commerce platform for gaming products. Implemented an announcement management module with full CRUD operations to publish and update upcoming game releases. Applied MVC design principles with the Singleton pattern for secure JDBC connections, delivering a scalable architecture for reliable and maintainable growth.',
    tags: ['Java', 'JSP', 'Servlets', 'MySQL', 'JDBC', 'Apache Tomcat', 'CSS', 'JavaScript'],
    link: 'https://github.com/gaindunuhansith/playnova',
  },
  {
    period: 'SEP — OCT 2024',
    role: 'Cabin.com — Hotel Reservation Platform',
    company: 'Academic Project',
    description:
      'Secure reservation system with user profiles supporting full CRUD operations for bookings. Designed a mobile-friendly responsive interface for hotel reservation management.',
    tags: ['HTML', 'CSS', 'PHP', 'MySQL'],
    link: '#',
  },
  {
    period: '2025 — ONGOING',
    role: 'ZerraLabs — AI Product Photography',
    company: 'SaaS Startup',
    description:
      'AI-based SaaS tool transforming user-uploaded product photos into high-quality professional images. Contributing to product strategy, feature development, and early user acquisition. Building proprietary AI models for automated background enhancement, lighting correction, and styling.',
    tags: ['AI/ML', 'SaaS', 'Computer Vision', 'Deep Learning'],
    link: 'https://zerralabs.com',
  },
]

const SKILLS = [
  {
    title: 'Programming Languages',
    items: ['Java', 'Python', 'JavaScript', 'TypeScript', 'SQL', 'Bash'],
  },
  {
    title: 'Frameworks & Libraries',
    items: ['Spring Boot', 'React', 'React Native', 'Next.js', 'Node.js', 'Express.js', 'JSP', 'Servlets', 'Tailwind CSS'],
  },
  {
    title: 'Databases',
    items: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite'],
  },
  {
    title: 'Tools & Platforms',
    items: ['Git', 'GitHub', 'Docker', 'Kubernetes', 'Postman', 'Apache Tomcat', 'Electron', 'Expo', 'Android Studio', 'Figma'],
  },
]

const ACHIEVEMENTS = [
  {
    number: '01',
    title: '1st Runners Up — SLIIT Codefest 2025',
    subtitle: 'Revivenation Competition',
    photos: [codefest1, codefest2, codefest3],
  },
  {
    number: '02',
    title: 'Finalists — HackX National Hackathon',
    subtitle: 'University of Kelaniya & Ministry of Science and Technology',
    photos: [hackX1, hackX2, hackX3],
  },
]

const SKILL_ICONS = {
  'Java': FaJava,
  'Python': FaPython,
  'JavaScript': SiJavascript,
  'TypeScript': SiTypescript,
  'SQL': FaDatabase,
  'Bash': SiGnubash,
  'Spring Boot': SiSpringboot,
  'React': FaReact,
  'React Native': FaReact,
  'Next.js': SiNextdotjs,
  'Node.js': FaNodeJs,
  'Express.js': SiExpress,
  'JSP': FaJava,
  'Servlets': FaJava,
  'Tailwind CSS': SiTailwindcss,
  'MySQL': SiMysql,
  'MongoDB': SiMongodb,
  'PostgreSQL': SiPostgresql,
  'SQLite': SiSqlite,
  'Git': FaGit,
  'GitHub': FaGithub,
  'Docker': FaDocker,
  'Kubernetes': SiKubernetes,
  'Postman': SiPostman,
  'Apache Tomcat': SiApachetomcat,
  'Electron': SiElectron,
  'Expo': SiExpo,
  'Figma': SiFigma,
  'Android Studio': SiAndroidstudio,
}

const NAV_ITEMS = ['home', 'about', 'achievements', 'skills', 'work', 'contact']
const EMAIL = 'kbpkavisika@gmail.com'

// Drives the desktop-grid / mobile-slider split, so only one of the two
// ever mounts rather than rendering both and hiding one with CSS.
function useMediaQuery(query) {
  const subscribe = useCallback((onChange) => {
    const mq = window.matchMedia(query)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [query])
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false
  )
}

function HeroNameDots({ darkMode }) {
  const canvasRef = useRef(null)
  const darkModeRef = useRef(darkMode)

  useEffect(() => {
    darkModeRef.current = darkMode
  }, [darkMode])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const section = canvas.closest('.hero')
    const ctx = canvas.getContext('2d')

    let dots = []
    let animId = null
    let demoAnimId = null
    let demoTimeout = null
    const mouse = { x: -9999, y: -9999 }

    // Positions of the two name lines — set during build(), used by demo sweep
    let nameY1 = 0, nameY2 = 0, nameWidth = 0

    const REPEL_R   = 100
    const REPEL_STR = 5500
    const SPRING    = 0.055
    const DAMP      = 0.76
    const GAP       = 5

    // Layout position relative to the section, accumulated through the
    // offsetParent chain. Unlike getBoundingClientRect() this ignores CSS
    // transforms, so the dots land correctly even when build() runs while
    // the hero's entrance animation is still sliding the text into place.
    function offsetWithin(el, ancestor) {
      let x = 0, y = 0
      for (let node = el; node && node !== ancestor; node = node.offsetParent) {
        x += node.offsetLeft
        y += node.offsetTop
      }
      return { x, y }
    }

    async function build() {
      await document.fonts.ready
      const W = section.offsetWidth
      const H = section.offsetHeight
      canvas.width  = W
      canvas.height = H

      const h1 = section.querySelector('.hero-display')
      const { x: ox, y: oy } = offsetWithin(h1, section)

      const cs  = window.getComputedStyle(h1)
      const fsz = parseFloat(cs.fontSize)
      const lh  = fsz * 0.88

      // Store midpoints of each text line for the demo sweep
      nameY1    = oy + fsz * 0.45
      nameY2    = oy + lh + fsz * 0.45
      nameWidth = Math.min(W * 0.85, h1.offsetWidth)

      const off    = document.createElement('canvas')
      off.width    = W
      off.height   = H
      const oCtx   = off.getContext('2d')
      oCtx.fillStyle  = '#fff'
      oCtx.font       = `900 ${fsz}px "Big Shoulders Display", sans-serif`

      // line-height is below 1, so the glyphs overflow their line boxes.
      // Drawing from the baseline (rather than the em-box top) puts the dots
      // where the browser would paint the real text, instead of ~20px lower.
      const m   = oCtx.measureText('K')
      const asc = m.fontBoundingBoxAscent  ?? fsz * 0.8
      const dsc = m.fontBoundingBoxDescent ?? fsz * 0.2
      const baseline = oy + (lh - (asc + dsc)) / 2 + asc

      oCtx.textBaseline = 'alphabetic'
      oCtx.fillText('K B P',     ox, baseline)
      oCtx.fillText('KAVISIKA',  ox, baseline + lh)

      const { data } = oCtx.getImageData(0, 0, W, H)
      dots = []
      for (let y = 0; y < H; y += GAP) {
        for (let x = 0; x < W; x += GAP) {
          if (data[(y * W + x) * 4 + 3] > 100) {
            dots.push({ ox: x, oy: y, x, y, vx: 0, vy: 0 })
          }
        }
      }
    }

    function tick() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (const d of dots) {
        const dx    = d.x - mouse.x
        const dy    = d.y - mouse.y
        const dist2 = dx * dx + dy * dy
        const dist  = Math.sqrt(dist2)

        if (dist < REPEL_R && dist > 0) {
          const f = REPEL_STR / (dist2 + 1)
          d.vx += (dx / dist) * f
          d.vy += (dy / dist) * f
        }

        d.vx += (d.ox - d.x) * SPRING
        d.vy += (d.oy - d.y) * SPRING
        d.vx *= DAMP
        d.vy *= DAMP
        d.x  += d.vx
        d.y  += d.vy

        const spread = Math.hypot(d.x - d.ox, d.y - d.oy)
        const alpha  = Math.min(0.95, 0.72 + spread * 0.015)
        const ch = darkModeRef.current ? '255,255,255' : '0,0,0'
        ctx.fillStyle = `rgba(${ch},${alpha.toFixed(2)})`
        ctx.beginPath()
        ctx.arc(d.x, d.y, 1.3, 0, Math.PI * 2)
        ctx.fill()
      }
      animId = requestAnimationFrame(tick)
    }

    // --- Desktop: mouse events ---
    function onMove(e) {
      const r  = canvas.getBoundingClientRect()
      mouse.x  = e.clientX - r.left
      mouse.y  = e.clientY - r.top
    }
    function onLeave() { mouse.x = -9999; mouse.y = -9999 }

    // --- Mobile: touch events (finger drag = cursor) ---
    function onTouchMove(e) {
      const touch = e.touches[0]
      const r = canvas.getBoundingClientRect()
      mouse.x = touch.clientX - r.left
      mouse.y = touch.clientY - r.top
    }
    function onTouchEnd() { mouse.x = -9999; mouse.y = -9999 }

    // --- Mobile: auto-demo sweep (runs once on load to reveal the effect) ---
    function runDemoSweep() {
      const W = canvas.width
      const startX = W * 0.03
      const TOTAL  = 2600 // ms for full sweep
      const startT = performance.now()

      function ease(t) { return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t }

      function demoFrame(now) {
        const t = Math.min((now - startT) / TOTAL, 1)

        if (t < 0.48) {
          // Sweep right across "K B P" (line 1)
          const p = t / 0.48
          mouse.x = startX + nameWidth * ease(p)
          mouse.y = nameY1
        } else if (t < 0.52) {
          // Short pause between lines — move to line 2 start
          mouse.x = -9999
          mouse.y = -9999
        } else {
          // Sweep right across "KAVISIKA" (line 2)
          const p = (t - 0.52) / 0.48
          mouse.x = startX + nameWidth * ease(p)
          mouse.y = nameY2
        }

        if (t < 1) {
          demoAnimId = requestAnimationFrame(demoFrame)
        } else {
          mouse.x = -9999
          mouse.y = -9999
        }
      }
      demoAnimId = requestAnimationFrame(demoFrame)
    }

    section.addEventListener('mousemove', onMove)
    section.addEventListener('mouseleave', onLeave)
    section.addEventListener('touchmove', onTouchMove, { passive: true })
    section.addEventListener('touchend',  onTouchEnd)
    section.addEventListener('touchcancel', onTouchEnd)

    // Rebuilding the dot field means re-rasterising the text and walking
    // every pixel, so it is debounced and skipped when nothing actually
    // changed -- otherwise a resize drag (or a mobile URL bar) rebuilds on
    // every frame and the page visibly stutters.
    let lastW = 0, lastH = 0, resizeTimer = null
    const ro = new ResizeObserver(() => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(() => {
        const w = section.offsetWidth, h = section.offsetHeight
        if (w === lastW && h === lastH) return
        lastW = w; lastH = h
        build()
      }, 150)
    })
    ro.observe(section)

    // No reason to keep burning frames once the hero is scrolled past.
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        if (animId === null) animId = requestAnimationFrame(tick)
      } else if (animId !== null) {
        cancelAnimationFrame(animId)
        animId = null
      }
    }, { threshold: 0 })
    io.observe(section)

    build().then(() => {
      lastW = section.offsetWidth
      lastH = section.offsetHeight
      tick()
      // Play the demo sweep on all devices after a short delay
      demoTimeout = setTimeout(runDemoSweep, 900)
    })

    return () => {
      cancelAnimationFrame(animId)
      cancelAnimationFrame(demoAnimId)
      clearTimeout(demoTimeout)
      clearTimeout(resizeTimer)
      io.disconnect()
      section.removeEventListener('mousemove', onMove)
      section.removeEventListener('mouseleave', onLeave)
      section.removeEventListener('touchmove', onTouchMove)
      section.removeEventListener('touchend',  onTouchEnd)
      section.removeEventListener('touchcancel', onTouchEnd)
      ro.disconnect()
    }
  }, [])

  return <canvas ref={canvasRef} className="hero-dots-canvas" />
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(true)
  const [projectIndex, setProjectIndex] = useState(0)
  const [copied, setCopied] = useState(false)
  const [lightbox, setLightbox] = useState(null) // { photos: [], index: number }
  const isDesktop = useMediaQuery('(min-width: 900px)')

  // Without this the page behind a full-screen overlay still scrolls under
  // the finger on mobile, and the menu/lightbox drifts out of view.
  useEffect(() => {
    const locked = menuOpen || lightbox !== null
    document.body.classList.toggle('no-scroll', locked)
    return () => document.body.classList.remove('no-scroll')
  }, [menuOpen, lightbox])

  const openLightbox = useCallback((photos, index) => {
    setLightbox({ photos, index })
  }, [])

  const closeLightbox = useCallback(() => setLightbox(null), [])

  const lightboxPrev = useCallback(() => {
    setLightbox((lb) => lb && { ...lb, index: (lb.index - 1 + lb.photos.length) % lb.photos.length })
  }, [])

  const lightboxNext = useCallback(() => {
    setLightbox((lb) => lb && { ...lb, index: (lb.index + 1) % lb.photos.length })
  }, [])

  // Escape closes whichever overlay is open; arrows page through the photos.
  useEffect(() => {
    if (!lightbox && !menuOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setMenuOpen(false)
        closeLightbox()
        return
      }
      if (!lightbox) return
      if (e.key === 'ArrowLeft') lightboxPrev()
      else if (e.key === 'ArrowRight') lightboxNext()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox, menuOpen, closeLightbox, lightboxPrev, lightboxNext])

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
    <div className="portfolio" data-mode={darkMode ? 'dark' : 'light'}>
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
          <a
            href={`${import.meta.env.BASE_URL}PavithKavisika_resume.pdf`}
            download="PavithKavisika_resume.pdf"
            className="nav-icon-link resume-download-btn"
            aria-label="Download Resume"
          >
            <FiDownload />
          </a>
          <button
            className="theme-toggle-btn"
            onClick={() => setDarkMode((m) => !m)}
            aria-label="Toggle dark/light mode"
          >
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>
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
      >
        <HeroNameDots darkMode={darkMode} />
        <div className="hero-content-row">
          <motion.div
            className="hero-inner"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <p className="hero-label">SOFTWARE ENGINEER · SRI LANKA</p>
            <h1 className="hero-display" style={{ opacity: 0 }}>
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
          <span></span>
          <div className="scroll-line" />
        </motion.div>
        {/* Touch-only hint — hidden on desktop via CSS */}
        <motion.p
          className="hero-touch-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          DRAG TO INTERACT
        </motion.p>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="lightbox-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="lightbox-box"
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={lightbox.index}
                  src={lightbox.photos[lightbox.index]}
                  alt={`Photo ${lightbox.index + 1}`}
                  className="lightbox-img"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.22 }}
                />
              </AnimatePresence>
              <button className="lightbox-close" onClick={closeLightbox} aria-label="Close">&#x2715;</button>
              {lightbox.photos.length > 1 && (
                <>
                  <button className="lightbox-nav lightbox-prev" onClick={lightboxPrev} aria-label="Previous">
                    <BsArrowLeft />
                  </button>
                  <button className="lightbox-nav lightbox-next" onClick={lightboxNext} aria-label="Next">
                    <BsArrowRight />
                  </button>
                  <div className="lightbox-dots">
                    {lightbox.photos.map((_, k) => (
                      <button
                        key={k}
                        className={`lightbox-dot${k === lightbox.index ? ' active' : ''}`}
                        onClick={() => setLightbox((lb) => ({ ...lb, index: k }))}
                        aria-label={`Go to photo ${k + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
              I’m a Software Engineering undergraduate at SLIIT, passionate about building scalable 
              full stack applications and AI powered systems. I work with modern technologies like React, 
              Node.js, TypeScript, and Python, and enjoy turning real world problems into practical digital
              solutions.
            </p>
            <p>
              I’ve competed in national hackathons, earning 1st Runner Up at SLIIT Codefest 2025, and 
              built multiple production style projects including a gym management system, a national
               disaster response platform, and an AI driven SaaS product.
            </p>
            <p>
              I’m focused on growing as a software engineer and creating impactful, user centered technology.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="achievements-section">
        <div className="section-inner">
          <motion.p
            className="section-label"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            ACHIEVEMENTS
          </motion.p>
          <motion.h2
            className="section-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Awards &amp; Recognition
          </motion.h2>
          <div className="achievements-list">
            {ACHIEVEMENTS.map((a, i) => (
              <motion.div
                key={a.title}
                className="achievement-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.15 }}
              >
                <div className="achievement-info">
                  <span className="achievement-number">{a.number}</span>
                  <h3 className="achievement-title">{a.title}</h3>
                  <p className="achievement-subtitle">{a.subtitle}</p>
                </div>
                <div className="achievement-photos">
                  {a.photos.map((photo, j) => (
                    <motion.div
                      key={j}
                      className="achievement-photo-slot"
                      whileHover={{ scale: 1.04 }}
                      transition={{ duration: 0.22 }}
                      onClick={() => photo && openLightbox(a.photos, j)}
                      style={{ cursor: photo ? 'pointer' : 'default' }}
                    >
                      {photo ? (
                        <img
                          src={photo}
                          alt={`${a.title} photo ${j + 1}`}
                          loading="lazy"
                          decoding="async"
                        />
                      ) : (
                        <span className="photo-placeholder-label">ADD PHOTO</span>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
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
                key={s.title}
                className="skill-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                <span className="card-label">{String(i + 1).padStart(2, '0')}</span>
                <h3>{s.title}</h3>
                <div className="skill-items">
                  {s.items.map((item) => {
                    const Icon = SKILL_ICONS[item]
                    return (
                      <span key={item} className="skill-item">
                        {Icon && <Icon className="skill-icon" />}
                        {item}
                      </span>
                    )
                  })}
                </div>
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
          {isDesktop ? (
            /* Desktop: every project visible at once, no clicking through. */
            <div className="projects-grid">
              {PROJECTS.map((p, i) => (
                <motion.article
                  key={p.role}
                  className="project-card"
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.45, delay: (i % 2) * 0.08 }}
                >
                  <div className="project-card-head">
                    <p className="slide-period">{p.period}</p>
                    {p.logo && (
                      <div className="project-card-logo">
                        <img src={p.logo} alt="" loading="lazy" decoding="async" />
                      </div>
                    )}
                  </div>
                  <h3 className="project-card-title">{p.role}</h3>
                  <p className="slide-company">{p.company}</p>
                  <p className="project-card-desc">{p.description}</p>
                  <div className="slide-tags">
                    {p.tags.map((t) => (
                      <span key={t} className="slide-tag">{t}</span>
                    ))}
                  </div>
                  {p.link !== '#' && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="slide-link"
                    >
                      View Project <BsArrowRight />
                    </a>
                  )}
                </motion.article>
              ))}
            </div>
          ) : (
            /* Mobile: one at a time, advanced by swipe or by the arrows. */
            <div className="slider-layout">
              <AnimatePresence mode="wait">
                <motion.div
                  key={projectIndex}
                  className="slide-content"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.35, ease: 'easeInOut' }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.18}
                  dragDirectionLock
                  onDragEnd={(e, info) => {
                    // Either a decisive distance or a quick flick counts.
                    if (Math.abs(info.offset.x) < 70 && Math.abs(info.velocity.x) < 450) return
                    if (info.offset.x < 0) nextProject()
                    else prevProject()
                  }}
                >
                  <div className="slide-text-col">
                    <p className="slide-period">{PROJECTS[projectIndex].period}</p>
                    <h2 className="slide-title">{PROJECTS[projectIndex].role}</h2>
                    <p className="slide-company">{PROJECTS[projectIndex].company}</p>
                    <p className="slide-desc">{PROJECTS[projectIndex].description}</p>
                    <div className="slide-tags">
                      {PROJECTS[projectIndex].tags.map((t) => (
                        <span key={t} className="slide-tag">{t}</span>
                      ))}
                    </div>
                    {PROJECTS[projectIndex].link !== '#' && (
                      <a
                        href={PROJECTS[projectIndex].link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="slide-link"
                      >
                        View Project <BsArrowRight />
                      </a>
                    )}
                  </div>
                  {'logo' in PROJECTS[projectIndex] && (
                    <div className="slide-logo-col">
                      <div className="slide-logo">
                        {PROJECTS[projectIndex].logo ? (
                          <img src={PROJECTS[projectIndex].logo} alt={`${PROJECTS[projectIndex].role} logo`} />
                        ) : (
                          <span className="slide-logo-text">
                            {PROJECTS[projectIndex].role.charAt(0)}
                          </span>
                        )}
                      </div>
                    </div>
                  )}
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
                <span className="slider-hint">SWIPE</span>
              </div>
            </div>
          )}
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
