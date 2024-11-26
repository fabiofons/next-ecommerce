export const revalidate = 60;
import { getPaginatedProductsWithImages } from '@/actions';
import { GridProduct, Pagination, Title } from '@/components';
import { Gender } from '@prisma/client';
import { redirect } from 'next/navigation';

interface Props {
  params: Promise<{
    gender: string;
  }>;
  searchParams: Promise<{
    page?: string;
  }>;
}
export default async function Category({ params, searchParams }: Props) {
  const { gender } = await params;
  const { page } = await searchParams;

  const pageNumber = isNaN(Number(page)) ? 1 : Number(page);

  const { totalPages, products } = await getPaginatedProductsWithImages({
    page: pageNumber,
    gender: gender as Gender,
  });

  if (products.length === 0) {
    redirect(`/gender/${gender}`);
  }

  return (
    <div>
      <Title title={gender as string} subtitle={`Our products for ${gender}`} className="mb-2" />
      <GridProduct products={products} />
      <Pagination totalPages={totalPages} />
    </div>
  );
}
