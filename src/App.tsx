import { useEffect, useMemo, useState } from "react";
import "./styles.css";
import { projects } from "./data/projects";

/* =========================
   ICONS
========================= */

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.17.55-.38
      0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13
      -.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87
      2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95
      0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12
      0 0 .67-.21 2.2.82A7.5 7.5 0 018 4.84c.68 0 1.36.09
      2 .26 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08
      2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65
      3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01
      2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1
      4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.6v2.2h.1
      c.5-.9 1.8-1.9 3.7-1.9 4 0 4.7 2.6 4.7 6v9.7h-4v-8.6
      c0-2-.04-4.6-2.8-4.6-2.8 0-3.2 2.2-3.2 4.5V24h-4V8z" />
    </svg>
  );
}

/* =========================
   UI COMPONENTS
========================= */

function Badge({ children }: { children: string }) {
  return <span className="badge">{children}</span>;
}

function ProjectCard(p: (typeof projects)[number]) {
  const { title, subtitle, tech, highlights, demoUrl, repoUrl, imageUrl } = p;

  const primaryLink = demoUrl || repoUrl || "";
  const clickable = Boolean(primaryLink);

  return (
    <article className="card reveal">
      {imageUrl && (
        <a
          className={`thumb ${!clickable ? "thumbDisabled" : ""}`}
          href={clickable ? primaryLink : undefined}
          target="_blank"
          rel="noreferrer"
        >
          <img className="thumbImg" src={imageUrl} alt={`${title} preview`} />
        </a>
      )}

      <div className="cardTop">
        <h3 className="cardTitle">{title}</h3>
        <p className="cardSub">{subtitle}</p>
      </div>

      <div className="badges">
        {tech.map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>

      <ul className="list">
        {highlights.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>

      <div className="actions">
        <a className="btn" href="#contact">Contact</a>

        <a className="btnPrimary" href={demoUrl} target="_blank" rel="noreferrer">
          Live Demo
        </a>

        <a className="btn" href={repoUrl} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </article>
  );
}

/* =========================
   APP
========================= */

export default function App() {
  const [dark, setDark] = useState(false);
  const year = useMemo(() => new Date().getFullYear(), []);

  useEffect(() => {
    document.body.classList.toggle("theme-dark", dark);
  }, [dark]);

  return (
    <div className="page">
      <header className="nav">
        <a
          href="#"
          className="logoLink"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <div className="logo">Mohamed Tfagha</div>
        </a>

        <div className="navRight">
          <nav className="navLinks">
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="navIcons">
            <a className="iconLink" href="https://github.com/Mohamedt19" target="_blank">
              <GitHubIcon />
            </a>

            <a className="iconLink" href="https://www.linkedin.com/in/mohamed-tfagha-b4a460147/" target="_blank">
              <LinkedInIcon />
            </a>
          </div>

          <button className="toggle" onClick={() => setDark(v => !v)}>
            {dark ? "☀️" : "🌙"}
          </button>
        </div>
      </header>

      <main className="container">
        {/* HERO */}
        <section className="hero">
          <h1 className="heroTitle">
            Frontend Developer <span className="muted">(React + TypeScript)</span>
          </h1>

          <p className="heroText">
            I build clean, responsive web UIs with strong fundamentals and modern React patterns.
          </p>

          <div className="heroBtns">
            <a className="btnPrimary" href="#projects">
              View Projects
            </a>

            <div className="ctaGroup">
              <a
                className="btn btnSoft"
                href="/Mohamed-Tfagha-Frontend-Engineer.pdf"
                target="_blank"
                rel="noreferrer"
              >
                View Resume
              </a>

              <a
                className="btn btnPrimary btnDownload"
                href="/Mohamed-Tfagha-Frontend-Engineer.pdf"
                download
              >
                Download PDF
              </a>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section">
          <div className="sectionHead">
            <h2 className="sectionTitle">Projects</h2>
            <p className="sectionSub">
              3 real apps — clean UI, data fetching, state, and persistence.
            </p>
          </div>

          <div className="grid">
            {projects.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section">
          <div className="sectionHead">
            <h2 className="sectionTitle">Skills</h2>
            
          </div>

          <div className="skills">
            <span className="skill">React</span>
            <span className="skill">TypeScript</span>
            <span className="skill">Hooks</span>
            <span className="skill">State Management</span>
            <span className="skill">REST APIs</span>
            <span className="skill">Responsive UI</span>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section">
          <div className="sectionHead">
            <h2 className="sectionTitle">Contact</h2>
           
          </div>

          <div className="contactCard">
            <div>
              <div className="contactLabel">Email</div>
              <div className="contactValue">tfagham@gmail.com</div>
            </div>

            <div>
              <div className="contactLabel">Location</div>
              <div className="contactValue">New York, NY</div>
            </div>

            <div className="contactBtns">
              <a className="btnPrimary" href="mailto:tfagham@gmail.com">Email me</a>
              <a className="btn" href="https://www.linkedin.com/in/mohamed-tfagha-b4a460147/" target="_blank">LinkedIn</a>
              <a className="btn" href="https://github.com/Mohamedt19" target="_blank">GitHub</a>
            </div>
          </div>
        </section>

        <footer className="footer">
          <span className="mutedSmall">
            © {year} • Built with React + TypeScript
          </span>
        </footer>
      </main>
    </div>
  );
}