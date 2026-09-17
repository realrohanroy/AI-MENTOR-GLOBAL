"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Activity, Mic, Share2, Heart, Pill, FileText, Phone, ShieldCheck, Volume2 } from "lucide-react";
import styles from "./AiraEmergency.module.css";

const featurePills = [
  "Secure & Encrypted",
  "Doctor-Ready Format",
  "Works Offline",
  "70-Second Preparation",
  "Multilingual",
];

export default function AiraEmergency() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });
  const [listening, setListening] = useState(false);

  function handleMicClick() {
    setListening((v) => !v);
  }

  return (
    <section className={styles.section} id="aira" ref={ref}>
      <div className={styles.bgGlow} aria-hidden="true" />
      <div className={styles.bgGlowRed} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        {/* Top label */}
        <motion.div
          className={styles.topLabel}
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.emergencyPulse} aria-hidden="true" />
          <span className={styles.topLabelText}>Meet Aira — AI Mentor&apos;s Voice Intelligence</span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          className={styles.headline}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
        >
          In an emergency, your medical<br />
          history should speak for you.
        </motion.h2>



        {/* Experience Quote */}
        <motion.div
          className={styles.quoteWrapper}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <p className={styles.heroQuote}>
            <em>&ldquo;Hey Aira,</em> prepare the patient&apos;s emergency brief.&rdquo;
          </p>
        </motion.div>

        {/* Video Player */}
        <motion.div
          className={styles.videoContainer}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
        >
          <div className={styles.videoWrapper}>
            <iframe
              src="https://www.youtube.com/embed/tl_1TgAXUqE?si=eGfSPCWoJpeO65wB&controls=0&rel=0&modestbranding=1"
              title="Aira Emergency ICU Brief"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className={styles.iframe}
            ></iframe>
          </div>
          <div className={styles.glowEffect} />

          {/* Timer indicator */}
          <div className={styles.timerChip}>
            <span className={styles.timerDot} aria-hidden="true" />
            <p className={styles.timerText}>
              Brief prepared in <strong>under 70 seconds</strong> — from voice to doctor-ready
            </p>
          </div>
        </motion.div>

        {/* Feature pills */}
        <motion.div
          className={styles.featurePills}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9, duration: 0.7 }}
        >
          {featurePills.map((pill) => (
            <div key={pill} className={styles.featurePill}>
              <span className={styles.featurePillDot} aria-hidden="true" />
              {pill}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
