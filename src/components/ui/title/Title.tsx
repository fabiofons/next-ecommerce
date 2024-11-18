import { titleFonts } from '@/config/fonts'
import React from 'react'

interface Props {
  title: string
  subtitle?: string
  className?: string
}

export const Title = ({ title, subtitle, className }: Props) => {
  return (
    <div className={`mt-3 ${className}`}>
      <h1 className={`${titleFonts.className} antialiased text-3xl font-semibold my-2`}>
        {title}
      </h1>
      {subtitle && <h3 className='text-lg mb-2'>{subtitle}</h3>}
    </div>
  )
}
