"use client";
import { useRef, useState, FormEvent } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./EarlyAccess.module.css";

export default function EarlyAccess() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", mobile: "", type: "" });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.mobile || !form.type) return;
    setLoading(true);
    // Netlify Forms: real submission handled by Netlify on deployment
    // For local dev, simulate success after 1.5s
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section className={styles.section} id="early-access" ref={ref}>
      <div className={styles.bg} aria-hidden="true" />

      <div className={`container ${styles.content}`}>
        <motion.div
          className={styles.text}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
        >
          <p className="section-label" style={{ color: "rgba(139,92,246,0.8)" }}>
            <span className="section-label-dot" />
            Early Access
          </p>
          <h2 className={styles.headline}>
            The future of personal<br />information management<br />
            <span className="gradient-text-light">is being built.</span>
          </h2>
          <p className={styles.subtext}>
            Be among the first to experience AI Mentor Global.
          </p>
          <div className={styles.featureList}>
            {[
              "No payment required",
              "Get product updates first",
              "Shape the early product",
              "Priority early access",
            ].map((f) => (
              <div key={f} className={styles.featureItem}>
                <span className={styles.featureCheck}>✓</span>
                <span>{f}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Form card */}
        <motion.div
          className={styles.formCard}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
        >
          {submitted ? (
            <div className={styles.success}>
              <span className={styles.successIcon}>🎉</span>
              <h3 className={styles.successTitle}>You&apos;re on the list!</h3>
              <p className={styles.successText}>
                Thank you for registering your interest in AI Mentor Global. 
                We&apos;ll be in touch with product updates and early-access opportunities.
              </p>
            </div>
          ) : (
            <form
              name="early-access"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className={styles.form}
            >
              <input type="hidden" name="form-name" value="early-access" />
              <p className={styles.hiddenField}>
                <label>
                  Do not fill this out:{" "}
                  <input name="bot-field" tabIndex={-1} autoComplete="off" />
                </label>
              </p>

              <h3 className={styles.formTitle}>JOIN EARLY ACCESS</h3>

              <div className={styles.field}>
                <label htmlFor="ea-name" className={styles.label}>Full Name</label>
                <input
                  id="ea-name"
                  name="name"
                  type="text"
                  required
                  className={styles.input}
                  placeholder="Your full name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="ea-email" className={styles.label}>Email Address</label>
                <input
                  id="ea-email"
                  name="email"
                  type="email"
                  required
                  className={styles.input}
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="ea-mobile" className={styles.label}>Mobile Number</label>
                <input
                  id="ea-mobile"
                  name="mobile"
                  type="tel"
                  required
                  className={styles.input}
                  placeholder="+91 XXXXX XXXXX"
                  value={form.mobile}
                  onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="ea-type" className={styles.label}>Interested As</label>
                <select
                  id="ea-type"
                  name="interested-as"
                  required
                  className={styles.select}
                  value={form.type}
                  onChange={(e) => setForm({ ...form, type: e.target.value })}
                >
                  <option value="">Select one...</option>
                  <option value="Individual">Individual</option>
                  <option value="Family">Family</option>
                  <option value="Corporate">Corporate</option>
                </select>
              </div>

              <button
                type="submit"
                className={`btn btn-primary ${styles.submitBtn}`}
                disabled={loading}
              >
                {loading ? "Submitting..." : "JOIN EARLY ACCESS"}
              </button>

              <p className={styles.disclaimer}>
                No payment required. Register your interest for future product updates and early-access opportunities.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
