'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import Loading from '@/components/Loading';
import withScrollReset from '@/components/hoc/withScrollReset';

const LuxorHoliday = dynamic(() => import('@/components/compoPages/internships/LuxorHoliday'), {
  loading: () => <Loading />
});

const LuxorHolidayWithScrollReset = withScrollReset(LuxorHoliday as any);

export default function LuxorHolidayPage() {
  return (
    <Suspense fallback={<Loading />}>
      <LuxorHolidayWithScrollReset />
    </Suspense>
  );
}
