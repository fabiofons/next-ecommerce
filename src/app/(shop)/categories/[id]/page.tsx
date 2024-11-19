import { GridProduct, Title } from "@/components";
import { Category } from "@/interfaces";
import { initialData } from "@/seed/seed";
// import { notFound } from "next/navigation";


interface Props {
  params: {
    id: Category
  }
}

export default async function CategoryPage({ params }: Props) {

  const { id } = await params
  const seedProducts = initialData.products;

  // if (id !== ValidCategories.men && id !== ValidCategories.women && id !== ValidCategories.kid) {
  //   notFound()
  // }

  const labels: Record<Category, string> = {
    'men': 'for Men',
    'women': 'for Women',
    'kid': 'for Kids',
    'unisex': 'for All'
  }

  const products = seedProducts.filter(product => product.gender === id);
  return (
    <>
      <Title
        title={id}
        subtitle={`Our products ${labels[id]}`}
        className="mb-2"
      />
      <GridProduct products={products} />
    </>
  );
}