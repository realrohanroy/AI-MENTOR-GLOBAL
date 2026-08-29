"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./AIIntelligence.module.css";

const queryCards = [
  {
    query: "Show my PAN Card",
    result: "Your PAN card (ABCDE1234F) is on file. Issued: March 2018.",
    source: "Identity • PAN Card",
  },
  {
    query: "Find all my insurance policies",
    result: "3 insurance policies found: Life (LIC), Health (Star), Vehicle (HDFC). 1 policy renews in 45 days.",
    source: "Insurance Folder • 3 Policies",
  },
  {
    query: "Which family documents expire this year?",
    result: "2 documents expire in 2026: Rahul's passport (September) and Priya's driving licence (December).",
    source: "Family Documents",
  },
];

const capabilities = [
  "Document Classification",
  "Information Extraction",
  "Natural-Language Search",
  "Document Q&A",
  "Summaries",
  "Important Dates",
  "Source Retrieval",
  "Reminders",
  "Voice Interaction",
];

export default function AIIntelligence() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className={styles.section} id="ai-intelligence" ref={ref}>
      <div className="container">
        <div className={styles.header}>
          <p className="section-label">
            <span className="section-label-dot" />
            AI Intelligence
          </p>
          <h2 className={styles.headline}>
            Don&apos;t just store information.<br />
            <span className="gradient-text">Interact with it.</span>
          </h2>
          <p className={styles.subtext}>
            AI Mentor is intended progressively to assist with searching, understanding and acting on your information.
          </p>
        </div>

        {/* Query cards */}
        <div className={styles.cards}>
          {queryCards.map(({ query, result, source }, i) => (
            <motion.div
              key={i}
              className={styles.card}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.15, duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
            >
              <div className={styles.queryChip}>
                <span className={styles.queryIcon}>💬</span>
                <span>&quot;{query}&quot;</span>
              </div>
              <div className={styles.response}>
                <div className={styles.responseHeader}>
                  <span className={styles.aiDot} />
                  AI Mentor
                </div>
                <p className={styles.responseText}>{result}</p>
                <div className={styles.sourceTag}>{source}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Capabilities */}
        <motion.div
          className={styles.capabilities}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <p className={styles.capLabel}>Planned AI capabilities:</p>
          <div className={styles.capTags}>
            {capabilities.map((cap) => (
              <span key={cap} className={styles.capTag}>{cap}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
