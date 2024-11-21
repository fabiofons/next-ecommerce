import { QuantitySelector, Title } from '@/components';
import { initialData } from '@/seed/seed';
import Image from 'next/image';
import Link from 'next/link';
import { IoInformationCircleOutline } from 'react-icons/io5';

const cartProducts = [initialData.products[3], initialData.products[2], initialData.products[5]];

export default function CartPage() {
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
            {cartProducts.map((product) => {
              return (
                <div key={product.slug} className="flex mb-5 justify-between">
                  <div className="flex gap-3">
                    <div className="w-24 h-24">
                      <Image
                        src={`/products/${product.images[0]}`}
                        alt={product.title}
                        width={100}
                        height={100}
                        className="rounded w-24"
                      />
                    </div>
                    <div>
                      <p className="text-base font-semibold">{product.title}</p>
                      <p className="text-sm font-medium">
                        Size: <span className="font-semibold">{product.sizes[0]}</span>
                      </p>
                      <div className="flex gap-3 items-center">
                        <QuantitySelector quantity={product.inStock} />
                        <button className="underline text-xs">Remove</button>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold">${product.price}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Summary */}
          <div>
            <div className="bg-white rounded-xl shahow p-7 md:ml-32 h-auto gap-4 flex flex-col">
              <h4 className="text-xl mb-2 font-bold">Orden Summary</h4>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="grid grid-cols-2">
                <p className="flex gap-2 items-center">
                  <span>Sales Tax</span>
                  <IoInformationCircleOutline size={20} />
                </p>
                <span className="text-right">Calculated at checkout</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-xl font-semibold">Subtotal</span>
                <span className="text-xl font-semibold">
                  ${cartProducts.reduce((acc, product) => acc + product.price, 0)}
                </span>
              </div>
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
