import { ProductMobileSlideShow, ProductSlideShow, QuantitySelector, SizeSelector } from "@/components";
import { titleFonts } from "@/config/fonts";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

interface Props {
  params: {
    slug: string;
  }
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = initialData.products.find((product => product.slug === slug));

  if (!product) {
    return notFound();
  }

  return (
    <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">

      <div className="col-span-1 md:col-span-2">
        {/* Mobile */}
        <ProductMobileSlideShow
          title={product.title}
          images={product.images}
          className="block md:hidden"
        />

        {/* Desktop */}
        <ProductSlideShow
          title={product.title}
          images={product.images}
          className="hidden md:block"
        />
      </div>
      <div className="col-span-1 px-5">
        <h1 className={`${titleFonts.className} antialiased font-bold text-xl`}>
          {product.title}
        </h1>
        <p className={`${titleFonts.className} antialiased text-lg mb-5 font-semibold`}>
          ${product.price}
        </p>
        {/* selector de tallas */}
        <SizeSelector
          selectedSize={product.sizes[1]}
          sizes={product.sizes}
        />

        {/* selector de cantidades */}
        <QuantitySelector quantity={product.inStock} />

        <button className="btn-primary mb-7 mt-2">
          Add to Cart
        </button>
        <div>
          <h3 className="font-semibold text-sm mb-1">Description</h3>
          <p className="font-light">
            {product.description}
          </p>
        </div>
      </div>
    </div>
  );
}