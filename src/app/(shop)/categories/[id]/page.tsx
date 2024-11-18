import { notFound } from "next/navigation";

interface Props {
  params: {
    id: string
  }
}

export default function CategoryPage({ params }: Props) {

  if (params.id === 'kids') {
    notFound();
  }

  return (
    <div>
      <h1>id Page {params.id}</h1>
    </div>
  );
}