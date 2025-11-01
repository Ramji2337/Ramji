'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Loading from '@/components/Loading';
import withScrollReset from '@/components/hoc/withScrollReset';

const Pro3 = dynamic(() => import('@/components/compoPages/Projects/Pro3'), {
  loading: () => <Loading />
});

const Pro3WithScrollReset = withScrollReset(Pro3 as any);

export default function Project3Page() {
  return (
    <Suspense fallback={<Loading />}>
      <Pro3WithScrollReset />
    </Suspense>
  );
}
