import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Contact — AI Mentor Global",
  description:
    "Get in touch with AI Mentor Private Limited. Contact us via phone, email or visit our office in Vadodara, Gujarat, India.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <div className="container">
          <div className={styles.header}>
            <p className="section-label">
              <span className="section-label-dot" />
              Contact
            </p>
            <h1 className={styles.headline}>Let&apos;s Connect</h1>
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

            {/* Contact form */}
            <div className={styles.formCard}>
              <h3 className={styles.formTitle}>Send a Message</h3>
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                className={styles.form}
              >
                <input type="hidden" name="form-name" value="contact" />
                <p style={{ display: "none" }}>
                  <label>Do not fill: <input name="bot-field" /></label>
                </p>

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
                  <input id="c-subject" name="subject" type="text" className={styles.input} placeholder="How can we help?" />
                </div>
                <div className={styles.field}>
                  <label htmlFor="c-message" className={styles.label}>Message</label>
                  <textarea id="c-message" name="message" rows={5} className={styles.textarea} placeholder="Your message..." />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
