"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
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
              <Image 
                src="/images/globe.png" 
                alt="Global Network" 
                width={400} 
                height={400} 
                className={styles.globeSvg} 
                style={{ objectFit: 'contain' }}
              />
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
