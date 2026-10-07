import Link from 'next/link';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const title = slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
    
  return {
    title: `${title} Services | Yugora Tech`,
    description: `Premium ${title.toLowerCase()} services by Yugora Tech to elevate your business, streamline operations, and drive unmatched growth in the digital space.`,
    openGraph: {
      title: `${title} Services | Yugora Tech`,
      description: `Get top-tier ${title.toLowerCase()} services tailored to your business needs by Yugora Tech.`,
      url: `https://yugoratech.vercel.app/services/${slug}`,
      siteName: 'Yugora Tech',
    },
    alternates: {
      canonical: `https://yugoratech.vercel.app/services/${slug}`,
    }
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  
  const title = slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  // BreadcrumbList JSON-LD
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://yugoratech.vercel.app/'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Services',
        item: 'https://yugoratech.vercel.app/services'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: title,
        item: `https://yugoratech.vercel.app/services/${slug}`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main style={{ minHeight: '60vh', padding: '100px 20px', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <div style={{ marginBottom: '40px' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '20px' }}>
            <span className="gradient-text">{title}</span>
          </h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto 40px' }}>
            We provide top-tier {title.toLowerCase()} services designed to elevate your business, streamline operations, and drive unmatched growth in the digital space.
          </p>
        </div>

        <div style={{ padding: '40px', background: 'var(--bg-secondary)', borderRadius: '20px', marginTop: '60px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Ready to start your {title} project?</h2>
          <p style={{ marginBottom: '30px', color: 'var(--text-secondary)' }}>Get in touch with our experts today for a free consultation and quote.</p>
          <Link href="/contact" className="btn-primary" style={{ padding: '15px 40px', fontSize: '1.1rem' }}>
            Contact Us
          </Link>
        </div>
      </main>
    </>
  );
}
