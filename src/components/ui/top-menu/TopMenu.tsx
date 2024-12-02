'use client';

import { titleFonts } from '@/config/fonts';
import { useCartState, useUIStore } from '@/store';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { IoCartOutline, IoSearchOutline } from 'react-icons/io5';

export const TopMenu = () => {
  const [loaded, setLoaded] = useState(false);
  const openMenu = useUIStore((state) => state.openSideMenu);
  const productsInCart = useCartState((state) => state.getTotalItems());

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <nav className="flex px-5 py-1 justify-between items-center w-full">
      <div>
        <Link href="/">
          <span className={`${titleFonts.className} antialiased font-bold`}>Teslo</span>
          <span> | shop</span>
        </Link>
      </div>
      <div className="hidden sm:block">
        <Link className="m-2 p-2 transition-all hover:bg-gray-100" href="/gender/men">
          Men
        </Link>
        <Link className="m-2 p-2 transition-all hover:bg-gray-100" href="/gender/women">
          Women
        </Link>
        <Link className="m-2 p-2 transition-all hover:bg-gray-100" href="/gender/kid">
          Kids
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <Link href="/search">
          <IoSearchOutline className="w-5 h-5" />
        </Link>
        <Link href={productsInCart === 0 && loaded ? '/empty' : '/cart'}>
          <div className="relative">
            {loaded && productsInCart > 0 && (
              <span className="fade-in absolute text-xs rounded-full px-1 font-bold -right-2 -top-2 bg-blue-700 text-white">
                {productsInCart}
              </span>
            )}
            <IoCartOutline className="w-5 h-5" />
          </div>
        </Link>
        <button onClick={() => openMenu()} className="m-2 p-2 transition-all hover:bg-gray-100">
          Menu
        </button>
      </div>
    </nav>
  );
};
