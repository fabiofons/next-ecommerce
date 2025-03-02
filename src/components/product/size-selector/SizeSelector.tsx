'use client';
import type { Size } from '@/interfaces';
import clsx from 'clsx';
import { useState } from 'react';

interface Props {
  selectedSize?: Size;
  sizes: Size[];

  onSizeSelected: (size: Size) => void;
}

export const SizeSelector = ({ selectedSize, sizes, onSizeSelected }: Props) => {
  return (
    <>
      <h4 className="font-medium text-sm mb-1">Size</h4>
      <div className="mb-5 flex">
        {sizes.map((size) => {
          return (
            <button
              key={size}
              className="mx-3 text-md font-semibold pb-2"
              onClick={() => onSizeSelected(size)}
            >
              <span
                className={clsx('border-solid border-black hover:border-b-2', {
                  'border-b-2': size === selectedSize,
                })}
              >
                {size}
              </span>
            </button>
          );
        })}
      </div>
    </>
  );
};
