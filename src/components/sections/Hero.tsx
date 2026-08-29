"use client";
import { useEffect, useRef } from "react";
import styles from "./Hero.module.css";

const pillars = ["UPLOAD", "ORGANISE", "PRESERVE", "MANAGE", "SHARE"];

const categories = [
  { label: "Identity", angle: 0, r: 160 },
  { label: "Family", angle: 45, r: 180 },
  { label: "Education", angle: 90, r: 160 },
  { label: "Health", angle: 135, r: 175 },
  { label: "Insurance", angle: 180, r: 160 },
  { label: "Finance", angle: 225, r: 175 },
  { label: "Property", angle: 270, r: 160 },
  { label: "Legal", angle: 315, r: 175 },
];

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let t = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    const particles: { x: number; y: number; tx: number; ty: number; alpha: number; speed: number; size: number }[] = [];

    const spawnParticle = (cx: number, cy: number) => {
      const angle = Math.random() * Math.PI * 2;
      const r = 140 + Math.random() * 60;
      const px = cx + Math.cos(angle) * r;
      const py = cy + Math.sin(angle) * r;
      particles.push({
        x: px, y: py, tx: cx, ty: cy,
        alpha: 0.6 + Math.random() * 0.4,
        speed: 0.005 + Math.random() * 0.01,
        size: 1 + Math.random() * 2,
      });
    };

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);
      const cx = w / 2, cy = h / 2;

      // Spawn particles
      if (Math.random() < 0.3) spawnParticle(cx, cy);

      // Ambient glow
      const grd = ctx.createRadialGradient(cx, cy, 0, cx, cy, 220);
      grd.addColorStop(0, "rgba(79,70,229,0.12)");
      grd.addColorStop(0.5, "rgba(124,58,237,0.06)");
      grd.addColorStop(1, "transparent");
      ctx.fillStyle = grd;
      ctx.beginPath();
      ctx.arc(cx, cy, 220, 0, Math.PI * 2);
      ctx.fill();

      // Orbit rings
      [120, 170, 210].forEach((r, i) => {
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(79,70,229,${0.06 - i * 0.015})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // Particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += (p.tx - p.x) * p.speed;
        p.y += (p.ty - p.y) * p.speed;
        const dist = Math.hypot(p.x - p.tx, p.y - p.ty);
        if (dist < 8) { particles.splice(i, 1); continue; }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99,102,241,${p.alpha * (dist / 80)})`;
        ctx.fill();

        // Trail line
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        const nx = p.x + (p.tx - p.x) * 0.15;
        const ny = p.y + (p.ty - p.y) * 0.15;
        ctx.lineTo(nx, ny);
        ctx.strokeStyle = `rgba(99,102,241,${p.alpha * 0.2 * (dist / 80)})`;
        ctx.lineWidth = 0.8;
        ctx.stroke();
      }

      // Category dots on orbit
      categories.forEach(({ angle: baseAngle, r }) => {
        const a = ((baseAngle + t * 3) * Math.PI) / 180;
        const x = cx + Math.cos(a) * r;
        const y = cy + Math.sin(a) * r;

        const dotGrd = ctx.createRadialGradient(x, y, 0, x, y, 6);
        dotGrd.addColorStop(0, "rgba(139,92,246,0.9)");
        dotGrd.addColorStop(1, "rgba(79,70,229,0.1)");
        ctx.beginPath();
        ctx.arc(x, y, 4.5, 0, Math.PI * 2);
        ctx.fillStyle = dotGrd;
        ctx.fill();

        // Connecting line to centre
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(cx, cy);
        ctx.strokeStyle = `rgba(99,102,241,0.06)`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      });

      // Centre symbol
      const cGrd = ctx.createRadialGradient(cx, cy, 0, cx, cy, 50);
      cGrd.addColorStop(0, "rgba(79,70,229,0.25)");
      cGrd.addColorStop(1, "transparent");
      ctx.beginPath();
      ctx.arc(cx, cy, 50, 0, Math.PI * 2);
      ctx.fillStyle = cGrd;
      ctx.fill();

      t += 0.08;
      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className={styles.hero} id="hero">
      <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />

      <div className={`container ${styles.content}`}>
        <div className={styles.left}>
          <div className={styles.badge}>
            <span className="section-label-dot" />
            DPIIT Recognised Startup · Government of India
          </div>

          <h1 className={styles.headline}>
            Your Life.<br />
            Your Information.<br />
            <span className="gradient-text">Intelligently Managed.</span>
          </h1>

          <p className={styles.subtext}>
            AI Mentor Global is being developed as an AI-powered digital information management platform
            designed to help <strong>Individuals, Families</strong> and <strong>Corporates</strong> organise,
            preserve, intelligently manage and securely share their important information.
          </p>

          {/* Pillars ticker */}
          <div className={styles.pillarsRow} aria-label="Five pillars of AI Mentor Global">
            {pillars.map((p, i) => (
              <span key={p} className={styles.pillarGroup}>
                <span className={styles.pillar}>{p}</span>
                {i < pillars.length - 1 && <span className={styles.arrow}>→</span>}
              </span>
            ))}
          </div>

          <div className={styles.ctas}>
            <a href="#product" className="btn btn-outline btn-lg">
              Explore AI Mentor
            </a>
            <a href="#early-access" className="btn btn-primary btn-lg">
              Join Early Access
            </a>
          </div>
        </div>

        {/* Right: canvas placeholder visual */}
        <div className={styles.right} aria-hidden="true">
          <div className={styles.canvasWrap}>
            <canvas ref={canvasRef} className={styles.canvasMini} />
            {/* Category label chips */}
            {categories.slice(0, 6).map(({ label }, i) => (
              <div
                key={label}
                className={styles.chip}
                style={{
                  top: `${15 + i * 13}%`,
                  right: i % 2 === 0 ? "-8%" : "auto",
                  left: i % 2 !== 0 ? "-8%" : "auto",
                  animationDelay: `${i * 0.2}s`,
                }}
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className={styles.scrollCue} aria-hidden="true">
        <div className={styles.scrollLine} />
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}
