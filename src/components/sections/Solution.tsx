"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./Solution.module.css";

const queries = [
  {
    user: "When does my passport expire?",
    ai: "Your passport expires on 14 March 2028.",
    source: "Passport • Page 1",
    delay: 0,
  },
  {
    user: "Find my insurance policy.",
    ai: "Found 3 insurance documents. Your life policy (LIC) is active. Renewal due: November 2026.",
    source: "Insurance Folder • 3 Documents",
    delay: 0.15,
  },
  {
    user: "Show my property documents.",
    ai: "Your property documents for Flat 4B are available. Sale deed, NOC and registration certificate are on file.",
    source: "Property • Vadodara",
    delay: 0.3,
  },
];

function TypewriterText({ text, active }: { text: string; active: boolean }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (!active) { setDisplayed(""); return; }
    setDisplayed("");
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(interval);
    }, 22);
    return () => clearInterval(interval);
  }, [text, active]);

  return <>{displayed}<span className={styles.cursor}>|</span></>;
}

export default function Solution() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className={styles.section} id="product" ref={ref}>
      <div className="container">
        <div className={styles.header}>
          <p className="section-label">
            <span className="section-label-dot" />
            The Solution
          </p>
          <h2 className={styles.headline}>
            One intelligent environment<br />
            for the information that matters.
          </h2>
          <p className={styles.subtext}>
            AI Mentor Global transforms scattered documents into an organised digital knowledge environment.
            Instead of remembering filenames and folders, simply ask AI Mentor.
          </p>
        </div>

        {/* Query cards */}
        <div className={styles.cards}>
          {queries.map(({ user, ai, source, delay }, i) => (
            <motion.div
              key={i}
              className={styles.card}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + delay, duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
            >
              {/* User query */}
              <div className={styles.userBubble}>
                <div className={styles.userIcon}>U</div>
                <div className={styles.userMsg}>{user}</div>
              </div>

              {/* AI response */}
              <div className={styles.aiBlock}>
                <div className={styles.aiHeader}>
                  <div className={styles.aiLogo}>
                    <img src="/logo_icon.png" alt="Aira" width={18} height={18} style={{ display: "block", objectFit: "contain" }} />
                  </div>
                  <span>Aira</span>
                </div>
                <p className={styles.aiMsg}>
                  <TypewriterText text={ai} active={inView} />
                </p>
                <div className={styles.source}>
                  <span className={styles.sourceLabel}>{source}</span>
                  <button className={styles.viewBtn}>View Document</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
