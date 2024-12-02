'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import { useCartState } from '@/store';
import Link from 'next/link';
import { QuantitySelector } from '@/components';

export const ProductsInCart = () => {
  const [loaded, setLoaded] = useState(false);
  const cartProducts = useCartState((state) => state.cart);
  const updateProductQuantity = useCartState((state) => state.updateProductQuantity);
  const removeProductFromCart = useCartState((state) => state.removeProductFromCart);
  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {loaded &&
        cartProducts.map((product) => {
          return (
            <div key={`${product.slug}-${product.size}`} className="flex mb-5 justify-between">
              <div className="flex gap-3">
                <div className="w-24 h-24">
                  <Image
                    src={`/products/${product.image}`}
                    alt={product.title}
                    width={100}
                    height={100}
                    className="rounded w-24"
                  />
                </div>
                <div>
                  <Link
                    href={`/product/${product.slug}`}
                    className="text-base font-semibold hover:underline cursor-pointer"
                  >
                    {product.title}
                  </Link>
                  <p className="text-sm font-medium">
                    Size: <span className="font-semibold">{product.size}</span>
                  </p>
                  <div className="flex gap-3 items-center">
                    <QuantitySelector
                      quantity={product.quantity}
                      inStock={10}
                      onQuantityChanged={(value) => updateProductQuantity(product, value)}
                    />
                    <button
                      onClick={() => removeProductFromCart(product)}
                      className="underline text-xs"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <p className="font-semibold">${product.price}</p>
              </div>
            </div>
          );
        })}
    </>
  );
};
