import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaReact, FaNode, FaDatabase, FaDocker, FaPython, FaJava, FaAward, FaRocket, FaCode, FaServer, FaTools, FaChartLine } from 'react-icons/fa'
import { SiMongodb, SiPostgresql, SiMysql, SiExpress, SiNextdotjs, SiTailwindcss, SiTypescript, SiRedis, SiJavascript, SiC, SiCplusplus, SiPhp, SiR, SiPostman, SiFigma, SiAndroidstudio, SiApache, SiXampp } from 'react-icons/si'
import { HiOutlineMail, HiLocationMarker } from 'react-icons/hi'
import { BsArrowRight } from 'react-icons/bs'
import portfolioPic from './img/portfolio_pic.jpg'
import './App.css'

function App() {
  useEffect(() => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="portfolio">
      {/* Navigation */}
      <motion.nav 
        className="navbar"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="nav-container">
          <h2 className="logo">K B P Kavisika</h2>
          <ul className="nav-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-container">
          <motion.div 
            className="hero-photo"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="photo-container">
              <img src={portfolioPic} alt="K B P Kavisika" className="profile-photo" />
              <div className="photo-ring"></div>
            </div>
          </motion.div>
          <motion.div 
            className="hero-content"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
          <motion.p className="hero-greeting" variants={fadeInUp}>Hello, I'm</motion.p>
          <motion.h1 className="hero-title" variants={fadeInUp}><span className="highlight">K B P Kavisika</span></motion.h1>
          <motion.p className="hero-description" variants={fadeInUp}>
            Building innovative solutions that bridge technology and real-world impact.
            Specialized in scalable web applications and disaster management systems.
          </motion.p>
          <motion.div className="hero-buttons" variants={fadeInUp}>
            <a href="#projects" className="btn btn-primary">Explore Projects <BsArrowRight /></a>
            <a href="#contact" className="btn btn-secondary"><HiOutlineMail /> Get In Touch</a>
          </motion.div>
        </motion.div>
        </div>
      </section>

      {/* About Section */}
      <motion.section 
        id="about" 
        className="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="container">
          <motion.h2 className="section-title" variants={fadeInUp}>About Me</motion.h2>
          <motion.div className="about-content" variants={fadeInUp}>
            <div className="about-text">
              <p className="intro-text">
                I am a motivated Software Engineering undergraduate at SLIIT with a strong interest in building 
                scalable, real-world software solutions. I enjoy developing user-focused applications and working 
                across the full stack using modern technologies. Through academic projects, hackathons, and 
                team-based development, I have gained hands-on experience in web applications, APIs, databases, 
                and cloud-ready systems.
              </p>
              <p>
                I am adaptable, quick to learn new technologies, and comfortable working in collaborative 
                environments. I enjoy solving complex problems and delivering reliable, maintainable solutions. 
                Currently, I am focused on strengthening my skills in full-stack development, system design, and 
                AI-powered applications while preparing for industry internships and entry-level roles.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section 
        id="skills" 
        className="skills"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="container">
          <motion.h2 className="section-title" variants={fadeInUp}>
            <FaCode className="section-icon" /> Skills
          </motion.h2>
          <motion.div className="skills-grid" variants={staggerContainer}>
            <motion.div className="skill-card" variants={fadeInUp}>
              <div className="skill-icon"><FaCode /></div>
              <h3>Programming Languages</h3>
              <ul>
                <li><FaJava /> Java</li>
                <li><FaPython /> Python</li>
                <li><SiC /> C, <SiCplusplus /> C++</li>
                <li><SiJavascript /> <SiTypescript /> JavaScript, TypeScript</li>
                <li><SiPhp /> PHP, SQL, Bash</li>
                <li><FaReact /> React.js</li>
                <li><FaNode /> Node.js</li>
                <li><SiExpress /> Express.js</li>
                <li><SiR /> R</li>
              </ul>
            </motion.div>
            <motion.div className="skill-card" variants={fadeInUp}>
              <div className="skill-icon"><FaDatabase /></div>
              <h3>Databases</h3>
              <ul>
                <li><SiMysql /> MySQL</li>
                <li><SiMongodb /> MongoDB</li>
                <li><SiPostgresql /> PostgreSQL</li>
              </ul>
            </motion.div>
            <motion.div className="skill-card" variants={fadeInUp}>
              <div className="skill-icon"><FaTools /></div>
              <h3>Tools & Platforms</h3>
              <ul>
                <li><FaGithub /> Git & GitHub</li>
                <li><SiPostman /> Postman</li>
                <li><SiXampp /> XAMPP</li>
                <li><SiApache /> Apache Tomcat</li>
                <li><FaDocker /> Docker</li>
                <li><SiFigma /> Figma</li>
                <li><SiAndroidstudio /> Android Studio</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        id="projects" 
        className="projects"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={staggerContainer}
      >
        <div className="container">
          <motion.h2 className="section-title" variants={fadeInUp}>
            <FaRocket className="section-icon" /> Projects
          </motion.h2>
          <motion.div className="projects-grid" variants={staggerContainer}>
            <motion.div className="project-card featured" variants={fadeInUp} whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}>
              <div className="project-badge">🏆 Award Winning</div>
              <h3>ResQ – National Disaster Platform</h3>
              <p className="project-subtitle">1st Runners Up - SLIIT Codefest 2025 Revivenation</p>
              <p>Full-stack MERN application with React Native mobile app enabling disaster alerts, SOS requests, and real-time resource allocation. Integrated early-access APIs (SLUDI, Commercial Bank PayDPI) and built analytics dashboards with Recharts. Features role-based access control and geospatial tracking.</p>
              <div className="project-tags">
                <span className="tag">Node.js</span>
                <span className="tag">React</span>
                <span className="tag">MongoDB</span>
                <span className="tag">TypeScript</span>
                <span className="tag">REST API</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/disaster-response-sl/national-disaster-platform" target="_blank" rel="noopener noreferrer" className="project-link"><FaGithub /> View on GitHub <BsArrowRight /></a>
              </div>
            </motion.div>
            <motion.div className="project-card" variants={fadeInUp} whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}>
              <h3>ZFit – Gym Management System</h3>
              <p className="project-subtitle">Jul 2025 - Oct 2025</p>
              <p>Comprehensive gym management platform featuring payment processing, invoice generation, and refund handling. Built responsive member dashboards with attendance tracking and integrated PayHere payment gateway for secure subscription management.</p>
              <div className="project-tags">
                <span className="tag">Next.js</span>
                <span className="tag">Express.js</span>
                <span className="tag">MongoDB</span>
                <span className="tag">Tailwind CSS</span>
                <span className="tag">JWT</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/kbpkavisika/ZFit" target="_blank" rel="noopener noreferrer" className="project-link"><FaGithub /> View on GitHub <BsArrowRight /></a>
              </div>
            </motion.div>
            <motion.div className="project-card" variants={fadeInUp} whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}>
              <h3>Ceylon Smart Citizen</h3>
              <p className="project-subtitle">Tech-Triathlon by Rootcode</p>
              <p>Digital governance solution serving 20+ citizen services including document requests, multilingual support, and queue reservations. Developed JWT-authenticated microservices with NIC verification and real-time queue management to reduce wait times and improve government service accessibility.</p>
              <div className="project-tags">
                <span className="tag">Node.js</span>
                <span className="tag">PostgreSQL</span>
                <span className="tag">Redis</span>
                <span className="tag">Docker</span>
                <span className="tag">Next.js</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/CeylonSmartCitizen" target="_blank" rel="noopener noreferrer" className="project-link"><FaGithub /> View on GitHub <BsArrowRight /></a>
              </div>
            </motion.div>
            <motion.div className="project-card" variants={fadeInUp} whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}>
              <h3>PlayNova – Online Game Store</h3>
              <p className="project-subtitle">Mar 2025 - Apr 2025</p>
              <p>Java-based e-commerce platform for gaming products. Implemented announcement management with full CRUD operations using MVC architecture. Applied Singleton design pattern for secure JDBC connections, ensuring scalable and maintainable code structure.</p>
              <div className="project-tags">
                <span className="tag">Java</span>
                <span className="tag">JSP</span>
                <span className="tag">Servlets</span>
                <span className="tag">MySQL</span>
                <span className="tag">Apache Tomcat</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/gaindunuhansith/playnova" target="_blank" rel="noopener noreferrer" className="project-link"><FaGithub /> View on GitHub <BsArrowRight /></a>
              </div>
            </motion.div>
            <motion.div className="project-card featured" variants={fadeInUp} whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}>
              <div className="project-badge">🚀 In Development</div>
              <h3>ZerraLabs – AI Product Photography</h3>
              <p className="project-subtitle">Ongoing SaaS Project</p>
              <p>AI-powered SaaS platform transforming user-uploaded product photos into professional marketing images. Building proprietary AI models for automated background enhancement, lighting correction, and styling. Contributing to product strategy and early user acquisition.</p>
              <div className="project-tags">
                <span className="tag">AI/ML</span>
                <span className="tag">SaaS</span>
                <span className="tag">Computer Vision</span>
                <span className="tag">Deep Learning</span>
              </div>
              <div className="project-links">
                <a href="https://zerralabs.com" target="_blank" rel="noopener noreferrer" className="project-link">Visit Website <BsArrowRight /></a>
              </div>
            </motion.div>
            <motion.div className="project-card" variants={fadeInUp} whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}>
              <h3>Datathon – Public Service Optimization</h3>
              <p className="project-subtitle">Machine Learning Project</p>
              <p>Built predictive ML models for public service resource optimization. Developed service time prediction model achieving R² ~0.85 using HistGradientBoostingRegressor and workforce forecasting system with RandomForestRegressor (variance ~1-2 staff).</p>
              <div className="project-tags">
                <span className="tag">Python</span>
                <span className="tag">scikit-learn</span>
                <span className="tag">pandas</span>
                <span className="tag">NumPy</span>
              </div>
              <div className="project-links">
                <a href="https://github.com/CeylonSmartCitizen" target="_blank" rel="noopener noreferrer" className="project-link"><FaGithub /> View on GitHub <BsArrowRight /></a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        id="contact" 
        className="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <div className="container">
          <motion.h2 className="section-title" variants={fadeInUp}>
            <HiOutlineMail className="section-icon" /> Get In Touch
          </motion.h2>
          <motion.div className="contact-content" variants={fadeInUp}>
            <p>I'm always open to discussing new projects, creative ideas, or opportunities.</p>
            <div className="contact-links">
              <a href="mailto:kbpkavisika@gmail.com" className="contact-link">
                <FaEnvelope /> Email
              </a>
              <a href="https://github.com/kbpkavisika" target="_blank" rel="noopener noreferrer" className="contact-link">
                <FaGithub /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/pavith-kavisika" target="_blank" rel="noopener noreferrer" className="contact-link">
                <FaLinkedin /> LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 K B P Kavisika. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
