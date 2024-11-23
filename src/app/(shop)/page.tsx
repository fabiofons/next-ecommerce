import { getPaginatedProductsWithImages } from '@/actions';
import { Title } from '@/components';
import { GridProduct } from '@/components';
import { redirect } from 'next/navigation';

interface Props {
  searchParams: {
    page?: string;
  };
}

export default async function Home({ searchParams }: Props) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  const { products } = await getPaginatedProductsWithImages({ page });

  if (products.length === 0) {
    redirect('/');
  }
  return (
    <div className="px-4">
      <Title title="Store" subtitle="Our products" className="mb-2" />
      <GridProduct products={products} />
    </div>
  );
}
