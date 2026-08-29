"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./RoadmapStatus.module.css";

const milestones = [
  "AI Mentor Private Limited incorporated",
  "DPIIT Startup Recognition obtained",
  "AI Mentor Global brand established",
  "Product architecture developed",
  "Initial Master Folders defined",
  "Working prototype under development/testing",
  "AI document interaction being tested",
  "Security/re-authentication workflows being developed",
  "Website development underway",
  "Seed-funding process initiated",
];

const stages = [
  { label: "Prototype", current: true },
  { label: "MVP", current: false },
  { label: "Controlled Launch", current: false },
  { label: "Scale", current: false },
];

export default function RoadmapStatus() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className={styles.section} id="roadmap" ref={ref}>
      <div className="container">
        <div className={styles.header}>
          <p className="section-label">
            <span className="section-label-dot" />
            Where We Are Today
          </p>
          <h2 className={styles.headline}>Building the Foundation</h2>
          <p className={styles.subtext}>
            We believe in transparency. Here is exactly where AI Mentor Global stands today.
          </p>
        </div>

        <div className={styles.content}>
          {/* Milestone list */}
          <div className={styles.milestones}>
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                className={styles.milestone}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.07, duration: 0.5 }}
              >
                <span className={styles.checkmark}>✓</span>
                <span className={styles.milestoneText}>{m}</span>
              </motion.div>
            ))}
          </div>

          {/* Stage roadmap */}
          <motion.div
            className={styles.stages}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.7 }}
          >
            <p className={styles.stagesLabel}>Development roadmap:</p>
            <div className={styles.stageTrack}>
              {stages.map((stage, i) => (
                <div key={stage.label} className={styles.stageItem}>
                  <div className={`${styles.stageDot} ${stage.current ? styles.stageDotActive : ""}`} />
                  {i < stages.length - 1 && (
                    <div className={`${styles.stageLine} ${stage.current ? styles.stageLineActive : ""}`} />
                  )}
                  <p className={`${styles.stageLabel} ${stage.current ? styles.stageLabelActive : ""}`}>
                    {stage.label}
                  </p>
                  {stage.current && (
                    <span className={styles.currentBadge}>Current</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
