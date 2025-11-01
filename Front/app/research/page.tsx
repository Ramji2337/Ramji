'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Loading from '@/components/Loading';
import withScrollReset from '@/components/hoc/withScrollReset';

const ResearchPublications = dynamic(() => import('@/components/Research'), {
  loading: () => <Loading />
});

const ResearchWithScrollReset = withScrollReset(ResearchPublications as any);

export default function ResearchPage() {
  return (
    <Suspense fallback={<Loading />}>
      <ResearchWithScrollReset />
    </Suspense>
  );
}
