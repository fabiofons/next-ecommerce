import prisma from '../lib/prisma';
import { initialData } from './seed';
import { countries } from './seed-countries';

async function main() {
  //delete all data
  await prisma.user.deleteMany();
  await prisma.productImage.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();
  await prisma.country.deleteMany();

  const { categories, products, users } = initialData;
  const categoriesData = categories.map((name) => ({ name }));

  await prisma.user.createMany({
    data: users,
  });

  await prisma.category.createMany({
    data: categoriesData,
  });

  const categoriesDB = await prisma.category.findMany();

  const categoryMap = categoriesDB.reduce(
    (map, category) => {
      map[category.name.toLowerCase()] = category.id;
      return map;
    },
    {} as Record<string, string>,
  );

  products.forEach(async (product) => {
    const { type, images, ...rest } = product;
    const dbProduct = await prisma.product.create({
      data: {
        ...rest,
        categoryId: categoryMap[type],
      },
    });
    const dbImage = images.map((image) => ({
      url: image,
      productId: dbProduct.id,
    }));
    await prisma.productImage.createMany({
      data: dbImage,
    });
  });

  await prisma.country.createMany({
    data: countries,
  });

  console.log('Seed completed');
}

(() => {
  if (process.env.NODE_ENV === 'production') return;
  main();
})();
