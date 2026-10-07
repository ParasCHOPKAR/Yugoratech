'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { servicesData, supportServices } from './ServiceData';
import { ArrowRight, ChevronDown, ChevronRight } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [openMobileCategories, setOpenMobileCategories] = useState({});
  const [forceCloseMegaMenu, setForceCloseMegaMenu] = useState(false);

  const isActive = (path) => {
    if (path === '/') return pathname === '/';
    return pathname?.startsWith(path);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
    setOpenMobileCategories({});
    setForceCloseMegaMenu(true);
  };

  const toggleMobileCategory = (idx) => {
    setOpenMobileCategories((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const handleServicesClick = (e) => {
    e.preventDefault();
    setForceCloseMegaMenu(true);
  };

  const handleServicesMouseLeave = () => {
    if (forceCloseMegaMenu) {
      setForceCloseMegaMenu(false);
    }
  };

  return (
    <>
      {/* Topbar */}
      <div className={styles.topbar}>
        <div className={styles.navContainer}>
          <div className={styles.topbarContent}>
            <div className={styles.socialIcons}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z" />
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33zM9.75 15.02l-.01-6.54L15.5 11.75l-5.75 3.27z" />
                </svg>
              </a>
            </div>
            <div className={styles.contactInfo}>
              <a href="tel:+919823919814" className={styles.topbarContactItem}>
                <span className={styles.topbarBadge}>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <span>+91 98239 19814 - Sales &amp; Info</span>
              </a>
              <span className={styles.topbarDivider}>|</span>
              <a href="https://wa.me/919823919814" target="_blank" rel="noopener noreferrer" className={styles.topbarContactItem}>
                <span className={styles.topbarBadge}>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.52 3.48A11.9 11.9 0 0 0 12.06 0C5.46 0 .09 5.37.09 11.97c0 2.11.55 4.17 1.6 6L0 24l6.21-1.63a11.9 11.9 0 0 0 5.85 1.51h.01c6.6 0 11.97-5.37 11.97-11.97a11.9 11.9 0 0 0-3.52-8.43zM12.07 21.88a9.92 9.92 0 0 1-5.06-1.39l-.36-.21-3.75.98 1-3.66-.23-.38a9.9 9.9 0 0 1-1.52-5.25c0-5.48 4.46-9.94 9.94-9.94a9.9 9.9 0 0 1 7.03 2.91 9.9 9.9 0 0 1 2.91 7.03c-.01 5.48-4.47 9.91-9.96 9.91zm5.45-7.44c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
                  </svg>
                </span>
                <span>+91 98239 19814 - WhatsApp</span>
              </a>
              <span className={styles.topbarDivider}>|</span>
              <a href="mailto:info@yugoratech.com" className={styles.topbarContactItem}>
                <span className={styles.topbarBadge}>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </span>
                <span>info@yugoratech.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          <div className={styles.navContent}>
            <div className={styles.logo}>
              <Link href="/">
                <Image
                  src="/image/yugora_tech_logo.png"
                  alt="Yugora Tech Logo"
                  width={200}
                  height={60}
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <ul className={styles.navLinks}>
              <li>
                <Link
                  href="/"
                  className={`${styles.navLinkItem} ${isActive('/') ? styles.activeLink : ''}`}
                >
                  <span>Home</span>
                </Link>
              </li>

              <li className={styles.hasDropdown}>
                <Link
                  href="/about"
                  className={`${styles.navLinkItem} ${isActive('/about') ? styles.activeLink : ''}`}
                >
                  <span>About Us</span>
                  <ChevronDown className={styles.dropdownChevron} size={14} strokeWidth={2.5} />
                </Link>
              </li>

              <li 
                className={styles.hasDropdown}
                onMouseLeave={handleServicesMouseLeave}
              >
                <button
                  type="button"
                  className={`${styles.navLinkItem} ${isActive('/services') ? styles.activeLink : ''}`}
                  aria-expanded={!forceCloseMegaMenu ? "true" : "false"}
                  aria-haspopup="true"
                  onClick={handleServicesClick}
                >
                  <span>Services</span>
                  <ChevronDown className={styles.dropdownChevron} size={14} strokeWidth={2.5} />
                </button>
                {!forceCloseMegaMenu && (
                  <div className={styles.megaMenu}>
                  <div className={styles.megaMenuInner}>
                    <div className={styles.servicesGrid}>
                      {servicesData.map((col, idx) => (
                        <div key={idx} className={styles.menuCol}>
                          <span className={styles.colNumber}>{col.number}</span>
                          <h4>{col.title}</h4>
                          <ul>
                            {col.items.map((item, i) => {
                              const Icon = item.icon;
                              return (
                                <li key={i}>
                                  <Link href={item.path} className={styles.serviceLink} onClick={closeMenu}>
                                    <Icon className={styles.itemIcon} size={18} strokeWidth={2} />
                                    <span>{item.name}</span>
                                    <ArrowRight className={styles.hoverArrow} size={14} />
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      ))}
                    </div>

                    <div className={styles.supportSection}>
                      <h5>SUPPORT & MAINTENANCE</h5>
                      <div className={styles.supportGrid}>
                        {supportServices.map((item, i) => {
                          const Icon = item.icon;
                          return (
                            <Link key={i} href={item.path} className={styles.supportLink} onClick={closeMenu}>
                              <Icon className={styles.itemIcon} size={16} strokeWidth={2} />
                              <span>{item.name}</span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>

                    <div className={styles.bottomCtaSection}>
                      <div className={styles.ctaButtons}>
                        <Link href="/services" className={styles.exploreBtn} onClick={closeMenu}>
                          Explore All Services <ArrowRight size={16} />
                        </Link>
                        <Link href="/contact" className={styles.bookBtn} onClick={closeMenu}>
                          Book a Consultation
                        </Link>
                      </div>
                      <div className={styles.features}>
                        <span>✓ Result Driven</span>
                        <span>✓ Dedicated Support</span>
                        <span>✓ Transparent Process</span>
                        <span>✓ Affordable Pricing</span>
                      </div>
                    </div>
                  </div>
                </div>
                )}
              </li>

              <li>
                <Link
                  href="/blog"
                  className={`${styles.navLinkItem} ${isActive('/blog') ? styles.activeLink : ''}`}
                >
                  <span>Blog</span>
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className={`${styles.navLinkItem} ${isActive('/contact') ? styles.activeLink : ''}`}
                >
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>

            {/* Nav Right */}
            <div className={styles.navRight}>
              <a href="tel:+919823919814" className={styles.navPhone}>
                <span className={styles.phoneIconBadge}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </span>
                <span>+91 98239 19814</span>
              </a>

              <Link href="/contact" className={styles.quoteBtn}>
                <svg className={styles.boltIcon} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
                <span>Get a Quote</span>
              </Link>

              {/* Mobile menu hamburger toggle */}
              <button
                type="button"
                className={styles.mobileMenuToggle}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Navigation Menu"
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  {mobileMenuOpen ? (
                    <>
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </>
                  ) : (
                    <>
                      <line x1="3" y1="12" x2="21" y2="12"></line>
                      <line x1="3" y1="6" x2="21" y2="6"></line>
                      <line x1="3" y1="18" x2="21" y2="18"></line>
                    </>
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        {mobileMenuOpen && (
          <div className={styles.mobileNavDrawer}>
            <ul>
              <li>
                <Link
                  href="/"
                  className={isActive('/') ? styles.activeMobileLink : ''}
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={isActive('/about') ? styles.activeMobileLink : ''}
                  onClick={closeMenu}
                >
                  About Us
                </Link>
              </li>
              
              {/* Mobile Services Accordion */}
              <li className={styles.mobileAccordionItem}>
                <button 
                  className={styles.mobileAccordionHeader}
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  aria-expanded={mobileServicesOpen}
                >
                  <span className={isActive('/services') ? styles.activeMobileLink : ''}>Services</span>
                  <ChevronDown 
                    className={styles.mobileChevron} 
                    style={{ transform: mobileServicesOpen ? 'rotate(180deg)' : 'rotate(0)' }} 
                    size={16} 
                  />
                </button>
                
                {mobileServicesOpen && (
                  <div className={styles.mobileAccordionContent}>
                    {servicesData.map((col, idx) => (
                      <div key={idx} className={styles.mobileCategory}>
                        <button 
                          className={styles.mobileCategoryHeader}
                          onClick={() => toggleMobileCategory(idx)}
                          aria-expanded={openMobileCategories[idx]}
                        >
                          {col.title}
                          <ChevronRight 
                            size={14} 
                            style={{ transform: openMobileCategories[idx] ? 'rotate(90deg)' : 'rotate(0)', transition: 'transform 0.2s' }} 
                          />
                        </button>
                        
                        {openMobileCategories[idx] && (
                          <ul className={styles.mobileCategoryList}>
                            {col.items.map((item, i) => {
                              const Icon = item.icon;
                              return (
                                <li key={i}>
                                  <Link href={item.path} onClick={closeMenu}>
                                    <Icon size={14} className={styles.mobileCategoryIcon} />
                                    {item.name}
                                  </Link>
                                </li>
                              )
                            })}
                          </ul>
                        )}
                      </div>
                    ))}

                    <div className={styles.mobileCategory}>
                      <button 
                        className={styles.mobileCategoryHeader}
                        onClick={() => toggleMobileCategory('support')}
                        aria-expanded={openMobileCategories['support']}
                      >
                        SUPPORT & MAINTENANCE
                        <ChevronRight 
                          size={14} 
                          style={{ transform: openMobileCategories['support'] ? 'rotate(90deg)' : 'rotate(0)', transition: 'transform 0.2s' }} 
                        />
                      </button>
                      
                      {openMobileCategories['support'] && (
                        <ul className={styles.mobileCategoryList}>
                          {supportServices.map((item, i) => {
                            const Icon = item.icon;
                            return (
                              <li key={i}>
                                <Link href={item.path} onClick={closeMenu}>
                                  <Icon size={14} className={styles.mobileCategoryIcon} />
                                  {item.name}
                                </Link>
                              </li>
                            )
                          })}
                        </ul>
                      )}
                    </div>
                    
                    <Link href="/services" className={styles.mobileExploreBtn} onClick={closeMenu}>
                      Explore All Services <ArrowRight size={14} />
                    </Link>
                  </div>
                )}
              </li>

              <li>
                <Link
                  href="/blog"
                  className={isActive('/blog') ? styles.activeMobileLink : ''}
                  onClick={closeMenu}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={isActive('/contact') ? styles.activeMobileLink : ''}
                  onClick={closeMenu}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}
