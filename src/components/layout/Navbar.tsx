"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Globe } from "lucide-react";
import styles from "./Navbar.module.css";

const navLinks = [
  { href: "/about", label: "About Us" },
  { href: "#product", label: "Product" },
  { href: "#individuals", label: "Individuals" },
  { href: "#families", label: "Families" },
  { href: "#corporates", label: "Corporates" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
        <div className={`container ${styles.inner}`}>
          {/* Logo */}
          <Link href="/" className={styles.logo}>
            <div className={styles.logoMark}>
              <img
                src="/logo_icon.png"
                alt="AI Mentor Global icon"
                width={38}
                height={38}
                style={{ display: "block", objectFit: "contain" }}
              />
            </div>
            <div className={styles.logoText}>
              <span className={styles.logoMain}>AI Mentor</span>
              <span className={styles.logoSub}>Global</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className={styles.desktopNav} aria-label="Primary navigation">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className={styles.navLink}>
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Language Selector */}
          <div className={styles.langWrapper}>
            <select aria-label="Select preferred language" className={styles.langSelect} defaultValue="en">
              <option value="en">EN</option>
              <option value="hi">HI</option>
              <option value="gu">GU</option>
            </select>
            <Globe size={14} className={styles.langIcon} />
          </div>

          {/* CTA */}
          <a href="https://identity-suite-ai.lovable.app/" target="_blank" rel="noopener noreferrer" className={styles.havenLink}>
            Your Digital Haven <span>→</span>
          </a>

          {/* Mobile toggle */}
          <button
            className={styles.menuToggle}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}>
        <nav className={styles.mobileNav} aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.mobileNavLink}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://identity-suite-ai.lovable.app/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mobileHavenLink}
            onClick={() => setMenuOpen(false)}
          >
            Your Digital Haven <span>→</span>
          </a>

          {/* Mobile Language Selector */}
          <div className={styles.mobileLangWrapper}>
            <select aria-label="Select preferred language" className={styles.mobileLangSelect} defaultValue="en">
              <option value="en">English</option>
              <option value="hi">हिन्दी</option>
              <option value="gu">ગુજરાતી</option>
            </select>
          </div>
        </nav>
      </div>
    </>
  );
}
