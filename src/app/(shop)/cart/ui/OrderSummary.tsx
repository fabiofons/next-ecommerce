'use client';

import React, { useEffect, useState } from 'react';
import { useCartState } from '@/store';
import { IoInformationCircleOutline } from 'react-icons/io5';
import { useShallow } from 'zustand/shallow';
import { currencyFormat } from '@/utils';

export const OrderSummary = () => {
  const [loaded, setloaded] = useState(false);
  const { total, totalItemsInCart, taxes, subtotal } = useCartState(
    useShallow((state) => state.getSummaryInformation()),
  );

  useEffect(() => {
    setloaded(true);
  }, []);

  if (!loaded) return <p> Loading..</p>;

  return (
    <div className="grid grid-cols-2 gap-2">
      <span>Total products:</span>
      <span className="text-right">
        {totalItemsInCart === 1 ? '1 Article' : `${totalItemsInCart} Articles`}
      </span>

      <span>Subtotal</span>
      <span className="text-right">{currencyFormat(subtotal)}</span>

      <p className="flex gap-2 items-center mb-3">
        <span>Sales Tax</span>
        <IoInformationCircleOutline size={20} />
      </p>
      <span className="text-right mb-3">{currencyFormat(taxes)}</span>

      <span className="text-xl font-semibold">Total</span>
      <span className="text-xl font-semibold text-right">{currencyFormat(total)}</span>
    </div>
  );
};
