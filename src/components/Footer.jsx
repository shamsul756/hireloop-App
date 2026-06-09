"use client";

import Image from "next/image";
import Link from "next/link";

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const PinterestIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const productLinks = [
  { label: "Job discovery", href: "#" },
  { label: "Worker AI", href: "#" },
  { label: "Companies", href: "#" },
  { label: "Salary data", href: "#" },
];

const navigationLinks = [
  { label: "Help center", href: "#" },
  { label: "Career library", href: "#" },
  { label: "Contact", href: "#" },
];

const resourceLinks = [
  { label: "Brand Guideline", href: "#" },
  { label: "Newsroom", href: "#" },
];
const linkStyle = {
  color: "#d1d5db",
  textDecoration: "none",
  fontSize: "0.875rem",
  transition: "color 0.2s",
  display: "inline-block",
};

const headingStyle = {
  color: "#2563EB",
  fontSize: "0.9rem",
  fontWeight: 600,
  marginBottom: "20px",
  marginTop: 0,
  letterSpacing: "0.01em",
};
export default function Footer() {
  return (
    <>
      <style>{`
        .footer-root {
          background-color: #0d0d0d;
          border-top: 1px solid #1f1f1f;
          padding: 60px 0 32px;
          font-family: 'Inter', 'Segoe UI', sans-serif;
        }
        .footer-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr 1fr;
          gap: 48px;
          margin-bottom: 60px;
        }
        .footer-brand-text {
          color: #9ca3af;
          font-size: 0.875rem;
          line-height: 1.6;
          margin-top: 16px;
          margin-bottom: 0;
        }
        .footer-ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .footer-ul li {
          margin-bottom: 12px;
        }
        .footer-link:hover {
          color: #ffffff !important;
        }
        .footer-divider {
          height: 1px;
          background-color: #1f2937;
          margin-bottom: 28px;
        }
        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
        }
        .footer-socials {
          display: flex;
          gap: 10px;
          align-items: center;
        }
        .social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 8px;
          text-decoration: none;
          transition: background 0.2s, color 0.2s;
          flex-shrink: 0;
        }
        .social-btn-default {
          background-color: #1f2937;
          color: #d1d5db;
        }
        .social-btn-default:hover {
          background-color: #374151;
          color: #fff;
        }
        .social-btn-pinterest {
          background-color: #7c3aed;
          color: #fff;
        }
        .social-btn-pinterest:hover {
          background-color: #6d28d9;
        }
        .footer-copy {
          display: flex;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
        }
        .footer-copy-text {
          color: #6b7280;
          font-size: 0.8rem;
          white-space: nowrap;
        }
        .footer-legal {
          display: flex;
          gap: 4px;
          align-items: center;
        }
        .footer-legal-link {
          color: #d1d5db;
          text-decoration: none;
          font-size: 0.8rem;
          transition: color 0.2s;
        }
        .footer-legal-link:hover {
          color: #fff;
        }
        .footer-legal-sep {
          color: #4b5563;
          font-size: 0.8rem;
        }

        /* Tablet: 2-column grid */
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 36px;
            margin-bottom: 40px;
          }
          .footer-inner {
            padding: 0 28px;
          }
          .footer-root {
            padding: 48px 0 28px;
          }
        }

        /* Mobile: single column */
        @media (max-width: 560px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 28px;
            margin-bottom: 32px;
          }
          .footer-inner {
            padding: 0 20px;
          }
          .footer-root {
            padding: 40px 0 24px;
          }
          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 20px;
          }
          .footer-copy {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }
          .footer-copy-text {
            white-space: normal;
          }
        }
      `}</style>

      <footer className="footer-root">
        <div className="footer-inner">

          {/* Top grid */}
          <div className="footer-grid">

            {/* Brand */}
            <div>
              <Image
                src="/images/logo.png"
                alt="Hireloop logo"
                width={160}
                height={48}
                style={{ objectFit: "contain", height: "auto" }}
              />
              <p className="footer-brand-text">
                The AI-native career platform. Built for people who take their
                work seriously.
              </p>
            </div>

            {/* Product */}
            <div>
              <h3 style={headingStyle}>Product</h3>
              <ul className="footer-ul">
                {productLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} style={linkStyle} className="footer-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Navigations */}
            <div>
              <h3 style={headingStyle}>Navigations</h3>
              <ul className="footer-ul">
                {navigationLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} style={linkStyle} className="footer-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 style={headingStyle}>Resources</h3>
              <ul className="footer-ul">
                {resourceLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} style={linkStyle} className="footer-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="footer-divider" />

          {/* Bottom bar */}
          <div className="footer-bottom">

            {/* Social icons */}
            <div className="footer-socials">
              <a href="#" aria-label="Facebook" className="social-btn social-btn-default">
                <FacebookIcon />
              </a>
              <a href="#" aria-label="Pinterest" className="social-btn social-btn-pinterest">
                <PinterestIcon />
              </a>
              <a href="#" aria-label="LinkedIn" className="social-btn social-btn-default">
                <LinkedInIcon />
              </a>
            </div>

            {/* Copyright + legal */}
            <div className="footer-copy">
              <span className="footer-copy-text">
                Copyright 2026 —hire loop
              </span>
              <div className="footer-legal">
                <Link href="#" className="footer-legal-link">Terms &amp; Policy</Link>
                <span className="footer-legal-sep"> - </span>
                <Link href="#" className="footer-legal-link">Privacy Guideline</Link>
              </div>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}