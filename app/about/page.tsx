import type { Metadata } from 'next';
import AboutPageClient from '@/components/AboutPageClient';

export const metadata: Metadata = {
  title: 'About III Construction LLC | Architectural Philosophy & Process',
  description:
    'Dedicated turnkey general contractor in Texas specializing in land clearing, dirt grading, architectural concrete, and custom new home construction.',
};

export default function Page() {
  return <AboutPageClient />;
}
