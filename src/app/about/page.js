import Link from 'next/link';

export const metadata = {
  title: 'About Us | YugoraTech',
  description: 'Learn more about YugoraTech and our mission to empower businesses with advanced digital solutions.'
};

export default function About() {
  return (
    <main style={{ paddingTop: '60px', minHeight: '100vh', paddingBottom: '80px' }}>
      <div className="container">
        <h1 className="section-title" style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '20px' }}>
          About <span className="gradient-text">YugoraTech</span>
        </h1>
        <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px', color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: '1.6' }}>
          We are a team of passionate technologists, creative thinkers, and strategic marketers dedicated to building digital solutions that drive real-world results.
        </p>

        {/* Story Section */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '40px', marginBottom: '60px' }}>
          <div className="glass-panel" style={{ padding: '40px' }}>
            <h2 style={{ marginBottom: '20px', color: 'var(--text-primary)', fontSize: '2rem' }}>Our Story</h2>
            <p style={{ lineHeight: '1.8', color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '16px' }}>
              Founded with the vision to bridge the gap between complex technology and business growth, YugoraTech started as a small team of developers and has rapidly grown into a full-service digital agency. We recognized early on that a beautiful website is only half the battle; true digital success requires a holistic approach encompassing robust software engineering, data-driven SEO, and targeted marketing.
            </p>
            <p style={{ lineHeight: '1.8', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
              Today, we partner with startups and enterprise clients worldwide, acting as their dedicated tech arm. From architecting scalable web applications to executing high-ROI marketing campaigns, our focus remains singular: your growth.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', marginBottom: '60px' }}>
          <div className="glass-panel" style={{ padding: '40px' }}>
            <div style={{ width: '50px', height: '50px', background: 'var(--accent-main)', borderRadius: '12px', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
            <h2 style={{ marginBottom: '16px', color: 'var(--text-primary)', fontSize: '1.8rem' }}>Our Mission</h2>
            <p style={{ lineHeight: '1.7', color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
              To deliver innovative, scalable, and robust digital solutions that empower businesses to thrive in a digital-first world. We simplify the complex, turning ambitious ideas into market-ready realities.
            </p>
          </div>

          <div className="glass-panel" style={{ padding: '40px' }}>
            <div style={{ width: '50px', height: '50px', background: 'var(--accent-main)', borderRadius: '12px', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>
            </div>
            <h2 style={{ marginBottom: '16px', color: 'var(--text-primary)', fontSize: '1.8rem' }}>Our Vision</h2>
            <p style={{ lineHeight: '1.7', color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
              To be the globally recognized digital partner of choice, known for engineering excellence, creative problem-solving, and an unwavering commitment to client success. We aim to shape the future of tech.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <h2 className="section-title" style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '40px' }}>
          Our Core <span className="gradient-text">Values</span>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '30px', marginBottom: '60px' }}>
          {[
            { title: 'Innovation', desc: 'We constantly explore emerging technologies to keep you ahead of the curve.' },
            { title: 'Excellence', desc: 'We never settle for "good enough". Quality is woven into every line of code.' },
            { title: 'Transparency', desc: 'Clear communication, honest pricing, and no hidden surprises.' },
            { title: 'Collaboration', desc: 'We work with you, not just for you. Your success is our shared goal.' }
          ].map((val, i) => (
            <div key={i} style={{ padding: '30px', background: '#f8fafc', borderRadius: '16px', border: '1px solid #e2e8f0', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '12px', color: '#0f172a' }}>{val.title}</h3>
              <p style={{ color: '#64748b', lineHeight: '1.6', fontSize: '0.95rem' }}>{val.desc}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="glass-panel" style={{ padding: '48px', textAlign: 'center', background: 'linear-gradient(135deg, rgba(0, 115, 255, 0.05), rgba(0, 225, 255, 0.08))', border: '1px solid rgba(0, 115, 255, 0.15)' }}>
          <h2 style={{ fontSize: '2.2rem', marginBottom: '16px', color: 'var(--text-primary)' }}>Ready to Build Something Great?</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 30px', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
            Let us help transform your vision into reality. Talk to our engineering team today.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn-primary" style={{ display: 'inline-block' }}>Get in Touch</Link>
            <Link href="/services" style={{ padding: '14px 28px', borderRadius: '8px', border: '1px solid var(--accent-main)', color: 'var(--accent-main)', fontWeight: '600', textDecoration: 'none' }}>Explore Services</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
