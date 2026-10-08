import type { Metadata } from 'next';
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'III Construction LLC | Turnkey Construction & General Contractor',
  description:
    'Turnkey construction, concrete craftsmanship, precision dirt work, land clearing, and custom new home construction for residential and commercial clients.',
  keywords: [
    'III Construction LLC',
    'Turnkey Construction',
    'Concrete Construction',
    'Dirt Work',
    'Land Clearing',
    'New Home Construction',
    'Residential Contractor',
    'Commercial Contractor',
  ],
  authors: [{ name: 'III Construction LLC' }],
  openGraph: {
    title: 'III Construction LLC | Turnkey Construction & General Contractor',
    description:
      'Turnkey construction, concrete craftsmanship, precision dirt work, land clearing, and custom new home construction.',
    type: 'website',
    siteName: 'III Construction LLC',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'III Construction LLC | Turnkey Construction',
    description:
      'Turnkey construction, concrete craftsmanship, precision dirt work, land clearing, and new home construction.',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'GeneralContractor'],
  name: 'III Construction LLC',
  description:
    'Turnkey Construction, Concrete Construction, Dirt Work, Land Clearing, and New Home Construction (Residential/Commercial).',
  url: 'https://3constructionllc.com',
  telephone: '+1 (832) 555-0303',
  email: 'inquiries@3constructionllc.com',
  sameAs: ['https://instagram.com/3constructionllc'],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1000 Commercial Parkway, Suite 400',
    addressLocality: 'Austin',
    addressRegion: 'TX',
    postalCode: '78701',
    addressCountry: 'US',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Turnkey Construction Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Turnkey Construction',
          description: 'End-to-end master construction management and execution.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Concrete Construction',
          description: 'Architectural foundations, retaining walls, flatwork, and structural slabs.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Dirt Work',
          description: 'Precision earth excavation, grading, site drainage, and pad preparation.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Land Clearing',
          description: 'Selective timber clearing, site prep, grubbing, and access development.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'New Home Construction (Residential / Commercial)',
          description: 'Custom luxury residences and commercial architectural structures.',
        },
      },
    ],
  },
};

import SmoothScrollProvider from '@/components/SmoothScrollProvider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#121316] text-[#F4F2EB] font-sans antialiased selection:bg-[#C08A58]/30 selection:text-[#FFFFFF] overflow-x-hidden min-h-screen">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
