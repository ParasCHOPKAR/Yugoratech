"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from './page.module.css';

export default function Home() {
  const images = [
    '/image/hero_image01.png',
    '/image/hero_img/custom_software.png',
    '/image/hero_img/digitalmarketing_01.png',
    '/image/hero_img/dynamic_01.png',
    '/image/hero_img/ecommerce_01.png',
    '/image/hero_img/seo_geo.png',
    '/image/hero_img/socialmedia_01.png',
    '/image/hero_img/software_01.png',
    '/image/hero_img/static_01.png'
  ];
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIdx((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <main>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBgPattern}></div>
        <div className={styles.heroContainer}>
          <div className={styles.heroGrid}>
            
            {/* Left Side Content */}
            <div className={styles.heroContent}>
              <div className={styles.heroBadge}>
                <span className={styles.heroBadgeDot}></span>
                <span>End-to-End Digital Agency</span>
              </div>

              <h1 className={styles.title}>
                Scale Your Brand <br />
                with{' '}
                <span className={styles.expertSolutionsWrapper}>
                  <span className={styles.expertSolutionsText}>Expert Solutions</span>
                  <svg className={styles.expertSolutionsUnderline} viewBox="0 0 320 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 14C65 4 195 2 315 9" stroke="url(#bluePurpleGrad)" strokeWidth="4.5" strokeLinecap="round" />
                    <path d="M50 18C125 12 225 11 300 15" stroke="url(#bluePurpleGrad)" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
                    <defs>
                      <linearGradient id="bluePurpleGrad" x1="0" y1="0" x2="320" y2="0" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#0073ff" />
                        <stop offset="0.6" stopColor="#7c3aed" />
                        <stop offset="1" stopColor="#a855f7" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </h1>

              <p className={styles.subtitle}>
                We deliver comprehensive IT services tailored to your needs. From Static &amp; Dynamic{' '}
                <span className={styles.blueHighlight}>Websites</span> and{' '}
                <span className={styles.blueHighlight}>E-Commerce</span> platforms to{' '}
                <span className={styles.blueHighlight}>Custom Software</span>,{' '}
                <span className={styles.blueHighlight}>SEO/GEO</span>, and full-scale{' '}
                <span className={styles.blueHighlight}>Digital &amp; Social Media Marketing</span>.
              </p>

              {/* CTA Buttons */}
              <div className={styles.ctaGroup}>
                <Link href="/services" className={styles.btnExplore}>
                  <span>Explore Services</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>

                <Link href="/contact" className={styles.btnConsult}>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#0073ff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <span>Book Consultation</span>
                </Link>
              </div>

              {/* Trust Badges */}
              <div className={styles.trustBadges}>
                <div className={styles.trustBadgeItem}>
                  <div className={styles.trustIconCircle}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0073ff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                    </svg>
                  </div>
                  <div className={styles.trustText}>
                    <span>Result</span>
                    <span>Driven</span>
                  </div>
                </div>

                <div className={styles.trustBadgeItem}>
                  <div className={styles.trustIconCircle}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0073ff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <div className={styles.trustText}>
                    <span>Dedicated</span>
                    <span>Support</span>
                  </div>
                </div>

                <div className={styles.trustBadgeItem}>
                  <div className={styles.trustIconCircle}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0073ff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                  <div className={styles.trustText}>
                    <span>Transparent</span>
                    <span>Process</span>
                  </div>
                </div>

                <div className={styles.trustBadgeItem}>
                  <div className={styles.trustIconCircle}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0073ff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="8" r="6"></circle>
                      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
                    </svg>
                  </div>
                  <div className={styles.trustText}>
                    <span>Affordable</span>
                    <span>Pricing</span>
                  </div>
                </div>
              </div>

              {/* Stats Card */}
              <div className={styles.statsCard}>
                <div className={styles.statItem}>
                  <div className={styles.statIconBox}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0073ff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                      <polyline points="2 17 12 22 22 17"></polyline>
                      <polyline points="2 12 12 17 22 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <div className={styles.statNumber}>Strategy</div>
                    <div className={styles.statLabel}>Data-Driven</div>
                  </div>
                </div>

                <div className={styles.statItem}>
                  <div className={styles.statIconBox}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0073ff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 20h9"></path>
                      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                    </svg>
                  </div>
                  <div>
                    <div className={styles.statNumber}>Design</div>
                    <div className={styles.statLabel}>Modern UI/UX</div>
                  </div>
                </div>

                <div className={styles.statItem}>
                  <div className={styles.statIconBox}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0073ff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="16 18 22 12 16 6"></polyline>
                      <polyline points="8 6 2 12 8 18"></polyline>
                    </svg>
                  </div>
                  <div>
                    <div className={styles.statNumber}>Code</div>
                    <div className={styles.statLabel}>High Performance</div>
                  </div>
                </div>

                <div className={styles.statItem}>
                  <div className={styles.statIconBox}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0073ff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <div className={styles.statNumber}>Support</div>
                    <div className={styles.statLabel}>24/7 Maintenance</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side Visual */}
            <div className={styles.heroVisual}>
              {images.map((src, index) => (
                <Image
                  key={src}
                  src={src}
                  alt={`YugoraTech IT Services ${index + 1}`}
                  width={650}
                  height={650}
                  style={{ maxWidth: index === 0 ? '400px' : '620px' }}
                  className={`${styles.mainHeroImage} ${index === currentImageIdx ? styles.activeImage : styles.inactiveImage}`}
                  priority={index === 0}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section">
        <div className="container">
          <h2 className="section-title">Our <span className="gradient-text">Expertise</span></h2>
          <div className={styles.grid}>
            <div className={styles.serviceCard + ' glass-panel'}>
              <div className={styles.iconWrapper}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
              </div>
              <h3>Web Development</h3>
              <p>Custom, responsive, and high-performance websites tailored to your unique business needs.</p>
            </div>

            <div className={styles.serviceCard + ' glass-panel'}>
              <div className={styles.iconWrapper}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
              </div>
              <h3>Software Solutions</h3>
              <p>Scalable web and mobile applications engineered with the latest technologies.</p>
            </div>

            <div className={styles.serviceCard + ' glass-panel'}>
              <div className={styles.iconWrapper}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
              </div>
              <h3>Digital Marketing</h3>
              <p>Data-driven strategies to boost your online presence and accelerate growth.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
