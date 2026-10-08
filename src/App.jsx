import { useState, useCallback, useRef, useEffect, useSyncExternalStore } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaLinkedin, FaJava, FaPython, FaReact, FaNodeJs, FaGit, FaDocker, FaDatabase } from 'react-icons/fa'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { SiJavascript, SiTypescript, SiExpress, SiNextdotjs, SiMysql, SiMongodb, SiPostgresql, SiPostman, SiApachetomcat, SiFigma, SiAndroidstudio, SiGnubash, SiSpringboot, SiTailwindcss, SiSqlite, SiKubernetes, SiElectron, SiExpo, SiSpring, SiSpringsecurity, SiHibernate, SiVite, SiGithubactions, SiVercel, SiRender, SiJsonwebtokens } from 'react-icons/si'
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
import redlinkLogo from './img/RedLink-logo.png'
import edocLogo from './img/eDoc-logo.png'
import './App.css'

const PROJECTS = [
  {
    period: 'SEP 2026 — PRESENT',
    role: 'RedLink — Blood Donor Matching System',
    company: 'Personal Project · Ongoing',
    logo: redlinkLogo,
    description:
      "Building a system that finds and ranks suitable blood donors for a hospital's urgent request in seconds, replacing manual phone calls. Created role-based access for admins, hospital staff, and donors, with donor contact details shared only after a donor accepts. Developing and testing secure REST APIs and deploying the full application live on the cloud with automated CI/CD.",
    tags: ['React', 'TypeScript', 'Vite', 'Java', 'Spring Boot', 'Spring Data JPA', 'Spring Security', 'JWT', 'PostgreSQL', 'REST API', 'GitHub Actions', 'Vercel', 'Render', 'Neon'],
    link: 'https://github.com/kbpkavisika/RedLink',
    live: 'https://redlink-lk.vercel.app',
  },
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
    logo: edocLogo,
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
    company: 'Personal Project',
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
    title: 'Databases',
    items: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite'],
  },
  {
    title: 'Frameworks & Libraries',
    items: ['Spring Boot', 'Spring Security', 'Spring Data JPA', 'Hibernate', 'JWT', 'React', 'React Native', 'Next.js', 'Node.js', 'Express.js', 'JSP', 'Servlets', 'Tailwind CSS', 'Vite'],
  },
  {
    title: 'Tools & Platforms',
    items: ['Git', 'GitHub', 'GitHub Actions', 'Docker', 'Kubernetes', 'Vercel', 'Render', 'Postman', 'Apache Tomcat', 'Electron', 'Expo', 'Android Studio', 'Figma'],
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
  'Spring Security': SiSpringsecurity,
  'Spring Data JPA': SiSpring,
  'Hibernate': SiHibernate,
  'JWT': SiJsonwebtokens,
  'React': FaReact,
  'React Native': FaReact,
  'Next.js': SiNextdotjs,
  'Node.js': FaNodeJs,
  'Express.js': SiExpress,
  'JSP': FaJava,
  'Servlets': FaJava,
  'Tailwind CSS': SiTailwindcss,
  'Vite': SiVite,
  'MySQL': SiMysql,
  'MongoDB': SiMongodb,
  'PostgreSQL': SiPostgresql,
  'SQLite': SiSqlite,
  'Git': FaGit,
  'GitHub': FaGithub,
  'GitHub Actions': SiGithubactions,
  'Docker': FaDocker,
  'Kubernetes': SiKubernetes,
  'Vercel': SiVercel,
  'Render': SiRender,
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

// Shared easing. A long, flat tail reads as "settling into place" rather than
// the uniform easeOut every section used to share.
const EASE_OUT = [0.22, 1, 0.36, 1]

function prefersReducedMotion() {
  return typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// Section headings reveal word by word instead of as one block, so the six
// sections no longer animate identically.
function RevealHeading({ children, className = 'section-heading', delay = 0 }) {
  // Subscribes to the query rather than reading it once, so toggling the OS
  // setting takes effect without a reload.
  const reduced = useMediaQuery('(prefers-reduced-motion: reduce)')
  // A "\n" in the text marks a hard line break, replacing the <br /> the
  // headings used to carry inline.
  const lines = String(children).split('\n')

  if (reduced) {
    return (
      <h2 className={className}>
        {lines.map((line, i) => (
          <span key={i}>{line}{i < lines.length - 1 && <br />}</span>
        ))}
      </h2>
    )
  }

  return (
    <motion.h2
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
      variants={{ show: { transition: { staggerChildren: 0.055, delayChildren: delay } } }}
    >
      {lines.map((line, li) => (
        <span key={li}>
          {line.split(' ').map((word, i) => (
            <span key={i} className="reveal-word">
              <motion.span
                className="reveal-word-inner"
                variants={{
                  hidden: { opacity: 0, y: '0.6em' },
                  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE_OUT } },
                }}
              >
                {word}
              </motion.span>
            </span>
          ))}
          {li < lines.length - 1 && <br />}
        </span>
      ))}
    </motion.h2>
  )
}

// Pulls an element toward the cursor -- the same "repel/settle" idea as the
// hero dots, so the interactions read as one system. Pointer-based devices
// only; the CSS transition handles the spring back on leave.
function useMagnetic(strength = 0.3) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    if (prefersReducedMotion()) return

    function onMove(e) {
      const r = el.getBoundingClientRect()
      const x = e.clientX - (r.left + r.width / 2)
      const y = e.clientY - (r.top + r.height / 2)
      el.style.transform = `translate(${(x * strength).toFixed(2)}px, ${(y * strength).toFixed(2)}px)`
    }
    function onLeave() { el.style.transform = '' }

    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
      el.style.transform = ''
    }
  }, [strength])

  return ref
}

// "JUL — OCT 2025" -> "2025"; an open-ended period keeps its own wording so
// the ongoing work is not stamped with a finished-looking year.
function displayYear(period) {
  if (/ONGOING/i.test(period)) return 'ONGOING'
  const years = period.match(/\d{4}/g)
  return years ? years[years.length - 1] : period
}

// "ZFit — Gym Management System" -> ["ZFit", "Gym Management System"].
// Projects without the dash fall back to their company line for the subtitle.
function splitRole(role, company) {
  const parts = role.split(/\s+—\s+/)
  if (parts.length > 1) return [parts[0], parts.slice(1).join(' — ')]
  return [role, company]
}

// One row of the project index. Collapsed it is a single typographic line;
// the full write-up is mounted only while the row is open, so the section
// stays short no matter how many projects the list grows to.
function ProjectRow({ project, index }) {
  const [open, setOpen] = useState(false)
  const [name, subtitle] = splitRole(project.role, project.company)
  const panelId = `project-panel-${index}`

  return (
    <li className={`project-row${open ? ' open' : ''}`}>
      <button
        className="project-row-head"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={panelId}
      >
        <span className="project-row-num">{String(index + 1).padStart(2, '0')}</span>
        <span className="project-row-main">
          <span className="project-row-name">{name}</span>
          <span className="project-row-sub">{subtitle}</span>
          {/* Three tags is enough to place the project at a glance; the full
              list is in the panel for anyone who opens it. */}
          <span className="project-row-stack">{project.tags.slice(0, 3).join(' · ')}</span>
        </span>
        <span className="project-row-year">{displayYear(project.period)}</span>
        <span className="project-row-toggle" aria-hidden="true" />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            className="project-panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.38, ease: EASE_OUT }}
            style={{ overflow: 'hidden' }}
          >
            <div className="project-panel-inner">
              {project.logo && (
                <div className="project-panel-logo">
                  <img src={project.logo} alt="" loading="lazy" decoding="async" />
                </div>
              )}
              <div className="project-panel-body">
                <p className="project-panel-period">{project.period} · {project.company}</p>
                <p className="project-panel-desc">{project.description}</p>
                <div className="slide-tags">
                  {project.tags.map((t) => (
                    <span key={t} className="slide-tag">{t}</span>
                  ))}
                </div>
                <div className="slide-links">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="slide-link"
                    >
                      Live Site <BsArrowRight />
                    </a>
                  )}
                  {project.link !== '#' && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="slide-link"
                    >
                      View Project <BsArrowRight />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  )
}

// Page-wide deep-space backdrop: faint stars that twinkle and drift left,
// bigger ones faster, for a touch of parallax. The canvas is fixed to the
// viewport behind every section, so the sky stays put while the page
// scrolls over it. Static when the user prefers reduced motion.
function StarfieldBackdrop({ darkMode }) {
  const canvasRef = useRef(null)
  const darkModeRef = useRef(darkMode)

  useEffect(() => {
    darkModeRef.current = darkMode
  }, [darkMode])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const REDUCED = prefersReducedMotion()
    let field = []
    let animId = null
    let lastTick = 0
    let clock = 0

    function build() {
      const W = window.innerWidth, H = window.innerHeight
      canvas.width  = W
      canvas.height = H
      const count = Math.round(Math.min(420, (W * H) / 5000))
      field = []
      for (let i = 0; i < count; i++) {
        const size = 0.4 + Math.random() * Math.random() * 1.1
        field.push({
          x: Math.random() * W,
          y: Math.random() * H,
          size,
          base:  0.12 + Math.random() * 0.38,
          phase: Math.random() * Math.PI * 2,
          speed: 0.6 + Math.random() * 1.8,
          drift: 1.5 + size * 4, // bigger = "closer" = faster parallax
        })
      }
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const ch = darkModeRef.current ? '255,255,255' : '0,0,0'
      for (const s of field) {
        const a = REDUCED ? s.base : s.base * (0.55 + 0.45 * Math.sin(clock * s.speed + s.phase))
        ctx.fillStyle = `rgba(${ch},${a.toFixed(2)})`
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    function tick(now) {
      // Clamped so the stars do not jump after the tab was in the background
      const dt = lastTick ? Math.min((now - lastTick) / 1000, 0.05) : 0
      lastTick = now
      clock += dt
      for (const s of field) {
        s.x -= s.drift * dt
        if (s.x < -2) { s.x = canvas.width + 2; s.y = Math.random() * canvas.height }
      }
      draw()
      animId = requestAnimationFrame(tick)
    }

    // Debounced like the hero: a mobile URL bar showing/hiding fires resize
    // repeatedly, and reseeding the sky on every one would flicker.
    let resizeTimer = null
    function onResize() {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(() => {
        build()
        if (REDUCED) draw()
      }, 150)
    }
    window.addEventListener('resize', onResize)

    build()
    if (REDUCED) draw()
    else animId = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(animId)
      clearTimeout(resizeTimer)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  // The reduced-motion sky is painted once, so repaint it on a theme switch.
  useEffect(() => {
    if (!prefersReducedMotion()) return
    window.dispatchEvent(new Event('resize'))
  }, [darkMode])

  return <canvas ref={canvasRef} className="starfield-canvas" aria-hidden="true" />
}

// A little dot-drawn astronaut floating on a tether in the contact section,
// juggling a ringed planet, a moon and a star. Same dot language as the
// hero. Drawn in "cell" units through a canvas transform, so the whole
// figure can bob and sway as one piece.
const ASTRONAUT = [
  '.......#######.......',
  '.....##-------##.....',
  '....#-----------#....',
  '...#--ooooooooo--#...',
  '..#--ooooooooooo--#..',
  '..#-oooooooooo##o-#..',
  '..#-ooooooooooo#o-#..',
  '..#-ooooooooooooo-#..',
  '..#--ooooooooooo--#..',
  '...#--ooooooooo--#...',
  '....#-----------#....',
  '.....###########.....',
  '...###############...',
  '..#---------------#..',
  '..#---#######-----#..',
  '..#---#-#-#-#--##-#..',
  '..#---#######--##-#..',
  '..#---------------#..',
  '..#---------------#..',
  '...###############...',
  '...#-----#.#-----#...',
  '...#-----#.#-----#...',
  '...#-----#.#-----#...',
  '..#-----#...#-----#..',
  '..#-----#...#-----#..',
  '.#######.....#######.',
  '.#######.....#######.',
]
// Alpha per character: outline, suit fill, dark visor glass
const ASTRO_SHADE = { '#': 0.9, '-': 0.32, o: 0.1 }

function ContactAstronaut({ darkMode }) {
  const canvasRef = useRef(null)
  const darkModeRef = useRef(darkMode)

  useEffect(() => {
    darkModeRef.current = darkMode
  }, [darkMode])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const REDUCED = prefersReducedMotion()

    // Body cells grouped by shade, centred on the chest
    const cy0 = (ASTRONAUT.length - 1) / 2, cx0 = (ASTRONAUT[0].length - 1) / 2
    const body = { '#': [], '-': [], o: [] }
    ASTRONAUT.forEach((row, j) => {
      for (let i = 0; i < row.length; i++) {
        if (body[row[i]]) body[row[i]].push([i - cx0, j - cy0])
      }
    })

    // The three juggled objects, as dot clouds around their own centre
    function disc(r) {
      const out = []
      for (let j = -r; j <= r; j++) {
        for (let i = -r; i <= r; i++) if (i * i + j * j <= r * r + 0.5) out.push([i, j])
      }
      return out
    }
    const planet = disc(2)
    const ring = []
    for (let k = 0; k < 18; k++) {
      const a = (k / 18) * Math.PI * 2
      if (Math.sin(a) < -0.2) continue // back of the ring hides behind the planet
      ring.push([Math.cos(a) * 4, Math.sin(a) * 1.3])
    }
    const moon = disc(2).filter(([i, j]) => !(i === 1 && j === -1) && !(i === -1 && j === 1))
    const star = [[0, 0], [0, -1], [0, -2], [0, 1], [-1, 0], [-2, 0], [1, 0], [2, 0],
      [-1, 1.6], [1, 1.6], [-1.5, 2.4], [1.5, 2.4]]
    const balls = [
      { shape: planet, extra: ring, phase: 0 },
      { shape: moon,   extra: null, phase: 2 / 3 },
      { shape: star,   extra: null, phase: 4 / 3 },
    ]

    let W = 0, H = 0, CELL = 4.5
    let animId = null, lastTick = 0, t = 0

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      W = canvas.clientWidth
      H = canvas.clientHeight
      canvas.width  = Math.round(W * dpr)
      canvas.height = Math.round(H * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      CELL = W / 58
    }

    function dots(cells, ox, oy, r, alpha, ch, rot = 0) {
      const c = Math.cos(rot), s = Math.sin(rot)
      ctx.fillStyle = `rgba(${ch},${alpha})`
      ctx.beginPath()
      for (const [u, v] of cells) {
        const x = ox + u * c - v * s, y = oy + u * s + v * c
        ctx.moveTo(x + r, y)
        ctx.arc(x, y, r, 0, Math.PI * 2)
      }
      ctx.fill()
    }

    // A limb is just dots strung along shoulder -> elbow -> hand
    function limb(points) {
      const out = []
      for (let k = 0; k < points.length - 1; k++) {
        const [ax, ay] = points[k], [bx, by] = points[k + 1]
        const n = Math.ceil(Math.hypot(bx - ax, by - ay) / 0.7)
        for (let m = 0; m <= n; m++) out.push([ax + (bx - ax) * m / n, ay + (by - ay) * m / n])
      }
      return out
    }

    function draw() {
      ctx.clearRect(0, 0, W, H)
      const ch = darkModeRef.current ? '255,255,255' : '0,0,0'

      // Whole figure floats: slow bob plus a gentle sway
      const bob = Math.sin(t * 0.9) * 1.6
      const sway = Math.sin(t * 0.55) * 0.09
      const cx = W * 0.5, cy = H * 0.62

      // Tether: from the hip out past the right edge, drifting with the body
      ctx.save()
      ctx.translate(cx, cy + bob * CELL)
      ctx.rotate(sway)
      ctx.scale(CELL, CELL)
      const tx = 9, ty = 6
      const endX = (W - cx) / CELL + 4, endY = (H - cy) / CELL + Math.sin(t * 0.7) * 2
      const tether = []
      for (let k = 0; k <= 40; k++) {
        const p = k / 40
        const sag = Math.sin(p * Math.PI) * (5 + Math.sin(t * 0.8) * 1.5)
        tether.push([tx + (endX - tx) * p, ty + (endY - ty) * p + sag])
      }
      // Fades out toward the far end rather than stopping at the canvas edge
      for (let k = 0; k < tether.length; k += 5) {
        const a = 0.4 * (1 - k / tether.length)
        dots(tether.slice(k, k + 5), 0, 0, 0.16, a.toFixed(2), ch)
      }

      // Juggling: three objects on a cascade between the hands, each thrown
      // in a high arc to the other hand. A hand dips as it throws.
      const FLIGHT = 0.9 // seconds per throw
      const hands = { L: [-14, 2], R: [14, 2] }
      let dipL = 0, dipR = 0
      for (const b of balls) {
        const p = ((t / FLIGHT + b.phase * 1.5) % 3) / 1.5 // 0..2
        const fromL = p < 1
        const q = fromL ? p : p - 1
        const [ax, ay] = fromL ? hands.L : hands.R
        const [bx, by] = fromL ? hands.R : hands.L
        const x = ax + (bx - ax) * q
        const y = ay + (by - ay) * q - 58 * q * (1 - q) // apex clears the helmet
        if (q < 0.12) {
          if (fromL) dipL = Math.max(dipL, 1 - q / 0.12)
          else dipR = Math.max(dipR, 1 - q / 0.12)
        }
        const spin = t * 1.6 + b.phase * 3
        dots(b.shape, x, y - 2.5, 0.42, 0.85, ch, b.extra ? 0 : spin)
        if (b.extra) dots(b.extra, x, y - 2.5, 0.3, 0.6, ch, 0.35)
      }

      // Arms: shoulder -> elbow -> glove, gloves dip on each throw
      const handL = [-14, 2 + dipL * 1.2], handR = [14, 2 + dipR * 1.2]
      dots(limb([[-8, 0], [-11.5, 5], handL]), 0, 0, 0.62, 0.7, ch)
      dots(limb([[8, 0], [11.5, 5], handR]), 0, 0, 0.62, 0.7, ch)
      dots(disc(1), handL[0], handL[1], 0.5, 0.9, ch)
      dots(disc(1), handR[0], handR[1], 0.5, 0.9, ch)

      // Body last so the shoulders sit over the arm roots
      for (const k of ['o', '-', '#']) dots(body[k], 0, 0, 0.42, ASTRO_SHADE[k], ch)

      // Visor glint drifts across the glass
      const gx = -3 + ((t * 0.4) % 1) * 8
      dots([[gx, -9], [gx + 0.8, -8.2]], 0, 0, 0.3, 0.55, ch)
      ctx.restore()
    }

    function tick(now) {
      const dt = lastTick ? Math.min((now - lastTick) / 1000, 0.05) : 0
      lastTick = now
      t += dt
      draw()
      animId = requestAnimationFrame(tick)
    }

    resize()
    // Reduced motion: a single still frame, mid-juggle
    t = 0.4
    draw()

    const ro = new ResizeObserver(() => { resize(); draw() })
    ro.observe(canvas)
    function onRepaint() { draw() }
    canvas.addEventListener('repaint', onRepaint)

    // Only animate while the section is on screen
    const io = new IntersectionObserver(([entry]) => {
      if (REDUCED) return
      if (entry.isIntersecting) {
        if (animId === null) { lastTick = 0; animId = requestAnimationFrame(tick) }
      } else if (animId !== null) {
        cancelAnimationFrame(animId)
        animId = null
      }
    }, { threshold: 0 })
    io.observe(canvas)

    return () => {
      cancelAnimationFrame(animId)
      canvas.removeEventListener('repaint', onRepaint)
      ro.disconnect()
      io.disconnect()
    }
  }, [])

  // Repaint the still frame on a theme switch when not animating
  useEffect(() => {
    if (!prefersReducedMotion()) return
    canvasRef.current?.dispatchEvent(new Event('repaint'))
  }, [darkMode])

  return <canvas ref={canvasRef} className="contact-astronaut" aria-hidden="true" />
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

    // Spiral galaxy drawn in the empty space right of the name. Its stars
    // run through the same spring/repel step as the name dots, but their
    // home position orbits the core every frame, so the cursor can scatter
    // the galaxy and it reforms while it keeps turning.
    let stars = []
    const galaxy = { cx: 0, cy: 0, R: 0, fade: 1, spin: 0 }
    const ARMS      = 3
    const TWIST     = 3.4                 // radians of wind from core to rim
    // Negative = counter-clockwise on screen, which also makes the arms
    // trail behind the spin the way a real spiral galaxy's do.
    const SPIN_RATE = prefersReducedMotion() ? 0 : -0.11 // rad/s
    const INCL      = Math.cos(1.05)      // disc viewed ~60° off face-on
    const TILT      = -0.38               // whole disc leans like "\"
    const COS_T = Math.cos(TILT), SIN_T = Math.sin(TILT)
    let lastTick = 0

    function randn() {
      const u = 1 - Math.random(), v = Math.random()
      return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v)
    }

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

    // document.fonts.ready only waits for whatever was already pending. On a
    // cold load this effect can run before the stylesheet has even requested
    // Big Shoulders Display, so nothing is pending, it resolves immediately,
    // and the offscreen canvas rasterises the name in fallback sans-serif --
    // different letterforms and different metrics from what CSS paints. A
    // refresh hides the bug because the font is then served from cache.
    // Asking for the exact face by name forces the fetch and waits for it.
    const NAME_FAMILY = 'Big Shoulders Display'
    const NAME_SAMPLE = 'KBP KAVISIKA'
    let fontConfirmed = false

    // document.fonts.check() reports true for a family it has never heard of,
    // because an unknown family "resolves" to an already-available system
    // font. On a cold load the Google Fonts stylesheet may not have parsed
    // yet, so the @font-face does not exist and check() would wave us through
    // onto the fallback. Looking for the actual loaded face says no in both
    // the not-yet-registered and the still-loading case.
    function faceLoaded() {
      try {
        for (const f of document.fonts) {
          if (f.family.replace(/["']/g, '') === NAME_FAMILY && f.status === 'loaded') {
            return true
          }
        }
      } catch { /* FontFaceSet not iterable */ }
      return false
    }

    async function ensureNameFont(px) {
      try {
        await document.fonts.load(`900 ${px}px "${NAME_FAMILY}"`, NAME_SAMPLE)
      } catch { /* fall back to whatever the canvas resolves */ }
      try {
        await document.fonts.ready
      } catch { /* ignore */ }
      return faceLoaded()
    }

    async function build() {
      const probe = section.querySelector('.hero-display')
      if (!probe) return
      // Resolve the face at the size CSS will actually paint, before any
      // measurement below -- the fallback's metrics differ, so the width and
      // offsets all shift the moment the real font swaps in.
      fontConfirmed = await ensureNameFont(parseFloat(window.getComputedStyle(probe).fontSize))

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

      buildGalaxy(W, H, ox + Math.max(
        oCtx.measureText('K B P').width,
        oCtx.measureText('KAVISIKA').width,
      ), oy + lh)
    }

    // Sits centred in whatever room the name leaves on the right. When the
    // name fills the width (phones, narrow windows) there is no such room,
    // so the galaxy moves behind the text and fades right down instead.
    function buildGalaxy(W, H, nameRight, nameMidY) {
      const rightEdge = W - parseFloat(window.getComputedStyle(section).paddingRight)
      const free = rightEdge - nameRight
      const cramped = free < 280

      galaxy.cx   = cramped ? W * 0.68 : nameRight + free * 0.52
      galaxy.cy   = cramped ? H * 0.42 : nameMidY
      galaxy.R    = cramped
        ? Math.min(W * 0.42, H * 0.3)
        : Math.min(free * 0.56, H * 0.38)
      galaxy.fade = cramped ? 0.32 : 1

      const R = galaxy.R
      const count = Math.round(Math.min(1900, Math.max(500, R * R * 0.045)))
      stars = []
      for (let i = 0; i < count; i++) {
        const kind = Math.random()
        let r, th, size, alpha
        if (kind < 0.2) {
          // Bulge: a dense, bright core
          r     = Math.abs(randn()) * R * 0.14
          th    = Math.random() * Math.PI * 2
          size  = 0.9 + Math.random() * 0.8
          alpha = 0.75 + Math.random() * 0.25
        } else if (kind < 0.3) {
          // Halo: loose stars filling the disc between the arms
          r     = R * Math.sqrt(Math.random())
          th    = Math.random() * Math.PI * 2
          size  = 0.5 + Math.random() * 0.6
          alpha = 0.15 + Math.random() * 0.3
        } else {
          // Arms: scatter tightens toward the rim so the spiral stays legible
          const t = 0.06 + 0.94 * Math.pow(Math.random(), 0.8)
          r     = R * t + randn() * R * 0.025
          th    = (i % ARMS) * (Math.PI * 2 / ARMS) + t * TWIST + randn() * 0.28 * (1.1 - t)
          size  = 0.6 + Math.random() * 0.9
          alpha = 0.3 + Math.random() * 0.6 * (1 - t * 0.5)
        }
        // Stars burst out of the core on (re)build and spring into place
        stars.push({ r, th, size, alpha, ox: galaxy.cx, oy: galaxy.cy,
          x: galaxy.cx, y: galaxy.cy, vx: 0, vy: 0, depth: 1 })
      }
    }

    // Spin the disc and project each star's orbit onto the tilted plane.
    function placeStars(dt) {
      galaxy.spin += SPIN_RATE * dt
      const { cx, cy, spin } = galaxy
      for (const s of stars) {
        const a  = s.th + spin
        const sa = Math.sin(a)
        const x  = Math.cos(a) * s.r
        const y  = sa * s.r * INCL
        s.ox = cx + x * COS_T - y * SIN_T
        s.oy = cy + x * SIN_T + y * COS_T
        s.depth = 0.78 + 0.22 * sa // near side of the disc reads brighter
      }
    }

    // The odd passer-by (UAV, rocket, asteroid, meteor) drawn in the same
    // dots, in front of the page-wide StarfieldBackdrop. Everything here stays
    // well below the name's alpha so it reads as background, and none of it
    // moves when the user prefers reduced motion.
    const REDUCED = prefersReducedMotion()
    const CELL    = 4    // px between the dots that make up a sprite
    let travellers = []
    let trail = []       // meteor tail dots
    let spawnIn = 2      // seconds until the next passer-by

    function parseSprite(rows) {
      const cells = []
      const cx = (rows[0].length - 1) / 2, cy = (rows.length - 1) / 2
      rows.forEach((row, j) => {
        for (let i = 0; i < row.length; i++) {
          if (row[i] === '#') cells.push([i - cx, j - cy])
        }
      })
      return cells
    }

    // Drawn pointing right; rotated to its heading at draw time.
    const ROCKET = parseSprite([
      '##...........',
      '.##########..',
      '.#######.####',
      '.##########..',
      '##...........',
    ])
    const ROCKET_TAIL = -7.5 // cell offset of the exhaust, just behind the fins

    // Top-down quadcopter: four rotors on an X frame.
    const UAV = parseSprite([
      '###.....###',
      '###.....###',
      '..#.....#..',
      '...#...#...',
      '....###....',
      '....###....',
      '...#...#...',
      '..#.....#..',
      '###.....###',
      '###.....###',
    ])

    // Lumpy, cratered blob -- a fresh shape for every asteroid.
    function rockCells(radius) {
      const p1 = Math.random() * 6, p2 = Math.random() * 6
      const cells = []
      for (let j = -radius - 1; j <= radius + 1; j++) {
        for (let i = -radius - 1; i <= radius + 1; i++) {
          const ang  = Math.atan2(j, i)
          const edge = radius * (1 + 0.22 * Math.sin(3 * ang + p1) + 0.12 * Math.sin(5 * ang + p2))
          if (Math.hypot(i, j) <= edge && Math.random() > 0.1) cells.push([i, j])
        }
      }
      return cells
    }

    function spawnTraveller(W, H) {
      const roll = Math.random()
      const fromLeft = Math.random() < 0.5
      const dir = fromLeft ? 1 : -1

      if (roll < 0.22) {
        // UAV cruising level across the upper sky
        const speed = 45 + Math.random() * 25
        return { kind: 'uav', cells: UAV, x: fromLeft ? -40 : W + 40, y: H * (0.1 + Math.random() * 0.22),
          vx: speed * dir, vy: 0, rot: 0, spin: 0, age: 0, alpha: 0.5 }
      }
      if (roll < 0.44) {
        // Rocket climbing diagonally out of the lower half
        const speed = 90 + Math.random() * 60
        const climb = 0.25 + Math.random() * 0.35 // radians above horizontal
        const vx = Math.cos(climb) * speed * dir, vy = -Math.sin(climb) * speed
        return { kind: 'rocket', cells: ROCKET, x: fromLeft ? -50 : W + 50, y: H * (0.6 + Math.random() * 0.35),
          vx, vy, rot: Math.atan2(vy, vx), spin: 0, age: 0, alpha: 0.55 }
      }
      if (roll < 0.72) {
        // Asteroid tumbling slowly through
        const speed = 14 + Math.random() * 18
        return { kind: 'rock', cells: rockCells(3 + Math.floor(Math.random() * 3)),
          x: fromLeft ? -60 : W + 60, y: H * (0.15 + Math.random() * 0.7),
          vx: speed * dir, vy: (Math.random() - 0.5) * 10,
          rot: Math.random() * 6, spin: (Math.random() - 0.5) * 0.6, age: 0, alpha: 0.42 }
      }
      // Meteor: small stone streaking down from the top, tail behind it
      const speed = 260 + Math.random() * 140
      const fall  = 0.35 + Math.random() * 0.35
      return { kind: 'meteor', cells: rockCells(1), x: W * (0.15 + Math.random() * 0.85) , y: -20,
        vx: Math.cos(fall) * speed * -dir, vy: Math.sin(fall) * speed,
        rot: 0, spin: 2, age: 0, alpha: 0.75 }
    }

    function updateSpace(dt) {
      if (REDUCED) return
      const W = canvas.width, H = canvas.height

      spawnIn -= dt
      if (spawnIn <= 0 && travellers.length < 3) {
        travellers.push(spawnTraveller(W, H))
        spawnIn = 3 + Math.random() * 5
      }

      for (const t of travellers) {
        t.age += dt
        t.x   += t.vx * dt
        t.y   += t.vy * dt
        t.rot += t.spin * dt
        if (t.kind === 'meteor') {
          for (let k = 0; k < 3; k++) {
            trail.push({ x: t.x + randn() * 1.5, y: t.y + randn() * 1.5,
              vx: -t.vx * 0.04, vy: -t.vy * 0.04, life: 1 })
          }
        }
      }
      const M = 140
      travellers = travellers.filter((t) =>
        t.age < 1 || (t.x > -M && t.x < W + M && t.y > -M && t.y < H + M))

      for (const p of trail) {
        p.life -= dt / 0.9
        p.x += p.vx * dt
        p.y += p.vy * dt
      }
      trail = trail.filter((p) => p.life > 0)
    }

    // All the cells share one fill, so they go down as a single path.
    function drawCells(cells, x, y, rot, alpha, ch, size = 1.1) {
      const c = Math.cos(rot), s = Math.sin(rot)
      ctx.fillStyle = `rgba(${ch},${alpha.toFixed(2)})`
      ctx.beginPath()
      for (const [u, v] of cells) {
        const px = x + (u * c - v * s) * CELL
        const py = y + (u * s + v * c) * CELL
        ctx.moveTo(px + size, py)
        ctx.arc(px, py, size, 0, Math.PI * 2)
      }
      ctx.fill()
    }

    function drawSpace(ch) {
      for (const p of trail) {
        ctx.fillStyle = `rgba(${ch},${(p.life * 0.5).toFixed(2)})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, 0.5 + p.life * 0.9, 0, Math.PI * 2)
        ctx.fill()
      }

      for (const t of travellers) {
        // Fade in over the first half second so nothing pops into view
        const alpha = t.alpha * Math.min(1, t.age * 2)
        drawCells(t.cells, t.x, t.y, t.rot, alpha, ch)

        if (t.kind === 'rocket') {
          // Flickering exhaust: a few random dots streaming off the tail
          const flame = []
          for (let k = 0; k < 7; k++) {
            flame.push([ROCKET_TAIL - Math.random() * 5, randn() * 0.55])
          }
          drawCells(flame, t.x, t.y, t.rot, alpha * (0.5 + Math.random() * 0.4), ch, 0.9)
        } else if (t.kind === 'uav' && Math.sin(t.age * 7) > 0.6) {
          // Blinking nav light in the middle of the frame
          drawCells([[0, 0]], t.x, t.y, 0, Math.min(1, alpha * 1.8), ch, 1.8)
        }
      }
    }

    // REPEL_STR, SPRING and DAMP were tuned by feel back when two rAF loops
    // were driving this same dot field, so the simulation was really being
    // advanced twice per frame. Now that there is a single loop, the physics
    // is stepped twice explicitly -- same motion as before, but deterministic
    // rather than dependent on which loop happened to start first.
    const SUBSTEPS = 2

    function step(list) {
      for (const d of list) {
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
      }
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const ch = darkModeRef.current ? '255,255,255' : '0,0,0'

      drawSpace(ch)

      if (stars.length) {
        const { cx, cy, R, fade } = galaxy
        const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, R * 0.45)
        glow.addColorStop(0, `rgba(${ch},${(0.16 * fade).toFixed(3)})`)
        glow.addColorStop(1, `rgba(${ch},0)`)
        ctx.fillStyle = glow
        ctx.beginPath()
        ctx.arc(cx, cy, R * 0.45, 0, Math.PI * 2)
        ctx.fill()

        for (const s of stars) {
          const a = s.alpha * s.depth * fade
          ctx.fillStyle = `rgba(${ch},${a.toFixed(2)})`
          ctx.beginPath()
          ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      for (const d of dots) {
        const spread = Math.hypot(d.x - d.ox, d.y - d.oy)
        const alpha  = Math.min(0.95, 0.72 + spread * 0.015)
        ctx.fillStyle = `rgba(${ch},${alpha.toFixed(2)})`
        ctx.beginPath()
        ctx.arc(d.x, d.y, 1.3, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    function tick(now) {
      // Clamped so the galaxy does not lurch after the loop was paused
      // (hero scrolled away, tab in the background).
      const dt = lastTick ? Math.min((now - lastTick) / 1000, 0.05) : 0
      lastTick = now
      updateSpace(dt)
      placeStars(dt)
      for (let n = 0; n < SUBSTEPS; n++) {
        step(dots)
        step(stars)
      }
      draw()
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

    // Belt and braces: if the face still was not ready when we rasterised
    // (slow network, or a check that returned false), rebuild once it lands
    // so the dots match the text the browser is painting.
    function onFontsDone() {
      // Fires for every font the page loads, so bail unless it is ours and
      // the first rasterisation actually missed it.
      if (fontConfirmed || !faceLoaded()) return
      lastW = section.offsetWidth
      lastH = section.offsetHeight
      build()
    }
    document.fonts?.addEventListener?.('loadingdone', onFontsDone)

    build().then(() => {
      lastW = section.offsetWidth
      lastH = section.offsetHeight
      // Hand the name over to the canvas only once there are dots to draw.
      // If build() fails or the font never resolves, the real <h1> stays
      // visible rather than leaving the hero with no name at all.
      if (dots.length > 0) section.classList.add('dots-ready')
      // The IntersectionObserver above has usually already started the loop
      // by now -- it fires well before document.fonts.ready resolves. Calling
      // tick() unguarded here would run a second rAF loop over the same dots,
      // integrating the spring twice per frame and leaking a loop on unmount.
      if (animId === null) animId = requestAnimationFrame(tick)
      // Play the demo sweep on all devices after a short delay
      demoTimeout = setTimeout(runDemoSweep, 900)
    }).catch(() => { /* leave the plain <h1> showing */ })

    return () => {
      cancelAnimationFrame(animId)
      cancelAnimationFrame(demoAnimId)
      clearTimeout(demoTimeout)
      clearTimeout(resizeTimer)
      document.fonts?.removeEventListener?.('loadingdone', onFontsDone)
      section.classList.remove('dots-ready')
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
  const [copied, setCopied] = useState(false)
  const [lightbox, setLightbox] = useState(null) // { photos: [], index: number }

  const menuBtnRef = useMagnetic(0.35)
  const themeBtnRef = useMagnetic(0.35)
  const emailRef = useMagnetic(0.12)

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

  const scrollTo = (id) => {
    setMenuOpen(false)
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }, 300)
  }

  return (
    <div className="portfolio" data-mode={darkMode ? 'dark' : 'light'}>
      <StarfieldBackdrop darkMode={darkMode} />

      {/* Navigation */}
      <nav className="navbar">
        <button ref={menuBtnRef} className="menu-btn magnetic" onClick={() => setMenuOpen(true)} aria-label="Open menu">
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
            ref={themeBtnRef}
            className="theme-toggle-btn magnetic"
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
            {/* Hidden by CSS only once .dots-ready is set, so a canvas or
                font failure degrades to plain text instead of a blank hero. */}
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
          <RevealHeading>{'Software Engineering\nUndergraduate at SLIIT'}</RevealHeading>
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
          <RevealHeading>{'Awards & Recognition'}</RevealHeading>
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
          <RevealHeading>What I Work With</RevealHeading>
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

      {/* Projects */}
      <section id="work" className="work-section">
        <div className="section-inner">
          <div className="work-head">
            <motion.p
              className="section-label"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              PROJECTS
            </motion.p>
            <span className="work-count">{String(PROJECTS.length).padStart(2, '0')}</span>
          </div>
          <RevealHeading>Selected Work</RevealHeading>
          <ul className="project-index">
            {PROJECTS.map((p, i) => (
              <ProjectRow key={p.role} project={p} index={i} />
            ))}
          </ul>
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
            ref={emailRef}
            className="email-display magnetic"
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
        <ContactAstronaut darkMode={darkMode} />
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
