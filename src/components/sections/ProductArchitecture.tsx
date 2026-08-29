"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./ProductArchitecture.module.css";

const activeModules = [
  {
    id: "MF-01",
    title: "Digital Identity & Master Profile",
    items: ["Passport", "Aadhaar", "PAN", "Driving Licence", "Visas", "Residence Permits", "Other Identity Records"],
  },
  {
    id: "MF-02",
    title: "Family & Relationships",
    items: ["Family Profiles", "Relationships", "Nominees", "Emergency Contacts", "Important Dates", "Family Documents"],
  },
  {
    id: "MF-03",
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
                <span className={styles.moduleId}>{mod.id}</span>
                <span className={`tag tag-accent ${styles.liveBadge}`}>Active</span>
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

        {/* Planned modules */}
        <motion.div
          className={styles.plannedSection}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          <p className={styles.plannedLabel}>
            And progressively much more — planned for future releases:
          </p>
          <div className={styles.plannedGrid}>
            {plannedModules.map((mod) => (
              <div key={mod} className={styles.plannedCard}>
                <span className={`tag tag-planned`}>Planned</span>
                <p className={styles.plannedName}>{mod}</p>
              </div>
            ))}
          </div>
          <p className={styles.plannedNote}>
            Future modules represent planned product development and are not yet commercially available.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
