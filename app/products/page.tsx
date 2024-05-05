import ProductCard from "../ui/product/card";
import { fetchProducts } from "../lib/products/product";

interface Product {
  name: string;
  imageName: string;
}

export default async function Page() {
  const products: Product[] = await fetchProducts();
  console.log(products);
  return (
    <div className="p-10">
      <div className="grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2">
        {products.map((product: Product, index: number) => (
          <ProductCard key={index} name={product.name} imageName={product.imageName}/>
        ))}
      </div>
    </div>
  );
}
