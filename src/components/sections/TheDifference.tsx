"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./TheDifference.module.css";

export default function TheDifference() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <section className={styles.section} id="difference" ref={ref}>
      <div className={styles.bg} aria-hidden="true" />

      <div className={`container ${styles.content}`}>
        <motion.p
          className={styles.label}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          The Difference
        </motion.p>

        <motion.div
          className={styles.statement}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25, duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
        >
          <p className={styles.line1}>
            Cloud storage stores files.
          </p>
          <div className={styles.divider} />
          <p className={styles.line2}>
            AI Mentor Global aims to intelligently manage<br />
            the information <span className="gradient-text-light">inside</span> them.
          </p>
        </motion.div>

        <motion.p
          className={styles.subline}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          The next evolution of digital storage is intelligent information management.
        </motion.p>

        <motion.div
          className={styles.cta}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.65, duration: 0.6 }}
        >
          <a href="#early-access" className="btn btn-primary btn-lg">
            Be Among the First
          </a>
          <a href="#product" className="btn btn-outline-light btn-lg">
            Learn More
          </a>
        </motion.div>
      </div>
    </section>
  );
}
