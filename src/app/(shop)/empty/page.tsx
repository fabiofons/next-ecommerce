import Link from 'next/link';
import { IoCartOutline } from 'react-icons/io5';

export default function EmptyPage() {
  return (
    <div className="flex justify-center items-center h-[800px]">
      <IoCartOutline size={80} className="mx-5" />
      <div className="flex flex-col items-center">
        <h2 className="text-xl font-semibold">Your cart is empty</h2>
        <Link href="/" className="text-4xl font-bold text-blue-500">
          Go Shopping
        </Link>
      </div>
    </div>
  );
}
