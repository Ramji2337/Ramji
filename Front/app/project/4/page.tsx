'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Loading from '@/components/Loading';
import withScrollReset from '@/components/hoc/withScrollReset';

const Pro4 = dynamic(() => import('@/components/compoPages/Projects/Pro4'), {
  loading: () => <Loading />
});

const Pro4WithScrollReset = withScrollReset(Pro4 as any);

export default function Project4Page() {
  return (
    <Suspense fallback={<Loading />}>
      <Pro4WithScrollReset />
    </Suspense>
  );
}
