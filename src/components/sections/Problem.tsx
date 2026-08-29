"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./Problem.module.css";

const sources = [
  { icon: "📱", label: "Mobile", x: "10%", y: "20%" },
  { icon: "✉️", label: "Email", x: "75%", y: "12%" },
  { icon: "☁️", label: "Cloud", x: "85%", y: "50%" },
  { icon: "📂", label: "Files", x: "70%", y: "80%" },
  { icon: "💻", label: "Computer", x: "15%", y: "78%" },
  { icon: "📄", label: "Documents", x: "5%", y: "50%" },
  { icon: "💬", label: "Messages", x: "45%", y: "5%" },
];

const categories = [
  "Identity", "Education", "Health", "Insurance",
  "Finance", "Property", "Taxation", "Legal",
  "Employment", "Travel", "Family",
];

export default function Problem() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className={styles.section} id="problem">
      <div className={`container ${styles.inner}`}>
        {/* Left: text */}
        <motion.div
          className={styles.left}
          initial={{ opacity: 0, x: -32 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          ref={ref}
        >
          <p className="section-label">
            <span className="section-label-dot" />
            The Problem
          </p>
          <h2 className={styles.headline}>
            Your important<br />information is<br />
            <span className="gradient-text-light">everywhere.</span>
          </h2>
          <p className={styles.body}>
            Throughout life, we accumulate important documents and information across physical files, 
            mobile phones, computers, emails, WhatsApp, cloud drives and different applications.
          </p>
          <p className={styles.body}>
            <em>The information exists.</em>
          </p>
          <p className={styles.body}>
            The difficulty is finding, understanding and using the right information when it is actually needed.
          </p>

          {/* Category tags */}
          <div className={styles.cats}>
            {categories.map((c) => (
              <span key={c} className={styles.cat}>{c}</span>
            ))}
          </div>
        </motion.div>

        {/* Right: scattered icons visual */}
        <div className={styles.right}>
          <div className={styles.diagram}>
            {/* Chaos sources */}
            {sources.map(({ icon, label, x, y }, i) => (
              <motion.div
                key={label}
                className={styles.sourceIcon}
                style={{ left: x, top: y }}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
              >
                <span className={styles.sourceEmoji}>{icon}</span>
                <span className={styles.sourceLabel}>{label}</span>
              </motion.div>
            ))}

            {/* Central chaos glow */}
            <motion.div
              className={styles.centralGlow}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <div className={styles.glowRing} />
              <div className={styles.glowText}>
                <span>?</span>
                <p>Where is<br />my info?</p>
              </div>
            </motion.div>

            {/* Arrow pointing down to solution */}
            <motion.div
              className={styles.downArrow}
              initial={{ opacity: 0, y: -12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <span>↓</span>
              <p>AI Mentor</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
