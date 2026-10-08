import type { Metadata } from 'next';
import ProjectsPageClient from '@/components/ProjectsPageClient';

export const metadata: Metadata = {
  title: 'Project Portfolio | III Construction LLC',
  description:
    'Survey of turnkey residential estates, concrete infrastructure, land clearing, and master grading projects across Texas by III Construction LLC.',
};

export default function Page() {
  return <ProjectsPageClient />;
}
