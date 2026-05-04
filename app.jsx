// Main App — orchestrates theme, language, tweaks, scroll progress
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accentHue": 180,
  "particleSpeed": 1,
  "showGrid": true
}/*EDITMODE-END*/;

function App() {
  const [theme, setTheme] = React.useState(() => localStorage.getItem('theme') || 'dark');
  const [lang, setLang] = React.useState(() => localStorage.getItem('lang') || 'fr');
  const [active, setActive] = React.useState('home');
  const [progress, setProgress] = React.useState(0);
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  React.useEffect(() => { localStorage.setItem('lang', lang); }, [lang]);

  React.useEffect(() => {
    const root = document.documentElement;
    const lightness = theme === 'light' ? 0.55 : 0.78;
    root.style.setProperty('--accent', `oklch(${lightness} 0.18 ${tweaks.accentHue})`);
    if (!tweaks.showGrid) {
      root.style.setProperty('--grid-line', 'transparent');
    } else {
      root.style.removeProperty('--grid-line');
    }
  }, [tweaks.accentHue, tweaks.showGrid, theme]);

  React.useEffect(() => {
    function onScroll() {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);

      const sections = ['home', 'work', 'about'];
      let current = 'home';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) {
          current = id;
        }
      }
      setActive(current);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const t = window.I18N[lang];

  return (
    <>
      <div className="scroll-progress" style={{ width: `${progress}%` }} />

      <nav className="nav">
        <div className="nav-logo">
          <span className="dot"></span>
          theo_dalex<span style={{ color: 'var(--fg-mute)' }}>.ds</span>
        </div>
        <div className="nav-links">
          <a href="#home" className={`nav-link ${active === 'home' ? 'active' : ''}`}>
            <span className="num">01</span> {t.nav.home}
          </a>
          <a href="#work" className={`nav-link ${active === 'work' ? 'active' : ''}`}>
            <span className="num">02</span> {t.nav.work}
          </a>
          <a href="#about" className={`nav-link ${active === 'about' ? 'active' : ''}`}>
            <span className="num">03</span> {t.nav.about}
          </a>
        </div>
        <div className="nav-controls">
          <button
            className="nav-btn"
            onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
            title="Switch language"
          >
            <span className={lang === 'fr' ? 'accent' : ''}>FR</span>
            <span style={{ color: 'var(--fg-mute)' }}>/</span>
            <span className={lang === 'en' ? 'accent' : ''}>EN</span>
          </button>
          <button
            className="nav-btn"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            title="Toggle theme"
          >
            {theme === 'dark' ? '☾' : '☀'} {theme === 'dark' ? 'dark' : 'light'}
          </button>
        </div>
      </nav>

      <main>
        <HeroSection t={t} accentHue={tweaks.accentHue} particleSpeed={tweaks.particleSpeed} />
        <ProjectsSection t={t} accentHue={tweaks.accentHue} />
        <CVSection t={t} accentHue={tweaks.accentHue} />
      </main>

      <footer>
        <span>{t.footer.left}</span>
        <span>{t.footer.right}</span>
      </footer>

      <TweaksPanel title="Tweaks">
        <TweakSection title="Accent">
          <TweakSlider
            label="Hue"
            value={tweaks.accentHue}
            min={0}
            max={360}
            step={1}
            onChange={(v) => setTweak('accentHue', v)}
            unit="°"
          />
          <div style={{ display: 'flex', gap: 6, marginTop: 8 }}>
            {[180, 140, 200, 280, 25, 340].map((h) => (
              <button
                key={h}
                onClick={() => setTweak('accentHue', h)}
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 4,
                  border: tweaks.accentHue === h ? '2px solid var(--fg)' : '1px solid var(--border)',
                  background: `oklch(0.78 0.18 ${h})`,
                  cursor: 'pointer',
                }}
                title={`hue ${h}`}
              />
            ))}
          </div>
        </TweakSection>
        <TweakSection title="Animation">
          <TweakSlider
            label="Particle speed"
            value={tweaks.particleSpeed}
            min={0}
            max={3}
            step={0.1}
            onChange={(v) => setTweak('particleSpeed', v)}
          />
          <TweakToggle
            label="Background grid"
            value={tweaks.showGrid}
            onChange={(v) => setTweak('showGrid', v)}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
