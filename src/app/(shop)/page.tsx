import { Title } from "@/components";
import { GridProduct } from "@/components";
import { initialData } from "@/seed/seed";

const products = initialData.products;

export default function Home() {
    return (
        <div className="px-4">
            <Title
                title="Store"
                subtitle='Our products'
                className="mb-2"
            />
            <GridProduct products={products} />
        </div>
    )
}