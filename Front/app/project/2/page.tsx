'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Loading from '@/components/Loading';
import withScrollReset from '@/components/hoc/withScrollReset';

const Pro2 = dynamic(() => import('@/components/compoPages/Projects/Pro2'), {
  loading: () => <Loading />
});

const Pro2WithScrollReset = withScrollReset(Pro2 as any);

export default function Project2Page() {
  return (
    <Suspense fallback={<Loading />}>
      <Pro2WithScrollReset />
    </Suspense>
  );
}
