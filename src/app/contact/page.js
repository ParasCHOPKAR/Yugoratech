export const metadata = {
  title: 'Contact Us | YugoraTech',
  description: 'Get in touch with YugoraTech for your next digital project, website development, software, or marketing inquiry.'
};

export default function Contact() {
  return (
    <main style={{ paddingTop: '60px', minHeight: '100vh', paddingBottom: '80px' }}>
      <div className="container">
        <h1 className="section-title" style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '20px' }}>Contact <span className="gradient-text">Us</span></h1>
        <p style={{ textAlign: 'center', maxWidth: '650px', margin: '0 auto 60px', color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: '1.6' }}>
          Have a project in mind, need a consultation, or ready to scale your business? We would love to hear from you. Drop us a message or connect directly.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', maxWidth: '1100px', margin: '0 auto' }}>
          
          {/* Contact Info Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="glass-panel" style={{ padding: '30px', display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#e0f2fe', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-main)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '8px', color: 'var(--text-primary)' }}>Call Us</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', marginBottom: '4px' }}>
                  <a href="tel:+919823919814" style={{ color: 'var(--accent-main)', fontWeight: '600' }}>+91 98239 19814</a>
                </p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Sales &amp; Project Inquiries</p>
              </div>
            </div>

            <div className="glass-panel" style={{ padding: '30px', display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#16a34a"><path d="M20.52 3.48A11.9 11.9 0 0 0 12.06 0C5.46 0 .09 5.37.09 11.97c0 2.11.55 4.17 1.6 6L0 24l6.21-1.63a11.9 11.9 0 0 0 5.85 1.51h.01c6.6 0 11.97-5.37 11.97-11.97a11.9 11.9 0 0 0-3.52-8.43zM12.07 21.88a9.92 9.92 0 0 1-5.06-1.39l-.36-.21-3.75.98 1-3.66-.23-.38a9.9 9.9 0 0 1-1.52-5.25c0-5.48 4.46-9.94 9.94-9.94a9.9 9.9 0 0 1 7.03 2.91 9.9 9.9 0 0 1 2.91 7.03c-.01 5.48-4.47 9.91-9.96 9.91zm5.45-7.44c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" /></svg>
              </div>
              <div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '8px', color: 'var(--text-primary)' }}>WhatsApp Us</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', marginBottom: '4px' }}>
                  <a href="https://wa.me/919823919814" target="_blank" rel="noopener noreferrer" style={{ color: '#16a34a', fontWeight: '600' }}>+91 98239 19814</a>
                </p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Instant chat &amp; quote</p>
              </div>
            </div>

            <div className="glass-panel" style={{ padding: '30px', display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#e0f2fe', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-main)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '8px', color: 'var(--text-primary)' }}>Email Us</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', marginBottom: '4px' }}>
                  <a href="mailto:info@yugoratech.com" style={{ color: 'var(--accent-main)', fontWeight: '600' }}>info@yugoratech.com</a>
                </p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>24/7 dedicated support</p>
              </div>
            </div>
          </div>

          {/* Contact & Quote Form */}
          <div id="quote" className="glass-panel" style={{ padding: '40px' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '10px', color: 'var(--text-primary)' }}>Request a Quote</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', fontSize: '0.98rem' }}>Fill out the details below and we will get back to you with a personalized estimate within 24 hours.</p>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: 'var(--text-secondary)' }}>Full Name</label>
                  <input type="text" style={{ width: '100%', padding: '14px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '1rem', outline: 'none' }} placeholder="John Doe" />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: 'var(--text-secondary)' }}>Phone Number</label>
                  <input type="tel" style={{ width: '100%', padding: '14px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '1rem', outline: 'none' }} placeholder="+91 98239 19814" />
                </div>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: 'var(--text-secondary)' }}>Email Address</label>
                <input type="email" style={{ width: '100%', padding: '14px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '1rem', outline: 'none' }} placeholder="john@example.com" />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: 'var(--text-secondary)' }}>Service Interested In</label>
                <select style={{ width: '100%', padding: '14px', borderRadius: '8px', border: '1px solid #cbd5e1', fontSize: '1rem', outline: 'none', background: '#fff', color: '#334155' }}>
                  <option value="web-dev">Web Development (Static / Dynamic / Next.js)</option>
                  <option value="custom-software">Custom Software &amp; Enterprise Solutions</option>
                  <option value="ecommerce">E-Commerce Website</option>
                  <option value="digital-marketing">Digital Marketing &amp; Social Media</option>
                  <option value="seo-geo">SEO &amp; GEO Optimization</option>
                  <option value="erp-crm">ERP / CRM / HRMS</option>
                  <option value="other">Other Inquiry</option>
                </select>
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500', color: 'var(--text-secondary)' }}>Project Description</label>
                <textarea rows="4" style={{ width: '100%', padding: '14px', borderRadius: '8px', border: '1px solid #cbd5e1', resize: 'vertical', fontSize: '1rem', outline: 'none', fontFamily: 'inherit' }} placeholder="Tell us about your project requirements, goals, or budget..."></textarea>
              </div>
              <button type="button" className="btn-primary" style={{ marginTop: '10px', fontSize: '1.1rem', width: '100%' }}>Submit Quote Request</button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
