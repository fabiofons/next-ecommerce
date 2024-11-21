'use client';
import React, { useState } from 'react';
import { IoAddCircleOutline, IoRemoveCircleOutline } from 'react-icons/io5';

interface Props {
  quantity: number;
}

export const QuantitySelector = ({ quantity }: Props) => {
  const [counter, setCounter] = useState(1);
  return (
    <div className="mb-5">
      <h4 className="font-medium text-sm mb-1">Quantity</h4>
      <div className="flex">
        <button
          onClick={() => {
            if (counter === 1) return;
            setCounter(counter - 1);
          }}
        >
          <IoRemoveCircleOutline size={30} />
        </button>
        <span className="px-6 py-1 bg-gray-100 rounded-md mx-2">{counter}</span>
        <button
          onClick={() => {
            if (counter >= quantity) return;
            setCounter(counter + 1);
          }}
        >
          <IoAddCircleOutline size={30} />
        </button>
      </div>
    </div>
  );
};
