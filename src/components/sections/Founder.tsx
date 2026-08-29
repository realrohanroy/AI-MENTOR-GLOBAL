"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./Founder.module.css";

export default function Founder() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className={styles.section} id="founder" ref={ref}>
      <div className="container">
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
        >
          <div className={styles.photoCol}>
            {/* Photo placeholder */}
            <div className={styles.photoWrap}>
              <div className={styles.photoPlaceholder}>
                <span className={styles.photoInitials}>UM</span>
                <p className={styles.photoNote}>Founder photograph<br />to be provided</p>
              </div>
              <div className={styles.photoGlow} aria-hidden="true" />
            </div>
            <div className={styles.nameBlock}>
              <p className={styles.name}>Utkarsh Mehta</p>
              <p className={styles.role}>Founder &amp; Director</p>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.linkedin}
                aria-label="Utkarsh Mehta on LinkedIn"
              >
                LinkedIn →
              </a>
            </div>
          </div>

          <div className={styles.textCol}>
            <p className="section-label">
              <span className="section-label-dot" />
              The Vision Behind AI Mentor Global
            </p>

            <blockquote className={styles.quote}>
              &ldquo;AI Mentor Global was conceived around a simple question: Why should the important 
              information accumulated throughout our lives remain scattered across files, phones, emails 
              and different applications when technology can bring it together and make it intelligently 
              accessible?&rdquo;
            </blockquote>

            <p className={styles.bio}>
              Utkarsh Mehta brings several decades of business, infrastructure and organisational experience 
              to AI Mentor Global. His experience with complex documentation, continuity and information 
              accumulated over decades led to the concept of creating a more organised and intelligent way 
              of managing important information across life and generations.
            </p>

            <p className={styles.linkedinCta}>
              Longer professional history available on{" "}
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
                LinkedIn
              </a>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
