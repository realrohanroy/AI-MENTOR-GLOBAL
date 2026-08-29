import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import styles from "./legal.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy — AI Mentor Global",
  description: "Privacy Policy for AI Mentor Global and AI Mentor Private Limited.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className={styles.page}>
        <div className={`container ${styles.content}`}>
          <h1 className={styles.headline}>Privacy Policy</h1>
          <p className={styles.updated}>Last updated: August 2026</p>

          <div className={styles.notice}>
            <strong>Notice:</strong> This Privacy Policy is a placeholder document. A legally reviewed Privacy Policy 
            compliant with India&apos;s Digital Personal Data Protection (DPDP) Act and DPDP Rules 2025 will be published 
            before the AI Mentor Global product is commercially launched. Please contact{" "}
            <a href="mailto:info@aimentorglobal.com">info@aimentorglobal.com</a> for any privacy-related enquiries.
          </div>

          <section className={styles.section}>
            <h2>1. About This Policy</h2>
            <p>
              AI Mentor Private Limited (&quot;we&quot;, &quot;our&quot;, &quot;the Company&quot;) is committed to protecting 
              the privacy and security of personal information. This page will contain our full privacy policy 
              once the AI Mentor Global product is available for use.
            </p>
          </section>

          <section className={styles.section}>
            <h2>2. Early Access Registration</h2>
            <p>
              Information collected through our Early Access registration form (name, email, mobile, interest category) 
              is used solely for the purpose of contacting you about AI Mentor Global product updates and early-access 
              opportunities. This information is not sold or shared with third parties.
            </p>
          </section>

          <section className={styles.section}>
            <h2>3. Contact</h2>
            <p>
              For privacy-related queries, please contact:<br />
              <a href="mailto:info@aimentorglobal.com">info@aimentorglobal.com</a><br />
              AI Mentor Private Limited<br />
              Sahyog Space, 7th Floor, New Alkapuri, Vadodara – 390021, Gujarat, India.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
