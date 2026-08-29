"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./Audiences.module.css";

const audiences = [
  {
    id: "individuals",
    title: "Individuals",
    headline: "Your personal digital information command centre.",
    description:
      "Manage everything that matters about you — in one intelligent environment.",
    categories: [
      "Identity", "Education", "Health", "Insurance",
      "Finance", "Property", "Taxation", "Legal",
      "Employment", "Travel", "Personal Records",
    ],
    emoji: "👤",
    gradient: "linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)",
  },
  {
    id: "families",
    title: "Families",
    headline: "An organised family information environment.",
    description:
      "Connecting authorised records for spouses, children, parents, senior family members, nominees and emergency contacts.",
    categories: [
      "Family Profiles", "Relationships", "Nominees",
      "Emergency Contacts", "Important Dates", "Family Documents",
    ],
    emoji: "👨‍👩‍👧‍👦",
    gradient: "linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)",
  },
  {
    id: "corporates",
    title: "Corporates",
    headline: "An intelligent organisational information environment.",
    description:
      "Progressively designed for Employees, Contracts, Policies, Compliance, Legal, Finance, Projects and Institutional Knowledge.",
    categories: [
      "Employees", "Contracts", "Policies",
      "Compliance", "Legal", "Finance",
      "Projects", "Institutional Knowledge",
    ],
    emoji: "🏢",
    gradient: "linear-gradient(135deg, #4f46e5 0%, #2563eb 100%)",
  },
];

export default function Audiences() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const [active, setActive] = useState(0);

  return (
    <section className={styles.section} id="individuals" ref={ref}>
      <div className="container">
        <div className={styles.header}>
          <p className="section-label">
            <span className="section-label-dot" />
            Who It&apos;s For
          </p>
          <h2 className={styles.headline}>
            One Intelligence Platform.<br />
            <span className="gradient-text">Individuals. Families. Corporates.</span>
          </h2>
        </div>

        {/* Tab selector */}
        <div className={styles.tabs} role="tablist">
          {audiences.map((a, i) => (
            <button
              key={a.id}
              className={`${styles.tab} ${active === i ? styles.tabActive : ""}`}
              onClick={() => setActive(i)}
              role="tab"
              aria-selected={active === i}
              aria-controls={`panel-${a.id}`}
              id={`tab-${a.id}`}
            >
              <span>{a.emoji}</span>
              {a.title}
            </button>
          ))}
        </div>

        {/* Panel */}
        <div className={styles.panels} id="families">
          {audiences.map((a, i) => (
            <motion.div
              key={a.id}
              className={`${styles.panel} ${active === i ? styles.panelActive : ""}`}
              role="tabpanel"
              id={`panel-${a.id}`}
              aria-labelledby={`tab-${a.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={inView && active === i ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, ease: [0.19, 1, 0.22, 1] }}
            >
              <div className={styles.panelLeft}>
                <div className={styles.emojiWrap} style={{ background: a.gradient }}>
                  <span className={styles.bigEmoji}>{a.emoji}</span>
                </div>
                <h3 className={styles.panelTitle}>{a.headline}</h3>
                <p className={styles.panelDesc}>{a.description}</p>
                <a href="#early-access" className="btn btn-primary">
                  Get Early Access
                </a>
              </div>
              <div className={styles.panelRight}>
                <p className={styles.catTitle}>Information categories covered:</p>
                <div className={styles.cats} id={a.id === "families" ? "" : a.id === "corporates" ? "corporates" : ""}>
                  {a.categories.map((c) => (
                    <span key={c} className={styles.cat}>{c}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
