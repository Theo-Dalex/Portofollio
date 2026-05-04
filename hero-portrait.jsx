// Hero portrait component — animated stylised portrait
function HeroPortrait({ accentHue, particleSpeed }) {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf;
    const dpr = window.devicePixelRatio || 1;

    function resize() {
      const r = canvas.getBoundingClientRect();
      canvas.width = r.width * dpr;
      canvas.height = r.height * dpr;
      ctx.scale(dpr, dpr);
    }
    resize();
    window.addEventListener('resize', resize);

    const W = () => canvas.width / dpr;
    const H = () => canvas.height / dpr;

    const N = 60;
    const particles = Array.from({ length: N }, () => ({
      x: Math.random() * W(),
      y: Math.random() * H(),
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.5 + 0.5,
      char: Math.random() > 0.7 ? (Math.random() > 0.5 ? '0' : '1') : null,
    }));

    function draw() {
      ctx.clearRect(0, 0, W(), H());
      const speed = particleSpeed || 1;

      ctx.strokeStyle = `oklch(0.7 0.15 ${accentHue} / 0.1)`;
      ctx.lineWidth = 0.5;
      for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.hypot(dx, dy);
          if (d < 60) {
            ctx.globalAlpha = 1 - d / 60;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;

      particles.forEach((p) => {
        p.x += p.vx * speed;
        p.y += p.vy * speed;
        if (p.x < 0 || p.x > W()) p.vx *= -1;
        if (p.y < 0 || p.y > H()) p.vy *= -1;

        if (p.char) {
          ctx.fillStyle = `oklch(0.78 0.18 ${accentHue} / 0.7)`;
          ctx.font = '10px JetBrains Mono, monospace';
          ctx.fillText(p.char, p.x, p.y);
        } else {
          ctx.fillStyle = `oklch(0.78 0.18 ${accentHue} / 0.6)`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      raf = requestAnimationFrame(draw);
    }
    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, [accentHue, particleSpeed]);

  return (
    <div className="portrait-wrap">
      <div className="portrait">
        <svg className="portrait-svg" viewBox="0 0 400 500" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="var(--bg-card)" />
              <stop offset="100%" stopColor="var(--bg-elev)" />
            </linearGradient>
            <linearGradient id="faceGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={`oklch(0.78 0.12 ${accentHue})`} stopOpacity="0.0" />
              <stop offset="50%" stopColor={`oklch(0.78 0.12 ${accentHue})`} stopOpacity="0.25" />
              <stop offset="100%" stopColor={`oklch(0.78 0.12 ${accentHue})`} stopOpacity="0.0" />
            </linearGradient>
            <pattern id="dotPattern" width="6" height="6" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="0.6" fill={`oklch(0.78 0.12 ${accentHue} / 0.3)`} />
            </pattern>
          </defs>

          <rect width="400" height="500" fill="url(#bgGrad)" />
          <rect width="400" height="500" fill="url(#dotPattern)" />

          <g transform="translate(200, 240)">
            <path
              d="M -180 260 Q -120 180 -90 160 L 90 160 Q 120 180 180 260 L 180 280 L -180 280 Z"
              fill="url(#faceGrad)"
              stroke={`oklch(0.78 0.18 ${accentHue} / 0.6)`}
              strokeWidth="1"
            />
            <circle
              cx="0"
              cy="20"
              r="95"
              fill="url(#faceGrad)"
              stroke={`oklch(0.78 0.18 ${accentHue})`}
              strokeWidth="1.5"
            />
            <ellipse cx="0" cy="20" rx="95" ry="20" fill="none" stroke={`oklch(0.78 0.18 ${accentHue} / 0.4)`} strokeWidth="0.5" />
            <ellipse cx="0" cy="20" rx="95" ry="40" fill="none" stroke={`oklch(0.78 0.18 ${accentHue} / 0.3)`} strokeWidth="0.5" />
            <ellipse cx="0" cy="20" rx="95" ry="60" fill="none" stroke={`oklch(0.78 0.18 ${accentHue} / 0.25)`} strokeWidth="0.5" />
            <ellipse cx="0" cy="20" rx="95" ry="80" fill="none" stroke={`oklch(0.78 0.18 ${accentHue} / 0.2)`} strokeWidth="0.5" />
            <line x1="-95" y1="20" x2="95" y2="20" stroke={`oklch(0.78 0.18 ${accentHue} / 0.4)`} strokeWidth="0.5" />
            <line x1="0" y1="-75" x2="0" y2="115" stroke={`oklch(0.78 0.18 ${accentHue} / 0.3)`} strokeWidth="0.5" />

            <line x1="-35" y1="0" x2="-15" y2="0" stroke={`oklch(0.95 0.05 ${accentHue})`} strokeWidth="2" strokeLinecap="round" />
            <line x1="15" y1="0" x2="35" y2="0" stroke={`oklch(0.95 0.05 ${accentHue})`} strokeWidth="2" strokeLinecap="round" />

            <line x1="0" y1="20" x2="0" y2="38" stroke={`oklch(0.78 0.18 ${accentHue} / 0.5)`} strokeWidth="1" />

            <line x1="-18" y1="55" x2="18" y2="55" stroke={`oklch(0.78 0.18 ${accentHue} / 0.7)`} strokeWidth="1.5" strokeLinecap="round" />

            {[...Array(8)].map((_, i) => {
              const a = (i / 8) * Math.PI * 2;
              const x = Math.cos(a) * 120;
              const y = Math.sin(a) * 120 + 20;
              return <circle key={i} cx={x} cy={y} r="1.5" fill={`oklch(0.85 0.18 ${accentHue})`} />;
            })}
          </g>

          <text x="20" y="30" fill={`oklch(0.78 0.18 ${accentHue} / 0.6)`} fontSize="9" fontFamily="JetBrains Mono, monospace">
            ID::0x4A2F
          </text>
          <text x="20" y="480" fill={`oklch(0.78 0.18 ${accentHue} / 0.6)`} fontSize="9" fontFamily="JetBrains Mono, monospace">
            REC::480x500
          </text>
          <text x="380" y="480" fill={`oklch(0.78 0.18 ${accentHue} / 0.6)`} fontSize="9" fontFamily="JetBrains Mono, monospace" textAnchor="end">
            v2026.05
          </text>
        </svg>

        <canvas ref={canvasRef} className="particles-canvas" />
        <div className="scan-line" />
        <div className="portrait-hud tl">SUBJECT::TD-01</div>
        <div className="portrait-hud br">● REC</div>
      </div>
      <div className="portrait-corners">
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

window.HeroPortrait = HeroPortrait;
