'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Loading from '@/components/Loading';
import withScrollReset from '@/components/hoc/withScrollReset';

const Oodser = dynamic(() => import('@/components/compoPages/internships/Oodser'), {
  loading: () => <Loading />
});

const OodserWithScrollReset = withScrollReset(Oodser as any);

export default function OodserPage() {
  return (
    <Suspense fallback={<Loading />}>
      <OodserWithScrollReset />
    </Suspense>
  );
}
