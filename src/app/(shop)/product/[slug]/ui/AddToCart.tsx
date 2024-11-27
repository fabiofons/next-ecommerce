'use client';

import React, { useState } from 'react';

import { QuantitySelector, SizeSelector } from '@/components';
import type { CartProduct, Product, Size } from '@/interfaces';
import { useCartState } from '@/store';

interface Props {
  product: Product;
}

export const AddToCart = ({ product }: Props) => {
  const addProductTocart = useCartState((state) => state.addProductToCart);

  const [size, setSize] = useState<Size | undefined>();
  const [quantity, setQuantity] = useState<number>(1);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const addToCart = () => {
    setSubmitted(true);
    if (!size) return;

    const newProductCart: CartProduct = {
      id: product.id,
      slug: product.slug,
      title: product.title,
      price: product.price,
      quantity: quantity,
      size: size,
      image: product.images[0],
    };

    addProductTocart(newProductCart);
    setSubmitted(false);
    setQuantity(1);
    setSize(undefined);
  };

  return (
    <>
      {submitted && !size && (
        <p className="text-red-500 text-sm mb-1 fade-in">A size should be selected*</p>
      )}
      {/* selector de tallas */}
      <SizeSelector selectedSize={size} sizes={product.sizes} onSizeSelected={setSize} />

      {/* selector de cantidades */}
      <QuantitySelector
        quantity={quantity}
        inStock={product.inStock}
        onQuantityChanged={setQuantity}
      />

      <button onClick={addToCart} className="btn-primary mb-7 mt-2">
        Add to Cart
      </button>
    </>
  );
};
