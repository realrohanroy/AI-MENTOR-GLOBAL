"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import styles from "./SecurityPrivacy.module.css";

const principles = [
  { icon: "🔐", title: "Secure Authentication", desc: "Multi-layer authentication for all access." },
  { icon: "👁️", title: "Sensitive-Number Masking", desc: "Personal identifiers masked by default." },
  { icon: "🔁", title: "Re-Authentication", desc: "Additional verification before viewing protected information." },
  { icon: "✅", title: "Consent-Based AI Processing", desc: "AI operates only on user-consented data." },
  { icon: "🔒", title: "Controlled Access & Sharing", desc: "You decide who sees what, when." },
  { icon: "📋", title: "Auditability", desc: "Full audit trail of all access and actions." },
  { icon: "🛡️", title: "Privacy-by-Design", desc: "Privacy principles embedded in the product architecture." },
];

export default function SecurityPrivacy() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const [revealed, setRevealed] = useState(false);
  const [showAuth, setShowAuth] = useState(false);

  const handleReveal = () => {
    setShowAuth(true);
  };

  const handleAuthenticate = () => {
    setShowAuth(false);
    setRevealed(true);
  };

  return (
    <section className={styles.section} id="security" ref={ref}>
      <div className="container">
        <div className={styles.grid}>
          {/* Left: text */}
          <motion.div
            className={styles.left}
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          >
            <p className="section-label">
              <span className="section-label-dot" />
              Security & Privacy
            </p>
            <h2 className={styles.headline}>
              Your information.<br />
              Your permission.<br />
              <span className="gradient-text">Your control.</span>
            </h2>
            <p className={styles.body}>
              Because AI Mentor Global is intended to manage sensitive information, privacy and security 
              are fundamental to the product architecture.
            </p>
            <div className={styles.principles}>
              {principles.map((p, i) => (
                <motion.div
                  key={p.title}
                  className={styles.principle}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.5 }}
                >
                  <span className={styles.pIcon}>{p.icon}</span>
                  <div>
                    <p className={styles.pTitle}>{p.title}</p>
                    <p className={styles.pDesc}>{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <p className={styles.dpdpNote}>
              The platform is being developed in alignment with India&apos;s Digital Personal Data Protection (DPDP) Act and DPDP Rules 2025.
            </p>
          </motion.div>

          {/* Right: interactive demo */}
          <motion.div
            className={styles.right}
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          >
            <div className={styles.demoCard}>
              <div className={styles.demoHeader}>
                <span className={styles.demoTitle}>AI Mentor — Secure Document</span>
                <span className={styles.demoCategory}>Identity</span>
              </div>

              <div className={styles.fieldRow}>
                <div className={styles.fieldLabel}>Document Type</div>
                <div className={styles.fieldValue}>Driving Licence</div>
              </div>

              <div className={styles.fieldRow}>
                <div className={styles.fieldLabel}>Licence Number</div>
                <div className={`${styles.fieldValue} ${styles.masked}`}>
                  {revealed ? "GJ06 2021 1234 8210" : "XXXX XXXX 4821"}
                </div>
                {!revealed && (
                  <button
                    className={styles.revealBtn}
                    onClick={handleReveal}
                    aria-label="Reveal sensitive field"
                  >
                    🔒 Reveal
                  </button>
                )}
                {revealed && (
                  <button
                    className={`${styles.revealBtn} ${styles.lockBtn}`}
                    onClick={() => setRevealed(false)}
                  >
                    🔒 Hide
                  </button>
                )}
              </div>

              <div className={styles.fieldRow}>
                <div className={styles.fieldLabel}>Valid Until</div>
                <div className={styles.fieldValue}>2031-08-14</div>
              </div>

              {/* Auth modal */}
              <AnimatePresence>
                {showAuth && (
                  <motion.div
                    className={styles.authOverlay}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className={styles.authBox}>
                      <div className={styles.authIcon}>🔐</div>
                      <h4 className={styles.authTitle}>Confirm it&apos;s you</h4>
                      <p className={styles.authDesc}>Authenticate before viewing sensitive information.</p>
                      <button className="btn btn-primary" onClick={handleAuthenticate}>
                        Authenticate
                      </button>
                      <button className={styles.cancelBtn} onClick={() => setShowAuth(false)}>
                        Cancel
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <p className={styles.demoNote}>
              This is a prototype demonstration. Sensitive numbers are masked by default — re-authentication is required before revealing protected fields.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
