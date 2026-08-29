"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./FivePillars.module.css";

const pillars = [
  {
    icon: "☁️",
    name: "UPLOAD",
    description: "Bring important documents and information into one digital environment.",
    color: "#2563eb",
  },
  {
    icon: "▣",
    name: "ORGANISE",
    description: "Intelligently structure information according to person, category and context.",
    color: "#4f46e5",
  },
  {
    icon: "🛡️",
    name: "PRESERVE",
    description: "Maintain important records and information for continued future accessibility.",
    color: "#7c3aed",
  },
  {
    icon: "⚙️",
    name: "MANAGE",
    description: "Search, retrieve, understand, summarise and maintain information with progressively intelligent reminders.",
    color: "#6d28d9",
  },
  {
    icon: "🔗",
    name: "SHARE",
    description: "Securely share selected information with authorised persons when required, under the user's control.",
    color: "#4f46e5",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function FivePillars() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className={styles.section} id="pillars">
      {/* Background glow */}
      <div className={styles.bg} aria-hidden="true" />

      <div className="container">
        <div className={styles.header}>
          <p className="section-label" style={{ color: "rgba(139,92,246,0.9)" }}>
            <span className="section-label-dot" />
            The Five Pillars
          </p>
          <h2 className={styles.headline}>
            Five simple actions.<br />
            <span className="gradient-text-light">One intelligent ecosystem.</span>
          </h2>
        </div>

        {/* Cards */}
        <motion.div
          className={styles.cards}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          ref={ref}
        >
          {pillars.map((pillar, i) => (
            <motion.div key={pillar.name} className={styles.card} variants={item}>
              <div className={styles.connector}>
                {i < pillars.length - 1 && (
                  <div className={styles.connectorLine}>
                    <span className={styles.connectorArrow}>→</span>
                  </div>
                )}
              </div>
              <div className={styles.iconWrap} style={{ borderColor: `${pillar.color}30` }}>
                <span className={styles.icon}>{pillar.icon}</span>
                <div className={styles.iconGlow} style={{ background: `radial-gradient(circle, ${pillar.color}25 0%, transparent 70%)` }} />
              </div>
              <div className={styles.step}>{String(i + 1).padStart(2, "0")}</div>
              <h3 className={styles.name}>{pillar.name}</h3>
              <p className={styles.desc}>{pillar.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom pillar flow bar */}
        <motion.div
          className={styles.flowBar}
          initial={{ opacity: 0, scaleX: 0 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
        >
          {pillars.map((p, i) => (
            <span key={p.name} className={styles.flowItem}>
              <span>{p.name}</span>
              {i < pillars.length - 1 && <span className={styles.flowArrow}>→</span>}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
