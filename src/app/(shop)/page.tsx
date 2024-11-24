import { getPaginatedProductsWithImages } from '@/actions';
import { Pagination, Title } from '@/components';
import { GridProduct } from '@/components';
import { redirect } from 'next/navigation';

interface Props {
  searchParams: Promise<{
    page?: string;
  }>;
}

export default async function Home({ searchParams }: Props) {
  const { page } = await searchParams;

  const pageNumber = isNaN(Number(page)) ? 1 : Number(page);

  const { currentPage, totalPages, products } = await getPaginatedProductsWithImages({
    page: pageNumber,
  });

  if (products.length === 0) {
    redirect('/');
  }
  return (
    <div className="px-4">
      <Title title="Store" subtitle="Our products" className="mb-2" />
      <GridProduct products={products} />
      <Pagination totalPages={totalPages} />
    </div>
  );
}
