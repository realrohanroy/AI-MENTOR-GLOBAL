"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./DpiitRecognition.module.css";

export default function DpiitRecognition() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <section className={styles.section} id="dpiit" ref={ref}>
      <div className="container">
        <motion.div
          className={styles.card}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
        >
          <div className={styles.left}>
            <div className={styles.govtBadge}>
              <span className={styles.govtFlag}>🇮🇳</span>
              <div>
                <p className={styles.govtTitle}>Government of India</p>
                <p className={styles.govtSub}>Startup India — DPIIT Recognition</p>
              </div>
            </div>
            <h2 className={styles.headline}>
              Recognised as a Startup by DPIIT,<br />
              Government of India
            </h2>
            <div className={styles.details}>
              <div className={styles.detailRow}>
                <span className={styles.detailLabel}>Entity</span>
                <span className={styles.detailValue}>AI Mentor Private Limited</span>
              </div>
              <div className={styles.detailRow}>
                <span className={styles.detailLabel}>Certificate No.</span>
                <span className={`${styles.detailValue} ${styles.cert}`}>DIPP277439</span>
              </div>
              <div className={styles.detailRow}>
                <span className={styles.detailLabel}>Date of Recognition</span>
                <span className={styles.detailValue}>14 August 2026</span>
              </div>
            </div>
            <p className={styles.disclaimer}>
              DPIIT recognition relates to AI Mentor Private Limited as a recognised startup and should not be 
              construed as Government endorsement or certification of the AI Mentor Global product.
            </p>
          </div>
          <div className={styles.right}>
            {/* Certificate placeholder */}
            <div className={styles.certPlaceholder}>
              <div className={styles.certInner}>
                <div className={styles.certHeader}>
                  <span className={styles.certFlag}>🇮🇳</span>
                  <p>DPIIT Certificate</p>
                  <p className={styles.certSmall}>DIPP277439</p>
                </div>
                <div className={styles.certNote}>
                  Certificate image to be provided by client
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
