'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Loading from '@/components/Loading';
import withScrollReset from '@/components/hoc/withScrollReset';

const Society = dynamic(() => import('@/components/compoPages/internships/Society'), {
  loading: () => <Loading />
});

const SocietyWithScrollReset = withScrollReset(Society as any);

export default function SocietyPage() {
  return (
    <Suspense fallback={<Loading />}>
      <SocietyWithScrollReset />
    </Suspense>
  );
}
