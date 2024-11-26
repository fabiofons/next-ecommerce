'use client';
import { PageNotFound } from '@/components';
import Link from 'next/link';
import React from 'react';

export default function NotFound() {
  return (
    <div>
      <PageNotFound />
      <Link href="/">Go back to home</Link>
    </div>
  );
}
