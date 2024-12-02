'use client';
import React, { useState } from 'react';
import { IoAddCircleOutline, IoRemoveCircleOutline } from 'react-icons/io5';

interface Props {
  quantity: number;
  inStock: number;
  onQuantityChanged: (quantity: number) => void;
}

export const QuantitySelector = ({ quantity, inStock, onQuantityChanged }: Props) => {
  return (
    <div className="mb-5">
      <h4 className="font-medium text-sm mb-1">Quantity</h4>
      <div className="flex">
        <button
          onClick={() => {
            if (quantity === 1) return;
            onQuantityChanged(quantity - 1);
          }}
        >
          <IoRemoveCircleOutline size={20} />
        </button>
        <span className="px-6 py-1 bg-gray-100 rounded-md mx-2">{quantity}</span>
        <button
          onClick={() => {
            if (quantity >= inStock) return;
            onQuantityChanged(quantity + 1);
          }}
        >
          <IoAddCircleOutline size={20} />
        </button>
      </div>
    </div>
  );
};
