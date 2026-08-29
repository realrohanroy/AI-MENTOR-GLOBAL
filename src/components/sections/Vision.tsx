"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./Vision.module.css";

export default function Vision() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className={styles.section} id="vision" ref={ref}>
      <div className={styles.bg} aria-hidden="true" />
      <div className={`container ${styles.content}`}>
        <motion.div
          className={styles.text}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
        >
          <p className="section-label" style={{ color: "rgba(139,92,246,0.8)" }}>
            <span className="section-label-dot" />
            Our Vision
          </p>
          <h2 className={styles.headline}>
            From Digital Documents<br />
            to <span className="gradient-text-light">Digital Life Intelligence.</span>
          </h2>
          <p className={styles.body}>
            Our long-term vision is to create a trusted AI-powered ecosystem where important information 
            belonging to an Individual, Family or Corporate organisation can be organised, preserved, 
            intelligently managed and made accessible when required.
          </p>
          <p className={styles.tagline}>
            India is our beginning. Our vision is global.
          </p>
        </motion.div>

        {/* Globe visual */}
        <motion.div
          className={styles.globe}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.3, duration: 1, ease: [0.19, 1, 0.22, 1] }}
          aria-hidden="true"
        >
          <div className={styles.globeOuter}>
            <div className={styles.globeInner}>
              <svg viewBox="0 0 200 200" fill="none" className={styles.globeSvg}>
                {/* Globe circles */}
                <circle cx="100" cy="100" r="90" stroke="rgba(79,70,229,0.15)" strokeWidth="1" />
                <circle cx="100" cy="100" r="65" stroke="rgba(79,70,229,0.1)" strokeWidth="1" />
                <circle cx="100" cy="100" r="40" stroke="rgba(79,70,229,0.08)" strokeWidth="1" />

                {/* Latitude lines */}
                <ellipse cx="100" cy="100" rx="90" ry="30" stroke="rgba(79,70,229,0.06)" strokeWidth="0.8" />
                <ellipse cx="100" cy="100" rx="90" ry="60" stroke="rgba(79,70,229,0.05)" strokeWidth="0.8" />

                {/* Meridian */}
                <line x1="100" y1="10" x2="100" y2="190" stroke="rgba(79,70,229,0.06)" strokeWidth="0.8" />
                <line x1="10" y1="100" x2="190" y2="100" stroke="rgba(79,70,229,0.06)" strokeWidth="0.8" />

                {/* India glow dot */}
                <circle cx="128" cy="112" r="10" fill="rgba(79,70,229,0.3)" />
                <circle cx="128" cy="112" r="6" fill="rgba(99,102,241,0.7)">
                  <animate attributeName="r" values="5;8;5" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.7;0.4;0.7" dur="3s" repeatCount="indefinite" />
                </circle>
                <circle cx="128" cy="112" r="3" fill="white" />

                {/* Network lines from India */}
                {[
                  [128, 112, 40, 80],
                  [128, 112, 160, 60],
                  [128, 112, 75, 130],
                  [128, 112, 170, 140],
                  [128, 112, 90, 50],
                ].map(([x1, y1, x2, y2], i) => (
                  <line
                    key={i}
                    x1={x1} y1={y1} x2={x2} y2={y2}
                    stroke="rgba(79,70,229,0.3)"
                    strokeWidth="0.8"
                    strokeDasharray="3 3"
                  />
                ))}

                {/* Other city dots */}
                {[
                  [40, 80], [160, 60], [75, 130], [170, 140], [90, 50],
                ].map(([cx, cy], i) => (
                  <circle key={i} cx={cx} cy={cy} r="2.5" fill="rgba(99,102,241,0.4)" />
                ))}
              </svg>
            </div>
            {/* Orbit ring */}
            <div className={styles.orbitRing} />
          </div>

          <p className={styles.globeLabel}>India is our beginning. Our vision is global.</p>
        </motion.div>
      </div>
    </section>
  );
}
