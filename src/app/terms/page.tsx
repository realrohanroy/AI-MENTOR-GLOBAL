import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import styles from "./terms.module.css";

export const metadata: Metadata = {
  title: "Terms of Use — AI Mentor Global",
  description: "Terms of Use for the AI Mentor Global website.",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <div className={`container ${styles.content}`}>
          <h1 className={styles.headline}>Terms of Use</h1>
          <p className={styles.updated}>Last updated: August 2026</p>

          <div className={styles.notice}>
            <strong>Notice:</strong> These Terms of Use are a placeholder document. Comprehensive Terms of Use will 
            be published before the AI Mentor Global product is commercially launched. Please contact{" "}
            <a href="mailto:info@aimentorglobal.com">info@aimentorglobal.com</a> for any queries.
          </div>

          <section className={styles.section}>
            <h2>1. Website Use</h2>
            <p>
              This website (aimentorglobal.com) is operated by AI Mentor Private Limited. By accessing this website, 
              you agree to use it for lawful purposes only. The information on this website relates to a product under 
              development and should not be construed as a final commercial offering.
            </p>
          </section>

          <section className={styles.section}>
            <h2>2. DPIIT Recognition</h2>
            <p>
              DPIIT recognition (Certificate No. DIPP277439) relates to AI Mentor Private Limited as a recognised 
              startup under the Startup India programme and should not be construed as Government endorsement or 
              certification of the AI Mentor Global product.
            </p>
          </section>

          <section className={styles.section}>
            <h2>3. Governing Law</h2>
            <p>
              These terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction 
              of the courts of Vadodara, Gujarat, India.
            </p>
          </section>

          <section className={styles.section}>
            <h2>4. Contact</h2>
            <p>
              <a href="mailto:info@aimentorglobal.com">info@aimentorglobal.com</a><br />
              AI Mentor Private Limited, Vadodara, Gujarat, India.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
