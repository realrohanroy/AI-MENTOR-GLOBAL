"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./ProductArchitecture.module.css";

const activeModules = [
  {
    title: "Digital Identity & Master Profile",
    items: ["Passport", "Aadhaar", "PAN", "Driving Licence", "Visas", "Residence Permits", "Other Identity Records"],
  },
  {
    title: "Family & Relationships",
    items: ["Family Profiles", "Relationships", "Nominees", "Emergency Contacts", "Important Dates", "Family Documents"],
  },
  {
    title: "Education, Knowledge & Skills",
    items: ["Academic Records", "Qualifications", "Certifications", "Skills", "Languages", "Training", "Achievements"],
  },
];

const plannedModules = [
  "Health & Medical",
  "Insurance",
  "Banking & Finance",
  "Property",
  "Taxation",
  "Legal",
  "Employment",
  "Travel",
  "Business",
  "Other Important Records",
];

export default function ProductArchitecture() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className={styles.section} id="architecture" ref={ref}>
      <div className="container">
        <div className={styles.header}>
          <p className="section-label">
            <span className="section-label-dot" />
            Product Architecture
          </p>
          <h2 className={styles.headline}>
            Beginning with the<br />foundations of your digital life.
          </h2>
        </div>

        {/* Active modules */}
        <div className={styles.activeGrid}>
          {activeModules.map((mod, i) => (
            <motion.div
              key={mod.id}
              className={styles.moduleCard}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
            >
              <div className={styles.moduleHeader}>
                <span className={`tag tag-accent ${styles.liveBadge}`}>Available Now</span>
              </div>
              <h3 className={styles.moduleTitle}>{mod.title}</h3>
              <div className={styles.moduleItems}>
                {mod.items.map((item) => (
                  <span key={item} className={styles.item}>{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Planned modules (Marquee) */}
        <motion.div
          className={styles.plannedSection}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          <h3 className={styles.comingSoonTitle}>Coming Soon</h3>
          
          <div className={styles.marqueeContainer}>
            <div className={styles.marqueeTrack}>
              {/* Original Set */}
              <div className={styles.marqueeContent}>
                {plannedModules.map((mod) => (
                  <div key={mod} className={styles.plannedCard}>
                    <p className={styles.plannedName}>{mod}</p>
                  </div>
                ))}
              </div>
              {/* Duplicated Set for infinite loop */}
              <div className={styles.marqueeContent} aria-hidden="true">
                {plannedModules.map((mod) => (
                  <div key={`${mod}-dup`} className={styles.plannedCard}>
                    <p className={styles.plannedName}>{mod}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className={styles.plannedNote}>
            Future modules represent planned product development and are not yet commercially available.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
