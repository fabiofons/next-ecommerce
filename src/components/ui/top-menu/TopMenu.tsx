'use client'

import { titleFonts } from '@/config/fonts'
import { useUIStore } from '@/store';
import Link from 'next/link'
import React from 'react'
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";

export const TopMenu = () => {

  const openMenu = useUIStore(state => state.openSideMenu);

  return (
    <nav className="flex px-5 py-1 justify-between items-center w-full">
      <div>
        <Link href='/'>
          <span className={`${titleFonts.className} antialiased font-bold`}>Teslo</span>
          <span> | shop</span>
        </Link>
      </div>
      <div className='hidden sm:block'>
        <Link className="m-2 p-2 transition-all hover:bg-gray-100" href="/categories/men">Men</Link>
        <Link className="m-2 p-2 transition-all hover:bg-gray-100" href="/categories/women">Women</Link>
        <Link className="m-2 p-2 transition-all hover:bg-gray-100" href="/categories/kid">Kids</Link>
      </div>
      <div className='flex items-center gap-2'>
        <Link href='/search'>
          <IoSearchOutline className='w-5 h-5' />
        </Link>
        <Link href='/cart'>
          <div className='relative'>
            <span className='absolute text-xs rounded-full px-1 font-bold -right-2 -top-2 bg-blue-700 text-white'>3</span>
            <IoCartOutline className='w-5 h-5' />
          </div>
        </Link>
        <button
          onClick={() => openMenu()}
          className='m-2 p-2 transition-all hover:bg-gray-100'
        >
          Menu
        </button>
      </div>
    </nav>
  )
}
