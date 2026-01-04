import { useEffect } from 'react'
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

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <h2 className="logo">K B P Kavisika</h2>
          <ul className="nav-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#achievements">Achievements</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-title"><span className="highlight">K B P Kavisika</span></h1>
          <p className="hero-description">
            Building innovative solutions that bridge technology and real-world impact.
            Specialized in scalable web applications and disaster management systems.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">Explore Projects</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p className="intro-text">
                I'm a passionate Full Stack Developer specializing in the <strong>MERN stack</strong> with a proven 
                track record of building scalable, impactful web applications. With expertise spanning from disaster 
                management platforms to AI-powered SaaS solutions, I thrive on solving complex challenges with 
                innovative technology.
              </p>
              <p>
                My development approach combines robust backend architecture with intuitive frontend design, 
                ensuring every solution is both technically sound and user-centric. I have hands-on experience 
                with modern technologies including React, Node.js, TypeScript, Docker, and various database systems.
              </p>
              <p>
                As a <strong>hackathon winner</strong> (1st Runners Up at SLIIT Codefest 2025) and finalist in multiple 
                prestigious competitions, I bring a competitive edge and problem-solving mindset to every project. 
                I'm currently contributing to ZerraLabs, developing AI-driven product photography solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <h3>Programming Languages</h3>
              <ul>
                <li>Java, Python, C, C++</li>
                <li>JavaScript, TypeScript, R</li>
                <li>PHP, SQL, Bash</li>
                <li>React.js, Node.js, Express.js</li>
              </ul>
            </div>
            <div className="skill-card">
              <h3>Databases</h3>
              <ul>
                <li>MySQL</li>
                <li>MongoDB</li>
                <li>PostgreSQL</li>
                <li>Redis</li>
              </ul>
            </div>
            <div className="skill-card">
              <h3>Tools & Platforms</h3>
              <ul>
                <li>Git & GitHub</li>
                <li>Docker, Postman</li>
                <li>Apache Tomcat, XAMPP</li>
                <li>Figma, Android Studio</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            <div className="project-card featured">
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
                <a href="https://github.com/disaster-response-sl/national-disaster-platform" target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub →</a>
              </div>
            </div>
            <div className="project-card">
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
                <a href="https://github.com/kbpkavisika/ZFit" target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub →</a>
              </div>
            </div>
            <div className="project-card">
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
                <a href="https://github.com/CeylonSmartCitizen" target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub →</a>
              </div>
            </div>
            <div className="project-card">
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
                <a href="https://github.com/gaindunuhansith/playnova" target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub →</a>
              </div>
            </div>
            <div className="project-card featured">
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
                <a href="https://zerralabs.com" target="_blank" rel="noopener noreferrer" className="project-link">Visit Website →</a>
              </div>
            </div>
            <div className="project-card">
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
                <a href="https://github.com/CeylonSmartCitizen" target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="achievements">
        <div className="container">
          <h2 className="section-title">Achievements</h2>
          <div className="achievements-content">
            <div className="achievement-item">
              <h3>🥈 1st Runners Up</h3>
              <p>SLIIT Codefest 2025 Revivenation Competition</p>
            </div>
            <div className="achievement-item">
              <h3>🏆 3rd Round</h3>
              <p>Tech Triathlon organized by Rootcode</p>
            </div>
            <div className="achievement-item">
              <h3>🎯 Final Round</h3>
              <p>HackX 10.0 - University of Kelaniya & Ministry of Science and Technology</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <p>I'm always open to discussing new projects, creative ideas, or opportunities.</p>
            <div className="contact-links">
              <a href="mailto:your.email@example.com" className="contact-link">Email</a>
              <a href="https://github.com/kbpkavisika" target="_blank" rel="noopener noreferrer" className="contact-link">GitHub</a>
              <a href="https://www.linkedin.com/in/pavith-kavisika" target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn</a>
            </div>
          </div>
        </div>
      </section>

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
