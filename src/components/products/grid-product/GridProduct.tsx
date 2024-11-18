import { ProductGridItem } from '@/components'
import { Product } from '@/interfaces'
import React from 'react'

interface Props {
  products: Product[]
}

export const GridProduct = ({ products }: Props) => {
  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 gap-10 mb-10'>
      {products.map((product) => (
        <div key={product.slug}>
          <ProductGridItem product={product} />
        </div>
      ))}
    </div>
  )
}
