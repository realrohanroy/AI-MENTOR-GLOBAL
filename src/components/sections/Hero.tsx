"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShaderAnimation } from "@/components/ui/shader-lines";
import styles from "./Hero.module.css";

export default function Hero() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className={styles.hero} id="home" ref={ref}>
      {/* Shader background */}
      <div className={styles.shaderWrapper}>
        <ShaderAnimation />
      </div>

      {/* Subtle geometric overlay (keeps depth) */}
      <div className={styles.background}>
        <div className={styles.geometricPattern} />
      </div>

      <div className={`container ${styles.content}`}>
        <motion.div
          className={styles.textContent}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
        >
          <h1 className={styles.headline}>
            <span className={styles.lifetimeText}>
              A lifetime of<br />
              information.
            </span><br />
            <em>Beautifully in order.</em>
          </h1>

          <div className={styles.subtextContainer}>
            <p className={styles.subtextPrimary}>
              AI Mentor Global transforms your scattered identity, family, health and life records into one intelligent, beautifully organised system—ready whenever life asks for them.
            </p>
          </div>

          <div className={styles.ctaGroup}>
            <a href="#early-access" className="btn btn-primary">
              Join Early Access
            </a>
            <a href="#how-it-works" className={styles.btnText}>
              See how it works <span className={styles.btnIcon}>↘</span>
            </a>
          </div>

          <div className={styles.bottomText}>
            <span>Your life. Organised. Protected. Intelligent.</span>
            <span>From birth through legacy.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
