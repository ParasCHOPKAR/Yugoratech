import Link from 'next/link';

export const metadata = {
  title: 'Our Services | YugoraTech',
  description: 'Explore the comprehensive digital services offered by YugoraTech including web development, custom software, SEO, and digital marketing.'
};

export default function Services() {
  const services = [
    { slug: 'customised-software', title: 'Custom Software', icon: '💻', desc: 'Scalable, robust, and custom-built enterprise software solutions tailored to automate your unique business workflows.', features: ['Enterprise Web Apps', 'SaaS Development', 'API Integrations', 'Legacy Modernization'] },
    { slug: 'static-website', title: 'Web Development', icon: '🌐', desc: 'High-performance static and dynamic websites engineered for speed, accessibility, and exceptional user experience.', features: ['React & Next.js', 'Responsive UI/UX', 'CMS Integration', 'Performance Tuning'] },
    { slug: 'ecommerce-website', title: 'E-Commerce', icon: '🛒', desc: 'Secure, modern online stores designed to maximize conversions and provide seamless shopping experiences.', features: ['Shopify & WooCommerce', 'Custom Checkouts', 'Payment Gateways', 'Inventory Sync'] },
    { slug: 'digital-marketing', title: 'Digital Marketing', icon: '📈', desc: 'Targeted marketing campaigns utilizing data analytics to significantly boost brand visibility and ROI.', features: ['PPC Campaigns', 'Email Marketing', 'Content Strategy', 'Conversion Optimization'] },
    { slug: 'seo', title: 'SEO & GEO', icon: '🔍', desc: 'Data-driven search engine optimization to rank higher on Google and drive high-intent organic traffic.', features: ['Technical SEO', 'Keyword Research', 'Local SEO (GEO)', 'Link Building'] },
    { slug: 'social-media-marketing', title: 'Social Media', icon: '📱', desc: 'Engaging content creation, influencer outreach, and robust community management across all major platforms.', features: ['Brand Strategy', 'Content Creation', 'Community Management', 'Paid Social Ads'] }
  ];

  return (
    <main style={{ paddingTop: '60px', minHeight: '100vh', paddingBottom: '80px' }}>
      <div className="container">
        <h1 className="section-title" style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '20px' }}>Our <span className="gradient-text">Services</span></h1>
        <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 60px', color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: '1.6' }}>
          We provide a comprehensive suite of digital services designed to accelerate your growth. From building the tech foundation to marketing it to the world, we handle it all.
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', marginBottom: '80px' }}>
          {services.map((service, i) => (
            <div key={i} className="glass-panel" style={{ padding: '40px', textAlign: 'left', display: 'flex', flexDirection: 'column' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '12px', background: '#e0f2fe', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', fontSize: '1.8rem' }}>
                {service.icon}
              </div>
              <h3 style={{ marginBottom: '16px', fontSize: '1.5rem', color: 'var(--text-primary)' }}>{service.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.6', marginBottom: '24px', flexGrow: 1 }}>{service.desc}</p>
              
              <ul style={{ padding: '0', listStyle: 'none', borderTop: '1px solid #e2e8f0', paddingTop: '20px', marginBottom: '24px' }}>
                {service.features.map((feature, j) => (
                  <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', color: '#334155', fontSize: '0.95rem' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href={`/services/${service.slug}`} className="btn-secondary" style={{ textAlign: 'center', width: '100%', marginTop: 'auto' }}>
                Learn More
              </Link>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <h2 className="section-title" style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '40px' }}>How We <span className="gradient-text">Work</span></h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', textAlign: 'center', marginBottom: '70px' }}>
          {[
            { step: '01', title: 'Discovery', desc: 'We dive deep into your business goals and technical requirements.' },
            { step: '02', title: 'Strategy', desc: 'We craft a comprehensive roadmap and architecture for success.' },
            { step: '03', title: 'Execution', desc: 'Our experts build, test, and refine your digital solution.' },
            { step: '04', title: 'Growth', desc: 'We launch, monitor, and scale your product to new heights.' }
          ].map((item, i) => (
            <div key={i} style={{ padding: '30px' }}>
              <div style={{ fontSize: '3rem', fontWeight: '800', color: '#e2e8f0', marginBottom: '16px' }}>{item.step}</div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '12px', color: '#0f172a' }}>{item.title}</h3>
              <p style={{ color: '#64748b', lineHeight: '1.6', fontSize: '0.95rem' }}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="glass-panel" style={{ padding: '48px', textAlign: 'center', background: 'linear-gradient(135deg, rgba(0, 115, 255, 0.05), rgba(0, 225, 255, 0.08))', border: '1px solid rgba(0, 115, 255, 0.15)' }}>
          <h2 style={{ fontSize: '2.2rem', marginBottom: '16px', color: 'var(--text-primary)' }}>Need a Custom Solution?</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 30px', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
            Tell us about your project requirements and our team will get back with a tailored proposal.
          </p>
          <Link href="/contact" className="btn-primary" style={{ display: 'inline-block' }}>Request a Free Consultation</Link>
        </div>
      </div>
    </main>
  );
}
