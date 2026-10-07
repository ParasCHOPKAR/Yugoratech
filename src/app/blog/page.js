import Link from 'next/link';

export const metadata = {
  title: 'Blog & Insights | YugoraTech',
  description: 'Stay updated with the latest trends in technology, web development, cloud software, and digital marketing from YugoraTech experts.'
};

export default function Blog() {
  const posts = [
    {
      title: 'Top 7 Web Development Trends to Watch in 2026',
      date: 'October 2, 2026',
      category: 'Web Development',
      excerpt: 'From Next.js performance optimizations to AI-driven micro-interactions, explore the top technologies shaping modern web design and engineering.',
      readTime: '5 min read'
    },
    {
      title: 'How Generative Engine Optimization (GEO) is Reshaping Search',
      date: 'September 24, 2026',
      category: 'SEO & Marketing',
      excerpt: 'Traditional SEO is evolving into GEO & AEO. Learn how forward-thinking brands are optimizing content to get recommended by AI agents and engines.',
      readTime: '7 min read'
    },
    {
      title: 'Why Custom ERP and CRM Solutions Beat Off-the-Shelf Software',
      date: 'September 15, 2026',
      category: 'Enterprise Tech',
      excerpt: 'Discover why growing businesses achieve higher operational efficiency and ROI by investing in tailored workflows rather than rigid SaaS subscriptions.',
      readTime: '6 min read'
    },
    {
      title: 'Maximizing ROI with Full-Funnel Social Media Advertising',
      date: 'September 5, 2026',
      category: 'Digital Marketing',
      excerpt: 'A practical framework to target, engage, and convert high-intent audiences on Meta, LinkedIn, and YouTube with precision-driven creative assets.',
      readTime: '4 min read'
    }
  ];

  return (
    <main style={{ paddingTop: '60px', minHeight: '100vh', paddingBottom: '80px' }}>
      <div className="container">
        <h1 className="section-title" style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '20px' }}>
          Blog &amp; <span className="gradient-text">Insights</span>
        </h1>
        <p style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 60px', color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: '1.6' }}>
          In-depth articles, industry benchmarks, and actionable insights from our engineers and digital growth strategists.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '36px', marginBottom: '60px' }}>
          {posts.map((post, idx) => (
            <article key={idx} className="glass-panel" style={{ padding: '36px', display: 'flex', flexDirection: 'column', transition: 'transform 0.2s ease' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--accent-main)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {post.category}
                </span>
                <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>{post.readTime}</span>
              </div>
              <h2 style={{ fontSize: '1.45rem', marginBottom: '16px', color: 'var(--text-primary)', lineHeight: '1.35', fontWeight: '700' }}>
                {post.title}
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.02rem', lineHeight: '1.6', marginBottom: '24px', flexGrow: 1 }}>
                {post.excerpt}
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #e2e8f0', paddingTop: '18px' }}>
                <span style={{ fontSize: '0.88rem', color: '#64748b' }}>{post.date}</span>
                <Link href="/contact" style={{ color: 'var(--accent-main)', fontWeight: '600', fontSize: '0.95rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  Read Article &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
