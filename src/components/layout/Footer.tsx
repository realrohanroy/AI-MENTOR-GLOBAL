import Link from "next/link";
import styles from "./Footer.module.css";

const navLinks = [
  { href: "#hero", label: "About" },
  { href: "#product", label: "Product" },
  { href: "#individuals", label: "Individuals" },
  { href: "#families", label: "Families" },
  { href: "#corporates", label: "Corporates" },
  { href: "#security", label: "Security & Privacy" },
  { href: "/contact", label: "Contact" },
];

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
  { href: "/privacy-policy#consent", label: "Consent" },
  { href: "/privacy-policy#cookies", label: "Cookie Policy" },
];

const pillars = ["UPLOAD", "ORGANISE", "PRESERVE", "MANAGE", "SHARE"];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        {/* Brand column */}
        <div className={styles.brand}>
          <div className={styles.logo}>
            <svg width="36" height="36" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="16" fill="url(#flg)" />
              <path d="M16 8L20 14H12L16 8Z" fill="white" opacity="0.9"/>
              <circle cx="16" cy="19" r="4" fill="white" opacity="0.95"/>
              <defs>
                <linearGradient id="flg" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#2563eb"/>
                  <stop offset="0.5" stopColor="#7c3aed"/>
                  <stop offset="1" stopColor="#4f46e5"/>
                </linearGradient>
              </defs>
            </svg>
            <div>
              <div className={styles.logoMain}>AI Mentor Global</div>
              <div className={styles.logoTagline}>A brand by AI Mentor Private Limited</div>
            </div>
          </div>
          <div className={styles.dpiit}>
            <span className={styles.dpiitBadge}>DPIIT Recognised Startup</span>
            <span className={styles.dpiitCert}>Certificate No. DIPP277439</span>
          </div>
          <div className={styles.pillars}>
            {pillars.map((p, i) => (
              <span key={p} className={styles.pillarItem}>
                <span>{p}</span>
                {i < pillars.length - 1 && <span className={styles.pillarArrow}>→</span>}
              </span>
            ))}
          </div>
        </div>

        {/* Nav column */}
        <div className={styles.linksCol}>
          <div className={styles.linksGroup}>
            <h4 className={styles.linksTitle}>Navigation</h4>
            <nav>
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className={styles.footerLink}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Contact column */}
        <div className={styles.linksCol}>
          <div className={styles.linksGroup}>
            <h4 className={styles.linksTitle}>Contact</h4>
            <p className={styles.address}>
              Sahyog Space, 7th Floor,<br />
              Above Kotak Mahindra Bank,<br />
              New Alkapuri, Vadodara – 390021<br />
              Gujarat, India
            </p>
            <a href="tel:+919825040073" className={styles.contactLink}>+91 98250 40073</a>
            <a href="mailto:info@aimentorglobal.com" className={styles.contactLink}>info@aimentorglobal.com</a>
            <a href="mailto:support@aimentorglobal.com" className={styles.contactLink}>support@aimentorglobal.com</a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <div className="container">
          <div className={styles.bottomInner}>
            <p className={styles.copyright}>
              © 2026 AI Mentor Private Limited. All rights reserved.
            </p>
            <div className={styles.legalLinks}>
              {legalLinks.map((link) => (
                <Link key={link.href} href={link.href} className={styles.legalLink}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
