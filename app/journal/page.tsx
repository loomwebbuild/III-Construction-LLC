import type { Metadata } from 'next';
import JournalPageClient from '@/components/JournalPageClient';

export const metadata: Metadata = {
  title: 'Technical Field Journal | III Construction LLC',
  description:
    'Engineering perspectives, turnkey advantages, soil compaction science, architectural concrete methods, and selective clearing insights from III Construction LLC.',
};

export default function Page() {
  return <JournalPageClient />;
}
