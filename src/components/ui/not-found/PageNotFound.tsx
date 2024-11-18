import { titleFonts } from '@/config/fonts'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const PageNotFound = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row h-[800px] w-full justify-center items-center align-middle'>
      <div className="text-center px-5 mx-5">
        <h2 className={`${titleFonts.className} antialiased text-9xl`}>
          404
        </h2>
        <p className='font-semibold text-xl mb-2'>Whoops! Page not found</p>
        <Link href='/' className='font-semibold text-md text-blue-500'>Go back to home</Link>
      </div>

      <div className='px-5 mx-5'>
        <Image
          src='/imgs/starman_750x750.png'
          alt='Starman'
          className='p-5 sm:p-0'
          width={500}
          height={500}
        />
      </div>
    </div>
  )
}
