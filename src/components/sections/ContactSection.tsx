"use client";
import { useState, FormEvent } from "react";
import styles from "./ContactSection.module.css";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(e.currentTarget);
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error("Form submission failed", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className={styles.section} id="contact">
      <div className="container">
        <div className={styles.header}>
          <p className="section-label">
            <span className="section-label-dot" />
            Contact
          </p>
          <h2 className={styles.headline}>Let&apos;s Connect</h2>
          <p className={styles.subtext}>
            Reach out to the AI Mentor Global team for enquiries, partnerships or general information.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Info */}
          <div className={styles.info}>
            <div className={styles.infoBlock}>
              <h2 className={styles.blockTitle}>AI Mentor Private Limited</h2>
              <p className={styles.blockSub}>Developing AI Mentor Global</p>
            </div>

            <div className={styles.infoBlock}>
              <h3 className={styles.officeTitle}>Corporate / Communication Office</h3>
              <address className={styles.address}>
                Sahyog Space, 7th Floor,<br />
                Above Kotak Mahindra Bank,<br />
                New Alkapuri, Vadodara – 390021<br />
                Gujarat, India
              </address>
            </div>

            <div className={styles.infoBlock}>
              <h3 className={styles.officeTitle}>Registered Office</h3>
              <address className={styles.address}>
                16A, Tower A, Akarsh-1,<br />
                Gotri Laxmipura Road, T. B. Sanatorium,<br />
                Vadodara – 390021, Gujarat, India.
              </address>
            </div>

            <div className={styles.contacts}>
              <a href="tel:+919825040073" className={styles.contactItem}>
                <span className={styles.contactIcon}>📞</span>
                <span>+91 98250 40073</span>
              </a>
              <a href="mailto:info@aimentorglobal.com" className={styles.contactItem}>
                <span className={styles.contactIcon}>📧</span>
                <span>info@aimentorglobal.com</span>
              </a>
              <a href="mailto:support@aimentorglobal.com" className={styles.contactItem}>
                <span className={styles.contactIcon}>🛠️</span>
                <span>support@aimentorglobal.com</span>
              </a>
              <a href="https://www.aimentorglobal.com" className={styles.contactItem}>
                <span className={styles.contactIcon}>🌐</span>
                <span>www.aimentorglobal.com</span>
              </a>
            </div>
          </div>

          {/* Contact form - Using Web3Forms */}
          <div className={styles.formCard}>
            {submitted ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <span style={{ fontSize: "3rem", display: "block", marginBottom: "16px" }}>🎉</span>
                <h3 className={styles.formTitle}>Message Sent!</h3>
                <p style={{ color: "var(--color-text-secondary)", fontSize: "0.95rem" }}>
                  Thank you for reaching out. We have received your message and will get back to you shortly.
                </p>
              </div>
            ) : (
              <>
                <h3 className={styles.formTitle}>Send a Message</h3>
                <form onSubmit={handleSubmit} className={styles.form}>
                  <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "e5d773a2-22b2-4580-8657-cf6606f22930"} />
                  <input type="hidden" name="subject" value="New Contact Request - AI Mentor Global" />
                  <input type="hidden" name="from_name" value="AI Mentor Global Website" />
                  
                  {/* Optional: Add a honeypot field to prevent spam */}
                  <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

                  <div className={styles.field}>
                    <label htmlFor="c-name" className={styles.label}>Full Name</label>
                    <input id="c-name" name="name" type="text" required className={styles.input} placeholder="Your name" />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="c-email" className={styles.label}>Email</label>
                    <input id="c-email" name="email" type="email" required className={styles.input} placeholder="your@email.com" />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="c-subject" className={styles.label}>Subject</label>
                    <input id="c-subject" name="custom_subject" type="text" className={styles.input} placeholder="How can we help?" />
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="c-message" className={styles.label}>Message</label>
                    <textarea id="c-message" name="message" rows={5} className={styles.textarea} placeholder="Your message..." />
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }} disabled={loading}>
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
