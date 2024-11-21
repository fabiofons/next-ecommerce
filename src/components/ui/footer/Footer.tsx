import { titleFonts } from '@/config/fonts';
import Link from 'next/link';
import React from 'react';

export const Footer = () => {
  return (
    <div className="w-full flex justify-center items-center p-4">
      <Link href="/">
        <span className={`${titleFonts.className} antialiased`}>Teslo </span>
        <span>| Shop</span>
        <span>{` © ${new Date().getFullYear()}`}</span>
      </Link>
    </div>
  );
};
