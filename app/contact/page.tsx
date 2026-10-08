import type { Metadata } from 'next';
import ContactPageClient from '@/components/ContactPageClient';

export const metadata: Metadata = {
  title: 'Consultation & Inquiries | III Construction LLC',
  description:
    'Initiate your project with III Construction LLC principals. Consultation for turnkey residential estates, concrete construction, dirt grading, and land clearing.',
};

export default function Page() {
  return <ContactPageClient />;
}
