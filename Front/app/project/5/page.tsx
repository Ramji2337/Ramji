'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Loading from '@/components/Loading';
import withScrollReset from '@/components/hoc/withScrollReset';

const Pro5 = dynamic(() => import('@/components/compoPages/Projects/Pro5'), {
  loading: () => <Loading />
});

const Pro5WithScrollReset = withScrollReset(Pro5 as any);

export default function Project5Page() {
  return (
    <Suspense fallback={<Loading />}>
      <Pro5WithScrollReset />
    </Suspense>
  );
}
