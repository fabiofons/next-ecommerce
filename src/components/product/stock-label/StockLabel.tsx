'use client';

import { useEffect, useState } from 'react';
import { getStockBySlug } from '@/actions';
import { titleFonts } from '@/config/fonts';

export const StockLabel = ({ slug }: { slug: string }) => {
  const [stock, setStock] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getStock();
  }, []);

  const getStock = async () => {
    const currentStock = await getStockBySlug(slug);
    setStock(currentStock);
    setIsLoading(false);
  };

  return isLoading ? (
    <h1
      className={`${titleFonts.className} antialiased font-bold text-lg bg-gray-100 animate-pulse w-40`}
    >
      &nbsp;
    </h1>
  ) : (
    <h1 className={`${titleFonts.className} antialiased font-bold text-lg`}>Stock: {stock}</h1>
  );
};
