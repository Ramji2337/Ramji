'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Loading from '@/components/Loading';
import withScrollReset from '@/components/hoc/withScrollReset';

const Pro1 = dynamic(() => import('@/components/compoPages/Projects/Pro1'), {
  loading: () => <Loading />
});

const Pro1WithScrollReset = withScrollReset(Pro1 as any);

export default function Project1Page() {
  return (
    <Suspense fallback={<Loading />}>
      <Pro1WithScrollReset />
    </Suspense>
  );
}
