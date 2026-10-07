'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footerWrapper}>
      {/* Top CTA Section */}
      <div className={styles.ctaSection}>
        <div className={styles.ctaContainer}>
          <div className={styles.ctaLeft}>
            <div className={styles.ctaBadge}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>
              LET'S GROW TOGETHER
            </div>
            <h2 className={styles.ctaTitle}>
              Ready to Take Your<br />
              Business to the <span>Next Level?</span>
            </h2>
            <p className={styles.ctaDesc}>
              Get a free consultation and let's discuss how YugoraTech can help you achieve your digital goals.
            </p>
          </div>

          <div className={styles.ctaCenter}>
            <div className={styles.featureBadge}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0073ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13.5 10.5 21 3"></path><path d="M16 3h5v5"></path><path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5"></path></svg>
              <span>Tailored Strategy</span>
            </div>
            <div className={styles.featureBadge}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0073ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              <span>Expert Guidance</span>
            </div>
            <div className={styles.featureBadge}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0073ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
              <span>Result Driven Approach</span>
            </div>
          </div>

          <div className={styles.ctaRight}>
            <Link href="/contact" className={styles.ctaButton}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              Get a Free Consultation
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </Link>
            <span className={styles.ctaSubtext}>No commitment. Just expert advice.</span>
          </div>
        </div>
        
        {/* Curvy background separator between CTA and Footer */}
        <div className={styles.curveSeparator}>
           <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
             <path d="M0,60 C400,120 1000,0 1440,60 L1440,120 L0,120 Z" fill="#061121" />
           </svg>
        </div>
      </div>

      <div className={styles.footerMain}>
        <div className={styles.footerContainer}>
          <div className={styles.footerGrid}>
            
            {/* Column 1: Brand Info */}
            <div className={styles.brandCol}>
              <Link href="/">
                <Image
                  src="/white_logo.png"
                  alt="Yugora Tech Logo"
                  width={220}
                  height={65}
                  style={{ objectFit: 'contain', marginBottom: '24px' }}
                />
              </Link>
              <p className={styles.brandDesc}>
                We are a full-service IT and Digital Marketing agency helping businesses grow with modern websites, custom software, e-commerce solutions, and data-driven marketing strategies.
              </p>
              
              <div className={styles.socialIcons}>
                <a href="#" aria-label="Facebook"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></a>
                <a href="#" aria-label="LinkedIn"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z" /></svg></a>
                <a href="#" aria-label="Instagram"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
                <a href="#" aria-label="YouTube"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33zM9.75 15.02l-.01-6.54L15.5 11.75l-5.75 3.27z" /></svg></a>
              </div>

              <div className={styles.projectBox}>
                <div className={styles.projectIcon}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0073ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>
                </div>
                <div className={styles.projectText}>
                  <span>Have a Project in Mind?</span>
                  <Link href="/contact">Let's Talk &rarr;</Link>
                </div>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className={styles.linksCol}>
              <h4>Quick Links</h4>
              <ul className={styles.footerLinks}>
                <li><Link href="/"><span>Home</span></Link></li>
                <li><Link href="/about"><span>About Us</span></Link></li>
                <li><Link href="/services"><span>Services</span></Link></li>
                <li><Link href="/blog"><span>Blog</span></Link></li>
                <li><Link href="/contact"><span>Contact Us</span></Link></li>
                <li><Link href="#"><span>Career</span></Link></li>
              </ul>
            </div>

            {/* Column 3: Our Services */}
            <div className={styles.servicesCol}>
              <h4>Our Services</h4>
              <ul className={styles.servicesLinks}>
                <li><Link href="/services/static-website"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg><span>Website Development</span></Link></li>
                <li><Link href="/services/ecommerce-website"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg><span>E-Commerce Development</span></Link></li>
                <li><Link href="/services/customised-software"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg><span>Custom Software Development</span></Link></li>
                <li><Link href="/services/seo"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 3v18h18"/><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/></svg><span>SEO &amp; GEO (Generative Engine)</span></Link></li>
                <li><Link href="/services/social-media-marketing"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg><span>Social Media Marketing</span></Link></li>
                <li><Link href="/services/digital-marketing"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg><span>Paid Ads (Google/Facebook)</span></Link></li>
                <li><Link href="/contact"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg><span>Maintenance & Support</span></Link></li>
              </ul>
            </div>

            {/* Column 4: Contact & Newsletter */}
            <div className={styles.contactNewsletterCol}>
              <div className={styles.contactSection}>
                <h4>Contact Info</h4>
                <ul className={styles.contactList}>
                  <li>
                    <div className={styles.contactIcon}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg></div>
                    <div className={styles.contactDetails}>
                      <strong>+91 98239 19814</strong>
                      <span>Sales & Info</span>
                    </div>
                  </li>
                  <li>
                    <div className={styles.contactIcon}><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.52 3.48A11.9 11.9 0 0 0 12.06 0C5.46 0 .09 5.37.09 11.97c0 2.11.55 4.17 1.6 6L0 24l6.21-1.63a11.9 11.9 0 0 0 5.85 1.51h.01c6.6 0 11.97-5.37 11.97-11.97a11.9 11.9 0 0 0-3.52-8.43zm-8.45 18.4a9.92 9.92 0 0 1-5.06-1.39l-.36-.21-3.75.98 1-3.66-.23-.38a9.9 9.9 0 0 1-1.52-5.25c0-5.48 4.46-9.94 9.94-9.94a9.9 9.9 0 0 1 7.03 2.91 9.9 9.9 0 0 1 2.91 7.03c-.01 5.48-4.47 9.91-9.96 9.91zm5.45-7.44c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"/></svg></div>
                    <div className={styles.contactDetails}>
                      <strong>+91 98239 19814</strong>
                      <span>WhatsApp</span>
                    </div>
                  </li>
                  <li>
                    <div className={styles.contactIcon}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></div>
                    <div className={styles.contactDetails}>
                      <strong>info@yugoratech.com</strong>
                      <span>Drop us an email</span>
                    </div>
                  </li>
                  <li>
                    <div className={styles.contactIcon}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg></div>
                    <div className={styles.contactDetails}>
                      <strong>Pune, Maharashtra, India</strong>
                      <span>We work with clients worldwide</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className={styles.newsletterSection}>
                <h4>Newsletter</h4>
                <p>Subscribe to get the latest updates, insights and digital growth tips.</p>
                <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
                  <svg className={styles.mailIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                  <input type="email" placeholder="Enter your email address" required />
                  <button type="submit" aria-label="Subscribe">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </button>
                </form>
              </div>
            </div>
            
          </div>

          {/* Stats Bar */}
          <div className={styles.statsBar}>
            <div className={styles.statItem}>
              <div className={styles.statIcon}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg></div>
              <div className={styles.statText}>
                <strong>200+</strong>
                <span>Happy Clients</span>
              </div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statIcon}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg></div>
              <div className={styles.statText}>
                <strong>500+</strong>
                <span>Projects Completed</span>
              </div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statIcon}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg></div>
              <div className={styles.statText}>
                <strong>5+</strong>
                <span>Years Experience</span>
              </div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statIcon}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg></div>
              <div className={styles.statText}>
                <strong>4.9/5</strong>
                <span>Client Satisfaction</span>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className={styles.bottomBar}>
            <div className={styles.copyright}>
              &copy; {new Date().getFullYear()} YugoraTech. All rights reserved.
            </div>
            <div className={styles.legalLinks}>
              <Link href="#">Privacy Policy</Link>
              <span className={styles.divider}>|</span>
              <Link href="#">Terms &amp; Conditions</Link>
              <span className={styles.divider}>|</span>
              <Link href="#">Sitemap</Link>
            </div>
            <div className={styles.slogan}>
              Innovate <span className={styles.dot}>•</span> Develop <span className={styles.dot}>•</span> Market <span className={styles.dot}>•</span> <span className={styles.grow}>Grow</span>
            </div>
            <button className={styles.backToTop} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to Top">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="18 15 12 9 6 15"></polyline></svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
