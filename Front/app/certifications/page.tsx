'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Loading from '@/components/Loading';

const Certificate = dynamic(() => import('@/components/certificate'), {
  loading: () => <Loading />
});

export default function CertificationsPage() {
  return (
    <Suspense fallback={<Loading />}>
      <Certificate />
    </Suspense>
  );
}
