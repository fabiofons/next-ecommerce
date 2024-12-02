import { Title } from '@/components';

import Link from 'next/link';
import { IoInformationCircleOutline } from 'react-icons/io5';
import { ProductsInCart } from './ui/ProductsInCart';
import { useCartState } from '@/store';
import { useEffect, useState } from 'react';
import { OrderSummary } from './ui/OrderSummary';

export default function CartPage() {
  // if (cartProducts.length === 0) {
  //   redirect('/empty');
  // }

  return (
    <div className="max-w-[1200px] mx-auto mb-32">
      <div className="flex flex-col px-5">
        <Title title="Cart" className="mt-5" />
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Carrito */}
          <div>
            <div className="flex flex-col my-5">
              <span className="text-md font-medium">Add more items</span>
              <div>
                <Link
                  href="/"
                  className="text-sm inline flex-initial transition-all shadow-link hover:shadow-link-hover"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
            {/* Items */}
            <ProductsInCart />
          </div>

          {/* Summary */}

          <div>
            <div className="bg-white rounded-xl shahow p-7 md:ml-32 h-auto gap-4 flex flex-col">
              <h4 className="text-xl mb-2 font-bold">Orden Summary</h4>

              <OrderSummary />

              <Link href="/checkout/address" className="text-center btn-primary mb-3">
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
