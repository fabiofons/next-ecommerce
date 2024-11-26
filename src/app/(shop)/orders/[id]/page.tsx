import { Title } from '@/components';
import { initialData } from '@/seed/seed';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { IoCartOutline, IoInformationCircleOutline } from 'react-icons/io5';

const cartProducts = [initialData.products[3], initialData.products[2], initialData.products[5]];

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function OrderPage({ params }: Props) {
  const { id } = await params;
  return (
    <div className="max-w-[1200px] mx-auto mb-32">
      <div className="flex flex-col px-5">
        <Title title={`Order #${id}`} className="mt-5" />
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Carrito */}
          <div>
            <div className="flex flex-col my-5">
              <div
                className={clsx(
                  'flex items-center rounded-md py-2 px-3.5 text-xs font-bold text-white mb-5',
                  {
                    'bg-red-500': false,
                    'bg-green-700': true,
                  },
                )}
              >
                <IoCartOutline size={30} />
                <span className="mx-2">Paid</span>
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
                      <p className="text-sm font-medium">Quantity: 3</p>
                      <p className="font-semibold">Subtotal: ${product.price * 3}</p>
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
              <h4 className="text-xl font-bold">Delivery Address</h4>
              <div className="mb-2">
                <p className="text-md font-semibold">Fabio Fonseca</p>
                <p className="font-medium">Av. Siempreviva 123</p>
                <p className="font-medium">Springfield</p>
                <p className="font-medium">TT 12345</p>
                <p className="font-medium">USA</p>
                <p className="font-medium">+1 123 456 789</p>
              </div>

              <div className="bg-gray-200 rounded h-0.5 w-full my-1" />

              <h4 className="text-xl mb-1 font-bold">Orden Summary</h4>
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
              <div
                className={clsx(
                  'flex items-center rounded-md py-2 px-3.5 text-xs font-bold text-white mb-5',
                  {
                    'bg-red-500': false,
                    'bg-green-700': true,
                  },
                )}
              >
                <IoCartOutline size={30} />
                <span className="mx-2">Paid</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
