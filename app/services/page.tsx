import type { Metadata } from 'next';
import ServicesPageClient from '@/components/ServicesPageClient';

export const metadata: Metadata = {
  title: 'Services & Disciplines | III Construction LLC',
  description:
    'Turnkey Construction, Concrete Construction, Dirt Work & Grading, Land Clearing, and New Home Construction (Residential & Commercial).',
};

export default function Page() {
  return <ServicesPageClient />;
}
