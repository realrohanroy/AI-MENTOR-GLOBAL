"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShaderAnimation } from "@/components/ui/shader-lines";
import VideoModal from "@/components/ui/VideoModal";
import styles from "./Hero.module.css";

export default function Hero() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const [isVideoOpen, setVideoOpen] = useState(false);

  return (
    <>
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
        <div className={styles.heroGrid}>
          {/* Left Column: Text Content */}
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
            </div>

            <div className={styles.bottomText}>
              <span>Your life. Organised. Protected. Intelligent.</span>
              <span>From birth through legacy.</span>
            </div>
          </motion.div>

          {/* Right Column: Floating AIRA Card */}
          <motion.div 
            className={styles.airaCardWrapper}
            initial={{ opacity: 0, scale: 0.95, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1], delay: 0.2 }}
          >
            <button 
              onClick={() => setVideoOpen(true)} 
              className={styles.airaFloatingCard} 
              aria-label="Watch Introduction"
            >
              <div className={styles.cardImgWrapper}>
                <img src="/images/aira.jpeg" alt="Aira Avatar" className={styles.cardImg} />
                <div className={styles.cardGradientOverlay} />
              </div>
              
              <div className={styles.cardContent}>
                <div className={styles.cardTitleRow}>
                  <div className={styles.cardText}>
                    <span className={styles.cardTitle}>Meet AIRA</span>
                    <span className={styles.cardSub}>Your AI Mentor</span>
                  </div>
                  <div className={styles.cardPlayCircle}>
                    <div className={styles.playTriangle} />
                  </div>
                </div>
                <div className={styles.cardAction}>
                  Watch Introduction <span className={styles.cardIcon}>▶</span>
                </div>
              </div>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
      
      <VideoModal 
        isOpen={isVideoOpen} 
        onClose={() => setVideoOpen(false)} 
        videoUrl="https://www.youtube.com/embed/saWJWnjfIpI?si=76o_zD6zwCU2wVMg&controls=1&rel=0&modestbranding=1" 
      />
    </>
  );
}
