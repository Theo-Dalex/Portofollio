// Sections — Hero, Projects, CV
function HeroSection({ t, accentHue, particleSpeed }) {
  const [roleIdx, setRoleIdx] = React.useState(0);
  const [typed, setTyped] = React.useState('');

  React.useEffect(() => {
    const role = t.role_titles[roleIdx];
    let i = 0;
    let dir = 1;
    let timeout;

    function step() {
      if (dir === 1) {
        i++;
        setTyped(role.slice(0, i));
        if (i >= role.length) {
          timeout = setTimeout(() => { dir = -1; step(); }, 1800);
          return;
        }
        timeout = setTimeout(step, 60);
      } else {
        i--;
        setTyped(role.slice(0, i));
        if (i <= 0) {
          setRoleIdx((p) => (p + 1) % t.role_titles.length);
          return;
        }
        timeout = setTimeout(step, 30);
      }
    }
    step();
    return () => clearTimeout(timeout);
  }, [roleIdx, t]);

  return (
    <section id="home" className="hero" data-screen-label="01 Home">
      <div>
        <div className="hero-meta">
          <span><i className="dot-mini"></i>{t.location}</span>
          <span>·</span>
          <span>{t.status}</span>
          <span>·</span>
          <span>{t.timezone}</span>
        </div>
        <h1 className="hero-name">
          {t.hero.name_first}<br />
          <span className="accent-text">{t.hero.name_last}.</span>
        </h1>
        <div className="hero-role">
          &gt; {typed}<span className="cursor"></span>
        </div>
        <p className="hero-bio">{t.hero.bio}</p>
        <div className="hero-actions">
          <a href="#work" className="btn btn-primary">
            {t.hero.cta_primary} <span>→</span>
          </a>
          <a href="#about" className="btn btn-ghost">
            {t.hero.cta_secondary} <span>↓</span>
          </a>
        </div>
      </div>
      <HeroPortrait accentHue={accentHue} particleSpeed={particleSpeed} />
    </section>
  );
}

function ProjectCard({ project, idx, accentHue }) {
  const bars = React.useMemo(() => {
    const seed = idx * 37 + 11;
    return Array.from({ length: 24 }, (_, i) => {
      const v = ((Math.sin(seed + i * 1.7) + 1) / 2) * 0.7 + 0.2;
      return v;
    });
  }, [idx]);

  const span = idx < 2 ? 'span-6' : 'span-4';

  return (
    <a className={`project-card ${span}`} href="#" onClick={(e) => e.preventDefault()}>
      <div className="project-tag">
        <span>{project.tag}</span>
        <span className="id">/{String(idx + 1).padStart(2, '0')}</span>
      </div>
      <h3 className="project-title">{project.title}</h3>
      <div className="project-viz">
        {bars.map((v, i) => (
          <div key={i} className="bar" style={{ height: `${v * 100}%`, opacity: 0.3 + v * 0.5 }} />
        ))}
      </div>
      <p className="project-desc">{project.desc}</p>
      <div className="project-stack">
        {project.stack.map((s) => <span key={s}>{s}</span>)}
      </div>
      <div className="project-arrow">→</div>
    </a>
  );
}

function ProjectsSection({ t, accentHue }) {
  return (
    <section id="work" data-screen-label="02 Work">
      <div className="section-label">{t.projects.label}</div>
      <h2 className="section-title">{t.projects.title}</h2>
      <p className="section-sub">{t.projects.sub}</p>
      <div className="projects-grid">
        {t.projects.items.map((p, i) => (
          <ProjectCard key={i} project={p} idx={i} accentHue={accentHue} />
        ))}
      </div>
    </section>
  );
}

function CVSection({ t, accentHue }) {
  const [animatedSkills, setAnimatedSkills] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setAnimatedSkills(true); });
      },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} data-screen-label="03 About">
      <div className="section-label">{t.cv.label}</div>
      <h2 className="section-title">{t.cv.title}</h2>
      <p className="section-sub">{t.cv.sub}</p>

      <div className="cv-grid">
        <div>
          <div className="cv-block">
            <div className="cv-block-title">
              <span>// {t.cv.skills_title}</span>
              <span className="count">{t.cv.skills_count}</span>
            </div>
            <div className="skills-list">
              {t.cv.skills.map((s) => (
                <div key={s.name} className="skill-row">
                  <span className="skill-name">{s.name}</span>
                  <div className="skill-bar">
                    <div
                      className="skill-fill"
                      style={{ width: animatedSkills ? `${s.pct}%` : '0%' }}
                    />
                  </div>
                  <span className="skill-pct">{s.pct}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="cv-block">
            <div className="cv-block-title">
              <span>// {t.cv.contact_title}</span>
              <span className="count">{t.cv.contact_count}</span>
            </div>
            <div className="contact-grid">
              <a href="mailto:theo.dalex@example.com" className="contact-link">
                <span className="label">EMAIL</span>
                <span>→</span>
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="contact-link">
                <span className="label">GITHUB</span>
                <span>→</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="contact-link">
                <span className="label">LINKEDIN</span>
                <span>→</span>
              </a>
              <a href="https://scholar.google.com" target="_blank" rel="noreferrer" className="contact-link">
                <span className="label">SCHOLAR</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>

        <div>
          <div className="cv-block">
            <div className="cv-block-title">
              <span>// {t.cv.timeline_title}</span>
              <span className="count">{t.cv.timeline_count}</span>
            </div>
            <div className="timeline">
              {t.cv.timeline.map((tl, i) => (
                <div key={i} className="tl-item">
                  <div className="tl-date">{tl.date}</div>
                  <div className="tl-role">{tl.role}</div>
                  <div className="tl-org">{tl.org}</div>
                  <div className="tl-desc">{tl.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="stats-strip">
        {t.cv.stats.map((s, i) => (
          <div key={i} className="stat">
            <div className="stat-label">{s.label}</div>
            <div className="stat-value">
              <span className="accent-text">{s.value}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

window.HeroSection = HeroSection;
window.ProjectsSection = ProjectsSection;
window.CVSection = CVSection;
