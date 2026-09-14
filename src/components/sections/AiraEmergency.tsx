"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mic, Share2, Heart, Pill, FileText, Phone, ShieldCheck, Volume2 } from "lucide-react";
import styles from "./AiraEmergency.module.css";

const briefSections = [
  {
    title: "Vitals & Key Conditions",
    content: [
      "Blood Pressure: 128/82 (Latest: 1 Aug 2026)",
      "Diabetes: Type 2 (Controlled, since 2018)",
      "Cardiac History: Normal, no active issues",
      "Surgeries/Implants: Appendectomy (2012), no implants"
    ],
  },
  {
    title: "Allergies & Critical Info",
    content: [
      "Allergies: Penicillin (severe reaction)",
      "Other Conditions: Mild Asthma"
    ],
  },
  {
    title: "Current Medicines",
    content: [
      "Metformin 500mg (Twice daily)",
      "Amlodipine 5mg (Morning)",
      "Rosuvastatin 10mg (Night)",
    ],
  },
  {
    title: "Care Team & Contacts",
    content: [
      "Treating Doctor: Dr. Priya Sharma",
      "Emergency Contact: Ravi Mehta (+91 98250 12345)",
    ],
  },
];



const featurePills = [
  "Secure & Encrypted",
  "Doctor-Ready Format",
  "Works Offline",
  "60-Second Preparation",
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

        <motion.p
          className={styles.sub}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Simply say <strong style={{ color: "rgba(255,255,255,0.8)" }}>&ldquo;Hey Aira&rdquo;</strong> — your personal AI voice assistant will securely prepare a doctor-ready health brief in seconds.
        </motion.p>

        {/* Two-column layout */}
        <div className={styles.layout}>
          {/* LEFT — Voice Demo */}
          <motion.div
            className={styles.voiceCol}
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
          >
            {/* Mic button with ripples */}
            <div className={styles.micWrapper}>
              <span className={styles.ripple1} aria-hidden="true" />
              <span className={styles.ripple2} aria-hidden="true" />
              <span className={styles.ripple3} aria-hidden="true" />
              <button
                className={`${styles.micBtn} ${listening ? styles.micActive : ""}`}
                onClick={handleMicClick}
                aria-label="Tap to activate Aira"
                aria-pressed={listening}
              >
                <Mic size={36} color="#ffffff" strokeWidth={1.5} />
              </button>
            </div>

            {/* Aira voice bars */}
            <div className={styles.airaBar}>
              <p className={styles.airaName}>{listening ? "Aira is listening..." : "Tap to speak"}</p>
              <div className={styles.voiceBars} aria-hidden={!listening} style={{ opacity: listening ? 1 : 0, transition: "opacity 0.2s" }}>
                {[1,2,3,4,5,6,7].map((i) => (
                  <span
                    key={i}
                    className={`${styles.bar} ${listening ? styles.barAnimated : ""}`}
                    style={{ animationDelay: `${i * 0.07}s` }}
                  />
                ))}
              </div>
            </div>

            {/* Clean command quote */}
            <p className={styles.heroQuote}>
              <em>&ldquo;Hey Aira,</em> prepare my emergency health brief for the doctor.&rdquo;
            </p>
          </motion.div>

          {/* RIGHT — Emergency Brief Card */}
          <motion.div
            className={styles.briefCol}
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
          >
            <div className={styles.briefCard}>
              {/* Card header */}
              <div className={styles.briefHeader}>
                <div className={styles.briefIcon}>
                  <Heart size={20} color="#ef4444" strokeWidth={2} />
                </div>
                <div className={styles.briefHeaderText}>
                  <h3>Utkarsh Mehta · 45 · Male · B+</h3>
                  <p>AIRA Emergency Health Snapshot</p>
                </div>
                <span className={styles.briefHeaderBadge}>Emergency</span>
              </div>

              {/* Card body */}
              <div className={styles.briefBody}>
                {briefSections.map((section, i) => (
                  <motion.div
                    key={section.title}
                    className={styles.briefSection}
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.6 }}
                  >
                    <p className={styles.briefSectionTitle}>{section.title}</p>
                    <div className={styles.briefSectionContent}>
                      {section.content.map((line) => (
                        <span key={line}>{line}</span>
                      ))}
                    </div>
                    {i < briefSections.length - 1 && (
                      <div className={styles.briefDivider} />
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Card footer */}
              <div className={styles.briefFooter}>
                <div className={styles.briefFooterLeft}>
                  <p className={styles.briefFooterNote}>
                    Verified Medical Data · Encrypted
                  </p>
                </div>
                <button className={styles.briefShareBtn}>
                  <Volume2 size={14} strokeWidth={2.5} />
                  AIRA: Read My Doctor Brief
                  
                  {/* Waveform animation */}
                  <div className={styles.btnWaveform}>
                    <span className={styles.waveBar} style={{ animationDelay: "0s" }} />
                    <span className={styles.waveBar} style={{ animationDelay: "0.1s" }} />
                    <span className={styles.waveBar} style={{ animationDelay: "0.2s" }} />
                    <span className={styles.waveBar} style={{ animationDelay: "0.15s" }} />
                  </div>
                </button>
              </div>
            </div>

            {/* Timer indicator */}
            <div className={styles.timerChip}>
              <span className={styles.timerDot} aria-hidden="true" />
              <p className={styles.timerText}>
                Brief prepared in <strong>under 60 seconds</strong> — from voice to doctor-ready
              </p>
            </div>
          </motion.div>
        </div>

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
