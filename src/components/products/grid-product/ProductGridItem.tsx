'use client'

import { Product } from '@/interfaces'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

interface Props {
  product: Product
}

export const ProductGridItem = ({ product }: Props) => {

  const [imageDisplayed, setImageDisplayed] = useState(product.images[0]);
  return (
    <div className='rounded-md overflow-hidden fade-in'>
      <Link href={`/product/${product.slug}`}>
        <Image
          src={`/products/${imageDisplayed}`}
          alt={product.title}
          className='w-full object-cover rounded-sm'
          width={500}
          height={500}
          onMouseEnter={() => setImageDisplayed(product.images[1])}
          onMouseLeave={() => setImageDisplayed(product.images[0])}
        />
      </Link>
      <div className="p-4 flex flex-col">
        <Link href={`/product/${product.slug}`} className='text-sm font-semibold hover:text-blue-600 duration-150'>
          {product.title}
        </Link>
        <span className='text-sm font-semibold'>
          ${product.price}
        </span>
      </div>
    </div>
  )
}
