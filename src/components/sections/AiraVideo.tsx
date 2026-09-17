"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./AiraVideo.module.css";

export default function AiraVideo() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className={styles.section} id="aira-intro" ref={ref}>
      <div className="container">
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
        >
          <div className={styles.header}>
            <p className="section-label">
              <span className="section-label-dot" style={{ backgroundColor: "#8b5cf6" }} />
              Meet Aira
            </p>
            <h2 className={styles.headline}>
              A brief introduction by <span className="gradient-text">Aira.</span>
            </h2>
            <p className={styles.subtext}>
              Discover how AI Mentor Global transforms digital document management into intelligent, actionable insights.
            </p>
          </div>

          <div className={styles.videoContainer}>
            <div className={styles.videoWrapper}>
              <iframe
                src="https://www.youtube.com/embed/saWJWnjfIpI?si=76o_zD6zwCU2wVMg&controls=0&rel=0&modestbranding=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className={styles.iframe}
              ></iframe>
            </div>
            <div className={styles.glowEffect} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
